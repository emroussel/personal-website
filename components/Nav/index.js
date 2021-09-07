import Link from "next/link";

export function Nav() {
  return (
    <header className="sm:py-8 py-4">
      <Link href="/">
        <a className="font-bold md:text-3xl text-2xl no-underline py-1">Emmanuel Roussel</a>
      </Link>
    </header>
  );
}
