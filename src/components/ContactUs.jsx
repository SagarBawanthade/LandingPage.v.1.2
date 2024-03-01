import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";

const Contactus = () => {
  const [userData, setUserData] = useState({
    username: "",
    phone: "",
    email: "",
    companyDomain: "",
    companyName: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUserData({ ...userData, [name]: value });
  };

  //Connect with Firebase
  const submitData = async (event) => {
    event.preventDefault();

    const { username, phone, email, companyDomain, companyName } = userData;
    if (
      userData.username.trim() === "" ||
      userData.email.trim() === "" ||
      userData.phone.trim() === "" ||
      userData.companyName.trim() === "" ||
      userData.companyDomain.trim() === ""
    ) {
      Swal.fire({
        title: "Error",
        text: "Please Fill all details",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }
    const res = await fetch(
      "https://landingpage-2ba6a-default-rtdb.firebaseio.com/contactDataRecords.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          phone,
          email,
          companyDomain,
          companyName,
        }),
      }
    );
    if (res) {
      setUserData({
        username: "",
        phone: "",
        email: "",
        companyDomain: "",
        companyName: "",
      });
      Swal.fire({
        title: "Success",
        text: "Data Submitted Successfully",
        icon: "success",
        confirmButtonText: "OK",
      });
    } else {
      Swal.fire({
        title: "Error",
        text: "Error Submitting Form",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div>
      <div className="contactform">
        <div className="flex-co">
          <h1>We Are Waiting !</h1>
        </div>
        <div className="flex-co">
          <p className="c">
            {" "}
            Have questions about pricing, plans, or our Awesome Product? Fill
            out the form and a sales representative will be in touch shortly.
          </p>
        </div>
        <br />
        <br />
        <br />
        <div className="flex-co">
          <form method="POST">
            <div className="form1">
              <p className="formcontent">Name</p>
              <br />
              <input
                type="text"
                placeholder="Enter name here"
                name="username"
                id=""
                value={userData.username}
                onChange={postUserData}
              />
              <br />

              <p className="formcontent">Email</p>
              <br />
              <input
                className=""
                type="text"
                placeholder="Your Email"
                name="email"
                id=""
                value={userData.email}
                onChange={postUserData}
              />
              <br />

              <p className="formcontent">Phone</p>
              <br />
              <input
                type="number"
                className=""
                placeholder="Your Phone number"
                name="phone"
                id=""
                value={userData.phone}
                onChange={postUserData}
              />
              <br />

              <p className="formcontent">Company Name</p>
              <br />
              <input
                type="text"
                className=""
                placeholder="Enter your Company name"
                name="companyName"
                id=""
                value={userData.companyName}
                onChange={postUserData}
              />
              <br />

              <p className="formcontent">Company Domain</p>
              <br />
              <input
                type="text"
                className=""
                placeholder="Business Category"
                name="companyDomain"
                id=""
                value={userData.companyDomain}
                onChange={postUserData}
              />
              <br />

              <div className="flex-co">
                <div className="submit-div">
                  <input
                    className="btn-submit"
                    type="submit"
                    value="Submit"
                    onClick={submitData}
                  />
                  <br />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
