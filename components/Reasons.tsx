import Image from "next/image";
import { BsGlobeAsiaAustralia } from "react-icons/bs";
import { GiCompass } from "react-icons/gi";
import { SlPeople } from "react-icons/sl";

const Reasons = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-8 xl:gap-16">
      <div className="flex flex-col md:flex-row lg:flex-col gap-y-16 gap-x-8 lg:justify-center">
        <div className="group flex flex-col lg:flex-row gap-x-8 gap-y-4">
          <BsGlobeAsiaAustralia
            size={60}
            className="text-primary group-hover:text-dark transition-colors duration-300 transform-gpu"
          />
          <div className="flex flex-col gap-y-4 w-full">
            <h4 className="text-xl md:text-base lg:text-xl font-bold">
              Community engagement
            </h4>
            <p className="text-base md:text-sm lg:text-base md:max-w-64">
              Involving local communities to drive grassroots initiatives and
              foster inclusive development.
            </p>
          </div>
        </div>
        <div className="group flex flex-col lg:flex-row gap-x-8 gap-y-4">
          <GiCompass
            size={60}
            className="text-primary group-hover:text-dark transition-colors duration-300 transform-gpu"
          />
          <div className="flex flex-col gap-y-4 w-full">
            <h4 className="text-xl md:text-base lg:text-xl font-bold">
              Innovative Solutions
            </h4>
            <p className="text-base md:text-sm lg:text-base md:max-w-64">
              Using technology and best practices to address complex challenges
              efficiently.
            </p>
          </div>
        </div>
        <div className="group flex flex-col lg:flex-row gap-x-8 gap-y-4">
          <SlPeople
            size={60}
            className="text-primary group-hover:text-dark transition-colors duration-300 transform-gpu"
          />
          <div className="flex flex-col gap-y-4 w-full">
            <h4 className="text-xl md:text-base lg:text-xl font-bold">
              Dedicated team
            </h4>
            <p className="text-base md:text-sm lg:text-base md:max-w-64">
              Passionate professionals committed to making a real difference.
            </p>
          </div>
        </div>
      </div>
      <Image
        src="/woman.jpg"
        alt="Water"
        width={500}
        height={500}
        className="block md:hidden lg:block h-full w-full rounded-2xl object-cover"
      />
      <Image
        src="/man.jpg"
        alt="Water"
        width={500}
        height={500}
        className="block md:hidden lg:block h-full w-full rounded-2xl object-cover"
      />
    </div>
  );
};

export default Reasons;
