import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { SiLeetcode, SiCodechef } from "react-icons/si";

const ContactSocial = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <SingleContactSocial link="https://github.com/RaushanShrivastwa" Icon={FiGithub} />
      <SingleContactSocial link="https://www.linkedin.com/in/raushan-shrivastwa-319a2a232/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://leetcode.com/u/raushan7219/" Icon={SiLeetcode} />
      <SingleContactSocial link="https://www.codechef.com/users/raushan2709" Icon={SiCodechef} />
    </div>
  );
};

export default ContactSocial;


