import { Head } from "../components/Head";
import { Email } from "../components/Email";
import { Project } from "../components/Project";
import { Title } from "../components/Title";
import { ExternalLink } from "../components/ExternalLink";
import { PageContainer } from "../components/PageContainer";
import UlysseIllustration from "../public/ulysse-illustration.svg";
import KoalaIllustration from "../public/koala-illustration.svg";
import DFlowIllustration from "../public/dflow-illustration.svg";
import TsunamiIllustration from "../public/tsunami-illustration.svg";

export default function Freelance() {
  return (
    <PageContainer>
      <Head
        title="Freelance | Emmanuel Roussel"
        description="I'm available for freelance! I specialize in building web products using JavaScript and React."
      />
      <main className="sm:pb-16 pb-8">
        <section className="max-w-screen-sm mx-auto md:mt-16 mt-8">
          <Title>I&#39;m Available For Freelance!</Title>
          <div className="mt-12">
            <p className="mt-4">
              I specialize in building web products using JavaScript and React.
              Some of my past projects include building complex frontends from
              scratch, creating component libraries, improving the
              accessibility/performance of applications, coaching teams, etc.
            </p>
            <p className="mt-4">
              My favorite technologies are React, TypeScript, Next.js, Tailwind
              CSS, and Radix UI, but I&#39;m a fast learner who can quickly pick
              up new ones.
            </p>
            <p className="mt-4">
              Reach out to me at <Email /> if you want to work together!
            </p>
          </div>
        </section>
        <section className="sm:mt-32 mt-16">
          <Project
            title="Tsunami"
            text={
              <span>
                I built the frontend of this Solana token trading website for
                DFlow, integrating with their blockchain sdk and collaborating
                with{" "}
                <ExternalLink href="https://upstatement.com/">
                  Upstatement
                </ExternalLink>{" "}
                on the design.
                <br />
                <br />
                Coming soon.
              </span>
            }
            illustration={TsunamiIllustration}
            illustrationAlt="Tsunami illustration"
            badges={[
              { label: "Next.js" },
              { label: "TypeScript" },
              { label: "Radix UI" },
              { label: "Tailwind CSS" },
            ]}
          />
          <Project
            title="DFlow"
            text={
              <span>
                I worked with{" "}
                <ExternalLink href="https://upstatement.com/">
                  Upstatement
                </ExternalLink>{" "}
                to build this marketing website for DFlow, Upstatement being in
                charge of the design and myself of the implementation.
              </span>
            }
            illustration={DFlowIllustration}
            illustrationAlt="DFlow illustration"
            linkText="Visit dflow.net"
            linkUrl="https://dflow.net/"
            isRight
            badges={[
              { label: "Next.js" },
              { label: "TypeScript" },
              { label: "Radix UI" },
              { label: "Tailwind CSS" },
            ]}
          />
          <Project
            title="Ulysse"
            text="With the goal of having a cleaner codebase and better UX in order to start scaling, Ulysse brought me on to help them re-build their product from scratch, applying everything they had learned from the previous iteration. During this project, I coached their team on React, architected the frontend application, and made it accessible."
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
                <ExternalLink href="https://upstatement.com/">
                  Upstatement
                </ExternalLink>{" "}
                brought me on to help supplement their team during this project.
                I collaborated with them to build part of the accessible
                component library and integrate algolia search to Koala&#39;s
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
