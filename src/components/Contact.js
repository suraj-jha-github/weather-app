import React, { useState } from "react";
import FileBase64 from "react-file-base64";
import User from "./User";

const Contact = () => {
  const [display, setDisplay] = useState(false);
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    age: "",
    selectedFile: "",
  });

  const handleSubmit = (e) => {
    if (
      data.fname &&
      data.lname &&
      data.email &&
      data.mobile &&
      data.age &&
      data.selectedFile
    ) {
      e.preventDefault();
      setDisplay(true);
    } else {
      alert("Please Fill Up All Data");
    }
  };

  return (
    <div className="contact">
      <form onSubmit={handleSubmit} className={display ? "hide" : "show"}>
        <div className="input-field">
          <label htmlFor="fristName">Frist Name</label>
          <input
            type="text"
            placeholder="Enter Your Frist Name"
            id="fristName"
            value={data.fname}
            onChange={(e) => setData({ ...data, fname: e.target.value })}
          />
        </div>
        <div className="input-field">
          <label htmlFor="flastName">Last Name</label>
          <input
            type="text"
            placeholder="Enter Your Last Name"
            id="lastName"
            value={data.lname}
            onChange={(e) => setData({ ...data, lname: e.target.value })}
          />
        </div>
        <div className="input-field">
          <label htmlFor="emailfield">Your Email</label>
          <input
            type="email"
            placeholder="Enter Your Emailt"
            id="emailfield"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        <div className="input-field">
          <label htmlFor="mobile">Your Mobile</label>
          <input
            type="text"
            pattern="((\+*)(0*|(0 )*|(0-)*|(91 )*)(\d{12}+|\d{10}+))|\d{5}([- ]*)\d{6}"
            placeholder="Enter Your Mobile Number"
            id="mobile"
            value={data.mobile}
            onChange={(e) => setData({ ...data, mobile: e.target.value })}
          />
        </div>
        <div className="input-field">
          <label htmlFor="age">Your Age</label>
          <input
            pattern="^[0-9][0-9]"
            type="text"
            placeholder="Enter Your Age"
            id="age"
            value={data.age}
            onChange={(e) => setData({ ...data, age: e.target.value })}
          />
        </div>
        <div style={{ paddingTop: "2rem" }}>
          <FileBase64
            type="file"
            multiple={false}
            onDone={({ base64 }) => setData({ ...data, selectedFile: base64 })}
          />
        </div>
        <button type="submit">Add Contact</button>
      </form>
      <User data={data} display={display} />
    </div>
  );
};

export default Contact;
