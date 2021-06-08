import Image from "next/image";

export const CompanyLogos = () => {
  return (
    <>
      <style jsx>{`
        .logos {
          margin: 1rem auto;
        }
      `}</style>
      <div className="logos">
        <Image
          layout="fixed"
          width={400}
          height={150}
          src="/assets/company-logos.png"
        />
      </div>
    </>
  );
};
