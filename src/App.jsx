import { Main } from "./components/Main";
import { Header } from "./components/Header";
import { Services } from "./components/Services";
import { ConhecaClinica } from "./components/ConhecaClinica";
import { PerguntasFreq } from "./components/PerguntasFreq";
import { Footer } from "./components/Footer";


function App() {
  return (
    <>
      <div className="bg-main ">
        <Header/>
        <Main/>
      </div>
      <Services/>
      <ConhecaClinica/>
      <PerguntasFreq/>
      <Footer/>
    </>
  )
}

export default App
