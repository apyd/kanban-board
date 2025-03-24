import { useRef } from "react";

const useRefs = <T>() => {
  const refsByKey = useRef<Record<string, T | null>>({});

  const setRef = (element: T | null, key: string) => {
    refsByKey.current[key] = element;
  };

  return { refsByKey: refsByKey.current, setRef };
};

export default useRefs;
