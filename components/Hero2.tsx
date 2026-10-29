import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import HeroHeadline from "./HeroHeadline";

interface HeroWithImageProps {
  Prop: Prop;
}

export type Prop = {
  description: string;
  buttonText: string;
  link: string;
  image: string;
  before: string;
  keyword: string;
  after: string;
};

const HeroWithImage = ({ Prop }: HeroWithImageProps) => {
  return (
    <section className="flex w-full justify-center bg-[#f2f2f2]">
      <div className="max-w-[1440px] w-full grid grid-cols-1 lg:grid-cols-11 gap-8 place-items-center px-4 md:px-8 xl:px-12">
        <div className="lg:col-span-5 flex flex-col gap-y-4 lg:gap-y-6 md:py-8 xl:py-0 w-full">
          <h1 className="text-4xl lg:text-5xl font-bold max-w-3xl z-10">
            {Prop.before} <span className="text-primary ">{Prop.keyword}</span>{" "}
            {Prop.after}
          </h1>
          <p className="leading-relaxed text-lg max-w-lg">{Prop.description}</p>
          <Button
            variant={"default"}
            className="bg-primary hover:bg-dark rounded-full lg:text-xl lg:h-14 w-fit"
          >
            <Link href={`/${Prop.link}`}>{Prop.buttonText}</Link>
          </Button>
        </div>
        <Image
          src={`/${Prop.image}.png`}
          alt="Logo"
          width={500}
          height={500}
          className="h-auto lg:max-h-[460px] w-full lg:col-span-6 self-end object-contain"
          priority
        />
      </div>
    </section>
  );
};

export default HeroWithImage;
