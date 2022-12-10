import { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import Imgs, { imgs } from './CarouselImgs';

const Carousel = () => {
  const [current, setCurrent] = useState(2);
  const style = {
    transform: `translateX(${-current * 100}%)`,
  };
  const onToggle = useCallback(() => {
    setCurrent((current + 1) % imgs.length);
  }, [current]);

  const timerId = useRef(null);
  useEffect(() => {
    timerId.current = setInterval(() => onToggle(), 5000);
    return () => {
      clearInterval(timerId.current);
      timerId.current = null;
    };
  }, [onToggle]);

  return (
    <CarouselPositioner>
      <CarouselBlock onClick={onToggle} style={style}>
        <Imgs current={current} />
      </CarouselBlock>
    </CarouselPositioner>
  );
};

const CarouselPositioner = styled.div`
  width: 100%;
`;

const CarouselBlock = styled.div`
  display: flex;
  transition: all 1s;
`;
export default Carousel;
