import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Stateof the Art Facilities",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique quisquam omnis aliquam necessitatibus vero repudiandae!",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique quisquam omnis aliquam necessitatibus vero repudiandae!",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique quisquam omnis aliquam necessitatibus vero repudiandae!",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = { setSelectedPage: (value: SelectedPage) => void };

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section
      id={`${SelectedPage.Benefits}`}
      className="mx-auto min-h-full w-5/6 py-20"
    >
      <motion.div
        onViewportEnter={() => {
          setSelectedPage(SelectedPage.Benefits);
        }}
      >
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:my-5 md:w-3/5 "
        >
          <HText>more than just a gym</HText>
          <p className="my-5 text-sm ">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={container}
          className="mt-5 items-center justify-between gap-8 md:flex"
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title as React.Key}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* graphics and description */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* graphic */}
          <img
            src={BenefitsPageGraphic}
            alt="benefits page graphic"
            className="mx-auto"
          />

          {/* description */}
          <div>
            {/* title */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    Millions of happy members geting{" "}
                    <span className="text-primary-500">fit</span>.
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* descript */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti, placeat aliquid nulla excepturi sit ut impedit ratione
                hic ullam necessitatibus dignissimos sunt, amet possimus animi
                praesentium, corrupti eveniet nam cupiditate unde recusandae?
                Nulla beatae obcaecati natus, quam reiciendis quisquam a.
              </p>
              <p className="mb-5 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                debitis at praesentium! Similique tempora a libero corporis
                totam eaque quo cum, accusamus accusantium sequi laudantium
                nesciunt et ullam commodi ducimus.
              </p>
            </motion.div>

            {/* button */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
