"use client";

import { useEffect, useState } from "react";

import { SettingsModal } from "@cyclic/components/modals/settings-modal";
import { CoverImageModal } from "@cyclic/components/modals/cover-image-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <SettingsModal />
      <CoverImageModal />
    </>
  )
}