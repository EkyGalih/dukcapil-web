
import { Footer, FooterCopyright, FooterLink, FooterLinkGroup } from "flowbite-react";

export function MyFooter() {
  return (
    <Footer container className="rounded-none">
      <FooterCopyright href="#" by="Kependudukan" year={2022} />
      <FooterLinkGroup>
        <FooterLink href="#">About</FooterLink>
        <FooterLink href="#">Privacy Policy</FooterLink>
        <FooterLink href="#">Licensing</FooterLink>
        <FooterLink href="#">Contact</FooterLink>
      </FooterLinkGroup>
    </Footer>
  );
}
export default MyFooter;