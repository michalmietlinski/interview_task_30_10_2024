import Table from '../table/table'; 
import Balance from './balance';
import FetchAll from '../fetcher'
import Filter from '../filter';
import TransactionForm from '../form/transactionForm';
import { useState, useEffect } from 'react';
import {TransactionInterface, TransactionInterfaces} from "../utils/types";
export default function Main() {
	const [data, setData] = useState<TransactionInterfaces>([]);
	const [filteredList, setFilteredList] = useState<TransactionInterfaces>([]);
	const [filterValue, setFilterValue] = useState<string>('');
	const [pageValue, setPageValue] = useState<number>(1);
	const [pagesNumber, setPagesNumber] = useState<number>(1);
	const [caseSensitive, setCaseSensitive] = useState<boolean>(false);
	const setValue=(info: TransactionInterface)=>{
		setData(prevState => {
			return [
			  ...prevState,
			  info
			];
		});
	}
	const removeTransaction =(id: string | number) => {
		setData(prevState => {
			const newState = prevState.filter((el)=>el.id !== id)
			return [
			  ...newState,
			];
		});
	};
	useEffect(()=>{
		setPageValue(1);
	},[filterValue])
	useEffect(() => {
		const newFilteredList = data.filter((element: TransactionInterface)=>{
			return !element.beneficiary || caseSensitive ?
			 element.beneficiary.includes(filterValue) :
			 element.beneficiary.toLowerCase().includes(filterValue.toLowerCase())
		});
		const start = (pageValue-1)*20;
		setFilteredList(newFilteredList.slice(start, start+20));
		setPagesNumber(Math.ceil(newFilteredList.length/20))
	}, [pageValue, caseSensitive, data, filterValue]);


	useEffect(() => {
		FetchAll().then((res) => {
			return res.json();
		  })
		  .then((data) => {
			setData(data);
		  });

	}, []);
  return (
	<main className="w-full max-w-screen-xl flex flex-col gap-8 py-8">
		<div className="flex md:flex-row-reverse flex-col gap-8 bg-stone-400">
			<div className="p-8 basis-3/6 bg-stone-800 text-white min-h-64"><TransactionForm addNew={setValue}/></div>

			<div className="basis-3/6 flex flex-col gap-8 justify-between bg-stone-300">
				<div className="p-8 bg-stone-100"><Balance filteredList={filteredList}/></div>
				<div className="p-8 bg-stone-200"><Filter setNewValue={setFilterValue} initialValue={filterValue} csValue={caseSensitive} setCSValue={setCaseSensitive}/></div>
			</div>
		</div>

		{filteredList.length > 0 &&
		<div className="p-8 bg-amber-500">
			 <Table pages={pagesNumber} currentPage={pageValue} setPage={setPageValue} transactions={filteredList} removeTransaction={removeTransaction}/>
		</div>
		}
		{filteredList.length === 0 &&
		<div className="p-8 bg-amber-500 text-white text-center">
			<b>No data found</b>
		</div>
		}

      </main>
  );
}
