import clsx from "clsx";
import { useState, createContext } from "react";
import styles from "./index.module.css";

export const CopyEmailContext = createContext();

export function CopyEmailProvider({ children }) {
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [isToastTextVisible, setIsToastTextVisible] = useState(false);

  return (
    <CopyEmailContext.Provider
      value={{
        showCopyEmailToast: () => {
          setIsToastVisible(true);
          setIsToastTextVisible(true);
          setTimeout(() => {
            setIsToastVisible(false);

            setTimeout(() => {
              setIsToastTextVisible(false);
            }, 200); // Transition duration of toast
          }, 5000);
          setIsToastVisible(true);
        },
      }}
    >
      {children}
      <div
        className={clsx(
          "fixed inset-x-0 sm:mb-8 mb-4 mx-4 sm:mx-8 text-center motion-safe:transition-all motion-safe:duration-200 ease-in-out -bottom-24",
          {
            [styles["toast-visible"]]: isToastVisible,
          }
        )}
        role="alert"
        aria-live="assertive"
      >
        {isToastTextVisible ? (
          <div
            className="inline-block py-4 px-8 bg-gray text-white dark:text-off-white rounded-lg shadow-lg"
          >
            Email copied to clipboard!
          </div>
        ) : null}
      </div>
    </CopyEmailContext.Provider>
  );
}
