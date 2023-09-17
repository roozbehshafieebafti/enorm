import { fetchHelper } from "..";
import { CarType } from "./types";

export type CarInput = {
  limit?: number;
  offset?: number;
  make?: string;
  brand?: string;
};
export const getAllCars = async ({ limit, offset, make, brand }: CarInput) => {
  return await fetchHelper<{
    returned: number;
    data: CarType[];
  }>({
    url:
      process.env.NEXT_PUBLIC_BASE_URL +
      `/cars?${limit ? "limit=" + limit : ""}${
        offset ? "&offset=" + offset : ""
      }${make ? "&make=" + make : ""}${brand ? "&brand=" + brand : ""}`,
  });
};
