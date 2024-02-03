import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom";

it("Should load Header Component with a login button", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button");

    //const loginButton = screen.getByRole("button", { name: "Login"}); another way of writing

    //const loginButton = screen.getByText('Login'); another way of writing

    expect(loginButton).toBeInTheDocument();

})

it("Should load Header Component with a cart value as 0", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    );

    const cartItems = screen.getByText("Cart - (0 items)");

    expect(cartItems).toBeInTheDocument();

})

it("Should load Header Component with a cart item", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    );

    const cartItem = screen.getByText(/Cart/);

    expect(cartItem).toBeInTheDocument();

})

it("Should Change Login Button to Logout on Click", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: "Login"});

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", { name: "Logout"});

    expect(loginButton).toBeInTheDocument();

})