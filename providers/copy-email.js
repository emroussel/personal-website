import clsx from "clsx";
import { useState, createContext } from "react";
import * as Toast from "@radix-ui/react-toast";

export const CopyEmailContext = createContext();

export function CopyEmailProvider({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <CopyEmailContext.Provider
      value={{
        showCopyEmailToast: () => {
          setOpen(true);
        },
      }}
    >
      {children}
      <Toast.Provider swipeDirection="down">
        <Toast.Root
          open={open}
          onOpenChange={setOpen}
          className={clsx(
            "rounded-lg shadow-lg bg-gray text-white dark:text-off-white py-4 px-8",
            "motion-safe:state-open:animate-slide-up motion-safe:state-closed:animate-fade-out motion-safe:swipe-move:translate-y-[var(--radix-toast-swipe-move-y)] motion-safe:swipe-cancel:translate-y-0 motion-safe:swipe-cancel:transition-transform motion-safe:swipe-cancel:duration-150 motion-safe:swipe-end:animate-swipe-out"
          )}
        >
          <Toast.Title>Email copied to clipboard!</Toast.Title>
        </Toast.Root>
        <Toast.Viewport className="fixed bottom-4 sm:bottom-8 left-1/2 w-fit -translate-x-1/2 max-w-[calc(100vw-2rem)]" />
      </Toast.Provider>
    </CopyEmailContext.Provider>
  );
}
