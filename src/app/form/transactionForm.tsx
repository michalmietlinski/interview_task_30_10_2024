import formFields from "../utils/formFields";
import { fieldData, formState, TransactionInterface } from "../utils/types";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import TransactionFormField from "./transactionFormField";
import { useState } from "react";

export default function TransactionForm({
  addNew,
}: {
  addNew: (values: TransactionInterface) => void;
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [created, setCreated] = useState<boolean>(false);
  const onSubmit = (data: formState) => {
    if (!created) {
      addNew({
        id: uuidv4(),
        amount: data.amount,
        account: data.account,
        description: data.description,
        address: data.address,
        beneficiary: data.beneficiary,
        date: new Date().toString(),
      });
      setCreated(true);
      setTimeout(() => {
        setCreated(false);
        reset();
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 tabIndex={0} className="font-bold">
        Add new Transaction: {created && <span>Created Succesfully</span>}
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        {formFields.map((singleField: fieldData) => {
          return (
            <div key={singleField.id}>
              <TransactionFormField
                field={singleField}
                register={register}
                errors={errors}
              />
            </div>
          );
        })}
        <input className="cursor-pointer" type="submit" value={"Create"} />
      </form>
    </div>
  );
}
