import { SyntheticEvent, useRef, useState } from "react";
import { loginService } from "../../services/loginService";
import { useAppContext } from "../../store/AppStore";
import Loader from "../components/Loader";
import ToastError from "../components/ToastError";
import "./LoginPage.scss";
import { useNavigate } from "react-router-dom";
import storageApp from "../../store/StorageApp";

export default function LoginPage() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState("");
  const [load, setLoad] = useState<boolean>(false);
  const [disabledButton, setDisabledButton] = useState<boolean>(true);

  const { setLoginUser } = useAppContext();

  const navigate = useNavigate();

  const sendLogin = async (event: SyntheticEvent) => {
    event.preventDefault();

    setLoad(true);

    try {
      const loginResponse = await loginService.login(username, password);
      if (loginResponse) {
        setLoginUser(loginResponse);
        storageApp.saveUser(loginResponse);
        navigate("/");
      }
      setUsername("");
      setPassword("");
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      }
    } finally {
      setLoad(false);
    }
  };

  const closeError = () => {
    setError("");
  };

  const checkButton = () => {
    if (username.length > 0 && password.length > 4) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  };

  const updateUsername = (value: string) => {
    setUsername(value);
    checkButton();
  };

  const updatePassword = (value: string) => {
    setPassword(value);
    checkButton();
  };

  const getClassButton = () => {
    return disabledButton
      ? "amazyno-button amazyno-button-disable"
      : "amazyno-button amazyno-button-enable";
  };

  return (
    <div className="login-page">
      {error.length > 0 && (
        <div className="error">
          <ToastError text={error} onClose={closeError} />
        </div>
      )}
      <img src="/assets/background-login.jpg" alt="backgroud login" />
      <div className="login-box">
        <h5 className="title">
          Effettua l'accesso...
          <div>...per comprare i tuoi prodotti preferiti</div>
        </h5>

        <form className="row form-login" onSubmit={sendLogin}>
          <input
            value={username}
            type="text"
            name="username"
            className="amazyno-input"
            placeholder="Username"
            onChange={(event) => updateUsername(event.target.value)}
          />
          <input
            value={password}
            type="password"
            name="password"
            className="amazyno-input"
            placeholder="Password"
            onChange={(event) => updatePassword(event.target.value)}
          />
          <button
            type="submit"
            className={getClassButton()}
            disabled={disabledButton}
          >
            {load && <Loader />}
            {!load && <div>Login</div>}
          </button>
        </form>
      </div>
    </div>
  );
}
