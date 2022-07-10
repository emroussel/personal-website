import { Head } from "../components/Head";
import { Project } from "../components/Project";
import { Title } from "../components/Title";
import { PageContainer } from "../components/PageContainer";
import { Email } from "../components/Email";
import BernaIllustration from "../public/berna-illustration.svg";
import SixRiverIllustration from "../public/6river-illustration.svg";
import LolaIllustration from "../public/lola-illustration.svg";
import EmrousselIllustration from "../public/emroussel-illustration.svg";

export default function About() {
  return (
    <PageContainer>
      <Head title="About | Emmanuel Roussel" />
      <main className="sm:pb-16 pb-8">
        <section className="md:mt-16 mt-8 max-w-screen-sm mx-auto">
          <Title>Software Engineer, Designer & Entrepreneur</Title>
          <div className="mt-6 sm:mt-8 md:mt-12">
            <p className="font-semibold sm:text-lg text-base">
              I&#39;m a software engineer from Québec, Canada, moving to London,
              UK soon. I&#39;m looking for my next role as a frontend or
              full-stack software engineer – reach out to me at{" "}
              <Email className="font-semibold" /> if you want to work together
              or introduce me to a company that might be a good fit!
            </p>
            <p className="mt-4">
              I&#39;m an optimist who believes things can be better than they
              currently are. Phrases like &#34;because it&#39;s always been done
              this way&#34; are not part of my vocabulary – I try to be
              open-minded and think outside the box.
            </p>
            <p className="mt-4">
              While most of my experience building digital products is in
              software engineering, I also think and care a lot about the end
              users. I love empathizing with people, creating designs, and
              anything that will ultimately help deliver real value to
              customers, including all aspects of the user experience (not only
              the actual design but also accessibility, performance, etc.). The
              web should be delightful for everyone to use.
            </p>
            <p className="mt-4">
              With a strong attention to detail, product mindset, and design
              sense, I&#39;m at my best when working in small independent and
              collaborative teams solving tangible problems where I can have a
              significant impact. I&#39;m a fast learner who&#39;s not afraid to
              get his hands dirty or wear multiple hats.
            </p>
            <p className="mt-4">
              On the practical side, I specialize in building and designing web
              applications using JavaScript, TypeScript, React, Next.js, and
              GraphQL. I&#39;ve also led teams, architected new projects, built
              accessible component libraries, internationalized codebases, and
              mentored engineers.
            </p>
            <p className="mt-4">
              You can read more about my professional experience below.
            </p>
          </div>
        </section>
        <section className="sm:mt-32 mt-16">
          <Project
            title="Freelance"
            subtitle="January 2021 – Present"
            text="I specialize in building web products using JavaScript and React. Some of my past projects include building complex frontends from scratch, creating component libraries, improving the accessibility/performance of applications, coaching teams, etc."
            illustration={EmrousselIllustration}
            illustrationAlt="Personal website illustration"
            linkText="Read more about my freelance projects"
            linkUrl="/freelance"
            badges={[
              { label: "React" },
              { label: "TypeScript" },
              { label: "Next.js" },
              { label: "Radix UI" },
              { label: "Tailwind CSS" },
            ]}
          />
          <Project
            title="Berna"
            subtitle="January 2020 – June 2022"
            text="I co-founded Berna to improve the quality and efficiency of health care in Rwanda using digital medical records. I designed and built our progressive web app with a focus on UX and accessibility while iterating on the product quickly."
            illustration={BernaIllustration}
            illustrationAlt="Berna illustration"
            isRight
            badges={[
              { label: "React" },
              { label: "GraphQL" },
              { label: "Radix UI" },
            ]}
          />
          <Project
            title="6 River Systems (Shopify)"
            subtitle="April 2020 – October 2020"
            text="As a senior software engineer, I led the development of a new web application and deployed it to all customers to help them manage their warehouses. We used Polaris (the design library from Shopify) and collaborated with a UX team from Shopify to improve upon the previous application in terms of usability, accessibility, and maintainability."
            illustration={SixRiverIllustration}
            illustrationAlt="6 River Systems illustration"
            badges={[
              { label: "React" },
              { label: "TypeScript" },
              { label: "GraphQL" },
              { label: "Polaris" },
              { label: "Testing Library" },
            ]}
          />
          <Project
            title="Lola"
            subtitle="October 2017 – March 2020"
            text="Throughout my time at Lola, I held 3 different roles in which I contributed to the React Native app, React web applications, and emails. I also led a team of 6 software engineers, spearheaded a frontend guild meeting, added internationalization to the frontend codebase, and mentored engineers."
            illustration={LolaIllustration}
            illustrationAlt="Lola illustration"
            isRight
            badges={[{ label: "React" }, { label: "GraphQL" }]}
          />
        </section>
      </main>
    </PageContainer>
  );
}
