import { login } from "../data/userService";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <main className="main-center">
      <label htmlFor="email">Email</label>
      <input id="email"/>
      <label htmlFor="pasword">Password</label>
      <input id="password" type="password" />
      <br></br>
      <button  className="App-mini-button">Login with email</button>

      <br/>
      <br/>
      <button className="App-mini-button" onClick={() => login(navigate)}>Login with Google</button>
    </main>
  )
}

export default Login;
