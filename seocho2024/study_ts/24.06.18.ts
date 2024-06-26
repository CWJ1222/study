type Item = { item: keyof typeof stock; price: number };
type ItemPrice<T, U> = T & Partial<{ [P in keyof U]: number }>;

const stock = { X: 1, Y: 2, Z: 30 };

const itemPrices: ItemPrice<Item, typeof stock>[] = [
  { item: "X", price: 1000 },
  { item: "Y", price: 2000 },
  { item: "Z", price: 3000 },
];

const total = itemPrices.reduce(
  (curr, itemPrice) => curr + stock[itemPrice.item] * itemPrice.price,
  0
);
console.log("🚀 ~ total:", total);
