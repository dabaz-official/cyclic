"use client";

import { SignOutButton, useUser } from "@clerk/clerk-react";
import { Avatar, AvatarImage } from "@cyclic/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@cyclic/components/ui/dropdown-menu";
import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";
import { MoreHorizontal } from "lucide-react";

const UserItem = () => {
  const { user } = useUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none">
        <div role="button" className="flex items-center text-sm p-3 w-full hover:bg-primary/5">
          <div className="gap-x-2 flex items-center max-w-[360px]">
            <Avatar className="h-8 w-8">
              <AvatarImage src={user?.imageUrl} />
            </Avatar>
            <span className="text-start font-medium text-md line-clamp-1">
              {user?.firstName}
            </span>
          </div>
          <MoreHorizontal className="rotate-90 ml-2 text-muted-foreground h-4 w-4" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-80"
        align="start"
        alignOffset={11}
        forceMount
      >
        <div className="flex flex-col space-y-4 p-2">
          <p className="text-xs leading-none text-muted-foreground">
            {user?.emailAddresses[0].emailAddress}
          </p>
          <div className="flex items-center gap-x-2">
            <div className="rounded-md p-1">
              <Avatar className="h-8 w-8">
                <AvatarImage src={user?.imageUrl} />
              </Avatar>
            </div>
            <div className="space-y-1">
              <p className="text-sm line-clamp-1">
                {user?.firstName}
              </p>
            </div>
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="w-full cursor-pointer text-muted-foreground">
          <SignOutButton>
            <p className="text-sm line-clamp-1">
              Log out
            </p>
          </SignOutButton>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
 
export default UserItem;