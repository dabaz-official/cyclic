"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader
} from "@cyclic/components/ui/dialog";
import { useSettings } from "@cyclic/hooks/use-settings";
import { Label } from "@cyclic/components/ui/label";

export const SettingsModal = () => {
  const settings = useSettings();

  return (
    <Dialog
      open={settings.isOpen}
      onOpenChange={settings.onClose}
    >
      <DialogContent>
        <DialogHeader className="border-b pb-3">
          <h2 className="text-lg font-medium">
            My settings
          </h2>
        </DialogHeader>
        <div className="flex items-center justify-between">

        </div>
      </DialogContent>
    </Dialog>
  );
}