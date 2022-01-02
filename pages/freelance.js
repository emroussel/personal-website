import { Head } from "../components/Head";
import { Email } from "../components/Email";
import { Project } from "../components/Project";
import { Title } from "../components/Title";
import { PageContainer } from "../components/PageContainer";
import UlysseIllustration from "../public/ulysse-illustration.svg";
import KoalaIllustration from "../public/koala-illustration.svg";

export default function Freelance() {
  return (
    <PageContainer>
      <Head
        title="Freelance | Emmanuel Roussel"
        description="I'm available for freelance! I specialize in helping startups build lean web products using React."
      />
      <main className="sm:pb-16 pb-8">
        <section className="max-w-screen-sm mx-auto md:mt-16 mt-8">
          <Title>I&#39;m Available For Freelance!</Title>
          <div className="mt-12">
            <p className="mt-4">
              I specialize in helping startups build lean web products using
              React. I have experience architecting new applications and
              improving existing ones, including making them fully accessible,
              performant, easy to iterate on, etc.
            </p>
            <p className="mt-4">
              My favorite technologies are React, Next.js, Tailwind CSS, and
              Radix UI, but I&#39;m also not afraid to learn new ones.
            </p>
            <p className="mt-4">
              Reach out to me at <Email /> if you want to work together!
            </p>
          </div>
        </section>
        <section className="sm:mt-32 mt-16">
          <Project
            title="Ulysse"
            text="I started working with Ulysse to help them re-build their product from scratch, applying everything they had learned from the previous iteration with the goal of having a cleaner codebase and better UX in order to start scaling. They brought me on specifically to coach their team on React, architect the frontend application, and make it fully accessible."
            illustration={UlysseIllustration}
            illustrationAlt="Ulysse illustration"
            linkText="Visit ulysse.com"
            linkUrl="https://ulysse.com"
            badges={[
              { label: "Next.js" },
              { label: "React Aria" },
              { label: "Tailwind CSS" },
            ]}
          />
          <Project
            title="Koala"
            text={
              <span>
                <a
                  href="https://upstatement.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Upstatement
                </a>{" "}
                brought me on to help supplement their team during this project.
                I collaborated with them to build part of the accessible
                component library and to integrate algolia search to Koala&#39;s
                new e-commerce site.
              </span>
            }
            illustration={KoalaIllustration}
            illustrationAlt="Koala illustration"
            linkText="Visit koala.health"
            linkUrl="https://koala.health"
            isRight
            badges={[{ label: "Next.js" }, { label: "TypeScript" }]}
          />
        </section>
      </main>
    </PageContainer>
  );
}
