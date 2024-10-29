import { TransactionInterface } from "../utils/types";
import { useState } from "react";
import AdditionalInfo from "./additionalInfo";

export default function SingleTransaction({
  singleTransaction,
  removeTransaction,
}: {
  singleTransaction: TransactionInterface;
  removeTransaction: (val: number | string) => void;
}) {
  const [showAll, setShowAll] = useState<boolean>(false);
  return (
    <div className="flex flex-col gap-8 py-8 bg-gray-300 border-b-4">
      <div className="flex flex-col lg:flex-row justify-between w-full gap-8">
        <div className="min-w-8 text-center"> {singleTransaction.id}</div>
        <div> {singleTransaction.amount}</div>
        <div> {singleTransaction.beneficiary}</div>
        <div> {singleTransaction.account}</div>
        <div> {new Date(singleTransaction.date).toLocaleString()}</div>

        <div className="min-w-32 text-center flex flex-col">
          <button onClick={() => setShowAll(!showAll)}>
            {!showAll ? "Show More" : "Show less"}
          </button>
          <button onClick={() => removeTransaction(singleTransaction.id)}>
            Remove
          </button>
        </div>
      </div>
      <AdditionalInfo tr={singleTransaction} showAll={showAll} />
    </div>
  );
}
