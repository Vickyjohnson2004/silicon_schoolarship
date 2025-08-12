import Image from "next/image";
import Try from "./try/page.jsx";
import Footer from "./component/Footer.jsx";
import About from "./about/About.jsx";
import Future from "./future/Future.jsx";
export default function Home() {
  return (
    <div>
      <Try />
      <About />
      <Future />
      <Footer />
    </div>
  );
}
