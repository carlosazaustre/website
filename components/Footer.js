import Link from "next/link";
import { Logo } from "./Logo";
import { IconYouTube } from "./IconYouTube";
import { IconTwitch } from "./IconTwitch";
import { IconInstagram } from "./IconInstagram";
import { IconTikTok } from "./IconTikTok";
import { IconTwitter } from "./IconTwitter";

export const Footer = () => {
  return (
    <>
      <style jsx>{`
        .footer {
          background-color: var(--color-dark);
          color: var(--color-white);
          padding: 2rem;
          text-align: center;
          display: flex;
          flex-direction: column;
        }
        .footer-section {
          margin: 1rem;
        }
        .footer-section > h4 {
          margin: 0.75rem;
        }
        .footer a {
          color: var(--color-white);
        }
        .social {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
        .social a {
          fill: var(--color-white);
        }
        @media screen and (min-width: 1024px) {
          .footer {
            max-width: var(--max-width);
            flex-direction: row;
            justify-content: space-around;
            text-align: left;
          }
          .footer-section h4 {
            margin-left: 0;
          }
          .social {
            flex-direction: column;
            justify-content: flex-start;
          }
        }
        @media screen and (min-width: 1441px) {
          .footer {
            margin: 1rem auto;
            border-radius: var(--radius);
          }
        }
      `}</style>
      <footer className="footer">
        <section className="footer-section">
          <Logo type="full" />
        </section>
        <section className="footer-section social">
          <Link href="https://youtube.com/carlosazaustre?sub_confirmation=1">
            <a>
              <IconYouTube size="40px" />
            </a>
          </Link>
          <Link href="https://twitch.tv/carlosazaustre">
            <a>
              <IconTwitch size="40px" />
            </a>
          </Link>
          <Link href="https://instagram.com/carlosazaustre">
            <a>
              <IconInstagram size="40px" />
            </a>
          </Link>
          <Link href="https://tiktok.com/@carlosazaustre">
            <a>
              <IconTikTok size="40px" />
            </a>
          </Link>
          <Link href="https://twitter.com/carlosazaustre">
            <a>
              <IconTwitter size="40px" />
            </a>
          </Link>
        </section>
        <section className="footer-section">
          <h4>Páginas</h4>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="mentoria">
                <a>Mentoría</a>
              </Link>
            </li>
            <li>
              <Link href="/aprendiendo-javascript">
                <a>Aprendiendo JavaScript</a>
              </Link>
            </li>
            <li>
              <Link href="/curso-nodejs-gratis">
                <a>Curso Node.js Gratis</a>
              </Link>
            </li>
            <li>
              <Link href="/curso-programacion">
                <a>Curso de Programación Gratis</a>
              </Link>
            </li>
            <li>
              <Link href="/sobre-mi">
                <a>Sobre mi</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
          </ul>
        </section>
        <section className="footer-section">
          <h4>Legal</h4>
          <ul>
            <li>
              <Link href="/privacidad">
                <a>Política de Privacidad</a>
              </Link>
            </li>
            <li>
              <Link href="/cookies">
                <a>Política de Cookies</a>
              </Link>
            </li>
            <li>
              <Link href="/legal">
                <a>Aviso Legal</a>
              </Link>
            </li>
          </ul>
        </section>
      </footer>
    </>
  );
};
