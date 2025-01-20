import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import { SiGithub, SiLeetcode } from "react-icons/si";
import { FooterSocialMedia } from "../../types/footer.types";

export const useFooterModel = () => {
  const socialMediaLinks: FooterSocialMedia[] = [
    { key: "github", path: "https://github.com/woragis", icon: <SiGithub /> },
    {
      key: "leetcode",
      path: "https://leetcode.com/u/woragis",
      icon: <SiLeetcode />,
    },
    {
      key: "instagram",
      path: "https://instagram.com/y.jezreel.andrade",
      icon: <FaInstagram />,
    },
    {
      key: "linkedin",
      path: "https://linkedin.com/in/jezreel-andrade",
      icon: <FaLinkedin />,
    },
  ];

  return { socialMediaLinks };
};
