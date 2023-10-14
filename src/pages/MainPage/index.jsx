import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Skills from '../../components/Skills'
import Pros from '../../components/Pros'
import ContactMe from '../../components/ContactMe'

const MainPage = () => {
  return (
    <>
      <Header />
      <main>
        <Skills />
        <Pros />
        <ContactMe />
      </main>
      <Footer />
    </>
  )
}

export default MainPage
