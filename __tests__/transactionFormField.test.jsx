import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import TransactionFormField from "../src/app/form/transactionFormField";
import { mockFormField, mockTwoTransactions } from "../testUtils";

describe("TransactionFormField", () => {
  it("renders a TransactionFormField", () => {
    const register = jest.fn();
    const errorsMock = {};
    errorsMock[mockFormField.id] = {};
    render(
      <TransactionFormField
        field={mockFormField}
        register={register}
        errors={errorsMock}
      />,
    );
    const label = screen.getByTestId("test-label");
    expect(label).toBeInTheDocument();
    expect(label.textContent).toEqual(mockFormField.label);
    expect(register).toHaveBeenCalledTimes(1);
  });
});
