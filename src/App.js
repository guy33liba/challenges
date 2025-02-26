import React from "react";
import { useState } from "react";

const App = () => {
 const [age, setAge] = useState(0);
 function createPerson(name) {
  return {
   getName: function () {
    return name; // Access to `name` from outer scope
   },
   getAge: function () {
    return age; // Access to `age` from outer scope
   },
   incrementAge: function () {
    age++; // `age` is modified via closure
   },
  };
 }
 const person = createPerson("john");
 const handleincrementage = () => {
  setAge((prev) => prev + 1);
 };
 return (
  <div>
   <h1>Name: {person.getName}</h1>
   <h1>age{person.getAge}</h1>
   <button onClick={() => handleincrementage()}>increment age </button>
   {age}
  </div>
 );
};

export default App;
