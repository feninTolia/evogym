import { SelectedPage } from "@/shared/types";
import Logo from "@/assets/Logo.png";

type Props = { setSelectedPage: (value: SelectedPage) => void };

const Footer = ({ setSelectedPage }: Props) => {
  return (
    <footer className=" bg-primary-100 pt-12 pb-12">
      <div className="mx-auto w-5/6 justify-between gap-20 md:flex ">
        {/* logo, about and rights */}
        <div className="mb-16 basis-1/2">
          <img src={Logo} alt="logo" className="mb-5" />
          <p className="mb-5 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum ab,
            sit deleniti accusamus omnis laboriosam ipsum laudantium obcaecati
            tempore. Ea officiis dolor error veritatis.
          </p>
          <p>&#169; Evogym All Rights Reserved</p>
        </div>

        {/* links */}
        <div className="mb-16 basis-1/4">
          <p className=" mb-5 font-bold">Links</p>
          <p className="mb-2  md:mb-5">Lorem, ipsum dolor</p>
          <p className="mb-2  md:mb-5">Adipisicing elit</p>
          <p>Sit amet consectetur</p>
        </div>

        {/* Contacts */}
        <address className="basis-1/4 not-italic">
          <p className="mb-5 font-bold">Contact us</p>
          <p className="font mb-2 md:mb-5">
            Lorem ipsum dolor sit amet consectetur
          </p>
          <p>(333)345-5711</p>
        </address>
      </div>
    </footer>
  );
};

export default Footer;
