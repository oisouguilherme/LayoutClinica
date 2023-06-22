export function ComoChegar() {
  return (
    <div className="grid md:grid-cols-2">
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d855.8008674431834!2d-46.425897168083985!3d-15.622827550571944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9356b345c79de8f1%3A0xd205e2f38816890a!2sCentro%20Cl%C3%ADnico%20Buritis!5e0!3m2!1spt-BR!2sbr!4v1687364858170!5m2!1spt-BR!2sbr"
          width="100%"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="bg-mainVerde">
        <div className="sm:p-16 p-8 space-y-8 flex flex-col items-start">
          <h2 className="text-5xl font-medium text-white">Cliníca Certa</h2>
          <p className="text-lg text-gray-50">
            R. Belo Horizonte, 421 - Centro <br />
            Buritis - MG, 38660-000
          </p>

          <p className="text-gray-100">Lorem ipsum dolor sit amet.</p>
          <a
            href="#"
            className="bg-white hover:bg-gray-200 duration-300 text-mainVerde text-lg font-medium px-12 py-3 rounded-lg"
          >
            Como chegar
          </a>
        </div>
      </div>
    </div>
  );
}
