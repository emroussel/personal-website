import { Head } from "../components/Head";
import { PageContainer } from "../components/PageContainer";
import { Title } from "../components/Title";

export default function Custom404() {
  return (
    <PageContainer>
      <Head title="Page Not Found | Emmanuel Roussel">
        <meta name="robots" content="noindex,follow" />
      </Head>
      <div className="flex flex-1 items-center justify-center sm:px-8 px-4">
        <Title>Page not found</Title>
      </div>
    </PageContainer>
  );
}
