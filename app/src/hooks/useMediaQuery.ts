import { useState, useEffect } from "react";

const useMediaQuery = (
  query: string,
  onMatchChange?: (matches: boolean) => void
) => {
  const mql = window.matchMedia(query);
  const [matches, setMatches] = useState<boolean>(mql.matches);

  useEffect(() => {
    const handleChangeScreenSize = (event: MediaQueryListEvent) => {
      onMatchChange?.(event.matches);
      setMatches(event.matches);
    };

    mql.addEventListener("change", handleChangeScreenSize);

    return () => {
      mql.removeEventListener("change", handleChangeScreenSize);
    };
  }, [mql, query, onMatchChange]);

  return matches;
};

export default useMediaQuery;
