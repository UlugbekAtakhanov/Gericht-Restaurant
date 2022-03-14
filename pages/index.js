
import Header from "../components/containers/HomePage/Header"
import About from "../components/containers/HomePage/About"
import Navbar from "../components/navbar"
import Menu from "../components/containers/HomePage/Menu"
import Chef from "../components/containers/HomePage/Chef"
import Intro from "../components/containers/HomePage/Intro"
import Laurels from "../components/containers/HomePage/Laurels"
import Gallery from "../components/containers/HomePage/Gallery"
import FindUs from "../components/containers/HomePage/FindUs"
import NewsLetter from "../components/containers/HomePage/NewsLetter"
import Footer from "../components/containers/HomePage/Footer"

export default function Home() {
  return (
    <div className="">

      <div className="flex flex-col bg-black-color min-h-screen">
        <Navbar />
        <Header />
      </div>

        <About />
        <Menu />
        <Chef />
        <Intro />
        <Laurels />
        <Gallery />
        <FindUs />
        <NewsLetter />
        <Footer />
    </div>
  )
}
