"use client";

import Image from "next/image";
import { ImageIcon, ImageOff } from "lucide-react";
import { useMutation } from "convex/react";
import { useParams } from "next/navigation";

import { cn } from "@cyclic/lib/utils";
import { Button } from "@cyclic/components/ui/button";
import { useCoverImage } from "@cyclic/hooks/use-cover-image";
import { api } from "../../../convex/_generated/api";
import { Id } from "../../../convex/_generated/dataModel";

interface CoverImageProps {
  url?: string;
  preview?: boolean;
}

export const Cover = ({
  url,
  preview,
}: CoverImageProps) => {
  const params = useParams();

  const coverImage = useCoverImage();
  const removeCoverImage = useMutation(api.pages.removeCoverImage);

  const onRemove = () => {
    removeCoverImage({
      id: params.pageId as Id<"pages">
    });
  };

  return (
    <div className={cn(
      "relative w-full h-[35vh] group",
      !url && "h-[12vh]",
      url && "bg-muted"
    )}>
      {!!url && (
        <Image 
          src={url}
          fill
          alt="Cover"
          className="object-cover"
        />
      )}
      {url && !preview && (
        <div className="opacity-0 group-hover:opacity-100 absolute bottom-5 right-5 flex items-center gap-x-2">
          <Button
            onClick={coverImage.onOpen}
            className="text-muted-foreground text-xs"
            variant="outline"
            size="sm"
          >
            <ImageIcon className="h-4 w-4 mr-2" />
            Change cover
          </Button>
          <Button
            onClick={onRemove}
            className="text-muted-foreground text-xs"
            variant="outline"
            size="sm"
          >
            <ImageOff className="h-4 w-4 mr-2" />
            Remove cover
          </Button>
        </div>
      )}
    </div>
  )
}