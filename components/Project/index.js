import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "../ExternalLink";
import styles from "./index.module.css";

const linkClassName = "font-bold mt-6 inline-block py-1";

export function Project({
  title,
  subtitle,
  illustration,
  illustrationAlt,
  text,
  linkUrl,
  linkText,
  isRight,
  badges,
}) {
  return (
    <div className="flex md:flex-row flex-col justify-between items-center mt-24 sm:mt-32">
      <div
        className={clsx("relative py-8 w-full order-none", {
          "md:order-1 flex justify-end pl-8 sm:pl-0": isRight,
          "pr-8 sm:pr-0": !isRight,
        })}
      >
        <div
          className={clsx("absolute w-3/4 max-w-xs inset-y-0", {
            "bg-secondary dark:bg-secondary-light rounded-l-xl lg:rounded-r-xl right-0 -mr-4 sm:-mr-8 lg:mr-0":
              isRight,
            "bg-primary dark:bg-primary-light rounded-r-xl lg:rounded-l-xl -ml-4 sm:-ml-8 lg:ml-0":
              !isRight,
          })}
        />
        <div
          className={clsx("w-full", styles["project-image"], {
            "lg:pr-8": isRight,
            "lg:pl-8": !isRight,
          })}
        >
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image
              src={illustration}
              alt={illustrationAlt || ""}
              layout="responsive"
            />
          </div>
        </div>
      </div>
      <div
        className={clsx("w-full pt-8 md:py-12 py-0", {
          "md:mr-16 lg:mr-32": isRight,
          "md:ml-16 lg:ml-32": !isRight,
        })}
      >
        <h2>{title}</h2>
        {subtitle ? <p className="font-semibold pt-2">{subtitle}</p> : null}
        <p className="pt-2">{text}</p>
        {badges?.length ? (
          <ul className="mt-2">
            {badges.map((badge) => (
              <li
                className="inline-flex items-center bg-primary-lightest dark:bg-primary rounded-full text-primary dark:text-primary-lightest text-sm font-bold pl-2 pr-4 py-1 mr-2 mt-2"
                key={badge.label}
              >
                <div className="bg-primary dark:bg-primary-lightest w-2 h-2 rounded-full mr-2" />
                {badge.label}
              </li>
            ))}
          </ul>
        ) : null}
        {linkUrl && linkUrl.startsWith("/") ? (
          <Link href={linkUrl}>
            <a className={linkClassName}>{linkText}</a>
          </Link>
        ) : linkUrl ? (
          <ExternalLink href={linkUrl} className={linkClassName}>
            {linkText}
          </ExternalLink>
        ) : null}
      </div>
    </div>
  );
}
