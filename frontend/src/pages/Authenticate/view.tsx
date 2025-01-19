import { useAuthenticateModel } from "./model";
import { Form, FormsContainer } from "./styles";

export const AuthenticateView = ({
  newUser,
  user,
  handleLoginChange,
  handleRegisterChange,
  registerUser,
  loginUser,
}: ReturnType<typeof useAuthenticateModel>) => {
  return (
    <section className="hero">
      <FormsContainer>
        <header className="button-box">
          <div className="button-hid"></div>
          <button>Login</button>
          <button>Register</button>
        </header>
        <Form id="login" onSubmit={loginUser}>
          <input
            type="text"
            name="email"
            id="email"
            onChange={handleLoginChange}
            value={user.email}
          />
          <input
            type="text"
            name="password"
            id="password"
            onChange={handleLoginChange}
            value={user.password}
          />
          <button type="submit">Log in</button>
        </Form>
        <Form id="register" onSubmit={registerUser}>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleRegisterChange}
            value={newUser.name}
          />
          <input
            type="text"
            name="email"
            id="email"
            onChange={handleRegisterChange}
            value={newUser.email}
          />
          <input
            type="text"
            name="password"
            id="password"
            onChange={handleRegisterChange}
            value={newUser.password}
          />
          <span>
            I agree to the <a href="#">Terms & Services</a>
          </span>
          <button type="submit">Register</button>
        </Form>
      </FormsContainer>
    </section>
  );
};
