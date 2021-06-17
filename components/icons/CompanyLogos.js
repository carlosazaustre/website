import Image from "next/image";

export const CompanyLogos = () => {
  return (
    <Image
      layout="responsive"
      width={400}
      height={150}
      src="/assets/company-logos.png"
      alt="Google, IBM, Eventbrite. Chefly"
    />
  );
};
