import { useCallback } from 'react';

type RefObject = {
  current: { offsetTop: number } | null;
};

type Options = {
  behavior?: 'smooth' | 'auto';
  minus?: number;
  plus?: number;
};

export default function useScrollTo(ref: RefObject | null, options?: Options) {
  return useCallback(() => {
    const refOffSetTop = ref?.current?.offsetTop || 0;
    const minus = options?.minus ? Math.abs(options.minus) : 0;
    const plus = options?.plus ? Math.abs(options.plus) : 0;
    const behavior = options?.behavior || 'smooth';
    window?.scroll({ top: refOffSetTop - minus + plus, behavior });
  }, [ref, options]);
}
