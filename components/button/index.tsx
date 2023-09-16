import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";
import clsx from "clsx";
import classes from "./styles/button.module.scss";

interface buttonType
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  shape: "primay" | "secondary";
}

export const Button: FC<buttonType> = ({ children, shape, ...props }) => {
  return (
    <button
      className={clsx(
        "btn",
        shape === "primay"
          ? classes["button-primary"]
          : classes["button-secondary"],
        props.className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
