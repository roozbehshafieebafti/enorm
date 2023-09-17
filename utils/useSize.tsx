import { useEffect, useState } from "react";

export const useSize = (pixel: number) => {
  const [isDesktop, setIsdesktop] = useState<boolean>();
  useEffect(() => {
    if (typeof window === "object") {
      if (window.innerWidth < pixel) {
        setIsdesktop(false);
      } else {
        {
          setIsdesktop(true);
        }
        window.addEventListener("resize", function () {
          if (window.innerWidth < pixel) {
            setIsdesktop(false);
          } else {
            setIsdesktop(true);
          }
        });
      }
    }
  }, [pixel]);

  return isDesktop;
};
