"use client";

import { useQuery } from "convex/react";
import { useParams } from "next/navigation";
import { Menu as MenuIcon } from "lucide-react";

import { api } from "../../../../convex/_generated/api";
import { Id } from "../../../../convex/_generated/dataModel";
import { Title } from "./title";
import { Banner } from "./banner";
import { Menu } from "./menu";

interface NavbarProps {
  isCollapsed: boolean;
  onResetWidth: () => void;
};

export const Navbar = ({
  isCollapsed,
  onResetWidth
}: NavbarProps) => {
  const params = useParams();

  const page = useQuery(api.pages.getById, {
    pageId: params.pageId as Id<"pages">,
  });

  if (page === undefined) {
    return (
      <nav className="bg-background dark:bg-[#1F1F1F] px-3 py-2 w-full flex justify-between items-center">
        <Title.Skeleton />
        <div className="flex items-center gap-x-2">
          <Menu.Skeleton />
        </div>
      </nav>
    )
  }

  if (page === null) {
    return <p>Page not found</p>
  }

  return (
    <>
      <nav className="bg-background dark:bg-[#1F1F1F] px-3 py-2 w-full flex items-center gap-x-4">
        {isCollapsed && (
          <MenuIcon
            role="button"
            onClick={onResetWidth}
            className="h-6 w-6 text-muted-foreground"
          />
        )}
        <div className="flex items-center justify-between w-full">
          <Title initialData={page} />
          <div className="flex items-center gap-x-2">
            <Menu pageId={page._id} />
          </div>
        </div>
      </nav>
      {page.isArchived && (
        <Banner pageId={page._id} />
      )}
    </>
  )
}