import Nurse from "../../assets/nursed.png";

export function MainTop() {
  return (
    <div className="bg-mainVerde">
      <div className=" flex items-center justify-between max-w-6xl mx-auto">
        <div className="space-y-8 px-4 md:px-0 text-center lg:text-start text-white lg:w-1/2 py-12 ">
          <h2 className="sm:text-5xl text-4xl font-medium ">
            Somos todos <br /> Mais por voce
          </h2>
          <p className="opacity-90 sm:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            tenetur? Harum soluta similique animi magni sequi molestiae at minima
            dolorem nesciunt ipsam quasi hic placeat consectetur officia,
            obcaecati modi adipisci!
          </p>

          <p className="font-medium sm:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            eos?
          </p>
        </div>

        <img className="w-80 hidden  lg:block" src={Nurse} alt="enfermeira" />
      </div>
    </div>
  );
}
