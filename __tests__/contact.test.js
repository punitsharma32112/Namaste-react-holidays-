import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

describe("Contact Component", () => {
  test("should load the Contact Us heading", () => {
    render(<Contact />);
    const mainHeading = screen.getByRole("heading", { level: 1 });
    expect(mainHeading).toBeInTheDocument();
    expect(mainHeading).toHaveTextContent("Contact Us");
  });

  test("should display contact information", () => {
    render(<Contact />);
    const emailLink = screen.getByRole("link", {
      name: /PUNIT9705@gmail.com/i,
    });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute("href", "mailto:PUNIT9705@gmail.com");

    // Check for the phone link
    const phoneLink = screen.getByRole("link", { name: /\+91-8920780176/i });
    expect(phoneLink).toBeInTheDocument();
    expect(phoneLink).toHaveAttribute("href", "tel:+918920780176");

    // Check for the GitHub link
    const githubLink = screen.getByRole("link", { name: /github/i });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/punitsharma32112"
    );
  });

  test("should display social media follow links", () => {
    render(<Contact />);

    // Check for Instagram link
    const instagramLink = screen.getByRole("link", { name: /instagram/i });
    expect(instagramLink).toBeInTheDocument();
    expect(instagramLink).toHaveAttribute(
      "href",
      "https://www.instagram.com/your-instagram"
    );

    // Check for Twitter link
    const twitterLink = screen.getByRole("link", { name: /twitter/i });
    expect(twitterLink).toBeInTheDocument();
    expect(twitterLink).toHaveAttribute(
      "href",
      "https://twitter.com/your-twitter"
    );
  });
});
