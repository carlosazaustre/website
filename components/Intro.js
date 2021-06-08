import { CompanyLogos } from "./CompanyLogos";
import { ButtonCTA } from "./ButtonCTA";

export const Intro = () => {
  return (
    <>
      <style jsx>{`
        .subtitle {
          font-size: var(--heading-1-size);
          line-height: 1.1em;
          margin-bottom: 1rem;
          text-align: center;
        }
        .subtitleGreeting {
          display: inline-block;
          font-weight: 500;
        }
        .subtitleName {
          display: inline-block;
          font-weight: black;
        }
        .text {
          text-align: center;
          font-weight: normal;
        }

        @media screen and (min-width: 1024px) {
          .subtitle {
            margin-bottom: 2rem;
            text-align: left;
          }
          .text {
            font-size: 1rem;
            text-align: left;
          }
        }
      `}</style>

      <h2 className="subtitle">
        <span className="subtitleGreeting">Hola 👋🏼, soy</span>{" "}
        <span className="subtitleName">Carlos Azaustre</span>
      </h2>
      <h3 className="text">
        Desarrollador JavaScript con 10+ años de experiencia. Actualmente
        formador y divulgador en tecnologías web a través de YouTube, dónde ya
        somos más de 50,000!
        <br />
        <br />
        Reconocido por Google como Developer Expert (GDE) en Web, y Auth0
        Ambassador.
      </h3>
      <ButtonCTA
        text="¡Quiero aprender JavaScript!"
        url="https://youtube.com/c/CarlosAzaustre?sub_confirmation=1"
      />
      <CompanyLogos />
    </>
  );
};
