import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./index.module.css";
import { Nav } from "../components/Nav";
import { Head } from "../components/Head";
import ProfileImage from "../public/profile.jpg";
import BernaIllustration from "../public/berna-illustration.svg";
import SixRiverIllustration from "../public/6river-illustration.svg";
import LolaIllustration from "../public/lola-illustration.svg";
import AtomizeIllustration from "../public/atomize-illustration.svg";

function Project({ title, subtitle, illustration, illustrationAlt, text, linkUrl, linkText, isRight }) {
  return (
    <div className="flex md:flex-row flex-col justify-between items-center mt-32">
      <div
        className={`relative py-8 w-full ${
          isRight ? "order-none md:order-1 flex justify-end pl-8 sm:pl-0" : "order-none pr-8 sm:pr-0"
        }`}
      >
        <div
          className={`${isRight ? "lg:mr-8" : "lg:ml-8"} w-full rounded-lg overflow-hidden ${styles["project-image"]}`}
        >
          <Image src={illustration} alt={illustrationAlt || ""} layout="responsive" />
        </div>
        <div
          className={`${
            isRight ? "bg-secondary rounded-l-lg lg:rounded-r-lg" : "bg-primary rounded-r-lg lg:rounded-l-lg"
          } absolute w-3/4 max-w-xs inset-y-0 ${isRight ? "right-0" : ""} ${
            isRight ? "-mr-4 sm:-mr-8 lg:mr-0" : "-ml-4 sm:-ml-8 lg:ml-0"
          } ${styles["project-rectangle"]}`}
        />
      </div>
      <div className={`${isRight ? "md:mr-16 lg:mr-32" : "md:ml-16 lg:ml-32"} w-full pt-8 md:py-12 py-0`}>
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
  }, []);

  return (
    <>
      <div className="max-w-screen-lg mx-auto px-4 sm:px-8">
        <Head />
        <Nav />
        <main className="sm:pb-16 pb-8">
          <section className="sm:flex items-center sm:mt-20 md:mt-24 mt-8">
            <div className={`sm:flex-1 mb-8 sm:mb-0 mx-auto sm:mr-auto sm:ml-0 px-8 sm:px-0 ${styles["hero-image"]}`}>
              <Image
                src={ProfileImage}
                alt="Photo of Emmanuel Roussel"
                layout="responsive"
                priority
                placeholder="blur"
              />
            </div>
            <div className="sm:ml-8 md:ml-10 lg:ml-12 ml-0 mr-auto">
              <h1>
                Bridge between
                <br />
                engineering, product,
                <br />
                and design
              </h1>
              <div className="bg-secondary h-2 md:w-48 lg:w-56 w-32 rounded-sm md:mt-4 lg:mt-6 mt-3" />
            </div>
          </section>
          <section className="max-w-screen-sm mx-auto sm:mt-32 md:mt-40 mt-16">
            <p className="font-semibold sm:text-xl text-base">
              👋 Hi, I&#39;m Emmanuel. I&#39;m a Canadian software engineer with a passion for building digital products
              that positively impact communities and deliver outstanding user experiences. I&#39;m currently the
              co-founder of{" "}
              <a href="https://berna.health" target="_blank" rel="noopener noreferrer">
                Berna
              </a>
              , a startup improving the quality and efficiency of health care in Sub-Saharan Africa by digitizing
              medical records.
            </p>
            <p className="mt-4">
              Over the last couple of years, I&#39;ve contributed to many web applications (mostly using JavaScript,
              React, and GraphQL), but I&#39;ve also led teams, architected new projects, built component libraries,
              internationalized codebases, and mentored developers. I have a strong attention to detail, a product
              mindset, and a design sense.
            </p>
            <p className="mt-4">
              Along writing code, I&#39;m comfortable jumping between empathizing with users, contributing to designs,
              and answering customer support requests. Because of this, I&#39;m at my best when working in small
              independent and collaborative teams solving tangible problems, usually at smaller organizations where I
              can have a greater impact.
            </p>
          </section>
          <section className="sm:mt-32 mt-16">
            <Project
              title="Berna"
              subtitle="Digital medical records for Sub-Saharan Africa"
              text="I co-founded Berna to improve the quality and efficiency of health care in Sub-Saharan Africa. I designed and built our web product using React and GraphQL with a focus on security, accessibility, performance, and ease of use, while ensuring we can iterate on the product very quickly."
              illustration={BernaIllustration}
              illustrationAlt="Berna illustration"
              linkText="Visit berna.health"
              linkUrl="https://berna.health"
            />
            <Project
              title="6 River Systems (Owned by Shopify)"
              subtitle="Flexible warehouse fulfillment solution"
              text="As a senior software engineer, I architected and led the development of a new React and GraphQL web application used by warehouse managers, implemented internationalization best practices, and collaborated with the UX team from Shopify on features."
              illustration={SixRiverIllustration}
              illustrationAlt="6 River Systems illustration"
              linkText="Visit 6river.com"
              linkUrl="https://6river.com"
              isRight
            />
            <Project
              title="Lola"
              subtitle="Super-simple corporate travel management"
              text="Throughout my time at Lola, I held 3 different roles in which I contributed to the main web product using React and GraphQL, led a team, spearheaded a frontend guild meeting, led the internationalization of our frontend codebase, mentored frontend engineers, and championed a transition from a monolith to micro-frontends to make teams more efficient and autonomous."
              illustration={LolaIllustration}
              illustrationAlt="Lola illustration"
              linkText="Visit lola.com"
              linkUrl="https://lola.com"
            />
            <Project
              title="Atomize"
              subtitle="A detailed Atom One Dark theme for Visual Studio Code"
              text="I've always loved the UI and UX of Atom, but prefer the speed and reliability of VS Code. After looking for a while, I couldn't find any VS Code theme that accurately replicated Atom One Dark's interface and syntax highlighting, so I made this one."
              illustration={AtomizeIllustration}
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
                        className={`font-bold text-xl flex items-center ${styles["footer-link"]}`}
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
        className={`fixed inset-x-0 sm:mb-8 mb-4 mx-4 sm:mx-8 text-center transition-all duration-200 ease-in-out -bottom-24 ${
          isToastVisible ? `${styles["toast-visible"]} visible` : "invisible"
        }`}
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
