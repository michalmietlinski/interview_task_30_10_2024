import { useEffect, useState } from "react";
import { TransactionInterfaces } from "../utils/types";
import Table from "./table";

export default function PaginationWrapper({
  transactions,
  removeTransaction,
}: {
  transactions: TransactionInterfaces;
  removeTransaction: (val: number | string) => void;
}) {
  const [pageValue, setPageValue] = useState<number>(1);
  const [pagesNumber, setPagesNumber] = useState<number>(1);
  const [paginatedTranslations, setpaginatedTranslations] =
    useState<TransactionInterfaces>([]);

  useEffect(() => {
    console.log(
      pageValue * 20 > transactions.length,
      pageValue * 20,
      transactions.length,
    );
    if ((pageValue - 1) * 20 >= transactions.length) setPageValue(1);
  }, [transactions]);

  useEffect(() => {
    const start = (pageValue - 1) * 20;
    setPagesNumber(Math.ceil(transactions.length / 20));
    setpaginatedTranslations(transactions.slice(start, start + 20));
  }, [pageValue, transactions]);

  return (
    <div>
      <Table
        pages={pagesNumber}
        currentPage={pageValue}
        setPage={setPageValue}
        transactions={paginatedTranslations}
        removeTransaction={removeTransaction}
      />
    </div>
  );
}
