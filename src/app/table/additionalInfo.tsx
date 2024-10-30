import { TransactionInterface } from "../utils/types";

export default function AdditionalInfo({
  tr,
  showAll,
}: {
  tr: TransactionInterface;
  showAll: boolean;
}) {
  return (
    <div
      data-testid="test-additional-info"
      className={`flex flex-row justify-start  w-full gap-8 overflow-hidden transition-all duration-300 ease-in-out ${showAll ? "max-h-28" : "max-h-0"}`}
    >
      <div className="px-2 flex flex-col gap-4 basis-1/2 grow-0">
        <h3 tabIndex={0} className="font-bold">
          Address:
        </h3>
        <span tabIndex={0} data-testid="test-address">
          {tr.address}
        </span>
      </div>
      <div className="px-2 flex flex-col gap-4 basis-1/2 grow-0">
        <h3 tabIndex={0} className="font-bold">
          Description:
        </h3>
        <span tabIndex={0} data-testid="test-description">
          {tr.description}
        </span>
      </div>
    </div>
  );
}
