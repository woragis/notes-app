import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import { SiGithub, SiLeetcode } from "react-icons/si";

export const useFooterModel = () => {
  interface FooterSocialMedia {
    icon: JSX.Element;
    key: string;
    path: string;
  }
  const socialMediaLinks: FooterSocialMedia[] = [
    { key: "github", path: "https://github.com/woragis", icon: <SiGithub /> },
    {
      key: "leetcode",
      path: "https://leetcode.com/u/woragis",
      icon: <SiLeetcode />,
    },
    {
      key: "instagram",
      path: "http://instagram.com/y.jezreel.andrade",
      icon: <FaInstagram />,
    },
    {
      key: "linkedin",
      path: "http://linkedin.com/in/jezreel-andrade",
      icon: <FaLinkedin />,
    },
  ];
  return { socialMediaLinks };
};
