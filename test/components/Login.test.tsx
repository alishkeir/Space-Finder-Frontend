import { Login } from "../../src/components/Login";
import ReactDOM from "react-dom";

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
});
