import "@testing-library/jest-dom";
import { render, screen, fireEvent, keyboard } from "@testing-library/react";
import Footer from "../src/app/content/footer";

describe("Footer", () => {
  it("renders a Footer", () => {
    render(<Footer />);
    const label = screen.getByText("Footer Item");
    expect(label).toBeInTheDocument();
    const header = screen.getByRole("heading", { level: 2 });
    expect(header).toBeInTheDocument();
  });
});
