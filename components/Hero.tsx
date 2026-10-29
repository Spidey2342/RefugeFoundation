import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

interface Props {
  before: string;
  keyword?: string;
  after?: string;
  description: string;
  buttonText: string;
  href: string;
}

const Hero = ({
  before,
  keyword,
  after,
  description,
  buttonText,
  href,
}: Props) => {
  return (
    <section className="bg-[#f2f2f2] flex w-full justify-center">
      <div className="max-w-[1440px] w-full relative overflow-hidden flex flex-col items-center justify-center gap-y-4 px-4 md:px-8 xl:px-12 py-8 md:py-20">
        <Image
          src={"/shape.svg"}
          alt="Shape"
          height={1000}
          width={1000}
          className="h-28 w-auto absolute top-36 -left-12 hidden md:block"
        />
        <Image
          src={"/shape.svg"}
          alt="Shape"
          height={1000}
          width={1000}
          className="h-28 w-auto absolute top-10 -right-2 hidden md:block"
        />
        <h1 className="text-4xl lg:text-5xl font-bold md:text-center max-w-3xl z-10">
          {before} <span className="text-primary ">{keyword}</span> {after}
        </h1>
        <p className="text-lg max-w-xl md:text-center z-10">{description}</p>
        <Button
          variant={"default"}
          className="bg-primary hover:bg-dark rounded-full w-fit self-start md:self-center"
        >
          <Link href={`/${href}`}>{buttonText}</Link>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
