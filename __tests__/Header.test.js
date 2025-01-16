import { render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appstore from "../../utils/appstore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should load header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appstore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // Check if the login button is rendered
  //this is one way to find the button and now i am going to show you how various buttons are there also to show that 
 // const loginButton = screen.getByRole("button"); // Ensure the text matches
 const loginButton=screen.getByText("Login");
 const cartItems=screen.getByText("/Cart/");
 //but best method is get by role yeh yaad rkhna yeh important hai humesha ke liye 
 //suppose there were multiple buttons and i want to find specific login button how to do that 
 //const loginButton=screen.getByRole("button",{nam:"Login"});

  expect(loginButton).toBeInTheDocument();
  expect(cartItems).toBeInTheDocument();
  //here we have used only regex this is the best method in this we dont have to write a exact string 


});
