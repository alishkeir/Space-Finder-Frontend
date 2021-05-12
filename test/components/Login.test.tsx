import { Login } from "../../src/components/Login";
import ReactDOM from "react-dom";
import { fireEvent } from "@testing-library/react";

describe("Login Component Test Suite", () => {
  let container: HTMLDivElement;
  const authServiceMock = {
    login: jest.fn(),
  };

  const setUserMock = jest.fn();

  //^ Setup our component
  beforeEach(() => {
    // console.log("Before Each");
    container = document.createElement("div");
    document.body.appendChild(container);
    ReactDOM.render(
      <Login authService={authServiceMock as any} setUser={setUserMock} />,
      container
    );
  });

  //^ Clean up the component
  afterEach(() => {
    // console.log("After Each");
    document.body.removeChild(container);
    container.remove();
    jest.clearAllMocks;
  });

  test("Renders Correclty Initial Document", () => {
    // expect(true).toBeTruthy();
    const title = document.querySelector("h2");
    expect(title!.textContent).toBe("Please Login!");

    const inputs = document.querySelectorAll("input");
    expect(inputs).toHaveLength(3);
    expect(inputs[0].value).toBe("");
    expect(inputs[1].value).toBe("");
    expect(inputs[2].value).toBe("Login");

    const labels = document.querySelector("label");

    expect(labels).not.toBeInTheDocument();
  });

  //^ Now with React Testing Library

  test("Passes Credentials Correclty Initial Document", () => {
    const inputs = document.querySelectorAll("input");
    const loginInput = inputs[0];
    const passwordInput = inputs[1];
    const confirmButton = inputs[2];

    fireEvent.change(loginInput, { target: { value: "someUser" } });
    fireEvent.change(passwordInput, { target: { value: "somePassword" } });
    fireEvent.change(confirmButton);

    expect(authServiceMock.login).not.toBeCalledWith(
      "someUser",
      "somePassword"
    );
  });
});
