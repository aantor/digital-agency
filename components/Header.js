import Image from 'next/image';
import React, { useState } from 'react';
import tw, { styled } from 'twin.macro';
import Button from './shared/Button';

const HeaderWrapper = tw.header`
grid
lg:grid-cols-2
gap-y-12
mt-8
`;

const Left = tw.div`
space-y-12
`;

const Right = tw.div`
  place-self-center
`;

const Title = tw.h1`
  font-poppins
  text-[42px]
  lg:text-6xl
  xl:text-[80px]
  leading-[150%]
  xl:leading-[84px]
  max-w-[327px]
  pt-[66px]
  font-bold
`;

const Description = tw.p`
  font-nunito
  pt-[30px]
  lg:text-2xl
  lg:w-[536px]
  text-gray-300
`;

const Info = tw.div`
  
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <Left>
        <Info>
          <Title>Build Your Awesome Platform</Title>
          <Description>
            Enver studio is a digital studio that offers several services such
            as UI/UX Design to developers, we will provide the best service for
            those of you who use our services.
          </Description>
        </Info>
        <Button>Our Services</Button>
      </Left>
      <Right>
        <Image
          src='/yellow-man.png'
          width={550}
          height={550}
          alt=''
          objectFit='cover'
        />
      </Right>
    </HeaderWrapper>
  );
}
