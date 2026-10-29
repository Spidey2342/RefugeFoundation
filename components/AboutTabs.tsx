import { cn } from "~/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { TbTargetArrow } from "react-icons/tb";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { LiaClipboardListSolid } from "react-icons/lia";
import { SlPeople } from "react-icons/sl";
import { GiReceiveMoney } from "react-icons/gi";
import { quicksand } from "~/app/font";

const tablist = [
  {
    title: "Our mission",
    description: "About us & history",
    value: "mission",
    icon: TbTargetArrow,
  },
  {
    title: "Our programs",
    description: "Make a change",
    value: "programs",
    icon: LiaClipboardListSolid,
  },
  {
    title: "Our partners",
    description: "Long-time partners",
    value: "partners",
    icon: SlPeople,
  },
  {
    title: "Donate Now",
    description: "Support a life",
    value: "donate",
    icon: GiReceiveMoney,
  },
];

const tabcontent = [
  {
    headline: "Empowering lives through compassionate support",
    description:
      "At Refuge Relief Services, our mission is to empower individuals and families through comprehensive services, fostering resilience, dignity, and positive community impact for a brighter future.",
    image: "/mission.jpg",
    value: "mission",
    href: "/about#mission",
  },
  {
    headline: "Offering diverse programs focused on community development",
    description:
      "We support the underprivileged through leadership, mentorship, and career counseling, building sustainable systems that empower individuals to overcome challenges and create resilient futures.",
    image: "/program.jpg",
    value: "programs",
    href: "/programs",
  },
  {
    headline: "Collaborating with like-minded organizations",
    description:
      "Collaborating with like-minded organizations, businesses, and individuals to maximize resources and extend our reach for greater impact.",
    image: "/partners.jpg",
    value: "partners",
    href: "/about#partners",
  },
  {
    headline: "Every contribution directly supports our causes",
    description:
      "Our mission is to inspire and empower the everyone to unlock their full potential and create lasting growth for a brighter, resilient, and sustainable future.",
    image: "/donate.jpg",
    value: "donate",
    href: "/donation",
  },
];

const AboutTabs = () => {
  return (
    <Tabs defaultValue="mission" className="w-full flex flex-col gap-y-4">
      <TabsList className="flex flex-col lg:grid grid-cols-4 h-fit p-0 rounded-2xl overflow-hidden">
        {tablist.map(({ title, description, value, icon: Icon }) => (
          <TabsTrigger
            key={value}
            value={value}
            className={cn(
              "data-[state=active]:bg-primary data-[state=active]:text-white rounded-none text-dark hover:text-primary",
              "flex gap-x-4 justify-start items-center py-4 w-full group"
            )}
          >
            <Icon size={40} />
            <div className="group flex flex-col text-start">
              <p className={cn("text-xl font-bold", quicksand.className)}>
                {title}
              </p>
              <p className="font-normal">{description}</p>
            </div>
          </TabsTrigger>
        ))}
      </TabsList>
      {tabcontent.map(({ headline, description, image, value, href }) => {
        return (
          <TabsContent key={value} value={value}>
            <div className="grid lg:grid-cols-2 gap-8 lg:place-items-center bg-[#f2f2f2] py-8 px-4 md:px-8 lg:px-12 rounded-2xl">
              <div className="flex flex-col gap-y-4 max-w-lg">
                <h3 className="text-[30px] leading-snug font-bold">
                  {headline}
                </h3>
                <p className="leading-loose max-w-md">{description}</p>
                <Button
                  variant={"default"}
                  className="bg-primary hover:bg-dark rounded-full w-fit"
                >
                  <Link href={href}>Learn More</Link>
                </Button>
              </div>
              <Image
                src={image}
                alt="Logo"
                width={500}
                height={500}
                className="h-auto w-full rounded-2xl"
              />
            </div>
          </TabsContent>
        );
      })}
    </Tabs>
  );
};

export default AboutTabs;
