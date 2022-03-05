import React, { useEffect, useRef, useState } from 'react';
import tw from 'twin.macro';
import ReactPlayer from 'react-player';

const FeatureWrapper = tw.section`
  mt-28

`;

const FeatureTop = tw.div`
  flex
  flex-wrap
  justify-between
`;

const Title = tw.h2`
  font-poppins
  font-bold
  text-4xl
  max-w-sm
`;

const SubTitle = tw.p`
  font-nunito
  text-gray-300
  mt-7
  lg:mt-0
  lg:text-2xl
  lg:max-w-3xl
`;

const FeatureBottom = tw.div`
  relative
  mt-12
`;

export default function Features() {
  const videoRef = useRef();
  const [play, setPlay] = useState(false);

  useEffect(() => {
    play ? videoRef.current.play() : videoRef.current.pause();
  }, [play]);

  return (
    <FeatureWrapper>
      <FeatureTop>
        <Title>Why Enver Is The Best Choice?</Title>
        <SubTitle>
          Watch this one minute video so you understand why you should use our
          services!
        </SubTitle>
      </FeatureTop>
      <FeatureBottom>
        <video ref={videoRef}>
          <source src='/video.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
        <img
          src='/play.png'
          alt=''
          tw='w-24 h-24 lg:w-32 lg:h-32 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer'
          onClick={() => setPlay(!play)}
        />
      </FeatureBottom>
    </FeatureWrapper>
  );
}
