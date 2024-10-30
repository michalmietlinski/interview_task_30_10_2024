import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "../src/app/content/header";

describe("Header", () => {
  it("renders a Header", () => {
    render(<Header />);
    const label = screen.getByText("Navbar Item");
    expect(label).toBeInTheDocument();
    const header = screen.getByRole("heading", { level: 1 });
    expect(header).toBeInTheDocument();
  });
});
