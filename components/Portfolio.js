import React from 'react';
import tw from 'twin.macro';

const PortfolioSection = tw.section`
  mt-36
`;

const Title = tw.h2`
  font-nunito
  text-6xl
  text-center
`;

const PortfolioWrapper = tw.div`
  flex
  lg:flex-col
  max-w-sm
  justify-center
  mx-auto

`;

export default function Portfolio() {
  return (
    <PortfolioSection>
      <Title>Our Awesome Portofolio</Title>
      <PortfolioWrapper>
        <img src='/port-3.png' alt='' />
      </PortfolioWrapper>
    </PortfolioSection>
  );
}
