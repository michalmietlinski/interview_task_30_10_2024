import { TransactionInterface } from "../utils/types";
import { useState } from "react";

export default function AdditionalInfo({
  tr,
  showAll,
}: {
  tr: TransactionInterface;
  showAll: boolean;
}) {
  return (
    <div
      className={`flex flex-row justify-start  w-full gap-8 overflow-hidden transition-all duration-300 ease-in-out ${showAll ? "max-h-28" : "max-h-0"}`}
    >
      <div className="px-2 flex flex-col gap-4 basis-1/2 grow-0">
        <div>Address:</div>
        <div>{tr.address}</div>
      </div>
      <div className="px-2 flex flex-col gap-4 basis-1/2 grow-0">
        <div>Description:</div>
        <div>{tr.description}</div>
      </div>
    </div>
  );
}
