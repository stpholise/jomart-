import { render, screen } from "@testing-library/react";
import Header from "../components/layout/Header";
import { expect, describe, it } from "vitest";
import { MemoryRouter } from "react-router";

describe("Header", () => {
  it("renders the logo", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    expect(screen.getByAltText(/logo/i)).toBeInTheDocument();
  });
});
