"use client";

import { useRouter } from "next/navigation";
import { useUser } from "@clerk/clerk-react";
import { useMutation } from "convex/react";
import { toast } from "sonner";
import { MoreHorizontal, Trash } from "lucide-react";

import { Id } from "../../../../convex/_generated/dataModel";
import { api } from "../../../../convex/_generated/api";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@cyclic/components/ui/dropdown-menu";
import { Button } from "@cyclic/components/ui/button";
import { Skeleton } from "@cyclic/components/ui/skeleton";

interface MenuProps {
  pageId: Id<"pages">;
};

export const Menu = ({
  pageId
}: MenuProps) => {
  const router = useRouter();
  const { user } = useUser();

  const archive = useMutation(api.pages.archive);

  const onArchive = () => {
    const promise = archive({ id: pageId})

    toast.promise(promise, {
      loading: "Moving to trash...",
      success: "Note moved to trash!",
      error: "Failed to archive note."
    });

    router.push("/pages");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button size="sm" variant="ghost" className="focus:outline-none focus:ring-0 focus-within:outline-none focus-within:ring-0 active:outline-none active:ring-0">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-60"
        align="end"
        alignOffset={8}
        forceMount
      >
        <DropdownMenuItem onClick={onArchive}>
          <Trash className="w-4 h-4 mr-2" />
          Delete
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <div className="text-xs text-muted-foreground p-2">
          Last edited by {user?.firstName}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

Menu.Skeleton = function MenuSkeleton() {
  return (
    <Skeleton className="h-7 w-7" />
  )
}