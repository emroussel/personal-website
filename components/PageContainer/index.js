import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTheme } from "next-themes";
import clsx from "clsx";
import * as Dialog from "@radix-ui/react-dialog";
import { Email } from "../Email";
import { ExternalLink } from "../ExternalLink";
import styles from "./index.module.css";

function DesktopTab({ href, children }) {
  const router = useRouter();
  const isCurrentPage = router.pathname === href;

  return (
    <Link href={href}>
      <a
        className="px-2 inline-block font-semibold text-lg no-underline"
        onMouseEnter={(e) => {
          // `px-2` above adds 8px padding on each side, which we need to offset here
          document.documentElement.style.setProperty(
            "--emroussel-tab-hover-x",
            e.target.offsetLeft + 8 + "px"
          );
          document.documentElement.style.setProperty(
            "--emroussel-tab-hover-width",
            e.target.getBoundingClientRect().width - 16 + "px"
          );
        }}
        onMouseLeave={() => {
          document.documentElement.style.setProperty(
            "--emroussel-tab-hover-width",
            "0px"
          );
        }}
        aria-current={isCurrentPage ? "page" : undefined}
      >
        <span
          className={clsx(
            "py-1 inline-block border-b-2 pointer-events-none no-underline",
            {
              "border-secondary dark:border-secondary-light": isCurrentPage,
              "border-transparent": !isCurrentPage,
            }
          )}
        >
          {children}
        </span>
      </a>
    </Link>
  );
}

function MobileTab({ href, children }) {
  const router = useRouter();
  const isCurrentPage = router.pathname === href;

  return (
    <Link href={href}>
      <a
        className={clsx(
          styles.tab,
          "font-semibold text-3xl my-2 py-1 no-underline"
        )}
        aria-current={isCurrentPage ? "page" : undefined}
      >
        {children}
      </a>
    </Link>
  );
}

function ThemeButton({ isSmall }) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // Delay rendering the theme toggle until mounted on the client to prevent
  // a hydration mismatch:
  // https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
  useEffect(() => setMounted(true), []);

  return (
    <button
      className={clsx(
        "bg-gray-lightest dark:bg-gray text-gray dark:text-off-white rounded flex items-center justify-center",
        {
          "w-10 h-10": !isSmall,
          "w-9 h-9": isSmall,
        }
      )}
      onClick={() => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
      }}
      aria-label={
        resolvedTheme === "dark"
          ? "Switch to light mode theme"
          : "Switch to dark mode theme"
      }
    >
      {mounted ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={clsx({ "h-6 w-6": !isSmall, "h-5 w-5": isSmall })}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {resolvedTheme === "light" ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          )}
        </svg>
      ) : null}
    </button>
  );
}

export function PageContainer({ children }) {
  const logo = (
    <Link href="/">
      <a className="font-bold text-xl sm:text-2xl no-underline py-1 leading-tight">
        Emmanuel Roussel
      </a>
    </Link>
  );

  return (
    <div className="max-w-screen-lg mx-auto sm:pb-16 pb-8 min-h-screen flex flex-col px-4 sm:px-8">
      <header className="py-4 sm:py-6 flex justify-between items-center w-full z-10">
        {logo}
        <nav>
          <div className="hidden sm:flex items-center">
            <div className="relative">
              <DesktopTab href="/about">About</DesktopTab>
              <DesktopTab href="/freelance">Freelance</DesktopTab>
              <DesktopTab href="/projects">Projects</DesktopTab>
              <div className="h-[2px] w-[var(--emroussel-tab-hover-width)] rounded bg-secondary dark:bg-secondary-light absolute bottom-0 left-[var(--emroussel-tab-hover-x)] motion-safe:transition-[left,width] motion-safe:duration-300 motion-safe:ease-in-out" />
            </div>
            <div className="ml-4">
              <ThemeButton isSmall />
            </div>
          </div>
          <div className="sm:hidden">
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <button
                  type="button"
                  className="rounded-full w-12 py-3 bg-gray-lightest dark:bg-gray text-gray dark:text-off-white"
                  aria-label="Open navigation menu"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-4 mx-auto"
                    viewBox="0 0 16 12"
                    fill="currentColor"
                  >
                    <rect y="9" width="16" height="2" rx="1" />
                    <rect y="5" width="16" height="2" rx="1" />
                    <rect y="1" width="16" height="2" rx="1" />
                  </svg>
                </button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Content
                  className={clsx(
                    styles.menu,
                    "fixed top-0 right-0 bottom-0 left-0 overflow-y-scroll bg-white dark:bg-gray-dark flex flex-col px-4 group motion-safe:state-open:animate-fade-in motion-safe:state-closed:animate-fade-out"
                  )}
                  style={{ zIndex: 2147483647 }}
                >
                  <header className="py-4 flex justify-between items-center w-full">
                    {logo}
                    <Dialog.Close asChild>
                      <button
                        type="button"
                        className="rounded-full w-12 py-2 bg-gray-lightest dark:bg-gray text-gray dark:text-off-white"
                        aria-label="Close navigation menu"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mx-auto"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </Dialog.Close>
                  </header>
                  <div className="flex flex-col flex-1 justify-center mb-4">
                    <MobileTab href="/about">About</MobileTab>
                    <MobileTab href="/freelance">Freelance</MobileTab>
                    <MobileTab href="/projects">Projects</MobileTab>
                    <div className={clsx("mt-10", styles.tab)}>
                      <ThemeButton />
                    </div>
                  </div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
        </nav>
      </header>
      <div className="flex-1 flex flex-col">{children}</div>
      <footer className="sm:mt-32 mt-16">
        <div>
          <ul className="flex-1">
            <li>
              <Email className="flex items-center inline-block font-bold text-lg sm:text-xl py-0.5" />
            </li>
            <li>
              <ExternalLink
                href="https://github.com/emroussel"
                className="inline-block font-bold text-lg sm:text-xl py-0.5"
              >
                Github
              </ExternalLink>
            </li>
            <li>
              <ExternalLink
                href="https://www.linkedin.com/in/emroussel"
                className="inline-block font-bold text-lg sm:text-xl py-0.5"
              >
                LinkedIn
              </ExternalLink>
            </li>
            <li>
              <ExternalLink
                href="/resume.pdf"
                className="inline-block font-bold text-lg sm:text-xl py-0.5"
              >
                Resume
              </ExternalLink>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
