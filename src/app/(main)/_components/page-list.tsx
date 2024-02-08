"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { FileIcon } from "lucide-react";

import { useQuery } from "convex/react";
import { Doc, Id } from "../../../../convex/_generated/dataModel";
import { api } from "../../../../convex/_generated/api";

import { Item } from "./item";
import { cn } from "@cyclic/lib/utils";

interface PageListProps {
  parentPageId?: Id<"pages">
  level?: number;
  data?: Doc<"pages">[];
}

export const PageList = ({
  parentPageId,
  level = 0
}: PageListProps) => {
  const params = useParams();
  const router = useRouter();
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const onExpand = (documentId: string) => {
    setExpanded(prevExpanded => ({
      ...prevExpanded,
      [documentId]: !prevExpanded[documentId]
    }));
  };

  const pages = useQuery(api.pages.getSidebar, {
    parentPage: parentPageId
  });

  const onRedirect = (pageId: string) => {
    router.push(`/pages/${pageId}`);
  };

  if (pages === undefined) {
    return (
      <>
        <Item.Skeleton level={level} />
        {level === 0 && (
          <>
            <Item.Skeleton level={level} />
            <Item.Skeleton level={level} />
          </>
        )}
      </>
    );
  }

  return (
    <>
      <p
        style={{
          paddingLeft: level ? `${(level * 12) + 25}px` : undefined
        }}
        className={cn(
          "hidden text-sm font-medium text-muted-foreground/80",
          expanded && "last:block",
          level === 0 && "hidden"
        )}
      >
        No page inside
      </p>
      {pages.map((page) => (
        <div key={page._id}>
          <Item
            id={page._id}
            onClick={() => onRedirect(page._id)}
            label={page.title}
            icon={FileIcon}
            pageIcon={page.icon}
            active={params.pageId === page._id}
            level={level}
            onExpand={() => onExpand(page._id)}
            expanded={expanded[page._id]}
          />
          {expanded[page._id] && (
            <PageList
              parentPageId={page._id}
              level={level + 1}
            />
          )}
        </div>
      ))}
    </>
  )
}