import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Component that resets scroll position to the top on every route change.
 * Essential for React Single Page Applications (SPAs).
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Reset window scroll position immediately
    window.scrollTo(0, 0);

    // Minor delay to ensure component render tree update is complete
    const timeout = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant', // instant scroll to prevent animating back up
      });
    }, 15);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}
