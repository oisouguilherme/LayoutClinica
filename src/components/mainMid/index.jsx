import Happyfamily from "../../assets/family.png";
import { Topics } from "./Topics";

export function TiposDeAtendimento() {
  return (
    <div className="py-12 space-y-12 flex flex-col items-center max-w-6xl mx-auto">
      <h2 className="sm:text-5xl text-2xl font-bold text-center text-mainVerde">
        Que tipo de atendimento <br /> você está procurando?
      </h2>

      <div className="flex justify-between px-4">
        <img src={Happyfamily} alt="familia" className="w-[400px] h-fit hidden  lg:block"/>

        <div className="flex justify-center flex-wrap gap-4">
          <Topics/>
          <Topics/>
          <Topics/>
          <Topics/>
          <Topics/>
          <Topics/>
          <Topics/>
          <Topics/>
        </div>
      </div>
      <a href="#" className="bg-mainVerde px-8 py-4 text-white font-medium shadow-xl hover:bg-opacity-90 duration-300 rounded-xl">Agende uma consulta</a>
    </div>
  );
}
