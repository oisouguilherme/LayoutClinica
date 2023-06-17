import { useState } from "react";
import Logo from "../../assets/logo.png";

export function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleLinkClick = () => {
    setIsNavOpen(false);
  };

  return (
    <div className="px-4 xl:px-24 py-2 text-center bg-black bg-opacity-80 ">
      <div className="flex items-center justify-between">
        <a href="/menu">
          <img src={Logo} alt="logo" className="w-16 md:w-20" />
        </a>
        <nav>
          <section className="MOBILE-MENU flex lg:hidden">
            <div
              className="HAMBURGER-ICON cursor-pointer"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="white"
                className="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
              </svg>
            </div>

            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              <div
                className="CROSS-ICON px-4 xl:px-24 py-6 sm:py-8 w-full flex justify-end  cursor-pointer bg-black bg-opacity-90"
                onClick={() => setIsNavOpen(false)}
              >
                <svg
                  className="h-8 w-8 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="flex flex-col items-center space-y-6 h-screen w-full px-2 bg-black bg-opacity-90">
                <li className="sm:text-4xl text-3xl font-medium uppercase hover:scale-105 duration-300 text-mainVerde hover:text-mainAmarelo">
                  <a onClick={handleLinkClick} href="atendimento">
                    Início
                  </a>
                </li>
                <li className="sm:text-4xl text-3xl font-medium uppercase hover:scale-105 duration-300 text-mainVerde hover:text-mainAmarelo">
                  <a onClick={handleLinkClick} href="custo">
                    Clinica
                  </a>
                </li>
                <li className="sm:text-4xl text-3xl font-medium uppercase hover:scale-105 duration-300 text-mainVerde hover:text-mainAmarelo">
                  <a onClick={handleLinkClick} href="equipe">
                    Especialidades
                  </a>
                </li>
                <li className="sm:text-4xl text-3xl font-medium uppercase hover:scale-105 duration-300 text-mainVerde hover:text-mainAmarelo">
                  <a onClick={handleLinkClick} href="relatorio">
                    Dúvidas Frequentes
                  </a>
                </li>
                <li className="sm:text-4xl text-3xl font-medium uppercase hover:scale-105 duration-300 text-mainVerde hover:text-mainAmarelo">
                  <a onClick={handleLinkClick} href="clientes">
                    Contato
                  </a>
                </li>
                <li className="text-xl uppercase">
                  <a
                    onClick={handleLinkClick}
                    href="info"
                    className="flex items-center gap-2 bg-mainVerde px-16 py-3 text-white font-medium rounded-lg mt-24"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="bi bi-whatsapp"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                    </svg>
                    <p>Agendar</p>
                  </a>
                </li>
              </ul>
            </div>
          </section>

          <ul className="hidden space-x-8 lg:flex items-center">
            <li className="text-lg xl:text-xl text-white hover:text-mainAmarelo duration-300 font-bold">
              <a onClick={handleLinkClick} href="atendimento">
                Início
              </a>
            </li>
            <li className="text-lg xl:text-xl text-white hover:text-mainAmarelo duration-300 font-bold">
              <a onClick={handleLinkClick} href="custo">
                Clinica
              </a>
            </li>
            <li className="text-lg xl:text-xl text-white hover:text-mainAmarelo duration-300 font-bold">
              <a onClick={handleLinkClick} href="equipe">
                Especialidades
              </a>
            </li>
            <li className="text-lg xl:text-xl text-white hover:text-mainAmarelo duration-300 font-bold">
              <a onClick={handleLinkClick} href="relatorio">
                Dúvidas Frequentes
              </a>
            </li>
            <li className="text-lg xl:text-xl font-bold text-white hover:text-mainAmarelo duration-300">
              <a onClick={handleLinkClick} href="clientes">
                Contato
              </a>
            </li>
            <li className="text-lg">
              <a
                onClick={handleLinkClick}
                href="info"
                className="flex items-center gap-2 bg-mainVerde hover:bg-opacity-90 duration-300 px-8 py-2 text-white font-medium rounded-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-whatsapp"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                </svg>
                <p>Agendar</p>
              </a>
            </li>
          </ul>
        </nav>
        <style>{`
        .hideMenuNav {
          display: none;
        }
        .showMenuNav {
          display: block;
          position: absolute;
          width: 100%;
          height: 100vh;
          top: 0;
          left: 0;
          background: #F2F4F8;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}</style>
      </div>
    </div>
  );
}
