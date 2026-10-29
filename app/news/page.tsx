import Hero from "~/components/Hero";
import { genMetadata } from "../shared-metadata";
import { Metadata } from "next";

export const metadata: Metadata = genMetadata({
  title: "Latest News and Updates | Refuge Relief Service",
  description:
    "Stay informed with the latest news, updates, and success stories from Refuge Relief Service, showcasing our impact on youth empowerment and community development.",
  keywords:
    "refuge relief service, donation, refuge, refuge relief, refuge relief news, youth empowerment, leadership training, mentorship programs, job placement services, community support, skills development for youth, youth leadership coaching, economic enhancement, empowering young leaders",
});

const NewsPage = () => {
  const text = {
    before: "Be informed",
    description:
      "Get updates on our latest initiatives, events, and success stories.",
    buttonText: "View all",
    href: "news",
  };

  return (
    <>
      <Hero
        before={text.before}
        description={text.description}
        buttonText={text.buttonText}
        href={text.href}
      />
      <section className="">Hello World</section>
    </>
  );
};

export default NewsPage;
