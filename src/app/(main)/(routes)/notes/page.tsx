"use client";

import Image from "next/image";
import { Plus } from "lucide-react";
import { useMutation } from "convex/react";
import { useUser } from "@clerk/clerk-react";
import { toast } from "sonner";

import { api } from "../../../../../convex/_generated/api"; 
import { Button } from "@cyclic/components/ui/button";

const NotesPage = () => {
  const { user } = useUser();
  const create = useMutation(api.pages.createPage)

  const onCreate = () => {
    const promise = create({ 
      title: "Untitled"
    });

    toast.promise(promise, {
      loading: "Creating a new note for you...",
      success: "New note created!",
      error: "Failed to create a new note."
    })
  }

  return (
    <div className="h-full min-h-screen flex flex-col items-center justify-center">
      <Image
        src="/images/notes/empty-light.svg"
        height="200"
        width="200"
        alt="Empty"
        className="dark:hidden"
      />
      <Image
        src="/images/notes/empty-dark.svg"
        height="200"
        width="200"
        alt="Empty"
        className="hidden dark:block"
      />
      <h2 className="text-2xl font-bold tracking-tight mt-4">
        Welcome to Cyclic.
      </h2>
      <Button onClick={onCreate} className="mt-4">
        <Plus className="h-4 w-4 mr-2" />
        Create a note
      </Button>
    </div>
  );
}

export default NotesPage