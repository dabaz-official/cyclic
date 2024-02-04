import Image from "next/image";
import { Button } from "@cyclic/components/ui/button";
import { Plus } from "lucide-react";

const NotesPage = () => {

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
      <Button className="mt-4">
        <Plus className="h-4 w-4 mr-2" />
        Create a note
      </Button>
    </div>
  );
}

export default NotesPage