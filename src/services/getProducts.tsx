export type Product = {
  name: string;
  id: number;
  imgPath: string;
  description: string;
};

const menu: Product[] = [
  {
    name: "Burger simple",
    id: 1,
    imgPath: "/simple.jpg",
    description: "Hamburguesa simple medallon de carne y queso"
  },
  {
    name: "Burger classic",
    id: 2,
    imgPath: "/clasic.jpg",
    description:
      "Hamburguesa clasica medallon de carne, queso, tomate, lechuga y huevo"
  },
  {
    name: "Burger doble cheddar y bacon",
    id: 3,
    imgPath: "/doble-bacon.jpg",
    description: "Hamburguesa doble medallon con doble cheddar y doble bacon"
  },
  {
    name: "Burger mushroom",
    id: 4,
    imgPath: "/mushroom.jpg",
    description: "Hamburguesa de hongos, queso, huevo lechuga y tomate"
  },
  {
    name: "Burger triple",
    id: 5,
    imgPath: "/triple.jpg",
    description: "Hamburguesa triple medallon"
  },
  {
    name: "Fries",
    id: 6,
    imgPath: "/fries.jpg",
    description: "Porcion de papas fritas con cheddar y bacon"
  },
  {
    name: "Burger black",
    id: 7,
    imgPath: "/black-edamame.jpg",
    description: "Hamburguesa con pan negro con medallon de edamame"
  },
  {
    name: "Combo burgers",
    id: 8,
    imgPath: "/combo.jpg",
    description: "Combo de tres hamburguesas clasic"
  },
  {
    name: "Burger veggie",
    id: 9,
    imgPath: "/veggie.jpg",
    description:
      "Burger de medallon veggie de lentejas, lechuga, tomate, queso y huevo"
  }
];

export function getProducts(): Promise<Product[]> {
  return new Promise((resolve) => setTimeout(() => resolve(menu), 1500));
}
