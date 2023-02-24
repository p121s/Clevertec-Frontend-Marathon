import { useEffect, useState } from 'react';

import { ResizeReturnValue } from './use-resize.interfaces';

export const useResize = (): ResizeReturnValue => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handlerResize = (e: Event): void => {
      const target = e.target as Window;

      setWidth(target.innerWidth);
    };

    window.addEventListener('resize', handlerResize);

    return () => {
      window.removeEventListener('resize', handlerResize);
    };
  }, []);

  return { width, isTablet: width <= 768, isMobile: width <= 680 };
};
