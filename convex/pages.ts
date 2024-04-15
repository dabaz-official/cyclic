import { v } from "convex/values";

import { mutation, query } from "./_generated/server";
import { Doc, Id } from "./_generated/dataModel";

export const archive = mutation({
  args: { id: v.id("pages") },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Not authenticated");
    }

    const userId = identity.subject;

    const existingPage = await ctx.db.get(args.id);

    if (!existingPage) {
      throw new Error("Not found");
    }

    if (existingPage.userId !== userId) {
      throw new Error("Unauthorized");
    }

    const recursiveArchive = async (pageId: Id<"pages">) => {
      const children = await ctx.db
        .query("pages")
        .withIndex("by_user_parent", (q) => (
          q
            .eq("userId", userId)
            .eq("parentPage", pageId)
        ))
        .collect();

      for (const child of children) {
        await ctx.db.patch(child._id, {
          isArchived: true,
        });

        await recursiveArchive(child._id);
      }
    }

    const page = await ctx.db.patch(args.id, {
      isArchived: true,
    });

    recursiveArchive(args.id);

    return page;
  }
})

export const getSidebar = query({
  args: {
    parentPage: v.optional(v.id("pages"))
  },
  handler:async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Not authenticated");
    }

    const userId = identity.subject;

    const pages = await ctx.db.query("pages").withIndex("by_user_parent", (q) =>
      q
        .eq("userId", userId)
        .eq("parentPage", args.parentPage)
    )
    .filter((q) =>
      q.eq(q.field("isArchived"), false)
    )
    .order("desc")
    .collect();

    return pages;
  },
});

export const createPage = mutation({
  args: {
    title: v.string(),
    parentPage: v.optional(v.id("pages"))
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Not authenticated");
    }

    const userId = identity.subject;

    const page = await ctx.db.insert("pages", {
      title: args.title,
      parentPage: args.parentPage,
      userId,
      isArchived: false,
      isPublished: false,
    });

    return page;
  },
});

export const getTrash = query({
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Not authenticated");
    }

    const userId = identity.subject;

    const pages = await ctx.db
      .query("pages")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .filter((q) =>
        q.eq(q.field("isArchived"), true),
      )
      .order("desc")
      .collect();

    return pages;
  }
});

export const restore = mutation({
  args: { id: v.id("pages") },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Not authenticated");
    }

    const userId = identity.subject;

    const existingPage = await ctx.db.get(args.id);

    if (!existingPage) {
      throw new Error("Not found");
    }

    if (existingPage.userId !== userId) {
      throw new Error("Unauthorized");
    }

    const recursiveRestore = async (pageId: Id<"pages">) => {
      const children = await ctx.db
        .query("pages")
        .withIndex("by_user_parent", (q) => (
          q
            .eq("userId", userId)
            .eq("parentPage", pageId)
        ))
        .collect();

      for (const child of children) {
        await ctx.db.patch(child._id, {
          isArchived: false,
        });

        await recursiveRestore(child._id);
      }
    }

    const options: Partial<Doc<"pages">> = {
      isArchived: false,
    };

    if (existingPage.parentPage) {
      const parent = await ctx.db.get(existingPage.parentPage);
      if (parent?.isArchived) {
        options.parentPage = undefined;
      }
    }

    const page = await ctx.db.patch(args.id, options);

    recursiveRestore(args.id);

    return existingPage;
  }
});

export const remove = mutation({
  args: { id: v.id("pages") },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Not authenticated");
    }

    const userId = identity.subject;

    const existingPage = await ctx.db.get(args.id);

    if (!existingPage) {
      throw new Error("Not found");
    }

    if (existingPage.userId !== userId) {
      throw new Error("Unauthorized");
    }

    const page = await ctx.db.delete(args.id);

    return page;
  }
});

export const getSearch = query({
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Not authenticated");
    }

    const userId = identity.subject;

    const pages = await ctx.db
      .query("pages")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .filter((q) =>
        q.eq(q.field("isArchived"), false),
      )
      .order("desc")
      .collect()

    return pages;
  }
});

export const getById = query({
  args: { pageId: v.id("pages") },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    const page = await ctx.db.get(args.pageId);

    if (!page) {
      throw new Error("Page not found");
    }

    if (page.isPublished && !page.isArchived) {
      return page;
    }

    if (!identity) {
      throw new Error("You don't have access to this page");
    }

    const userId = identity.subject;

    if (page.userId !== userId) {
      throw new Error("You don't have access to this page");
    }

    return page;
  }
});

export const update = mutation({
  args: {
    id: v.id("pages"),
    title: v.optional(v.string()),
    content: v.optional(v.string()),
    coverImage: v.optional(v.string()),
    icon: v.optional(v.string()),
    isPublished: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Not authenticated");
    }

    const userId = identity.subject;

    const { id, ...rest } = args;

    const existingPage = await ctx.db.get(args.id);

    if (!existingPage) {
      throw new Error("Not found");
    }

    if (existingPage.userId !== userId) {
      throw new Error("You don't have access to this page");
    }

    const page = await ctx.db.patch(args.id, {
      ...rest,
    });

    return page;
  },
});

export const removeIcon = mutation({
  args: { id: v.id("pages") },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Not authenticated");
    }

    const userId = identity.subject;

    const { id, ...rest } = args;

    const existingPage = await ctx.db.get(args.id);

    if (!existingPage) {
      throw new Error("Not found");
    }

    if (existingPage.userId !== userId) {
      throw new Error("You don't have access to this page");
    }

    const page = await ctx.db.patch(args.id, {
      icon: undefined
    });

    return page;
  },
});

export const removeCoverImage = mutation({
  args: { id: v.id("pages") },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Not authenticated");
    }

    const userId = identity.subject;

    const { id, ...rest } = args;

    const existingPage = await ctx.db.get(args.id);

    if (!existingPage) {
      throw new Error("Not found");
    }

    if (existingPage.userId !== userId) {
      throw new Error("You don't have access to this page");
    }

    const page = await ctx.db.patch(args.id, {
      coverImage: undefined
    });

    return page;
  },
});
