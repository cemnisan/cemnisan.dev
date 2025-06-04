import CTA from "@/components/home/CTA";
import Hero from "@/components/home/Hero";
import Page from "@/components/utility/Page";
import Projects from "@/components/home/Projects";
import Skills from "@/components/home/Skills";
import About from "@/components/home/About";

export default function Home() {
  return (
    <Page
      currentPage="Home"
      meta={{
        desc: "I'm a passionate mobile and web developer coding beautiful mobile and web apps.",
      }}
    >
      <Hero />
      <div className="mt-10 space-y-16">
        <About />
        <Projects />
        <Skills />
      </div>
      <CTA />
    </Page>
  );
}
