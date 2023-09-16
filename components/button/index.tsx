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

export const Button: FC<buttonType> = ({
  children,
  className,
  shape,
  ...props
}) => {
  return (
    <button
      className={clsx(
        "btn",
        className,
        shape === "primay"
          ? classes["button-primary"]
          : classes["button-secondary"]
      )}
      {...props}
    >
      {children}
    </button>
  );
};
