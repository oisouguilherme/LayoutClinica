import { Main } from "./components/Main";
import { Header } from "./components/Header";
import { Services } from "./components/Services";
import { ConhecaClinica } from "./components/ConhecaClinica";
import { PerguntasFreq } from "./components/PerguntasFreq";
import { Footer } from "./components/Footer";
import { ComoChegar } from "./components/ComoChegar";
import { MainTop } from "./components/MainTop";
import { TiposDeAtendimento } from "./components/mainMid";
import { SlideCarroussel } from "./components/MainBottom";


function App() {
  return (
    <>
      <div className="bg-main ">
        <Header/>
        <Main/>
      </div>
      <Services/>
      <ConhecaClinica/>
      <MainTop/>
      <TiposDeAtendimento/>
      <SlideCarroussel/>
      <PerguntasFreq/>
      <ComoChegar/>
      <Footer/>
    </>
  )
}

export default App
