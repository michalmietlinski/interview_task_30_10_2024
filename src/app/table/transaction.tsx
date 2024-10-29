
import {TransactionInterface} from "../utils/types";
import { useState } from 'react';

export default function SingleTransaction({tr, removeTransaction}: {tr: TransactionInterface, removeTransaction: (val: number | string)=>void}) {
	const [showAll, setShowAll] = useState<boolean>(false);
  return (
	<div className="flex flex-col gap-8 py-8 bg-gray-300 border-b-4">
   	<div className="flex flex-col lg:flex-row justify-between w-full gap-8">
		<div className="min-w-8 text-center"> {tr.id}</div>
		<div> {tr.amount}</div>
		<div> {tr.beneficiary}</div>
		<div> {tr.account}</div>
		<div> {new Date(tr.date).toLocaleString()}</div>

		<div className="min-w-32 text-center">
			<button onClick={()=>setShowAll(!showAll)}>{!showAll ? 'Show More' : 'Show less'}</button>
			<button onClick={()=>removeTransaction(tr.id)}>Remove</button>
		</div>

    </div>
	{<div className={`flex flex-row justify-start  w-full gap-8 overflow-hidden transition-all duration-300 ease-in-out ${showAll ? "max-h-28" : "max-h-0"}`}>
		<div className="px-2 flex flex-col gap-4 basis-1/2 grow-0"> 
			<div>Address:</div>
			<div>{tr.address}</div>
		</div>
		<div className="px-2 flex flex-col gap-4 basis-1/2 grow-0"> 
			<div>Description:</div>
			<div>{tr.description}</div>
		</div>
	</div>}
	</div>
  );
}
