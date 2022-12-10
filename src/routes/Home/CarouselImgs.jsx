import React from 'react';
import styled from 'styled-components';

import carousel1 from '../../assets/carousel/carousel1.jpeg';
import carousel2 from '../../assets/carousel/carousel2.jpeg';
import carousel3 from '../../assets/carousel/carousel3.jpeg';
import carousel4 from '../../assets/carousel/carousel4.jpeg';
const imgs = [carousel1, carousel2, carousel3, carousel4];

const Imgs = ({ current }) => {
  return (
    <>
      {imgs.map((src, i) => (
        <Img key={i} src={src} alt="" $current={current === i} />
      ))}
    </>
  );
};

const Img = styled.img`
  flex-shrink: 0;
  width: 100%;

  transition: transform 1s ease;
`;

export default React.memo(Imgs);
export { imgs };
