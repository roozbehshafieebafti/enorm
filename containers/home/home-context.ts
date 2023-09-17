import { CarType } from "@/apis/cars/types";
import { createContext } from "react";

export interface PresentedCarType {
  page: number;
  limit: number;
  cars: CarType[];
}

export const HomeContext = createContext<{
  allCars?: CarType[];
  setCars?: (input?: PresentedCarType) => void;
}>({});
