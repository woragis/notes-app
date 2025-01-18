import { useAuthenticateModel } from "./model";
import { Form, FormsContainer } from "./styles";

export const AuthenticateView = ({}: ReturnType<
  typeof useAuthenticateModel
>) => {
  return (
    <section className="hero">
      <FormsContainer>
        <header className="button-box">
          <div className="button-hid"></div>
          <button>Login</button>
          <button>Register</button>
        </header>
        <Form id="login">
          <input type="text" name="email" id="email" />
          <input type="text" name="password" id="password" />
          <button type="submit">Log in</button>
        </Form>
        <Form id="register">
          <input type="text" name="name" id="name" />
          <input type="text" name="email" id="email" />
          <input type="text" name="password" id="password" />
          <span>
            I agree to the <a href="#">Terms & Services</a>
          </span>
          <button type="submit">Register</button>
        </Form>
      </FormsContainer>
    </section>
  );
};
