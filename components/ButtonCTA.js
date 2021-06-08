import Link from "next/link";

export const ButtonCTA = ({ text, url }) => {
  return (
    <>
      <style jsx>{`
        .btnCTA {
          display: inline-block;
          background-color: var(--color-white);
          color: var(--color-black);
          text-decoration: none;
          text-align: center;
          font-weight: bold;
          font-size: var(--heading-2-size);
          padding: 1rem 2rem;
          margin: 1rem 0;
          border-radius: var(--radius);
          border: 2px solid var(--color-white);
          transition: var(--animation);
          max-width: 500px;
          margin: 1.25rem auto;
        }
        .btnCTA:hover {
          color: var(--color-white);
          background-color: var(--color-dark);
        }
      `}</style>
      <Link href={url}>
        <a className="btnCTA">{text}</a>
      </Link>
    </>
  );
};
