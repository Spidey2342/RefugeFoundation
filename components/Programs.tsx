import { GiMedicines, GiSpellBook } from "react-icons/gi";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import Link from "next/link";
import { Button } from "./ui/button";
import { BsGlobeEuropeAfrica } from "react-icons/bs";
import { cn } from "~/lib/utils";
import Image from "next/image";

const programs = [
  {
    title: "Youth Empowerment",
    description:
      "We equip underprivileged youth with the tools they need to succeed by offering personalized coaching, mentorship, and career counseling to help them find relevant career pathways.",
    icon: GiSpellBook,
    href: "/programs",
  },
  {
    title: "Family Empowerment",
    description:
      "Our family empowerment program is designed to support low-income families by connecting them with essential resources, starting with access to nutritious food and healthcare.",
    icon: GiMedicines,
    href: "/programs",
  },
  {
    title: "Community Literacy",
    description:
      "We seek to offer English Language learning opportunities to immigrants/refugees in West Michigan and provide after-school reading programs for elementary schoolers.",
    icon: BsGlobeEuropeAfrica,
    href: "/programs",
  },
];

const programs2 = [
  {
    title: "Education scholarship program",
    href: "/gallery",
    image: "/education-program.jpg",
  },
  {
    title: "Healthcare and support campaign",
    href: "/gallery",
    image: "/health-program-1.jpg",
  },
  {
    title: "Environmental conservation project",
    href: "/gallery-project",
    image: "/environmental-conservation-program.jpg",
  },
  {
    title: "Community development initiative",
    href: "/gallery-development",
    image: "/community-development.jpg",
  },
  {
    title: "Community development initiative",
    href: "/gallery",
    image: "/health-program-2.jpg",
  },
];

const Programs = () => {
  return (
    <>
      <div className="grid md:grid-cols-3 gap-8">
        {programs.map(({ title, description, icon: Icon, href }) => (
          <Card
            className="flex flex-col  rounded-2xl text-center lg:px-6 hover:shadow-2xl hover:-translate-y-[10px] transition-all duration-200 transform-gpu delay-75"
            key={title}
          >
            <CardHeader>
              <Icon size={60} color="#d14343" />
            </CardHeader>
            <CardContent className="flex flex-col gap-y-4 text-start">
              <h4 className="text-2xl md:text-xl lg:text-2xl font-bold">
                {title}
              </h4>
              <p className="text-[16px] md:text-[14px] leading-relaxed lg:text-[16px]">
                {description}
              </p>
            </CardContent>
            <CardFooter>
              <Button
                variant={"outline"}
                className="text-primary hover:bg-transparent rounded-full"
              >
                <Link href={href}>Read more</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div
        className={cn(
          "-mx-4 md:-mx-8 xl:-mx-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 bg-dark"
        )}
      >
        {programs2.map(({ href, image, title }) => (
          <div className="group relative overflow-hidden" key={image}>
            <div className="lg:opacity-0 lg:group-hover:opacity-100 duration-300 transform-gpu transition-opacity absolute flex flex-col justify-between h-full w-full p-8 z-10 bg-dark/50 text-white">
              <h3 className="text-2xl font-bold text-white">{title}</h3>
              <Button
                variant={"default"}
                className="bg-primary hover:bg-dark w-fit"
              >
                <Link href={href}>Read more</Link>
              </Button>
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
      </div>
    </>
  );
};

export default Programs;
