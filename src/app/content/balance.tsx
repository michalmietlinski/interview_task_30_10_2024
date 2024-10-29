import { useMemo } from "react";
import { TransactionInterfaces } from "../utils/types";
import { sumBalance } from "../utils/methods";

export default function Balance({filteredList}: {filteredList: TransactionInterfaces}) {
	const balanceValue = useMemo(()=>{
		return sumBalance(filteredList);
	}, [filteredList])
  return (
   <div>
	<b>Balance:</b> {balanceValue}
    </div>
  );
}