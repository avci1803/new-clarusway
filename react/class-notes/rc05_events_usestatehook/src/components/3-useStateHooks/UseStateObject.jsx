import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Mehmet",
    surname: "Can",
    salary: 10000,
  });

  const handleSalaryInc = () => {
    setPerson({ ...person, salary: person.salary + 500 });
  };
  const handleSalaryDec = () => {
    setPerson({ ...person, salary: person.salary - 500 });
  };
  const handleClear = () => {
    setPerson({
      ...person,
      name: person.name.toUpperCase(),
      surname: "NoName",
    });
  };
  return (
    <div className="container text-center mt-4">
      <h2 className="text-danger">Use State Object</h2>
      <h3 className="display-4">
        {person.name} {person.surname}
      </h3>
      <h3 className="display-4">Salary:{person.salary}</h3>
      <button onClick={handleSalaryInc} className="btn btn-success">
        SALARY INC
      </button>
      <button onClick={handleClear} className="btn btn-danger">
        CLR
      </button>
      <button onClick={handleSalaryDec} className="btn btn-warning">
        SALARY DEC
      </button>
    </div>
  );
};

export default UseStateObject;
