"use client";

import { useQuery } from "convex/react";

import { api } from "../../../../../../convex/_generated/api";
import { Id } from "../../../../../../convex/_generated/dataModel";
import { Toolbar } from "@cyclic/components/page/toolbar";
import { Cover } from "@cyclic/components/page/cover";
import { Skeleton } from "@cyclic/components/ui/skeleton";

interface PageIdPageProps {
  params: {
    pageId: Id<"pages">;
  };
};

const PageIdPage = ({
  params
}: PageIdPageProps) => {
  const page = useQuery(api.pages.getById, {
    pageId: params.pageId,
  });

  if (page === undefined) {
    return (
      <div>
        <Cover.Skeleton />
        <div className="md:max-w-3xl lg:max-w-4xl mx-auto mt-10">
          <div className="space-y-4 pl-8 pt-4">
            <Skeleton className="h-14 w-[50%]" />
            <Skeleton className="h-4 w-[80%]" />
            <Skeleton className="h-4 w-[40%]" />
            <Skeleton className="h-4 w-[60%]" />
          </div>
        </div>
      </div>
    );
  };

  if (page === null)
  return (
    <div>
      Page not found.
    </div>
  );

  return (
    <div className="pb-40">
      <Cover url={page.coverImage} />
      <div className="md:max-w-3xl lg:max-w-4xl mx-auto">
        <Toolbar initialData={page} />
      </div>
    </div>
  )
}

export default PageIdPage;