import { useEffect, useState } from "react";

export const useSize = (pixcel: number) => {
  const [isDesktop, setIsdesktop] = useState<boolean>();
  useEffect(() => {
    if (typeof window === "object") {
      if (window.innerWidth < pixcel) {
        setIsdesktop(false);
      } else {
        {
          setIsdesktop(true);
        }
        window.addEventListener("resize", function () {
          if (window.innerWidth < pixcel) {
            setIsdesktop(false);
          } else {
            setIsdesktop(true);
          }
        });
      }
    }
  }, []);

  return isDesktop;
};
