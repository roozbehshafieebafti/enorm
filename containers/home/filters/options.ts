export interface PriceType {
  id: number;
  price: number;
}

export interface MakeType {
  id: number;
  name: string;
}

export interface YearType {
  id: number;
  year: number;
}

export interface MilageType {
  id: number;
  milage: number;
}

export interface ColorType {
  id: number;
  name: string;
  color: string;
  borderColor?: string;
}

export const Colors: ColorType[] = [
  { id: 1, name: "Grey", color: "Grey" },
  { id: 2, name: "White", color: "White", borderColor: "#DEDEDE" },
  { id: 3, name: "Maroon", color: "Maroon" },
  { id: 4, name: "Red", color: "Red" },
  { id: 5, name: "Blue", color: "Blue" },
  { id: 6, name: "Orange", color: "Orange" },
  { id: 7, name: "Silver", color: "Silver" },
  { id: 8, name: "Brown", color: "Brown" },
  { id: 9, name: "Black", color: "Black" },
  { id: 10, name: "Bronze", color: "#cd7f32" },
  { id: 11, name: "Gold", color: "Gold" },
];

export const Make: MakeType[] = [
  { id: 1, name: "Honda" },
  { id: 1, name: "Maruti Suzuki" },
  { id: 1, name: "Hyundai" },
  { id: 1, name: "Toyota" },
  { id: 1, name: "Mercedes-Benz" },
  { id: 1, name: "BMW" },
  { id: 1, name: "Skoda" },
  { id: 1, name: "Nissan" },
  { id: 1, name: "Renault" },
  { id: 1, name: "Tata" },
  { id: 1, name: "Volkswagen" },
  { id: 1, name: "Ford" },
  { id: 1, name: "Audi" },
  { id: 1, name: "Mahindra" },
  { id: 1, name: "MG" },
  { id: 1, name: "Jeep" },
  { id: 1, name: "Porsche" },
];

export const Years: YearType[] = [
  { id: 1, year: 2013 },
  { id: 2, year: 2014 },
  { id: 3, year: 2015 },
  { id: 4, year: 2016 },
  { id: 5, year: 2017 },
  { id: 6, year: 2018 },
  { id: 7, year: 2019 },
  { id: 8, year: 2020 },
  { id: 9, year: 2021 },
  { id: 10, year: 2022 },
  { id: 11, year: 2023 },
];

export const Milage: MilageType[] = [
  { id: 1, milage: 2500 },
  { id: 1, milage: 3000 },
  { id: 1, milage: 4000 },
  { id: 1, milage: 5000 },
  { id: 1, milage: 10000 },
  { id: 1, milage: 25000 },
  { id: 1, milage: 50000 },
  { id: 1, milage: 75000 },
  { id: 1, milage: 100000 },
];

export const Price: PriceType[] = [
  { id: 1, price: 2500 },
  { id: 1, price: 5000 },
  { id: 1, price: 7500 },
  { id: 1, price: 10000 },
  { id: 1, price: 12000 },
  { id: 1, price: 15000 },
  { id: 1, price: 20000 },
  { id: 1, price: 25000 },
  { id: 1, price: 50000 },
  { id: 1, price: 75000 },
  { id: 1, price: 100000 },
];
