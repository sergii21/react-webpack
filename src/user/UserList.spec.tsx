import UserList from "./UserList";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

it("has header", () => {
  render(<UserList />);
  const header = screen.queryByRole("heading", {name: "Users list"});
  expect(header).toBeInTheDocument();
});
