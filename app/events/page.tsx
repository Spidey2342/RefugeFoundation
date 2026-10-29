import Hero from "~/components/Hero";
import { genMetadata } from "../shared-metadata";
import { Metadata } from "next";
import { defineQuery } from "next-sanity";
import { client } from "~/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image from "next/image";
import { Button } from "~/components/ui/button";
import Link from "next/link";
import { Badge } from "~/components/ui/badge";
import { cn } from "~/lib/utils";
import HeroWithImage, { Prop } from "~/components/Hero2";

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 60 } };
const EVENTS_QUERY = defineQuery(`*[
  _type == "event"
  && defined(slug.current)
]{_id, title, slug, date, image, eventType}|order(date asc)`);

export const metadata: Metadata = genMetadata({
  title: "Upcoming & Past Events | Refuge Relief Service",
  description:
    "Learn about the causes Refuge Relief Service champions, from youth empowerment to leadership training, and discover how you can contribute to making a difference.",
  keywords:
    "refuge relief service, refuge relief services, refuge relief donation, donation, refuge, refuge relief, refuge relief events, youth empowerment, leadership training, mentorship programs, job placement services, community support, skills development for youth, youth leadership coaching, economic enhancement, empowering young leaders",
});

const EventsPage = async () => {
  const events = await client.fetch(EVENTS_QUERY, {}, options);

  const text: Prop = {
    before: "Connect, learn, and",
    keyword: "grow",
    after: "at our events",
    description:
      "Join us for inspiring events that empower youth and strengthen communities. Connect, learn, and be part of the change!",
    buttonText: "Learn more",
    link: "events",
    image: "eventshero",
  };
  return (
    <>
      <HeroWithImage Prop={text} />

      <section className="max-w-[1440px] w-full grid md:grid-cols-2 lg:grid-cols-4 gap-8 pb-24 px-4 md:px-8 xl:px-12">
        {events.map(({ _id, title, slug, date, image, eventType }: any) => {
          const d = new Date(date);
          const isEventPassed = d < new Date();
          const dates = isEventPassed ? "Past Event" : d.toLocaleDateString();

          const src = image
            ? urlFor(image)?.width(1000).height(620).url()
            : null;
          return (
            <div
              key={_id}
              className="flex flex-col gap-8 border pb-4 overflow-hidden rounded-xl"
            >
              <Image
                src={src || "https://via.placeholder.com/550x310"}
                alt={title || "Event"}
                height={1000}
                width={1000}
                quality={100}
                className="object-cover w-auto min-h-[210px]"
              />
              <div className="flex flex-col gap-y-2 px-4">
                <Badge
                  className={cn(
                    eventType === "virtual"
                      ? "bg-dark/10 hover:bg-dark/10 text-dark"
                      : "bg-primary/10 hover:bg-primary/10 text-primary",
                    "w-fit cursor-pointer"
                  )}
                >
                  {eventType === "virtual" ? "Virtual" : "In Person"}
                </Badge>
                <h2 className="text-xl font-bold">{title}</h2>
                <p>{dates}</p>
                <Button
                  variant={"default"}
                  className="bg-primary hover:bg-dark rounded-full w-fit justify-self-end-end"
                >
                  <Link href={`/events/${slug.current}`}>Learn more</Link>
                </Button>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default EventsPage;
