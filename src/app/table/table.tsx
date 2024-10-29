
import {TransactionInterface, TransactionInterfaces} from "../utils/types";
import SingleTransaction from "./transaction";

export default function Table({transactions, pages, currentPage, setPage, removeTransaction}: {transactions: TransactionInterfaces, pages:number, currentPage:number, setPage:(val:number)=>void, removeTransaction: (val: number | string)=>void}) {
	return (
   <div>
	<div className="flex invisible md:visible flex-row justify-end w-full gap-8  ">
		<div> Page:  <select value={currentPage} onChange={(e)=>setPage(parseInt(e.target.value))}>
					{new Array(pages).fill(1).map((value, index) =>(
						<option value={index+1} key={`option-${index+1}`}>
							{index+1}
						</option>
					))}
			</select>
		</div>
	</div>
	<div className="flex invisible md:visible flex-row justify-between w-full gap-8  border-b-4">
	<div className="min-w-8">Id:</div>
		<div className="text-left">Amount</div>
		<div>Beneficiary</div>
		<div>Account</div>
		<div>Date</div>
		<div className="min-w-32 text-center">
		
		</div>
	</div>
	{transactions.map((el: TransactionInterface)=>{
		return <SingleTransaction tr={el} key={el.id} removeTransaction={removeTransaction}/>
	})}
    </div>
  );
}
