interface User{
    name: string; //default required prop
    surname?: string; //? means optional
}

const Welcome = (props : User) => {
    return (
    <>
        Hello, {props.name} {props.surname}
    </>
)
}
const UserButton = () =>{
    return(
        <button>
            Click me!
        </button>
    )
}
const WelcomeCopy = ({
    user,
    salary
}: any) => {
    return (
        <>
            <div>
                Hello, {user.name} {user.surname}
            </div>
            <br/>
            <div>
                Your Salary is <strong>{salary}</strong>
            </div>
        </>
    )
}
export default Welcome;
export {UserButton};
export {WelcomeCopy};