import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { Doc, Id } from "./_generated/dataModel";

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