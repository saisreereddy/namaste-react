import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom";

describe("Contact Us Page Test Case", () => { // describe is used to group test cases categorically, we can have individual test cases also without using describe

    // Helper Functions
    beforeAll(() => {

    }) // Before Running All Test Cases
    afterAll(() => {

    }) // After Running All Test Cases
    beforeEach(() => {
        
    }) // Before Running Each Test Case, for example if we have to do some clean up tasks
    afterEach(() => {
        
    }) // Afetr Running Each Test Case, for example if we have to do some clean up tasks

    test("Should load contact us component", () => {

        render(<Contact/>);
        
        const heading = screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument();
    }) // instead of test we can write is as "it". It is more like an alias
    
    test("Should load button inside contact component", () => {
    
        render(<Contact/>);
        
        const button = screen.getByRole("button"); //Passes
        //const button = screen.getByText("random"); Fails
    
        expect(button).toBeInTheDocument();
    })
    
    test("Should load input name inside contact component", () => {
    
        render(<Contact/>);
        
        const inputName = screen.getByPlaceholderText("name"); // Passes
        //const inputName = screen.getByPlaceholderText("name1"); Fails
    
        expect(inputName).toBeInTheDocument();
    })
    
    test("Should load 2 input boxes on the contact component", () => {
    
        render(<Contact/>);
        
        const inputBoxes = screen.getAllByRole("textbox");
    
        //console.log(inputBoxes) Returns a jsx element
    
        expect(inputBoxes.length).toBe(2); // Passes
    
        expect(inputBoxes.length).not.toBe(3); // Passes
    })
});
