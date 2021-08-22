import { useRef, useEffect, useState } from 'react';

export const useDebounce = (value, delay) => {
  const $handle = useRef(null);
  const [delayedValued, setDelayedValue] = useState(value);

  useEffect(() => {
    $handle.current = setTimeout(() => {
      setDelayedValue(value);
    }, delay);

    return () => {
      clearInterval($handle.current);
    };
  }, [value, delay]);

  return delayedValued;
};

export default useDebounce;
