import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProfileHighlights from "@/components/ProfileHighlights";

export default function Home() {
  return (
    <main className=" flex-col overflow-hidden ">
      <Navbar/>
      <Hero />
      <About />
      <ProfileHighlights />
      <Projects />
      <Footer />
    </main>
  );
}
