import "./UserPage.css";
const User = (props:any) => {
    return (
        <div className={"backgroundColors"}>
            Cia yra User langas
            <div>Prisijungimo login yra {props.loginName}</div>

        </div>
    )
}

export default User;