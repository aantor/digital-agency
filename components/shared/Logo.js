import React from 'react';
import tw from 'twin.macro';

const Wrapper = tw.img`
  hover:cursor-pointer
`;

export default function Logo() {
  return <Wrapper src='/logo.svg' />;
}
