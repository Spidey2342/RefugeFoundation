import { CalendarDays, MessageCircleIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const news = [
  {
    title: "The role of education in breaking the poverty cycle",
    description:
      "Community development empowers local people to take charge of their own initiatives.",
    date: "August 21, 2024",
    comments: "3",
    link: "/news/poverty",
    image: "/water.jpg",
  },
  {
    title: "Volunteering abroad and making a difference",
    description:
      "Working together toward common goals strengthens bonds among community members.",
    date: "August 21, 2024",
    comments: "3",
    link: "/news/volunteer",
    image: "/water.jpg",
  },
  {
    title: "Transforming communities through sustainable projects",
    description:
      "Socially cohesive communities are better equipped to overcome obstacles and adapt.",
    date: "August 21, 2024",
    comments: "3",
    link: "/news/transforming",
    image: "/water.jpg",
  },
];

const News = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8 md:gap-4 lg:gap-8">
      {news.map(({ comments, date, description, image, link, title }) => (
        <div
          key={link}
          className="group flex flex-col gap-y-8 pb-8 rounded-2xl overflow-hidden bg-white shadow-sm border hover:shadow-2xl transform-gpu transition-all duration-300 delay-75"
        >
          <div className="h-52 lg:h-64 overflow-hidden">
            <Image
              alt="Water"
              src={image}
              height={1000}
              width={1000}
              className="w-full h-full object-cover group-hover:scale-105 transform-gpu transition-transform duration-300 delay-75"
            />
          </div>
          <div className=" flex flex-col gap-y-4 px-4 lg:px-8 bg-white">
            <h4 className="hover:text-primary text-xl font-bold">
              <Link href={link}>{title}</Link>
            </h4>
            <div className="text-sm flex items-center gap-x-2 gap-y-4 flex-wrap text-dark">
              <div className="flex items-center gap-x-1">
                <CalendarDays size={18} />
                <span>{date}</span>
              </div>
              <div className="flex items-center gap-x-1">
                <MessageCircleIcon size={18} />
                <span>{comments}</span>
              </div>
            </div>
            <p>{description}</p>
            <Button
              variant={"default"}
              className="bg-primary hover:bg-dark rounded-full w-fit"
            >
              <Link href={description}>Read more</Link>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default News;
