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
    <div className="flex flex-col gap-8 py-2 lg:py-8 bg-gray-300 border-b-4">
      <div className="flex flex-row  justify-between w-full lg:gap-8">
        <div className="flex grow flex-col sm:flex-row flex-wrap justify-between lg:flex-nowrap ">
          <span tabIndex={0} className="min-w-8 lg:text-center">
            {" "}
            {singleTransaction.id}
          </span>
          <span tabIndex={0}> {singleTransaction.amount}</span>
          <span tabIndex={0}> {singleTransaction.beneficiary}</span>
          <span tabIndex={0}> {singleTransaction.account}</span>
          <span tabIndex={0}>
            {" "}
            {new Date(singleTransaction.date).toLocaleString()}
          </span>
        </div>
        <div className="min-w-32 text-left lg:text-center flex flex-col font-bold">
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
