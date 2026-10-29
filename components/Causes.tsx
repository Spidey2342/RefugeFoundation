import Image from "next/image";
import Link from "next/link";
import { Progress } from "./ui/progress";
import { quicksand } from "~/app/font";
import { cn } from "~/lib/utils";
import { client } from "~/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

//Project Configuration
const { projectId, dataset } = client.config();

//Image Url generation
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export type cause = {
  _id: string;
  title: string;
  amountNeeded: number;
  amountAtHand: number;
  description: string;
  image: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  slug: { current: string };
  donationsMade: number;
};

interface Props {
  donations: cause[];
}

const Causes = async ({ donations }: Props) => {
  console.log(donations);

  return (
    <div className="grid md:grid-cols-3 gap-8 md:gap-4 lg:gap-8">
      {donations.map(
        ({
          title,
          description,
          _id,
          amountAtHand,
          amountNeeded,
          image,
          slug,
          donationsMade,
        }: cause) => {
          //Progress
          const progress = amountNeeded * 100;

          //Image Src
          const src = image
            ? urlFor(image)?.width(1000).height(620).url()
            : null;
          return (
            <Link
              key={_id}
              href={`donation/${slug.current}`}
              className="group flex flex-col gap-y-8 pb-8 rounded-2xl overflow-hidden bg-white shadow-sm border hover:shadow-2xl transform-gpu transition-all duration-300 delay-75"
            >
              <Image
                src={src || "https://via.placeholder.com/550x310"}
                alt={title}
                width={500}
                height={500}
                className="lg:h-64 h-52 w-auto object-cover"
              />
              <div className="group flex flex-col gap-y-4 px-4 lg:px-6">
                <h4 className="group-hover:text-primary text-2xl font-bold">
                  {title}
                </h4>
                <p>{description}</p>
              </div>
              <div className="flex flex-col gap-y-4 px-4 md:px-4 lg:px-6">
                <Progress value={progress} />
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span
                      className={cn(
                        "text-dark font-medium text-xl",
                        quicksand.className
                      )}
                    >
                      {amountAtHand.toLocaleString("en-US", {
                        currency: "USD",
                        style: "currency",
                      })}
                    </span>
                    <span className="text-sm">
                      of{" "}
                      {amountNeeded.toLocaleString("en-US", {
                        currency: "USD",
                        style: "currency",
                      })}
                    </span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span
                      className={cn(
                        "text-dark font-medium text-xl",
                        quicksand.className
                      )}
                    >
                      {donationsMade}
                    </span>
                    <span className="text-sm">donations</span>
                  </div>
                </div>
              </div>
            </Link>
          );
        }
      )}
    </div>
  );
};

export default Causes;
