import formFields from "../utils/formFields";
import { fieldData, formState, TransactionInterface } from "../utils/types";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import TransactionFormField from "./transactionFormField";

export default function TransactionForm({
  addNew,
}: {
  addNew: (values: TransactionInterface) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: formState) => {
    addNew({
      id: uuidv4(),
      amount: data.amount,
      account: data.account,
      description: data.description,
      address: data.address,
      beneficiary: data.beneficiary,
      date: new Date().toString(),
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <h2>Add new Transaction:</h2>
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
        <input type="submit" value={"Create"} />
      </form>
    </div>
  );
}
