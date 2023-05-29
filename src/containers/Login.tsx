import Admin from "./Admin";
import User from "./User";
const Login = (props:any) =>{

    const doLogin = (loginValue: any) => {
        if(loginValue === 'admin'){
            return <Admin value1={props.item1} value2={props.item2} loginName={props.name}/>;
        }
        return <User loginName={props.value}/>;
    }
    return <div>
        {doLogin(props.value)}
    </div>
}
export default Login;