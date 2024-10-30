import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import PaginationWrapper from "../src/app/table/paginationWrapper";
import { mockTwoTransactions } from "../testUtils";

describe("Table", () => {
  it("renders a Table", () => {
    const removeTransaction = jest.fn();
    const setPage = jest.fn();
    render(
      <PaginationWrapper
        transactions={mockTwoTransactions}
        pages={1}
        currentPage={1}
        setPage={setPage}
        removeTransaction={removeTransaction}
      />,
    );

    const label4 = screen.getByTestId("test-table");
    expect(label4).toBeInTheDocument();
  });
});
