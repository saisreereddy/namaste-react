import { fireEvent, render, screen } from "@testing-library/react"
import MOCK_DATA from "../mocks/resCardMock.json"
import RestaurantCard from "../RestaurantCard";
import "@testing-library/jest-dom";

it("should render RestaurantCart Component with props", () => {

    render (<RestaurantCard resData={MOCK_DATA}/>)

    const name = screen.getByText("Andhra Gunpowder");

    expect(name).toBeInTheDocument;
})