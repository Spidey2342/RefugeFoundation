import { Metadata } from "next";
import Link from "next/link";
import { BsGlobeEuropeAfrica } from "react-icons/bs";
import { GiPayMoney } from "react-icons/gi";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import ContactForm from "~/components/ContactForm";
import ContactInfo from "~/components/ContactInfo";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { genMetadata } from "../shared-metadata";

const programs = [
  {
    title: "Fundraising",
    description:
      "There are loads of ways to raise funds. To see how to raise funds, check out our get involved page.",
    icon: GiPayMoney,
    href: "/get-involved",
    buttonText: "Learn more",
  },
  {
    title: "Feedback",
    description:
      "If you'd like to share some positive feedback, that's great! We have a form for you can fill out.",
    icon: HiOutlineClipboardDocumentList,
    href: "/contact",
    buttonText: "Send feedback",
  },
  {
    title: "Press enquiries",
    description:
      "Contact our media relations team for press releases, interviews, or any media-related queries.",
    icon: BsGlobeEuropeAfrica,
    href: "/contact",
    buttonText: "Contact media",
  },
];

export const metadata: Metadata = genMetadata({
  title: "Get in Touch | Refuge Relief Service",
  description:
    "Contact Refuge Relief Service for inquiries, support, or to learn more about our youth empowerment programs and community initiatives.",
  keywords:
    "refuge relief service, refuge relief services, refugereliefservices, refuge relief services contact, refugereliefservices contact, donation, refuge, refuge relief, refuge relief contact, youth empowerment, leadership training, mentorship programs, job placement services, community support, skills development for youth, youth leadership coaching, economic enhancement, empowering young leaders",
});

const ContactPage = () => {
  return (
    <>
      <section className="flex justify-center bg-[#f2f2f2] w-full">
        <div className="max-w-[1440px] w-full grid lg:grid-cols-11 gap-x-14 gap-y-12 place-items-center py-8 md:py-12 px-4 md:px-8 xl:px-12">
          <div className="lg:col-span-6 flex flex-col gap-y-12">
            <div className="flex flex-col gap-y-4">
              <h2 className="text-3xl lg:text-[48px] leading-tight font-bold max-w-3xl text-center lg:text-start">
                Connect with us, drive change{" "}
                <span className="text-primary">together</span>
              </h2>
              <p className=" max-w-lg text-lg text-center lg:text-start">
                Reach out to learn more about our programs, or to share your
                ideas and support for our mission.
              </p>
            </div>
            <ContactInfo />
          </div>
          <Card className="lg:col-span-5 rounded-2xl py-2 md:p-8">
            <CardHeader className="gap-y-4">
              <CardTitle className="text-2xl">Have questions?</CardTitle>
              <CardDescription className="leading-relaxed text-base">
                Have a question? We'd love to hear from you. Please fill out the
                form below and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="max-w-[1440px] w-full flex flex-col gap-y-8 lg:gap-y-12  px-4 md:px-8 xl:px-12 pb-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5835.626857225466!2d-85.655574!3d43.003263!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8819ac6fa7ff807d%3A0xdf349f12ad96e42f!2sSecond%20Congregational%20Church%20in%20Grand%20Rapids%2C%20Michigan!5e0!3m2!1sen!2sus!4v1729155484803!5m2!1sen!2sus"
          width="600"
          height="450"
          loading="lazy"
          className="w-full h-72 md:h-96 lg:h-[420px] rounded-2xl"
        />
      </section>
      <section className="max-w-[1440px] w-full flex flex-col gap-y-8 lg:gap-y-12  px-4 md:px-8 xl:px-12 pb-12">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">
              Connecting people
            </h2>
            <p className="max-w-xl leading-relaxed">
              We understand that sometime you need a helping hand. Find the
              assistance you need below.
            </p>
          </div>
          <p className="max-w-lg text-lg leading-relaxed">
            Whether you're an individual, a small team, or a large organization,
            we have a plan that aligns perfectly with your goals. Join companies
            who trust our expertise.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map(
            ({ title, description, icon: Icon, href, buttonText }) => (
              <Card
                className="flex flex-col rounded-2xl  lg:px-6 hover:shadow-2xl hover:-translate-y-[10px] transition-all duration-200 transform-gpu delay-75"
                key={title}
              >
                <CardHeader>
                  <Icon size={60} color="#d14343" />
                </CardHeader>
                <CardContent className="flex flex-col gap-y-4">
                  <h4 className="text-2xl md:text-xl lg:text-2xl font-bold">
                    {title}
                  </h4>
                  <p className="text-text text-base md:text-sm lg:text-base">
                    {description}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    variant={"outline"}
                    className="text-primary hover:bg-transparent rounded-full"
                  >
                    <Link href={href}>{buttonText}</Link>
                  </Button>
                </CardFooter>
              </Card>
            )
          )}
        </div>
      </section>
    </>
  );
};

export default ContactPage;
