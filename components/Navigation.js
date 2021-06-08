import Link from "next/link";
import { useRouter } from "next/router";
import { IconYouTube } from "./IconYouTube";
import { IconTwitch } from "./IconTwitch";

export const Navigation = () => {
  const { pathname } = useRouter();
  const isActiveLink = (path) => (pathname === path ? "active" : "");

  return (
    <>
      <style jsx>{`
        .menu {
          font-size: 0.9rem;
          display: flex;
          flex-direction: row;
          margin: 1.5rem;
        }
        .menu li {
          margin: 0 0.25rem;
        }
        .menu a {
          text-decoration: none;
          color: var(--color-black);
          padding: 0.75rem;
          transition: all 0.2s ease;
        }
        .menu a:hover,
        .active {
          background-color: var(--color-white);
          border-radius: 20px;
        }
        .social {
          display: flex;
          width: 30%;
          flex-direction: row;
          justify-content: space-around;
        }

        @media screen and (min-width: 1024px) {
          .menu {
            font-size: var(--heading-2-size);
            margin: 0;
          }
          .menu li {
            margin: 0 1rem;
          }

          .social {
            width: 10%;
          }
          .social li {
            margin: 0 1em;
            transition: var(--animation);
          }
          .social li:hover {
            fill: var(--color-white);
          }
        }
      `}</style>
      <nav>
        <ul className="menu">
          <li>
            <Link href="/blog">
              <a className={isActiveLink("/")}>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/sobre-mi" passHref>
              <a className={isActiveLink("/sobre-mi")}>Sobre Mi</a>
            </Link>
          </li>
          <li>
            <Link href="/mentoria" passHref>
              <a className={isActiveLink("/mentoria")}>Mentoría</a>
            </Link>
          </li>
          <li>
            <Link href="/cursos" passHref>
              <a className={isActiveLink("/cursos")}>Cursos</a>
            </Link>
          </li>
        </ul>
      </nav>
      <ul className="social">
        <li>
          <Link href="//youtube.com/c/CarlosAzaustre?sub_confirmation=1">
            <a>
              <IconYouTube size="30px" />
            </a>
          </Link>
        </li>
        <li>
          <Link href="//twitch.tv/carlosazaustre">
            <a>
              <IconTwitch size="30px" />
            </a>
          </Link>
        </li>
      </ul>
    </>
  );
};
