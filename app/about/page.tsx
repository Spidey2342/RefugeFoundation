import Hero from "~/components/Hero";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { cn } from "~/lib/utils";
import { quicksand } from "../font";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Metadata } from "next";
import { genMetadata } from "../shared-metadata";
import HeroWithImage, { Prop } from "~/components/Hero2";

const tablist = [
  { title: "Our mission", value: "mission" },
  { title: "Our Values", value: "values" },
  { title: "Diversity", value: "diversity" },
];

const tabcontent = [
  {
    value: "mission",
    text: "Refuge Relief Services' mission is to empower socially and economically disadvantaged groups by connecting them with resources that foster social and economic justice and equitable opportunities.",
  },
  {
    value: "values",
    text: "We love everyone and we are committed to practical love and care for everyone. With our honor to diversity, we work with and for everyone, regardless of their background. We seek to train everyone",
  },
  {
    value: "diversity",
    text: "At Refuge Relief, we celebrate diversity and are committed to fostering an inclusive and equitable environment where everyone deserves respect, dignity, and equitable access to opportunities.",
  },
];

const images = [
  "/unicef.png",
  "/greenpeace.png",
  "/medicine.png",
  "/oxfam.png",
  "/health-partners.png",
  "/americanredcross.png",
];

const faqs = [
  {
    id: "item-1",
    question: "What is the main focus of your organization?",
    answer:
      "We focus on empowering youth through mentorship, leadership development, and skills training to drive positive community change.",
  },
  {
    id: "item-2",
    question: "How can I get involved with your organization?",
    answer:
      "You can get involved by volunteering, donating, or participating in our events and programs.",
  },
  {
    id: "item-3",
    question: "What types of programs do you offer for youth?",
    answer:
      "We offer mentorship, leadership coaching, skills training, and economic empowerment programs for young people.",
  },
  {
    id: "item-4",
    question: "How do my donations make an impact?",
    answer:
      "Your donations directly support youth programs, community development projects, and resources for sustainable change.",
  },
  {
    id: "item-5",
    question: "Can I donate items instead of money?",
    answer:
      "Yes, we accept in-kind donations that support our programs, such as school supplies and food for community events.",
  },
  {
    id: "item-6",
    question: "Who can benefit from your programs?",
    answer:
      "Our programs are designed for young people seeking personal development and communities in need of growth and support.",
  },
  {
    id: "item-7",
    question: "How are the youth selected for mentorship programs?",
    answer:
      "We select youth based on their interest, community involvement, and commitment to personal and leadership development.",
  },
  {
    id: "item-8",
    question: "Do you partner with other organizations?",
    answer:
      "Yes, we collaborate with local and international organizations to expand our reach and impact.",
  },
  {
    id: "item-9",
    question: "What events do you organize to support your mission?",
    answer:
      "We host workshops, community outreach programs, leadership seminars, and fundraising events to further our goals.",
  },
  {
    id: "item-10",
    question: "How can I stay updated on your activities and impact?",
    answer:
      "You can subscribe to our newsletter, follow us on social media, or check our website for regular updates.",
  },
];

const team = [
  {
    name: "Daniel Borti",
    title: "President",
    image: "/team1.jpg",
  },
  {
    name: "Dr. Adeline Borti",
    title: "Secretary",
    image: "/team2.jpg",
  },
  {
    name: "Joseph Amartey",
    title: "Project Coordinator",
    image: "/team3.jpg",
  },
  {
    name: "Flore Winkels",
    title: "Tresurer",
    image: "/team4.jpg",
  },
];

export const metadata: Metadata = genMetadata({
  title:
    "Building Stronger Communities with Youth Leadership | Refuge Relief Service",
  description:
    "Refuge Relief Service is committed to empowering youth through leadership programs, job training, and mentorship to help them thrive and impact their communities.",
  keywords:
    "refuge relief service, refuge, refuge relief services, refugereliefservices, donation, refuge relief, youth empowerment, leadership training, mentorship programs, job placement services, community support, skills development for youth, youth leadership coaching, economic enhancement, empowering young leaders",
});

const AboutPage = () => {
  const text: Prop = {
    before: "Our",
    keyword: "story",
    after: "of empowerment",
    description:
      "We empower youth through leadership and mentorship to create positive change in their communities.",
    buttonText: "Join us today",
    link: "get-involved",
    image: "abouthero",
  };
  return (
    <>
      <HeroWithImage Prop={text} />

      <section
        id="mission"
        className="max-w-[1440px] w-full flex flex-col gap-y-8 lg:gap-y-12 px-4 md:px-8 xl:px-12 pb-12"
      >
        <div className="grid lg:grid-cols-2 place-items-center gap-8">
          <h2 className="text-3xl md:text-[48px] leading-tight font-bold">
            Discover our <span className="text-primary">mission</span> driven
            approach
          </h2>
          <Tabs defaultValue="mission" className="w-full flex flex-col gap-y-4">
            <TabsList className="flex flex-col lg:grid grid-cols-3 h-fit p-0 rounded-2xl overflow-hidden">
              {tablist.map(({ title, value }) => (
                <TabsTrigger
                  key={value}
                  value={value}
                  className={cn(
                    "data-[state=active]:bg-primary data-[state=active]:text-white rounded-none text-dark hover:text-primary",
                    "group flex w-full"
                  )}
                >
                  <p
                    className={cn("text-xl font-bold p-3", quicksand.className)}
                  >
                    {title}
                  </p>
                </TabsTrigger>
              ))}
            </TabsList>
            {tabcontent.map(({ text, value }) => {
              return (
                <TabsContent key={value} value={value} className="text-lg">
                  {text}
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
        <div id="partners" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image) => (
            <div
              key={image}
              className="flex items-center justify-center bg-[#f2f2f2] rounded-2xl px-4 py-8 border shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 transform-gpu delay-75"
            >
              <Image
                src={image}
                alt="Water"
                width={1000}
                height={1000}
                quality={100}
                className="h-10 w-auto"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-[1440px] w-full relative flex flex-col items-center justify-center gap-y-8 px-4 md:px-8 xl:px-12 py-8 md:pb-12">
        <div className="flex flex-col gap-y-4">
          <h1 className="text-4xl lg:text-5xl md:text-center font-bold max-w-3xl z-10">
            The <span className="text-primary ">team</span> behind our services
          </h1>
          <p className="text-lg max-w-xl md:text-center z-10">
            Meet our dedicated team members who work tirelessly to fulfil our
            mission and make a positive
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map(({ name, title, image }) => (
            <div
              key={name}
              className="relative group rounded-lg overflow-hidden h-96"
            >
              <div className="absolute h-full w-full z-10 bg-gradient-to-t via-zinc-50/0 from-zinc-950 to-zinc-50/0"></div>
              <Image
                alt="CEO"
                src={image}
                height={1000}
                width={1000}
                quality={100}
                className={cn(
                  "  delay-75 duration-300 ease-in-out transform-gpu",
                  "h-full w-full object-cover lg:grayscale group-hover:grayscale-0 group-hover:scale-110"
                )}
              />
              <div className="z-10 text-white absolute bottom-0 w-full p-4">
                <h3 className="text-white font-bold">{name}</h3>
                <h3 className="text-white font-bold">{title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="flex justify-center bg-[#f2f2f2] w-full">
        <div className="max-w-[1440px] w-full flex flex-col gap-x-14 gap-y-8 px-4 md:px-8 xl:px-12 py-20">
          <div className="flex flex-col gap-y-4">
            <h2 className="max-w-3xl text-3xl md:text-[36px] leading-tight font-bold">
              Common <span className="text-primary">questions</span> about our
              mission and how you can{" "}
              <span className="text-primary">get involved</span>
            </h2>
            <p className="max-w-3xl text-lg">
              Find answers to common questions about our programs, how to get
              involved, and the ways we empower youth to create lasting change
              in their communities. Explore how you can support our mission and
              make a difference.
            </p>
          </div>
          <Accordion
            type="single"
            collapsible
            className="w-full flex flex-col gap-y-8"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={faq.question}
                className="border border-dark/30 rounded-2xl px-4 py-2 bg-white flex flex-col w-full"
              >
                <AccordionTrigger className="text-dark text-xl font-bold hover:no-underline text-start gap-x-4">
                  {index + 1}. {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
