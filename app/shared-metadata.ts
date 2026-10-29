import { Metadata } from "next";

export const genMetadata = ({
  title,
  description,
  keywords,
  image,
}: {
  title: string;
  description: string;
  keywords: string;
  image?: string;
}): Metadata => {
  return {
    title: title,
    description: description,
    keywords,
    openGraph: {
      type: "website",
      url: "https://www.refugereliefservices.org/",
      title: title,
      description: description,
      siteName: "Refugereliefservices.com Website",
      images: [
        {
          url: image
            ? "https://www.refugereliefservices.org/" + image
            : "https://www.refugereliefservices.org/_next/image?url=%2Fhero.png&w=640&q=75",
        },
      ],
    },
  };
};
