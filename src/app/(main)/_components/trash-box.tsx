"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { useQuery, useMutation } from "convex/react";
import { toast } from "sonner";
import { Search, Trash, Undo } from "lucide-react";

import { api } from "../../../../convex/_generated/api"
import { Id } from "../../../../convex/_generated/dataModel"
import { Spinner } from "@cyclic/components/specific/spinner";
import { Input } from "@cyclic/components/ui/input";
import { ConfirmModal } from "@cyclic/components/modals/confirm-modal";

export const TrashBox = () => {
  const router = useRouter();
  const params = useParams();
  const pages = useQuery(api.pages.getTrash);
  const restore = useMutation(api.pages.restore);
  const remove = useMutation(api.pages.remove);

  const [search, setSearch] = useState("");

  const filteredPages = pages?.filter((page) => {
    return page.title.toLowerCase().includes(search.toLowerCase());
  });

  const onClick = (pageId: string) => {
    router.push(`/pages/${pageId}`);
  };

  const onRestore = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    pageId: Id<"pages">,
  ) => {
    event.stopPropagation();
    const promise = restore({ id: pageId });

    toast.promise(promise, {
      loading: "Restoring page...",
      success: "Page restored!",
      error: "Failed to restore.",
    });
  };

  const onRemove = (
    pageId: Id<"pages">,
  ) => {
    const promise = remove({ id: pageId });

    toast.promise(promise, {
      loading: "Deleting page...",
      success: "Page deleted!",
      error: "Failed to delete.",
    });

    if (params.pageId === pageId) {
      router.push("/pages");
    }
  };

  if (pages === undefined) {
    return (
      <div className="h-full flex items-center justify-center p-4">
        <Spinner size="lg" />
      </div>
    );
  };

  return (
    <div className="text-sm">
      <div className="flex items-center gap-x-1 p-2">
        <Search className="h-4 w-4" />
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Filter by page title..."
          className="h-7 px-2 focus-visible:ring-transparent bg-secondary"
        />
      </div>
      <div className="mt-2 px-1 pb-1">
        <p className="hidden last:block text-xs text-center text-muted-foreground pb-2">
          No pages found.
        </p>
        {filteredPages?.map((page) => (
          <div
            key={page._id}
            role="button"
            onClick={() => onClick(page._id)}
            className="text-sm rounded-sm w-full hover:bg-primary/5 flex items-center text-primary justify-between"
          >
            <span className="truncate pl-2">
              {page.title}
            </span>
            <div className="flex items-center">
              <div
                onClick={(e) => onRestore(e, page._id)}
                role="button"
                className="rounded-sm p-2 hover:bg-neutral-200"
              >
                <Undo className="h-4 w-4 text-muted-foreground" />
              </div>
              <ConfirmModal onConfirm={() => onRemove(page._id)}>
                <div
                  role="button"
                  className="rounded-sm p-2 hover:bg-neutral-200"
                >
                  <Trash className="h-4 w-4 text-muted-foreground" />
                </div>
              </ConfirmModal>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}