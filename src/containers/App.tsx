import React from 'react';
import Welcome, {UserButton, WelcomeCopy} from "../components/Welcome";


function App() {
const welcome =  <WelcomeCopy user={{
  name: "PetrasCopy",
  surname: "Petraitis"}} salary={1500}/>

  const loopOf5Welcomes = () =>{
  return Array.from(Array(5).keys()).map((val:number)=> welcome);
  }

  return (
    <div>
      <Welcome name={"Petras"} surname={"Petraitis"}/>
        <br/>
        <Welcome name={"Antanas"}/>
        <br/>
        <br/>
        <input/>
        <UserButton/>
        <br/>
      {welcome}
      {loopOf5Welcomes()}
    </div>
  );
}

export default App;
