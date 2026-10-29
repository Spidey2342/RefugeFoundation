import Hero from "~/components/Hero";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import VolunteerForm from "./VolunteerForm";

const GetInvolvedPage = () => {
  const text = {
    before: "Make an",
    keyword: "impact",
    after: "with your support",
    description:
      "Help us provide leadership, mentorship, and skills training to young leaders through volunteering.",
    buttonText: "Join us now",
    href: "get-involved#form",
  };
  return (
    <>
      <Hero
        before={text.before}
        keyword={text.keyword}
        after={text.after}
        description={text.description}
        buttonText={text.buttonText}
        href={text.href}
      />
      <section
        id="form"
        className="max-w-[1440px] w-full flex items-center justify-center gap-y-8 lg:gap-y-12 px-4 md:px-8 xl:px-12 pb-12"
      >
        <Card className="lg:col-span-5 rounded-2xl py-2 md:p-8 shadow max-w-[512px]">
          <CardHeader className="gap-y-4">
            <CardTitle className="text-2xl font-bold">
              Get involved now
            </CardTitle>
            <CardDescription className="leading-relaxed text-base">
              Let us know how you can help us bring dreams of those who need
              help a reality.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <VolunteerForm />
          </CardContent>
        </Card>
      </section>
    </>
  );
};

export default GetInvolvedPage;
