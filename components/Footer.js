import React from 'react';
import Button from './shared/Button';
import Logo from './shared/Logo';
import tw from 'twin.macro';

const FooterWrapper = tw.footer`
  
`;

const TopSection = tw.div`
lg:flex
lg:justify-between
space-y-7
lg:space-y-0
`;

const BottomSection = tw.nav`
  flex-col
  text-center
`;

const Title = tw.h2`
  font-poppins
  text-4xl
  font-bold
`;

const NavItems = tw.div`
  flex
  flex-col
  space-y-7
  `;

const NavLink = tw.a`
  text-gray-300
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <TopSection>
        <Title>Contact us for the service you want to use</Title>
        <Button>Contact us</Button>
      </TopSection>

      <BottomSection>
        <Logo />
        <NavItems>
          <NavLink href='#'>Support</NavLink>
          <NavLink href='#'>Privacy Policy</NavLink>
          <NavLink href='#'>Terms and Conditions</NavLink>
        </NavItems>
        <p tw='text-gray-300 mt-7'>&copy; 2022 Enver. All Rights Reserved.</p>
      </BottomSection>
    </FooterWrapper>
  );
}
