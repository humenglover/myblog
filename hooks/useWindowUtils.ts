import { useState, useEffect } from 'react';

export function useWindowUtils() {
  const [windowObj, setWindowObj] = useState<Window | undefined>(undefined);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowObj(window);
      setIsMounted(true);
    }
  }, []);

  return { window: windowObj, isMounted };
} 