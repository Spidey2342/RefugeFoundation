import Image from "next/image";
import Link from "next/link";
import AboutTabs from "~/components/AboutTabs";
import Causes from "~/components/Causes";
import ContactForm from "~/components/ContactForm";
import ContactInfo from "~/components/ContactInfo";
import HeroHeadline from "~/components/HeroHeadline";
import News from "~/components/News";
import Programs from "~/components/Programs";
import Reasons from "~/components/Reasons";
import Testimonials from "~/components/Testimonials";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { genMetadata } from "./shared-metadata";
import { Metadata } from "next";

export const metadata: Metadata = genMetadata({
  title: "Refuge Relief Service | Mentorship, Leadership, and Empowerment",
  description:
    "Refuge Relief Service is committed to empowering youth through leadership programs, job training, and mentorship to help them thrive and impact their communities.",
  keywords:
    "refuge relief service, refuge relief donation, refuge relief services, refugereliefservices, donation, refuge, refuge relief, youth empowerment, leadership training, mentorship programs, job placement services, community support, skills development for youth, youth leadership coaching, economic enhancement, empowering young leaders",
});

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="flex w-full justify-center bg-[#f2f2f2]">
        <div className="max-w-[1440px] w-full grid grid-cols-1 lg:grid-cols-11 gap-8 place-items-center px-4 md:px-8 xl:px-12">
          <div className="lg:col-span-5 flex flex-col gap-y-4 lg:gap-y-6 md:py-8 xl:py-0 w-full">
            <HeroHeadline />
            <p className="leading-relaxed text-lg max-w-lg">
              Refuge Relief Services (RRS) is dedicated to sharing love with all
              people, regardless of their background. We are committed to
              uplifting vulnerable communities, including racial minorities, the
              homeless, refugees, immigrants amongst others
            </p>
            <Button
              variant={"default"}
              className="bg-primary hover:bg-dark rounded-full lg:text-xl lg:h-14 w-fit"
            >
              <Link href="/donation">Make a Donation</Link>
            </Button>
          </div>
          <Image
            src="/hero2.png"
            alt="Logo"
            width={500}
            height={500}
            className="h-auto w-full lg:col-span-6 self-end"
            priority
          />
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-[1440px] w-full flex flex-col justify-center items-center gap-y-8 pb-8 px-4 md:px-8 xl:px-12">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <h2 className="md:text-center text-[30px] md:text-[36px] leading-snug font-bold max-w-3xl">
            Driving <span className="text-primary">Community</span> Progress
            Through Inspired Youth{" "}
            <span className="text-primary">Leadership</span>
          </h2>
          <p className="md:text-center max-w-lg text-lg">
            Find out how we inspire young leaders to drive community growth.
          </p>
        </div>
        <AboutTabs />
      </section>

      {/* Trust Section */}
      <section className="max-w-[1440px] w-full flex flex-col gap-y-14 pb-8 px-4 md:px-8 xl:px-12">
        <div className="flex flex-col gap-y-4 items-center">
          <h2 className="md:text-center text-[30px] md:text-[36px] font-bold max-w-3xl">
            Reasons to trust our{" "}
            <span className="text-primary">commitment</span> and impact
          </h2>
          <p className="md:text-center max-w-lg text-lg">
            Connect with us - your gateway to engaging with our mission and
            contributing to positive change.
          </p>
        </div>
        <Reasons />
      </section>

      {/* Programs Section */}
      <section className="flex justify-center bg-[#f2f2f2] w-full">
        <div className="max-w-[1440px] w-full pt-16 flex flex-col gap-y-14 px-4 md:px-8 xl:px-12">
          <div className="flex flex-col gap-y-4 items-center">
            <h2 className="md:text-center text-[30px] md:text-[36px] font-bold max-w-3xl">
              Empowering communities through{" "}
              <span className="text-primary">sustainable</span> programs
            </h2>
            <p className="md:text-center max-w-lg text-lg">
              Explore our impactful programs promoting education, health access,
              and community development.
            </p>
          </div>
          <Programs />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-[1440px] w-full flex flex-col gap-y-14 px-4 md:px-8 xl:px-12">
        <div className="flex flex-col gap-y-4">
          <h2 className="text-[30px] md:text-[36px] font-bold max-w-3xl">
            Inspiring <span className="text-primary">stories</span> from
            supporters
          </h2>
          <p className=" max-w-lg text-lg">
            Discover heartfelt stories from our supporters, sharing their
            experiences and the impact of our work.
          </p>
          <Button
            variant={"default"}
            className="bg-primary hover:bg-dark w-fit rounded-full h-14"
          >
            <Link href="/supporters">What do you think?</Link>
          </Button>
        </div>
        <Testimonials />
      </section>

      {/* News Section */}
      <section className="flex justify-center bg-[#f2f2f2] py-20 w-full">
        <div className="max-w-[1440px] w-full flex flex-col gap-y-14 px-4 md:px-8 xl:px-12">
          <div className="flex flex-col gap-y-4">
            <h2 className="text-[30px] md:text-[36px] font-bold max-w-3xl">
              Latest <span className="text-primary">news</span> and updates
            </h2>
            <p className=" max-w-lg text-lg">
              Stay connected with our organization's news, and initiatives
              driving a positive change.
            </p>
            <Button
              variant={"default"}
              className="bg-primary hover:bg-dark w-fit rounded-full h-14"
            >
              <Link href="/supporters">Read all stories</Link>
            </Button>
          </div>
          <News />
        </div>
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
}
