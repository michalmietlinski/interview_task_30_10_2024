export interface TransactionInterface {
  id: number | string;
  amount: number;
  beneficiary: string;
  account: string;
  address: string;
  date: string;
  description: string;
}

export type TransactionInterfaces = TransactionInterface[];

export type AvailableFormtypes = "text" | "number";
export type AvailableFieldIds =
  | "amount"
  | "account"
  | "address"
  | "description";
export interface formState {
  amount: number;
  account: string;
  address: string;
  description: string;
  beneficiary: string;
}
export interface fieldData {
  id: string;
  type: AvailableFormtypes;
  label: string;
  requirements: {};
}
