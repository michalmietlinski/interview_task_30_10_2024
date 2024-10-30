import { fieldData } from "../utils/types";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

export default function TransactionFormField({
  field,
  register,
  errors,
}: {
  field: fieldData;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}) {
  return (
    <div>
      <label className="flex flex-row justify-between">
        <span className="min-w-48">{field.label}</span>
        <input
          type={field.type}
          className="text-black grow"
          {...register(field.id, field.requirements)}
        />
      </label>
      <div className="text-right text-rose-500">
        {errors[field.id] && <span>{`${errors[field.id]?.message}`}</span>}
      </div>
    </div>
  );
}
