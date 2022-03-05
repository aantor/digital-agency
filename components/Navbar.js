import React, { useState } from 'react';
import tw from 'twin.macro';
import { BiMenuAltRight } from 'react-icons/bi';
import { motion, AnimatePresence } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { deviceSize } from '../utils/responsive';
import Button from './shared/Button';
import Logo from './shared/Logo';

const navData = [
  {
    name: 'Home',
    link: '#',
  },
  {
    name: 'Services',
    link: '#',
  },
  {
    name: 'Our Project',
    link: '#',
  },
  {
    name: 'About us',
    link: '#',
  },
];

const Nav = tw.nav`
flex
items-center
justify-between
pt-10
`;

const DesktopNav = tw.ul`
  flex
  items-center
  space-x-10
  font-nunito
  text-white
  text-[18px]
`;

const NavItem = tw.li`
  hover:text-secondary
  active:text-secondary
  transition
  ease-in-out
`;

const NavLink = tw.a`
  
`;

export default function Navbar() {
  const isTablet = useMediaQuery({ maxWidth: deviceSize.tablet });
  return (
    <Nav>
      <Logo />
      {isTablet ? (
        <BiMenuAltRight tw='h-6 w-6 text-white cursor-pointer ' />
      ) : (
        <DesktopNav>
          {navData.map((nav) => (
            <NavItem key={nav.name}>
              <NavLink href={nav.link}>{nav.name}</NavLink>
            </NavItem>
          ))}
        </DesktopNav>
      )}
      {!isTablet && <Button variant='outline'>Contact us</Button>}
    </Nav>
  );
}
