import { Logo } from "./Logo";
import { Navigation } from "./Navigation";

export const Header = () => {
  return (
    <>
      <style jsx>{`
        .header {
          display: flex;
          flex-direction: column;
          padding: 2rem;
          font-weight: bold;
          margin: 0 auto;
          align-items: center;
          justify-content: space-between;
        }
        @media screen and (min-width: 1024px) {
          .header {
            flex-direction: row;
            padding: 4rem;
            font-weight: bold;
            align-items: center;
            justify-content: space-between;
          }
        }
      `}</style>

      <header role="header" className="header">
        <h1
          className="logo"
          title="Formador y Desarrollador Web JavaScript Fullstack - Carlos Azaustre"
        >
          <Logo />
        </h1>
        <Navigation />
      </header>
    </>
  );
};
