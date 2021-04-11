import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    document.querySelector('#root').scrollTo(0,0);
  }, [pathname]);

  return null;
}
