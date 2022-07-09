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

function Quote({ author, children }) {
  return (
    <figure className="text-center mt-24 sm:mt-32 max-w-3xl mx-auto w-full relative">
      <blockquote className="sm:text-lg font-semibold before:content-['“'] before:absolute before:left-0 before:lg:-translate-x-[120%] before:-top-10 before:lg:-top-2 before:text-7xl before:opacity-20 after:content-['”'] after:absolute after:right-0 after:lg:translate-x-[120%] after:-top-10 after:lg:-top-2 after:text-7xl after:opacity-20">
        {children}
      </blockquote>
      <figcaption className="mt-4">- {author}</figcaption>
    </figure>
  );
}

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
          <Quote author="Mike Swartz, Principal @ Upstatement">
            Working with Emmanuel is a joy – he is a fast, confident, and
            extremely sharp developer who helped us take our ideas from design
            to app. He is also a talented problem solver and partner in product
            design, and talking through potential solutions and approaches with
            him made the final product better. Emmanuel also managed the project
            deftly, keeping an eye on timeline, communicating with us and the
            ultimate client, and despite doing all this from multiple time zones
            it never felt like he was far away. You can&#39;t have a better
            engineer on your team, hire Emmanuel!
          </Quote>
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
          <Quote author="Nitesh Nath, Founder @ DFlow">
            Working with Emmanuel was an excellent experience. He delivered
            excellent software engineering work with the right vision and
            incredible speed. Could not recommend more highly!
          </Quote>
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
          <Quote author="Lancelot Hardel, CTO @ Ulysse">
            We loved to work with Emmanuel. He really helped us to level up the
            experience on our product, either by his own suggestions, or by
            writing excellent and performant code. He also mentored our existing
            front-end developers on best practices and accessibility. Definitely
            an incredible addition to our team, we couldn&#39;t recommend him
            enough.
          </Quote>
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
          <Quote author="Mike Burns, Executive Director of Engineering @ Upstatement">
            Emmanuel quickly established himself as a go-to resource for
            building out complex front-end applications. Our designers love his
            keen eye for detail and approachable communication style, and our
            engineers appreciate his balance of speed, quality, and big picture
            thinking. He truly felt like an extension of our team; we&#39;d hire
            him again in a heartbeat!
          </Quote>
        </section>
      </main>
    </PageContainer>
  );
}
