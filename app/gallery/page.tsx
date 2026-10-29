import { Metadata } from "next";
import Hero from "~/components/Hero";
import { genMetadata } from "../shared-metadata";
import Image from "next/image";
import { Button } from "~/components/ui/button";
import Link from "next/link";
import ContactInfo from "~/components/ContactInfo";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import ContactForm from "~/components/ContactForm";

export const metadata: Metadata = genMetadata({
  title:
    "Building Stronger Communities with Youth Leadership | Refuge Relief Service",
  description:
    "Refuge Relief Service is committed to empowering youth through leadership programs, job training, and mentorship to help them thrive and impact their communities.",
  keywords:
    "refuge relief service, refuge, donation, refuge relief, youth empowerment, leadership training, mentorship programs, job placement services, community support, skills development for youth, youth leadership coaching, economic enhancement, empowering young leaders",
});

const text = {
  before: "Explore our",
  keyword: "impact",
  after: "in pictures",
  description:
    "Browse through our gallery to witness youth empowerment in action and community transformation.",
  buttonText: "Join us today",
  href: "get-involved",
};

const images = [
  {
    title: "Education scholarship program",
    description:
      "Empowering bright young minds through our dedicated school scholarship initiative.",
    image: "/education-program.jpg",
  },
  {
    title: "Healthcare and support campaign",
    description:
      "Providing essential healthcare services and support for underserved community members.",
    image: "/health-program-1.jpg",
  },
  {
    title: "Environmental conservation project",
    description:
      "Promoting sustainable practices to protect and conserve our local environment.",
    image: "/environmental-conservation-program.jpg",
  },
  {
    title: "Community development initiative",
    description:
      "Building stronger, more resilient communities through grassroots development and empowerment efforts.",
    image: "/community-development.jpg",
  },
  {
    title: "Community development initiative",
    description:
      "Fostering growth and collaboration within local communities for long-term improvement and success",
    image: "/health-program-2.jpg",
  },
  {
    title: "Education scholarship program",
    description:
      "Empowering bright young minds through our dedicated school scholarship initiative.",
    image: "/education-program.jpg",
  },
  {
    title: "Healthcare and support campaign",
    description:
      "Providing essential healthcare services and support for underserved community members.",
    image: "/health-program-1.jpg",
  },
  {
    title: "Environmental conservation project",
    description:
      "Promoting sustainable practices to protect and conserve our local environment.",
    image: "/environmental-conservation-program.jpg",
  },
  {
    title: "Community development initiative",
    description:
      "Building stronger, more resilient communities through grassroots development and empowerment efforts.",
    image: "/community-development.jpg",
  },
  {
    title: "Community development initiative",
    description:
      "Fostering growth and collaboration within local communities for long-term improvement and success",
    image: "/health-program-2.jpg",
  },
  {
    title: "Education scholarship program",
    description:
      "Empowering bright young minds through our dedicated school scholarship initiative.",
    image: "/education-program.jpg",
  },
  {
    title: "Healthcare and support campaign",
    description:
      "Providing essential healthcare services and support for underserved community members.",
    image: "/health-program-1.jpg",
  },
  {
    title: "Environmental conservation project",
    description:
      "Promoting sustainable practices to protect and conserve our local environment.",
    image: "/environmental-conservation-program.jpg",
  },
  {
    title: "Community development initiative",
    description:
      "Building stronger, more resilient communities through grassroots development and empowerment efforts.",
    image: "/community-development.jpg",
  },
  {
    title: "Community development initiative",
    description:
      "Fostering growth and collaboration within local communities for long-term improvement and success",
    image: "/health-program-2.jpg",
  },
  {
    title: "Education scholarship program",
    description:
      "Empowering bright young minds through our dedicated school scholarship initiative.",
    image: "/education-program.jpg",
  },
  {
    title: "Healthcare and support campaign",
    description:
      "Providing essential healthcare services and support for underserved community members.",
    image: "/health-program-1.jpg",
  },
  {
    title: "Environmental conservation project",
    description:
      "Promoting sustainable practices to protect and conserve our local environment.",
    image: "/environmental-conservation-program.jpg",
  },
  {
    title: "Community development initiative",
    description:
      "Building stronger, more resilient communities through grassroots development and empowerment efforts.",
    image: "/community-development.jpg",
  },
  {
    title: "Community development initiative",
    description:
      "Fostering growth and collaboration within local communities for long-term improvement and success",
    image: "/health-program-2.jpg",
  },
];

const GalleryPage = () => {
  return (
    <>
      <Hero
        before={text.before}
        keyword={text.keyword}
        after={text.after}
        description={text.description}
        buttonText={text.buttonText}
        href={text.href}
      />
      <section className="max-w-[1440px] w-full px-4 md:px-8 lg:px-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
        {images.map(({ image, title, description }) => (
          <div
            className="group relative overflow-hidden rounded-2xl"
            key={image}
          >
            <div className="opacity-0 group-hover:opacity-100 duration-300 transform-gpu transition-opacity absolute flex flex-col gap-y-4 h-full w-full p-8 z-10 bg-dark/50 text-white">
              <h3 className="text-2xl font-bold text-white">{title}</h3>
              <p className="text-white">{description}</p>
            </div>
            <Image
              src={image}
              alt="Water"
              width={500}
              height={500}
              className="h-full w-full group-hover:scale-110 transition-transform duration-300 transform-gpu delay-75 object-cover"
            />
          </div>
        ))}
      </section>
      {/* Contact Us */}
      <section className="w-full max-w-[1440px] grid lg:grid-cols-11 gap-x-14 gap-y-12 place-items-center px-4 md:px-8 xl:px-12 pb-20">
        <div className="lg:col-span-6 flex flex-col gap-y-12">
          <div className="flex flex-col gap-y-4">
            <h2 className="text-3xl lg:text-[48px] leading-tight font-bold max-w-3xl">
              Connect with us, drive change{" "}
              <span className="text-primary">together</span>
            </h2>
            <p className=" max-w-lg text-lg">
              Reach out to learn more about our programs, or to share your ideas
              and support for our mission.
            </p>
          </div>
          <ContactInfo />
        </div>
        <Card className="lg:col-span-5 rounded-2xl py-2 md:p-8 shadow">
          <CardHeader className="gap-y-4">
            <CardTitle className="text-2xl">Let's keep touch</CardTitle>
            <CardDescription className="leading-relaxed text-base">
              Let us know who you are and what you're looking for below and
              we'll get back to you within 24 hours.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </section>
    </>
  );
};

export default GalleryPage;
