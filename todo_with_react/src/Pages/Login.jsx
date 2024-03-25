import {logInWithGoogle, useAuth, logout} from "../Firebase/UserService";


const Login = () => {

    const user = useAuth();
    if(user)
        return (
            <div className="App">
                <h2>Hello there, General {user.displayName}</h2>
                <button onClick={logout}>Wyloguj</button>
            </div>
            );

    return (
        <div className="App">
            <h2>Please log in</h2>
            <button onClick={logInWithGoogle}>
                Login with big G</button>
        </div>
        );
}

export default Login;
