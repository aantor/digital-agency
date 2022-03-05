import React from 'react';
import tw, { styled } from 'twin.macro';

const buttonVariants = {
  outline: tw`border border-white text-white hover:bg-secondary transition-colors duration-300 ease-in-out`,
  contained: tw`text-white bg-secondary`,
};

const ButtonWrapper = styled.button(() => [
  tw`flex items-center justify-center px-8 py-3 text-white rounded-md font-nunito`,
  ({ variant = 'contained' }) => buttonVariants[variant],
]);

export default function Button({
  variant = 'contained',
  type = 'button',
  children,
}) {
  return (
    <ButtonWrapper variant={variant} type={type}>
      {children}
    </ButtonWrapper>
  );
}
