import { fieldData } from "../utils/types";

const formFields: fieldData[] = [
  {
    id: "amount",
    label: "Amount",
    type: "number",
    requirements: {
      required: "Amount is required",
      validate: (value: number) => value > 0 || "Amount must be positive",
    },
  },
  {
    id: "account",
    label: "Account number",
    type: "text",
    requirements: {
      required: "Account is required",
      validate: (value: string) => /^\d+$/.test(value) || "Numbers only",
    },
  },
  {
    id: "address",
    label: "Address",
    type: "text",
    requirements: {},
  },
  {
    id: "description",
    label: "Description",
    type: "text",
    requirements: {},
  },
  {
    id: "beneficiary",
    label: "Beneficiary",
    type: "text",
    requirements: {},
  },
];

export default formFields;
