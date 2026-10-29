import Image from "next/image";
import Link from "next/link";
import ContactForm from "~/components/ContactForm";
import HeroWithImage, { Prop } from "~/components/Hero2";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

const ProgramsPage = () => {
  const text: Prop = {
    before: "Explore our",
    keyword: "diverse",
    after: "programs",
    description:
      "We take a holistic approach to supporting the underprivileged by offering leadership development, coaching, mentorship, and career counseling.",
    buttonText: "Join us today",
    link: "get-involved",
    image: "heros",
  };
  return (
    <>
      <HeroWithImage Prop={text} />
      {/* Youth Empowerment */}
      <section className="max-w-[1440px] w-full grid lg:grid-cols-2 gap-8 lg:gap-12 px-4 md:px-8 xl:px-12 pb-12">
        <Image
          alt="Youth Empowerment"
          src={"/education.jpg"}
          height={1000}
          width={1000}
          quality={100}
          className="h-auto w-auto rounded-2xl"
        />
        <div className="flex flex-col gap-y-5">
          <h2 className="font-bold text-4xl">Youth Empowerment</h2>
          <p className="text-[16px] leading-loose">
            We equip underprivileged youth with the tools they need to succeed
            by offering personalized coaching, mentorship, and career counseling
            to help them find relevant career pathways. Beyond professional
            support, we guide them in developing value systems, fostering
            lifelong relationships, and navigating life’s challenges.
          </p>
          <p className="lg:hidden xl:block text-[16px] leading-loose">
            We also connect them to vital social and economic resources,
            ensuring they have the support necessary to achieve long-term
            stability, personal growth, and purpose-driven lives.
          </p>
          <Button
            variant={"default"}
            className="bg-primary hover:bg-dark rounded-full w-fit"
          >
            <Link href="/get-involved">Get Involved</Link>
          </Button>
        </div>
      </section>
      {/* Family Empowerment */}
      <section className="max-w-[1440px] w-full grid lg:grid-cols-2 gap-8 lg:gap-12 px-4 md:px-8 xl:px-12 pb-12">
        <Image
          alt="Familty Empowerment"
          src={"/mission.jpg"}
          height={1000}
          width={1000}
          quality={100}
          className="h-auto w-auto rounded-2xl order-1"
        />
        <div className="flex flex-col gap-y-5">
          <h2 className="font-bold text-4xl">Family Empowerment</h2>
          <p className="text-[16px] leading-loose">
            Our family empowerment program is designed to support low-income
            families by connecting them with essential resources, starting with
            access to nutritious food and health services. We believe that
            shared meals foster community, and engagement, thereby creating a
            warm space for families to come together, share fellowship.
          </p>
          <p className="lg:hidden xl:block text-[16px] leading-loose">
            We offer economic empowerment opportunities, including job placement
            and skills training, to help families build stable livelihoods
            ensuring they can live with dignity and hope for a brighter future.
          </p>
          <Button
            variant={"default"}
            className="bg-primary hover:bg-dark rounded-full w-fit"
          >
            <Link href="/donation">Donate Now</Link>
          </Button>
        </div>
      </section>
      {/* Financial Empowerment */}
      <section className="max-w-[1440px] w-full grid lg:grid-cols-2 gap-8 lg:gap-12 px-4 md:px-8 xl:px-12 pb-12">
        <Image
          alt="Familty Empowerment"
          src={"/program.jpg"}
          height={1000}
          width={1000}
          quality={100}
          className="h-auto w-auto rounded-2xl"
        />
        <div className="flex flex-col gap-y-5">
          <h2 className="font-bold text-4xl">Financial Literacy</h2>
          <p className="text-[16px] leading-loose">
            Our financial literacy program equips low-income people with the
            knowledge and skills they need to achieve economic independence. We
            offer practical education in key areas such as debt reduction and
            elimination, smart saving strategies, and pathways to homeownership.
          </p>
          <p className="lg:hidden xl:block text-[16px] leading-loose">
            Through workshops, one-on-one coaching, and hands-on activities, we
            help this group understand budgeting, manage credit, and engage in
            long-term financial planning. We aim to empower people to make
            informed financial decisions, build wealth, and secure a stable
            financial future.
          </p>
          <Button
            variant={"default"}
            className="bg-primary hover:bg-dark rounded-full w-fit"
          >
            <Link href="/get-involved">Get Involved</Link>
          </Button>
        </div>
      </section>
      {/* Community Literacy */}
      <section className="max-w-[1440px] w-full grid lg:grid-cols-2 gap-8 lg:gap-12 px-4 md:px-8 xl:px-12 pb-20">
        <Image
          alt="Community Literacy"
          src={"/diverse.jpg"}
          height={1000}
          width={1000}
          quality={100}
          className="h-auto w-auto rounded-2xl order-1"
        />
        <div className="flex flex-col gap-y-5">
          <h2 className="font-bold text-4xl">Community Literacy</h2>
          <p className="text-[16px] leading-loose">
            We seek to offer English Language learning opportunities to
            immigrants/refugees in West Michigan and provide after-school
            reading programs for elementary schoolers to improve reading and
            writing skills. Our literacy programs foster the development of
            language and reading skills.
          </p>
          <p className="block text-[16px] leading-loose">
            Our literacy initiative extends to empowering educators in urban and
            rural communities through comprehensive teacher mentoring and
            development programs that equip teachers to support all students
            from all worlds of life.
          </p>
          <Button
            variant={"default"}
            className="bg-primary hover:bg-dark rounded-full w-fit"
          >
            <Link href="/get-involved">Get Involved</Link>
          </Button>
        </div>
        <div className="col-span-full pt-12 flex justify-center items-center order-2">
          <Card className="lg:col-span-5 rounded-2xl py-2 md:p-8 shadow max-w-[512px]">
            <CardHeader className="gap-y-4">
              <CardTitle className="text-2xl font-bold">
                Let's keep touch
              </CardTitle>
              <CardDescription className="leading-relaxed text-base">
                Let us know who you are and what you're looking for below and
                we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};

export default ProgramsPage;
