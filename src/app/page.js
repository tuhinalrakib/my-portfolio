import Head from "next/head";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import Hero from "../components/Hero";
// import About from "../components/About";
// import Skills from "../components/Skills";
// import Projects from "../components/Projects";
// import Contact from "../components/Contact";
// import Footer from "../components/Footer";

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
        <Navbar />

        <section id="home" className="pt-16">
          <Hero />
        </section>
        
        {/* <section id="home" className="pt-16">
          <Hero />
        </section> */}

        {/* <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section> */}

        {/* <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>

        <Footer /> */}
      </main>
    </>
  );
}
