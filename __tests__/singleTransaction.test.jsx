import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import SingleTransaction from "../src/app/table/transaction";
import { mockTwoTransactions } from "../testUtils";

describe("SingleTransaction", () => {
  it("renders a SingleTransaction", () => {
    const removeTransaction = jest.fn();
    const transaction = mockTwoTransactions[0];

    render(
      <SingleTransaction
        singleTransaction={transaction}
        removeTransaction={removeTransaction}
      />,
    );
    const label = screen.getByTestId("test-id");
    expect(label).toBeInTheDocument();
    expect(label.textContent).toEqual(transaction.id.toString());
    const label2 = screen.getByTestId("test-amount");
    expect(label2).toBeInTheDocument();
    expect(parseFloat(label2.textContent)).toEqual(transaction.amount);
    const label3 = screen.getByTestId("test-beneficiary");
    expect(label3).toBeInTheDocument();
    expect(label3.textContent.trim()).toEqual(transaction.beneficiary);

    const label4 = screen.getByTestId("test-account");
    expect(label4).toBeInTheDocument();
    expect(label4.textContent.trim()).toEqual(transaction.account);

    const label5 = screen.getByTestId("test-date");
    expect(label5).toBeInTheDocument();
    expect(label5.textContent).toEqual(
      new Date(transaction.date).toLocaleString(),
    );
  });
  it("Does proper action", () => {
    jest.useFakeTimers();
    jest.spyOn(global, "setTimeout");
    const removeTransaction = jest.fn();
    const transaction = mockTwoTransactions[0];

    render(
      <SingleTransaction
        singleTransaction={transaction}
        removeTransaction={removeTransaction}
      />,
    );
    const removeButton = screen.getByTestId("test-remove_button");
    expect(removeButton).toBeInTheDocument();
    fireEvent.click(removeButton);
    expect(setTimeout).toHaveBeenCalledTimes(1);
    jest.runAllTimers();
    expect(removeTransaction).toHaveBeenCalledTimes(1);
  });

  it("Expands properly", () => {
    jest.useFakeTimers();
    const removeTransaction = jest.fn();
    const transaction = mockTwoTransactions[0];

    render(
      <SingleTransaction
        singleTransaction={transaction}
        removeTransaction={removeTransaction}
      />,
    );
    const label1 = screen.getByTestId("test-additional-info");
    expect(label1.getAttribute("class")).toContain("max-h-0");
    const showButton = screen.getByTestId("test-show_button");
    expect(showButton).toBeInTheDocument();
    fireEvent.click(showButton);
    jest.runAllTimers();
    expect(label1.getAttribute("class")).toContain("max-h-28");
  });
});
