"use client";
import { FC, useState } from "react";
import classes from "./styles/dropdown.module.scss";
import clsx from "clsx";

interface DropdownType<T> {
  placeholder?: string;
  className?: string;
  options: T[];
  value?: T;
  Label: FC<T>;
  onChange: (val?: T) => void;
  leftRadius?: boolean;
  rightRadius?: boolean;
}

export const Dropdown: <T>(
  props: DropdownType<T>
) => React.ReactElement<DropdownType<T>> = ({
  placeholder,
  className,
  options,
  Label,
  onChange,
  leftRadius,
  rightRadius,
  value,
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
        {!value && <input type="text" disabled placeholder={placeholder} />}
        {value && <Label {...value} />}
        {!value && (
          <i className={`bi ${isOpne ? "bi-chevron-up" : "bi-chevron-down"}`} />
        )}
        {value && (
          <i
            className="bi bi-x-lg"
            onClick={(e) => {
              e.stopPropagation();
              onChange();
            }}
          />
        )}
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
                {content && <Label {...content} />}
              </li>
            );
          })}
        </ul>
      )}
    </button>
  );
};
