import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Portfolio from "../components/Portfolio";
import Home from "../components/Home";

export default function Index() {
  return (
    <div>
      <Head>
        <title>Yash Patel</title>
      </Head>
      <Home />
      <Portfolio />
      <Experience />
      <About />
      <Contact />
    </div>
  );
}
