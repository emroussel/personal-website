import { Nav } from "../components/Nav";
import { Head } from "../components/Head";

export default function Custom404() {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex,follow" />
      </Head>
      <div className="flex flex-col h-screen sm:px-8 px-4">
        <Nav />
        <div className="flex flex-1 items-center justify-center">
          <div className="mb-32">
            <h1 className="sm:text-6xl text-4xl">Page not found</h1>
            <div className="bg-secondary h-2 w-2/5 rounded-sm sm:mt-6 mt-3" />
          </div>
        </div>
      </div>
    </>
  );
}
