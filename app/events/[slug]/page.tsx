import { defineQuery, PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "~/sanity/client";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Badge } from "~/components/ui/badge";
import Details from "./Details";

const options = { next: { revalidate: 60 } };

//Database Request
const EVENT_QUERY = defineQuery(`*[
    _type == "event" &&
    slug.current == $slug
  ][0]{
  ...,
  "date": coalesce(date, now()), description, location, googleMapLink, meetingLink,
}`);

//Image Url generation
const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export default async function EventPage({
  params,
}: {
  params: { slug: string };
}) {
  const event = await client.fetch(EVENT_QUERY, params, options);
  if (!event) {
    notFound();
  }
  const {
    title,
    date,
    description,
    location,
    image,
    googleMapLink,
    meetingLink,
    eventType,
  } = event;
  const eventImageUrl = image
    ? urlFor(image)?.width(550).height(310).url()
    : null;

  //Date
  const d = new Date(date);
  const isEventPassed = d < new Date();
  const time = isEventPassed ? "Past Event" : d.toLocaleTimeString();
  const dates = isEventPassed ? "Past Event" : d.toLocaleDateString();

  //Details
  const details = [
    {
      title: "Description",
      details: description,
    },
    {
      title: "Date",
      details: dates,
    },
    {
      title: "Time",
      details: time,
    },
  ];
  return (
    <>
      <section className="max-w-[1440px] w-full flex flex-col gap-8 pt-12 pb-24 px-4 md:px-8 xl:px-12">
        <div className="grid lg:grid-cols-2 gap-8">
          <Image
            src={eventImageUrl || "https://via.placeholder.com/550x310"}
            alt={title || "Event"}
            height={1000}
            width={1000}
            quality={100}
            className="object-cover w-full lg:w-auto min-h-[320px] rounded-xl"
          />
          <div className="flex flex-col gap-4">
            <Badge className="bg-primary/10 hover:bg-primary/10 text-primary w-fit cursor-pointer">
              {eventType === "virtual" ? "Virtual" : "In Person"}
            </Badge>
            <h2 className="text-4xl font-bold">{title}</h2>
            {details.map(({ details, title }) => (
              <Details key={details} title={title} details={details} />
            ))}
            {eventType !== "virtual" && (
              <div className="grid md:grid-cols-2 gap-2 md:gap-4">
                <h2 className="text-xl font-bold">Location</h2>
                <p>{location}</p>
              </div>
            )}
            {eventType === "virtual" && (
              <div className="grid sm:grid-cols-2 gap-2 sm:gap-4">
                <h2 className="text-xl font-bold">Meeting Link</h2>
                <p>{meetingLink}</p>
              </div>
            )}
          </div>
          {eventType !== "virtual" && (
            <iframe
              src={googleMapLink}
              width="600"
              height="450"
              loading="lazy"
              className="w-full h-80 md:h-96 lg:h-[420px] rounded-2xl col-span-full"
            />
          )}
        </div>
      </section>
    </>
  );
}
