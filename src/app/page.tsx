import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-white/5 py-8 text-center text-sm text-zinc-500">
        <p>
          &copy; {new Date().getFullYear()} GFB Advanced Technologies LLC. All
          rights reserved.
        </p>
      </footer>
    </>
  );
}
