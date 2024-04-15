"use client";

import { useQuery } from "convex/react";

import { api } from "../../../../../../convex/_generated/api";
import { Id } from "../../../../../../convex/_generated/dataModel";
import { Toolbar } from "@cyclic/components/page/toolbar";

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
        Loading...
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
      <div className="h-[35vh]" />
      <div className="md:max-w-3xl lg:max-w-4xl mx-auto">
        <Toolbar initialData={page} />
      </div>
    </div>
  )
}

export default PageIdPage;