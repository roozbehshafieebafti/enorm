"use client";
import { FC, useCallback, useContext, useEffect, useState } from "react";
import classes from "./styles/filters.module.scss";
import clsx from "clsx";
import { Dropdown } from "../../../components/dropdown";
import { HomeContext } from "../home-context";
import {
  ColorType,
  Colors,
  Make,
  MakeType,
  Milage,
  MilageType,
  Price,
  PriceType,
  YearType,
  Years,
} from "./options";
import { Button } from "@/components/button";
import { CarType } from "@/apis/cars/types";
import { PAGE_LIMIT_SIZE } from "@/utils/constants";

export const Filters: FC = () => {
  const { allCars, setCars } = useContext(HomeContext);
  const [showFilters, setShowfilters] = useState<boolean>(true);
  const [price, setPrice] = useState<{
    from?: PriceType;
    till?: PriceType;
  }>({});
  const [year, setYear] = useState<{
    from?: YearType;
    till?: YearType;
  }>({});
  const [milage, setMilage] = useState<{
    from?: MilageType;
    till?: MilageType;
  }>({});
  const [color, setColor] = useState<ColorType>();
  const [make, setMake] = useState<MakeType>();

  const PriceEl = (props: PriceType) => {
    return (
      <div className="body-1">
        <i className="bi bi-currency-euro" />
        {props.price.toLocaleString()}
      </div>
    );
  };

  const YearEl = (props: YearType) => {
    return <div className="body-1">{props.year}</div>;
  };

  const MilageEl = (props: MilageType) => {
    return <div className="body-1">{props.milage} KM</div>;
  };

  const ColorEl = (props: ColorType) => {
    return (
      <div className="body-1 d-flex align-items-center">
        <span
          style={{
            background: props.color,
            borderColor: props.borderColor ?? props.color,
          }}
          className={classes.bullet}
        />
        <span className="pl-2">{props.name}</span>
      </div>
    );
  };

  const MakeEl = (props: MakeType) => {
    return <div className="body-1">{props.name} KM</div>;
  };

  const filterProcess = useCallback(() => {
    if (allCars) {
      let list: CarType[] = [...allCars];
      if (make) {
        const result = list.filter((item) => item.make === make.name);
        list = [...result];
      }

      if (color) {
        const result = list.filter((item) => item.color === color.name);
        list = [...result];
      }

      if (year.from?.year) {
        const result = list.filter(
          (item) => Number(item.year) >= Number(year.from?.year)
        );
        list = [...result];
      }

      if (year.till?.year) {
        const result = list.filter(
          (item) => Number(item.year) <= Number(year.till?.year)
        );
        list = [...result];
      }

      if (price.from?.price) {
        const result = list.filter(
          (item) => Number(item.price) >= Number(price.from?.price)
        );
        list = [...result];
      }

      if (price.till?.price) {
        const result = list.filter(
          (item) => Number(item.price) <= Number(price.till?.price)
        );
        list = [...result];
      }

      if (milage.from?.milage) {
        const result = list.filter(
          (item) => Number(item.kilometer) >= Number(milage.from?.milage)
        );
        list = [...result];
      }

      if (milage.till?.milage) {
        const result = list.filter(
          (item) => Number(item.kilometer) <= Number(milage.till?.milage)
        );
        list = [...result];
      }

      setCars &&
        setCars({
          limit: PAGE_LIMIT_SIZE,
          cars: list.slice(0, PAGE_LIMIT_SIZE),
          page: 1,
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [make, color, milage, year, price, allCars]);

  useEffect(() => {
    filterProcess();
  }, [filterProcess]);

  return (
    <div className={classes.root}>
      <div className={clsx("d-flex", classes.filter)}>
        <Button
          className="flex-grow-1"
          shape="secondary"
          onClick={() => setShowfilters((pre) => !pre)}
        >
          <i className="bi bi-funnel" />
          Filters
        </Button>
      </div>
      {showFilters && (
        <div className={clsx("card mb-5", classes.card)}>
          <p className="m-0 p-0 title-1">Filters</p>
          <hr />
          <p className="m-0 p-0 sub-title-1 mb-3">Price</p>
          <div className="d-flex">
            <Dropdown
              leftRadius
              className="mb-4 col-6"
              options={Price}
              Label={PriceEl}
              value={price.from}
              onChange={(val) => setPrice((pre) => ({ ...pre, from: val }))}
              placeholder="from"
            />
            <Dropdown
              className="mb-4 col-6"
              options={Price}
              Label={PriceEl}
              value={price.till}
              onChange={(val) => setPrice((pre) => ({ ...pre, till: val }))}
              rightRadius
              placeholder="till"
            />
          </div>
          <p className="m-0 p-0 sub-title-1 mb-3">Year</p>
          <div className="d-flex">
            <Dropdown
              className="mb-4 col-6"
              options={Years}
              Label={YearEl}
              value={year.from}
              onChange={(val) => setYear((pre) => ({ ...pre, from: val }))}
              leftRadius
              placeholder="from"
            />
            <Dropdown
              className="mb-4 col-6"
              value={year.till}
              options={Years}
              Label={YearEl}
              onChange={(val) => setYear((pre) => ({ ...pre, till: val }))}
              rightRadius
              placeholder="till"
            />
          </div>
          <p className="m-0 p-0 sub-title-1 mb-3">Milage</p>
          <div className="d-flex">
            <Dropdown
              className="mb-4 col-6"
              options={Milage}
              Label={MilageEl}
              value={milage.from}
              onChange={(val) => setMilage((pre) => ({ ...pre, from: val }))}
              leftRadius
              placeholder="from"
            />
            <Dropdown
              className="mb-4 col-6"
              options={Milage}
              Label={MilageEl}
              value={milage.till}
              onChange={(val) => setMilage((pre) => ({ ...pre, till: val }))}
              rightRadius
              placeholder="till"
            />
          </div>
          <p className="m-0 p-0 sub-title-1 mb-3">Color</p>
          <Dropdown
            className="mb-4 col-12"
            options={Colors}
            Label={ColorEl}
            value={color}
            onChange={(val) => setColor(val)}
            placeholder="Select color"
          />
          <p className="m-0 p-0 sub-title-1 mb-3">Make</p>
          <Dropdown
            className="mb-4 col-12"
            options={Make}
            Label={MakeEl}
            value={make}
            onChange={(val) => setMake(val)}
            placeholder="Select color"
          />
        </div>
      )}
    </div>
  );
};
