import React from 'react';
import tw from 'twin.macro';

const ServiceWrapper = tw.article`
  flex
  items-center
  flex-col
  justify-center
  space-y-5
  text-center
`;

const Icon = tw.img`
  w-[70px]
  h-[70px]
`;

const Title = tw.h3`
  font-nunito
  font-semibold
  text-2xl
`;

const Description = tw.p`
  font-nunito
  text-gray-300
  max-w-xs
`;

export default function Service({
  title = 'Development',
  description = 'Create a platform with the best and coolest quality from us.',
  iconSrc,
}) {
  return (
    <ServiceWrapper>
      <Icon src={iconSrc || '/icon-1.png'} alt='' />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </ServiceWrapper>
  );
}
