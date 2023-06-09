import { Main } from "./components/Main";
import { Header } from "./components/Header";
import { Services } from "./components/Services";
import { ConhecaClinica } from "./components/ConhecaClinica";

function App() {
  return (
    <>
      <div className="bg-main ">
        <Header/>
        <Main/>
      </div>
      <Services/>
      <ConhecaClinica/>
    </>
  )
}

export default App
