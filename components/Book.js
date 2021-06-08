import Image from "next/image";
import Link from "next/link";

export const Book = ({ imageSrc, url }) => {
  return (
    <>
      <style jsx>{`
        .book {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          height: 100%;
          position: relative;
          top: 10px;
          transition: var(--animation);
        }
        .book:hover {
          top: 0px;
        }
      `}</style>
      <Link href={url}>
        <a className="book">
          <Image width={480} height={620} layout="fixed" src={imageSrc} />
        </a>
      </Link>
    </>
  );
};
