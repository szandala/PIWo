import { logInWithGoogle, useAuth, logout } from "../Firebase/userService"


const LoginPage = () => {

    const user = useAuth();
    console.log({user});
    if (user)
        return<div className="App">
            <h2>You are logged as {user?.displayName}</h2>
            <button onClick={logout}>Logout</button>
        </div>

    return <div className="App">
            <h2>You are not logged</h2>
            <button onClick={logInWithGoogle}>Login with Google</button>
        </div>
}

export default LoginPage;
