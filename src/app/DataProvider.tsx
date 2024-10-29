import { useEffect, useState } from "react";
import { TransactionInterface, TransactionInterfaces } from "./utils/types";
import { Main } from "next/document";

const DataProvider = function () {
  const [data, setData] = useState<TransactionInterfaces>([]);
  const [filteredList, setFilteredList] = useState<TransactionInterfaces>([]);

  useEffect(() => {
    fetch("http://localhost:3000/transactions")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  const addTransaction = (info: TransactionInterface) => {
    setData((prevState) => {
      return [...prevState, info];
    });
  };
  const removeTransaction = (id: string | number) => {
    setData((prevState) => {
      const newState = prevState.filter((el) => el.id !== id);
      return [...newState];
    });
  };
  useEffect(() => {
    const newFilteredList = filterValue
      ? data.filter((element: TransactionInterface) => {
          return !element.beneficiary || caseSensitive
            ? element.beneficiary.includes(filterValue)
            : element.beneficiary
                .toLowerCase()
                .includes(filterValue.toLowerCase());
        })
      : data;
    const start = (pageValue - 1) * 20;
    setFilteredList(newFilteredList.slice(start, start + 20));
    setPagesNumber(Math.ceil(newFilteredList.length / 20));
  }, [pageValue, caseSensitive, data, filterValue]);

  return <Main></Main>;
};
export default DataProvider;
