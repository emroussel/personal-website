import { useEffect, useState } from "react";
import styles from "./index.module.css";
import { Nav } from "../components/Nav";
import { Head } from "../components/Head";

function Project({ title, subtitle, illustrationUrl, illustrationAlt, text, linkUrl, linkText, isRight }) {
  return (
    <div className="flex md:flex-row flex-col justify-between items-center mt-16">
      <div
        className={`relative py-2 sm:py-8 md:w-1/2 w-full ${
          isRight ? "order-none md:order-1 flex justify-end" : "order-none"
        }`}
      >
        <img
          src={illustrationUrl}
          alt={illustrationAlt || ""}
          className={`${isRight ? "lg:mr-8 -mr-4" : "lg:ml-8 -ml-4"} ${styles["project-image"]}`}
        />
        <div
          className={`${
            isRight ? "bg-secondary rounded-l-lg lg:rounded-r-lg" : "bg-primary rounded-r-lg lg:rounded-l-lg"
          } absolute w-3/4 max-w-xs inset-y-0 ${isRight ? "right-0" : ""} ${
            isRight ? "-mr-4 sm:-mr-8 lg:mr-0" : "-ml-4 sm:-ml-8 lg:ml-0"
          } ${styles["project-rectangle"]}`}
        />
      </div>
      <div className={`${isRight ? "md:mr-8" : "md:ml-8"} md:w-1/2 w-full pt-8 md:py-12 py-0`}>
        <h2>{title}</h2>
        <p className="font-semibold py-2">{subtitle}</p>
        <p>{text}</p>
        <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="font-bold mt-3 inline-block py-1">
          {linkText}
        </a>
      </div>
    </div>
  );
}

export default function Home() {
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [isToastTextVisible, setIsToastTextVisible] = useState(false);
  const [isClipboardSupported, setIsClipboardSupported] = useState(false);

  useEffect(() => {
    setIsClipboardSupported(!!(navigator.clipboard && navigator.clipboard.writeText));
  });

  return (
    <>
      <div className="max-w-screen-lg mx-auto px-4 sm:px-8">
        <Head />
        <Nav />
        <main className="sm:pb-16 pb-8">
          <section className="sm:flex items-center sm:mt-20 md:mt-24 mt-8">
            <img
              src="/profile.png"
              className="sm:h-40 md:h-48 lg:h-56 h-48 flex-shrink-0 mx-auto sm:mx-0 mb-8 sm:mb-0"
              alt=""
            />
            <div className="sm:ml-8 md:ml-12 lg:ml-12 ml-0">
              <h1>
                Bridge between
                <br />
                engineering, product,
                <br />
                and design
              </h1>
              <div className="bg-secondary h-2 md:w-48 w-32 rounded-sm md:mt-6 lg:mt-8 mt-4" />
            </div>
          </section>
          <section className="max-w-screen-sm mx-auto sm:mt-32 md:mt-40 mt-16">
            <p className="font-semibold sm:text-xl text-base">
              👋 Hi, I&apos;m Emmanuel. I&apos;m a Canadian software engineer with a passion for building digital
              products that positively impact communities and deliver outstanding user experiences. I&apos;m currently
              the co-founder of{" "}
              <a href="https://berna.health" target="_blank" rel="noopener noreferrer">
                Berna
              </a>
              , a startup improving the quality and efficiency of health care in Sub-Saharan Africa by digitalizing
              medical records.
            </p>
            <p className="mt-4">
              Some software engineers like being told what to work on. I&apos;m the opposite: I want to have a deep
              understanding of the problem space, empathize with users directly, collaborate on solutions, and
              contribute to designs. Because of this, I&apos;m at my best when working in small independent and
              collaborative teams solving tangible problems, usually at smaller organizations where I can have a
              substantial impact.
            </p>
            <p className="mt-4">
              Through leading teams, architecting complex applications, internationalizing codebases, and mentoring
              developers over the last couple of years, I&apos;ve became an expert in JavaScript and React. I have a
              strong attention to detail, a product mindset, and a design sense.
            </p>
          </section>
          <section className="sm:mt-32 mt-16">
            <Project
              title="Berna"
              subtitle="Digital medical records for Sub-Saharan Africa"
              text="I co-founded Berna to improve the quality and efficiency of health care in Sub-Saharan Africa. I designed and built our web product using React and GraphQL with a focus on security, accessibility, performance, and ease of use, while ensuring we can iterate on the product very quickly."
              illustrationUrl="/berna-illustration.svg"
              illustrationAlt="Berna illustration"
              linkText="Visit berna.health"
              linkUrl="https://berna.health"
            />
            <Project
              title="6 River Systems (Owned by Shopify)"
              subtitle="Flexible warehouse fulfillment solution"
              text="As a senior software engineer, I architected and led the development of a new React and GraphQL web application used by warehouse managers, implemented internationalization best practices, and collaborated with the UX team from Shopify on features."
              illustrationUrl="/6river-illustration.svg"
              illustrationAlt="6 River Systems illustration"
              linkText="Visit 6river.com"
              linkUrl="https://6river.com"
              isRight
            />
            <Project
              title="Lola"
              subtitle="Super-simple corporate travel management"
              text="Throughout my time at Lola, I held 3 different roles in which I contributed to the main web product using React and GraphQL, led a team, spearheaded a frontend guild meeting, led the internationalization of our frontend codebase, mentored frontend engineers, and championed a transition from a monolith to micro-frontends to make teams more efficient and autonomous."
              illustrationUrl="/lola-illustration.svg"
              illustrationAlt="Lola illustration"
              linkText="Visit lola.com"
              linkUrl="https://lola.com"
            />
            <Project
              title="Atomize"
              subtitle="A detailed Atom One Dark theme for Visual Studio Code"
              text="I've always loved the UI and UX of Atom, but prefer the speed and reliability of VS Code. After looking for a while, I couldn't find any VS Code theme that accurately replicated Atom One Dark's interface and syntax highlighting, so I made this one."
              illustrationUrl="/atomize-illustration.svg"
              illustrationAlt="Atomize illustration"
              linkText="View on Github"
              linkUrl="https://github.com/emroussel/atomize"
              isRight
            />
          </section>
          <section className="sm:mt-32 mt-16">
            <div>
              <ul className="flex-1">
                <li>
                  {isClipboardSupported ? (
                    <>
                      <button
                        className={`inline-block font-bold text-xl flex items-center ${styles["footer-link"]}`}
                        onClick={() => {
                          navigator.clipboard.writeText("emmanuel@emroussel.com");
                          setIsToastVisible(true);
                          setIsToastTextVisible(true);
                          setTimeout(() => {
                            setIsToastVisible(false);

                            setTimeout(() => {
                              setIsToastTextVisible(false);
                            }, 200); // Transition duration of toast
                          }, 5000);
                        }}
                      >
                        emmanuel@emroussel.com
                      </button>
                    </>
                  ) : (
                    <a
                      href="mailto:emmanuel@emroussel.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-block font-bold text-xl ${styles["footer-link"]}`}
                    >
                      emmanuel@emroussel.com
                    </a>
                  )}
                </li>
                <li>
                  <a
                    href="https://github.com/emroussel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block font-bold text-xl ${styles["footer-link"]}`}
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/emroussel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block font-bold text-xl ${styles["footer-link"]}`}
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block font-bold text-xl ${styles["footer-link"]}`}
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </main>
      </div>
      <div
        className={`fixed inset-x-0 sm:mb-8 mb-4 mx-4 sm:mx-8 text-center transition-all duration-200 ease-in-out ${
          styles.toast
        } ${isToastVisible ? `${styles["toast-visible"]} visible` : "invisible"}`}
      >
        {isToastTextVisible ? (
          <div
            role="alert"
            aria-live="assertive"
            className="inline-block py-4 px-8 bg-gray text-white rounded-lg shadow-lg"
          >
            Email copied to clipboard!
          </div>
        ) : null}
      </div>
    </>
  );
}
