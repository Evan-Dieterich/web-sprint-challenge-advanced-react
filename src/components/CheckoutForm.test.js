import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm/>)
});

test("shows success message on submit with form details", () => {
    render(<CheckoutForm />);

    const firstName = screen.getByLabelText(/First Name/i);
    const lastName = screen.getByLabelText(/Last Name/i);
    const address = screen.getByLabelText(/Address/i);
    const city =screen.getByLabelText(/City/i);
    const state = screen.getByLabelText(/State/i);
    const zipcode = screen.getByLabelText(/Zipcode/i);
    const button = screen.getByRole('button');

    userEvent.type(firstName, "Evan");
    userEvent.type(lastName, "Dieterich");
    userEvent.type(address, "1234 Fake St.");
    userEvent.type(city, "Phoenix");
    userEvent.type(state, "Arizona");
    userEvent.type(zipcode, "85345");
    userEvent.click(button);

    const expectValues = document.querySelector("[data-testid='greatSuccess']");

    expect(expectValues).toHaveTextContent("Evan Dieterich");
    expect(expectValues).toHaveTextContent("1234 Fake St.")
    expect(expectValues).toHaveTextContent("Phoenix");
    expect(expectValues).toHaveTextContent("Arizona");
    expect(expectValues).toHaveTextContent("85345");

});
