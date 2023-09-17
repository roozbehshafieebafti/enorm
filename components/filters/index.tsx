"use client";
import { FC } from "react";
import classes from "./styles/filters.module.scss";
import clsx from "clsx";
import { Dropdown } from "../dropdown";

export const Filters: FC = () => {
  return (
    <div className={clsx("card mb-5", classes.root)}>
      <p className="m-0 p-0 title-1">Filters</p>
      <hr />
      <p className="m-0 p-0 sub-title-1 mb-3">Price</p>
      <div className="d-flex">
        <Dropdown
          className="mb-4 col-6"
          options={[{ id: 1, label: "hi" }]}
          label="label"
          onChange={(val) => console.log(val)}
          leftRadius
          placeholder="till"
        />
        <Dropdown
          className="mb-4 col-6"
          options={[{ id: 1, label: "hi" }]}
          label="label"
          onChange={(val) => console.log(val)}
          rightRadius
          placeholder="from"
        />
      </div>
      <p className="m-0 p-0 sub-title-1 mb-3">Year</p>
      <div className="d-flex">
        <Dropdown
          className="mb-4 col-6"
          options={[{ id: 1, label: "hi" }]}
          label="label"
          onChange={(val) => console.log(val)}
          leftRadius
          placeholder="till"
        />
        <Dropdown
          className="mb-4 col-6"
          options={[{ id: 1, label: "hi" }]}
          label="label"
          onChange={(val) => console.log(val)}
          rightRadius
          placeholder="from"
        />
      </div>
      <p className="m-0 p-0 sub-title-1 mb-3">Milage</p>
      <div className="d-flex">
        <Dropdown
          className="mb-4 col-6"
          options={[{ id: 1, label: "hi" }]}
          label="label"
          onChange={(val) => console.log(val)}
          leftRadius
          placeholder="till"
        />
        <Dropdown
          className="mb-4 col-6"
          options={[{ id: 1, label: "hi" }]}
          label="label"
          onChange={(val) => console.log(val)}
          rightRadius
          placeholder="from"
        />
      </div>
      <p className="m-0 p-0 sub-title-1 mb-3">color</p>

      <Dropdown
        className="mb-4 col-12"
        options={[{ id: 1, label: "hi" }]}
        label="label"
        onChange={(val) => console.log(val)}
      />
    </div>
  );
};
