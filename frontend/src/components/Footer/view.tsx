import { useFooterModel } from "./model";
import {
  CopyrightContainer,
  FooterBrand,
  FooterContainer,
  FooterLink,
  FooterListItem,
  FooterMedia,
  FooterMenu,
  StyledFooter,
} from "./styles";

export const FooterView = ({
  socialMediaLinks,
}: ReturnType<typeof useFooterModel>) => {
  const socialMediaComponent = socialMediaLinks.map((link) => {
    return <FooterLink to={link.path}>{link.icon}</FooterLink>;
  });

  return (
    <StyledFooter>
      <FooterContainer>
        <FooterBrand>Jezreel</FooterBrand>
        <FooterMedia>{socialMediaComponent}</FooterMedia>
      </FooterContainer>
      <CopyrightContainer>
        all copyrights reserved - 2025 &copy;
      </CopyrightContainer>
    </StyledFooter>
  );
};
