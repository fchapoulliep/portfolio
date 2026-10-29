import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./components/App";

test("renders the home page with its navigation", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", { level: 1, name: "Florian Chapoullié-Pino" })
  ).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Contact" })).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: "Retour à l'accueil" })
  ).toBeInTheDocument();
});
