"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import { useMutation } from "convex/react";
import { useUser } from "@clerk/clerk-react";
import { toast } from "sonner";

import { api } from "../../../../../convex/_generated/api"; 
import { Button } from "@cyclic/components/ui/button";

const NotesPage = () => {
  const router = useRouter();
  const { user } = useUser();
  const create = useMutation(api.pages.createPage)

  const onCreate = () => {
    const promise = create({ 
      title: "Untitled"
    })
      .then((pageId) => router.push(`/pages/${pageId}`))

    toast.promise(promise, {
      loading: "Creating a new page for you...",
      success: "New page created!",
      error: "Failed to create a new page."
    })
  }

  return (
    <div className="h-full min-h-screen flex flex-col items-center justify-center">
      <Image
        src="/images/pages/empty-light.svg"
        height="160"
        width="160"
        alt="Empty"
        className="dark:hidden"
      />
      <Image
        src="/images/pages/empty-dark.svg"
        height="160"
        width="160"
        alt="Empty"
        className="hidden dark:block"
      />
      <h2 className="text-2xl font-bold tracking-tight mt-4">
        Welcome to Cyclic.
      </h2>
      <Button onClick={onCreate} className="mt-4">
        <Plus className="h-4 w-4 mr-2" />
        Add a page
      </Button>
    </div>
  );
}

export default NotesPage