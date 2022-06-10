import Head from "next/head";
import Main from "../components/Main";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Yash Patel</title>
      </Head>

      <Navbar />
      <Main />
    </div>
  );
}
