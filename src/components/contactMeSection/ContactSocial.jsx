import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/raushan-shrivastwa-319a2a232/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/RaushanShrivastwa" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/_raushann09_/" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
