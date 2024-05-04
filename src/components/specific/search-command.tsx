"use client";

import { useEffect, useState } from "react";
import { File } from "lucide-react";
import { useQuery } from "convex/react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/clerk-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "@cyclic/components/ui/command"
import { useSearch } from "@cyclic/hooks/use-search";
import { api } from "../../../convex/_generated/api";

export const SearchCommand = () => {
  const { user } = useUser();
  const router = useRouter();
  const pages = useQuery(api.pages.getSearch);
  const [isMounted, setIsMounted] = useState(false);

  const toggle = useSearch((store) => store.toggle);
  const isOpen = useSearch((store) => store.isOpen);
  const onClose = useSearch((store) => store.onClose);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        toggle();
      }
    }

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [toggle]);

  const onSelect = (pageId: string) => {
    router.push(`/pages/${pageId}`);
    onClose();
  };

  if (!isMounted) {
    return null;
  }

  return (
    <CommandDialog
      open={isOpen}
      onOpenChange={onClose}
    >
      <CommandInput
        placeholder={`Search ${user?.firstName}'s Cyclic...`}
      />
      <CommandList>
        <CommandEmpty>
          No results found.
        </CommandEmpty>
        <CommandGroup heading="Pages">
          {pages?.map((page) => (
            <CommandItem
              key={page._id}
              value={`${page._id}-${page.title}`}
              title={page.title}
              onSelect={() => onSelect(page._id)}
              id={page._id}
            >
              {page.icon ? (
                <p className="mr-2 text-[18px]">
                  {page.icon}
                </p>
              ) : (
                <File className="mr-2 h-4 w-4" />
              )}
              <span>
                {page.title}
              </span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}