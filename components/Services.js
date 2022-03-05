import React from 'react';
import Service from './Service';
import tw from 'twin.macro';

const servicesData = [
  {
    title: 'Development',
    description: 'Create a platform with the best and coolest quality from us.',
    iconSrc: '/Icon.png',
  },
  {
    title: 'UI/UX Designer',
    description:
      'We provide UI/UX Design services, and of course with the best quality',
    iconSrc: '/Icon-1.png',
  },
  {
    title: 'Graphik Designer',
    description: 'We provide Graphic Design services, with the best designers',
    iconSrc: '/Icon-2.png',
  },
  {
    title: 'Motion Graphik',
    description: 'Create a platform with the best and coolest quality from us.',
    iconSrc: '/Icon-3.png',
  },
  {
    title: 'Photography',
    description:
      'We provide Photography services, and of course with the best quality',
    iconSrc: '/Icon-4.png',
  },
  {
    title: 'Videography',
    description: 'Create a platform with the best and coolest quality from us.',
    iconSrc: '/Icon.png',
  },
];

const ServicesWrapper = tw.section`
  
`;

const ServicesTitle = tw.h2`
  font-poppins
  font-bold
  text-4xl
  lg:text-6xl
  leading-[70px]
  mx-auto
  max-w-2xl
  text-center
  mt-16
  lg:mt-24
`;

const ServicesList = tw.ul`
  mt-12
  grid
  md:grid-cols-2
  lg:grid-cols-3
  gap-20
  lg:gap-24
`;

export default function Services() {
  return (
    <ServicesWrapper>
      <ServicesTitle>The Service We Provide For You</ServicesTitle>
      <ServicesList>
        {servicesData.map(({ title, description, iconSrc }, i) => (
          <Service
            key={i}
            title={title}
            description={description}
            iconSrc={iconSrc}
          />
        ))}
      </ServicesList>
    </ServicesWrapper>
  );
}
