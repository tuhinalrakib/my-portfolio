import Head from "next/head";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./about/page";
import Skills from "./skills/page";
import Contact from "./contact/page";
export default function Home() {
  return (
    <>
      <Head>
        <title>Tuhin | MERN Stack Developer</title>
        <meta name="description" content="Portfolio of Tuhin, a MERN stack web developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="scroll-smooth">

        <section id="home" className="pt-16">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
}
