import "./AdminPage.css";
const Admin = (props:any) => {
    return (
        <div className="backgroundColor">
            Cia yra admin langas
            <div>Prisijungimo login yra {props.loginName}</div>
            <div>Kiti props yra {props.value1}, {props.value2}</div>
        </div>
    )
}

export default Admin;