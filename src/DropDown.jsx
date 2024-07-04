import React, { useState } from "react";
import './DropDown.css'
import data from "./celebrities.json";
const DropDown = () => {
  const [selectperson, setselectperson] = useState(null);
  const [isopen, setisopen] = useState(false);

  const calculate = (dob) => {
    const birthdate = new Date(dob);
    const today = new Date();

    let age = today.getFullYear() - birthdate.getFullYear();
    const month = today.getMonth() - birthdate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) {
      age--;
    }
    return age;
  };

  const handlechange = (e) => {
    const name = e.target.value;
    const person = data.find((person) => person.first === name);
    setselectperson(person);
    setisopen(false);
  };
  return (
    <div>
      <select onChange={handlechange} onClick={() => setisopen(!isopen)}>
        <option value={isopen ? '-':'+'}>Select a Person</option>
        {data.map((person, id) => (
          <option key={id} value={person.first}>
            {person.first}{" "}
          </option>
        ))}
      </select>

      {selectperson && (
        <div className="card">
          {/* <h2 >{selectperson.first}</h2> */}
          <button></button>
          {isopen && (
            <div className="details">
              <p>Age <br></br> {calculate(selectperson.dob)}</p>
              <p> Gender <br></br>{selectperson.gender}</p>
              <p>Coutry<br></br> {selectperson.country}</p>
              <div>
              <p>Description<br></br>
                {selectperson.description}
                     </p>
                </div>
              
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DropDown;
