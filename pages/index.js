import Image from "next/image";
import Link from "next/link";
import { PageContainer } from "../components/PageContainer";
import { Head } from "../components/Head";
import { Title } from "../components/Title";
import ProfileImage from "../public/profile.png";

export default function Home() {
  return (
    <PageContainer>
      <Head />
      <main className="flex-1 flex flex-col md:flex-row items-center justify-center md:justify-start pt-10 md:pt-20">
        <div className="md:order-2 md:flex-1 mb-8 md:mb-0 mx-auto md:ml-auto md:mr-0 px-8 md:px-0 w-4/5 md:w-2/5 max-w-xs md:max-w-none md:pl-20">
          <Image
            src={ProfileImage}
            alt="Photo of Emmanuel Roussel"
            layout="responsive"
            priority
            placeholder="blur"
          />
        </div>
        <div className="w-full md:w-3/5">
          <Title
            className="text-center md:text-left"
            lineClassName="mx-auto md:mx-0"
          >
            👋 Salut, I&#39;m Emmanuel
          </Title>
          <h2 className="text-center md:text-left mx-auto md:mx-0 mt-4 md:mt-6 lg:mt-8 font-normal text-lg lg:text-xl max-w-lg">
            I&#39;m a product-minded software engineer who builds digital
            products that deliver outstanding user experiences using JavaScript
            and React. I&#39;m currently looking for my next role – reach out if
            you want to work together!
          </h2>
          <Link href="/about">
            <a className="block text-center md:text-left text-lg lg:text-xl mt-2 lg:mt-4 font-normal">
              Learn more about me
            </a>
          </Link>
        </div>
      </main>
    </PageContainer>
  );
}
