"use client";

import { useRouter } from "next/navigation";
import { useMutation } from "convex/react";
import { toast } from "sonner";

import { Id } from "../../../../convex/_generated/dataModel";
import { api } from "../../../../convex/_generated/api";
import { Button } from "@cyclic/components/ui/button";
import { ConfirmModal } from "@cyclic/components/modals/confirm-modal";

interface BannerProps {
  pageId: Id<"pages">;
};

export const Banner = ({
  pageId
}: BannerProps) => {
  const router = useRouter();

  const remove = useMutation(api.pages.remove);
  const restore = useMutation(api.pages.restore);

  const onRemove = () => {
    const promise = remove({ id: pageId })

    toast.promise(promise, {
      loading: "Deleting...",
      success: "Deleted!",
      error: "Failed to delete note."
    });

    router.push("/pages");
  };

  const onRestore = () => {
    const promise = restore({ id: pageId });

    toast.promise(promise, {
      loading: "Restoring...",
      success: "Restored!",
      error: "Failed to restore note."
    });
  };

  return (
    <div className="w-full bg-rose-500 text-center text-sm p-2 text-white flex items-center gap-x-2 justify-center">
      <p>
        This page is in the trash.
      </p>
      <Button
        size="sm"
        onClick={onRestore}
        variant="outline"
        className="border-white bg-transparent hover:bg-primary/5 text-white hover:text-white p-1 px-2 h-auto font-normal"
      >
        Restore page
      </Button>
      <ConfirmModal onConfirm={onRemove}>
        <Button
          size="sm"
          variant="outline"
          className="border-white bg-transparent hover:bg-primary/5 text-white hover:text-white p-1 px-2 h-auto font-normal"
        >
          Delete forever
        </Button>
      </ConfirmModal>
    </div>
  )
}