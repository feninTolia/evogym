import { ClassType, SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight training classes",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum excepturi non deserunt itaque.`,
    image: image1,
  },
  {
    name: "Yoga classes",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum excepturi non deserunt itaque.`,
    image: image2,
  },
  {
    name: "Adventure classes",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum excepturi non deserunt itaque.`,
    image: image3,
  },
  {
    name: "Ab core classes",
    image: image4,
  },
  {
    name: "Fitness classes",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum excepturi non deserunt itaque.`,
    image: image5,
  },
  {
    name: "Training classes",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum excepturi non deserunt itaque.`,
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};
motion;
const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section
      id={SelectedPage.OurClasses}
      className="w-full bg-primary-100 py-40"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>Our classes</HText>
            <p className="py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              eaque, quo sed vero consequatur quisquam tenetur officia molestiae
              quibusdam, reiciendis animi! A, cupiditate dolores? Nesciunt
              deleniti debitis ut molestiae inventore.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[340px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, idx) => (
              <Class
                key={`${item.name}-${idx}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
