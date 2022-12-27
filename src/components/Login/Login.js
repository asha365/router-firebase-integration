import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {signInWithGoogle} = useFirebase();
    return (
        <div>
            <h1>Please login</h1>
            <div style={{margin: '20px'}}>
                <button onClick={signInWithGoogle}>Google Sign In</button>
            </div>
            <form>
                <input type="email" name="" placeholder='Your Email' id="" />
                <br/>
                <input type="password" name="" placeholder='Password' id="" />
                <br/>
                <input type="submit" value="Login"  />
            </form>
        </div>
    );
};

export default Login;