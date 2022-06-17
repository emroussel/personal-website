import { Head } from "../components/Head";
import { Project } from "../components/Project";
import { Title } from "../components/Title";
import { PageContainer } from "../components/PageContainer";
import AnonymizeJSIllustration from "../public/anonymizejs-illustration.svg";
import AtomizeIllustration from "../public/atomize-illustration.svg";
import TinyPersimmonIllustration from "../public/tiny-persimmon-illustration.svg";

export default function Projects() {
  return (
    <PageContainer>
      <Head
        title="Projects | Emmanuel Roussel"
        description="Check out some fun little experiments and tools I built."
      />
      <main className="sm:pb-16 pb-8">
        <section className="max-w-screen-sm mx-auto md:mt-16 mt-8">
          <Title>Side Projects</Title>
        </section>
        <section className="sm:mt-32 mt-16">
          <Project
            title="TinyPersimmon"
            subtitle="Learn new Korean words using spaced repetition"
            text="While learning Korean, I couldn't find a good way to learn new words – all of the products I tried were either inefficient or hard to use, so I built my own (not really an efficient solution, I know 😅) that is tailored to my liking as someone who uses it every day."
            illustration={TinyPersimmonIllustration}
            illustrationAlt="TinyPersimmon illustration"
            linkText="View on GitHub"
            linkUrl="https://github.com/emroussel/tinypersimmon"
            badges={[
              { label: "Remix" },
              { label: "TypeScript" },
              { label: "Radix UI" },
              { label: "Tailwind CSS" },
              { label: "Prisma" },
              { label: "Supabase" },
            ]}
          />
          <Project
            title="Anonymize JavaScript"
            subtitle="Rename variables, functions, classes, and more while keeping code functional"
            text="Great for sanitizing private code in order to share it publicly on the internet!"
            illustration={AnonymizeJSIllustration}
            illustrationAlt="Anonymize JavaScript illustration"
            linkText="Visit anonymizejs.com"
            linkUrl="https://anonymizejs.com"
            isRight
            badges={[
              { label: "Next.js" },
              { label: "Vercel" },
              { label: "Babel" },
            ]}
          />
          <Project
            title="Atomize"
            subtitle="A detailed Atom One Dark theme for Visual Studio Code"
            text="I've always loved the UI and UX of Atom, but prefer the speed and reliability of VS Code. After looking for a while, I couldn't find any VS Code theme that accurately replicated Atom One Dark's interface and syntax highlighting, so I made this one."
            illustration={AtomizeIllustration}
            illustrationAlt="Atomize illustration"
            linkText="View on VS Code Marketplace"
            linkUrl="https://marketplace.visualstudio.com/items?itemName=emroussel.atomize-atom-one-dark-theme"
            badges={[{ label: "VS Code Theme" }]}
          />
        </section>
      </main>
    </PageContainer>
  );
}
