"use client";

import { useRef, useState } from "react";

import { useMutation } from "convex/react";

import { api } from "../../../../convex/_generated/api";
import { Doc } from "../../../../convex/_generated/dataModel";
import { Input } from "@cyclic/components/ui/input";
import { Button } from "@cyclic/components/ui/button";
import { Skeleton } from "@cyclic/components/ui/skeleton";

interface TitleProps {
  initialData: Doc<"pages">;
};

export const Title = ({
  initialData
}: TitleProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const update = useMutation(api.pages.update);

  const [title, setTitle] = useState(initialData.title || "Untitled");
  const [isEditing, setIsEditing] = useState(false);

  const enableInput = () => {
    setTitle(initialData.title);
    setIsEditing(true);
    setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.setSelectionRange(0, inputRef.current.value.length)
    }, 0);
  };

  const disableInput = () => {
    setIsEditing(false);
  };

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTitle(event.target.value);
    update({
      id: initialData._id,
      title: event.target.value || "Untitled"
    });
  };

  const onKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      disableInput();
    };
  };

  return (
    <div className="flex items-center gap-x-1">
      {!!initialData.title && <p>{initialData.icon}</p>}
      {isEditing ? (
        <Input
          ref={inputRef}
          onClick={enableInput}
          onChange={onChange}
          onKeyDown={onKeyDown}
          onBlur={disableInput}
          value={title}
          className="h-7 px-2 focus-visible:ring-transparent"
        />
      ) : (
        <Button
          onClick={enableInput}
          variant="ghost"
          size="sm"
          className="font-normal h-auto p-1"
        >
          {initialData?.title}
        </Button>
      )}
    </div>
  );
};

Title.Skeleton = function TitleSkeleton() {
  return (
    <Skeleton className="h-7 w-16 rounded-md" />
  );
};
