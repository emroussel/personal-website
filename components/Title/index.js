import clsx from "clsx";

export function Title({ children, className, lineClassName }) {
  return (
    <div>
      <h1 className={className}>{children}</h1>
      <div
        className={clsx(
          "bg-secondary dark:bg-secondary-light h-1 md:h-2 w-32 md:w-40 lg:w-48 rounded sm:mt-3 lg:mt-5 mt-2",
          lineClassName
        )}
      />
    </div>
  );
}
