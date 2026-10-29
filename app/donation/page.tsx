import Hero from "~/components/Hero";
import { genMetadata } from "../shared-metadata";
import { Metadata } from "next";
import { defineQuery } from "next-sanity";
import DonationForm from "./DonateForm";
import HeroWithImage, { Prop } from "~/components/Hero2";

export const metadata: Metadata = genMetadata({
  title: "Donate to Refuge Relief Service | Empower Youth",
  description:
    "Support youth empowerment with your donation. Help us provide mentorship and leadership training.",
  keywords:
    "refuge relief service, refuge relief services, refuge relief donation, donation, refuge, refuge relief, refuge relief causes, youth empowerment, leadership training, mentorship programs, job placement services, community support, skills development for youth, youth leadership coaching, economic enhancement, empowering young leaders",
});

const DonationPage = async () => {
  const text: Prop = {
    before: "Make an",
    keyword: "impact",
    after: "with donation",
    description:
      "Help us provide leadership, mentorship, and skills training to young leaders through your donation.",
    buttonText: "Learn more",
    link: "donation#donate",
    image: "donationhero",
  };

  return (
    <>
      <HeroWithImage Prop={text} />
      <section
        id="donate"
        className="w-full flex flex-col items-center justify-center gap-y-4 mx-auto max-w-[1440px] px-4 md:px-8 xl:px-12 pb-20"
      >
        <h2 className="font-semibold text-3xl">Donate Now</h2>
        <p>Fill out the form below to make an Impact</p>
        <DonationForm />
      </section>
    </>
  );
};

export default DonationPage;
