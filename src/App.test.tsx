import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import emailjs from "@emailjs/browser";
import App from "./components/App";

vi.mock("@emailjs/browser", () => ({ default: { send: vi.fn() } }));

beforeEach(() => {
  window.location.hash = "#/";
  document.documentElement.classList.remove("dark");
  window.localStorage.clear();
});

test("renders the home page with its navigation", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", { level: 1, name: "Florian Chapoullié-Pino" })
  ).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Contact" })).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: "Retour à l'accueil" })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { level: 3, name: "Tableau associatif" })
  ).toBeInTheDocument();
});

test("the contact form points out the missing fields and sends nothing", async () => {
  window.location.hash = "#/contact";
  render(<App />);

  await userEvent.click(screen.getByRole("button", { name: "Envoyer" }));

  expect(screen.getByText("Veuillez entrer votre nom")).toBeInTheDocument();
  expect(
    screen.getByText("Veuillez entrer votre adresse e-mail")
  ).toBeInTheDocument();
  expect(screen.getByText("Veuillez entrer votre message")).toBeInTheDocument();
  expect(screen.getByLabelText("Nom")).toHaveFocus();
  expect(emailjs.send).not.toHaveBeenCalled();
});

test("the theme toggle switches to dark and remembers it", async () => {
  render(<App />);

  await userEvent.click(
    screen.getByRole("button", { name: "Passer au thème sombre" })
  );

  expect(document.documentElement).toHaveClass("dark");
  expect(window.localStorage.getItem("theme")).toBe("dark");
  expect(
    screen.getByRole("button", { name: "Passer au thème clair" })
  ).toBeInTheDocument();
});
