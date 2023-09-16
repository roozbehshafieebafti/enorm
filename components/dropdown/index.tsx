"use client";
import { FC, ReactNode, useState } from "react";
import classes from "./styles/dropdown.module.scss";
import clsx from "clsx";

interface DropdownType {
  placeholder?: string;
  className?: string;
  options: { [key: string]: unknown }[];
  label: string;
  onChange: (val: { [key: string]: unknown }) => void;
  leftRadius?: boolean;
  rightRadius?: boolean;
}

export const Dropdown: FC<DropdownType> = ({
  placeholder,
  className,
  options,
  label,
  onChange,
  leftRadius,
  rightRadius,
}) => {
  const [isOpne, setIsopen] = useState(false);
  return (
    <button
      className={clsx(classes.root, className)}
      onClick={() => setIsopen((pre) => !pre)}
      onBlur={() => setIsopen(false)}
    >
      <div
        className={clsx(
          classes.input,
          leftRadius && classes["left-radius"],
          rightRadius && classes["right-radius"]
        )}
      >
        <input type="text" disabled placeholder={placeholder} />
        <i className={`bi ${isOpne ? "bi-chevron-up" : "bi-chevron-down"}`} />
      </div>
      {isOpne && (
        <ul className={classes.selection}>
          {options.map((content) => {
            return (
              <li
                key={Math.random()}
                onClick={() => {
                  onChange(content);
                }}
              >
                {content[label] as ReactNode | string}
              </li>
            );
          })}
        </ul>
      )}
    </button>
  );
};
