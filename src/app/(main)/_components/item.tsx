"use client";

import { useRouter } from "next/navigation";
import {
  ChevronDown,
  ChevronRight,
  LucideIcon,
  Plus
} from "lucide-react";
import { useMutation } from "convex/react";
import { toast } from "sonner";

import { Id } from "../../../../convex/_generated/dataModel";
import { cn } from "@cyclic/lib/utils";
import { Skeleton } from "@cyclic/components/ui/skeleton";
import { api } from "../../../../convex/_generated/api";

interface ItemProps {
  id?: Id<"pages">;
  pageIcon?: string;
  active?: boolean;
  expanded?: boolean;
  isSearch?: boolean;
  level?: number;
  onExpand?: () => void;
  label: string;
  onClick: () => void;
  icon: LucideIcon;
};

export const Item = ({
  id,
  label,
  onClick,
  icon: Icon,
  active,
  pageIcon,
  isSearch,
  level = 0,
  onExpand,
  expanded,
}: ItemProps) => {
  const router = useRouter();
  const create = useMutation(api.pages.createPage);

  const handleExpand = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
    onExpand?.();
  };

  const onCreate = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
    if (!id) return;
    const promise = create({ title: "Untitled", parentPage: id })
      .then((pageId) => {
        if (!expanded) {
          onExpand?.();
        }
        //router.push(`/pages/${pageId}`);
      });

    toast.promise(promise, {
      loading: "Creating a new page for you...",
      success: "New page created!",
      error: "Failed to create a new page."
    })
  }

  const ChevronIcon = expanded ? ChevronDown : ChevronRight

  return (
    <div
      onClick={onClick}
      role="button"
      style={{
        paddingLeft: level ? `${(level * 12) + 12}px` : "12px"
      }}
      className={cn(
        "group min-h-[27px] text-sm py-2 pr-3 w-full hover:bg-primary/5 flex items-center text-muted-foreground font-medium",
        active && "bg-primary/5 text-primary"
      )}
    >
      {!!id && (
        <div
          role="button"
          className="h-full rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 mr-1"
          onClick={handleExpand}
        >
          <ChevronIcon
            className="h-4 w-4 shrink-0 text-muted-foreground/50"
          />
        </div>
      )}
      {pageIcon ? (
        <div className="shrink-0 mr-2 text-[18px]">
          {pageIcon}
        </div>
      ) : (
        <Icon
          className="shrink-0 h-[18px] mr-2 text-muted-foreground"
        />
      )}
      <span className="truncate">
        {label}
      </span>
      {isSearch && (
        <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>+ K
        </kbd>
      )}
      {!!id && (
        <div className="ml-auto flex items-center gap-x-2">
          <div
            role="button"
            onClick={onCreate}
            className="opacity-0 group-hover:opacity-100 h-full ml-auto rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600"
          >
            <Plus className="h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      )}
    </div>
  )
}

Item.Skeleton = function ItemSkeleton({ level }: { level?: number }) {
  return (
    <div
      style={{
        paddingLeft: level ? `${(level * 12) + 25}px` : "12px"
      }}
      className="flex gap-x-2 py-[3px]"
    >
      <Skeleton className="h-4 w-4" />
      <Skeleton className="h-4 w-[30%]" />
    </div>
  )
}