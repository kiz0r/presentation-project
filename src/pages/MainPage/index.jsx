import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Skills from '../../components/Skills'
import Pros from '../../components/Pros'
import ContactMe from '../../components/ContactMe'
import ServicesSites from '../../components/ServicesSite'
import AboutMe from '../../components/AboutMe'
import FrontSection from '../../components/FrontSection'

const MainPage = () => {
  return (
    <>
      <Header />
      <main>
        {/* <FrontSection /> */}
        <AboutMe />
        <Skills />
        <Pros />
        <ContactMe />
        {/* <ServicesSites /> */}
      </main>
      <Footer />
    </>
  )
}

export default MainPage
