import { TransactionInterfaces } from "./types";

export const sumBalance = (filteredList: TransactionInterfaces) => {
  const reduced = filteredList.reduce<number>((acc, curr) => {
    // Just a small hack to remove rounding error
    return acc + curr.amount * 100;
  }, 0);
  return reduced / 100;
};
