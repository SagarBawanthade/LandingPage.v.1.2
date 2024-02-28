import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";

const Contactus = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyDomain, setCompanyDomain] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Check if any field is empty

    if (
      username.trim() === "" ||
      email.trim() === "" ||
      phone.trim() === "" ||
      companyName.trim() === "" ||
      companyDomain.trim() === ""
    ) {
      Swal.fire({
        title: "Error",
        text: "Please Fill all details",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/submitContactForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          phone,
          companyName,
          companyDomain,
        }),
      });

      const data = await response.json();
      if (data.message === "Successfully Submitted Contact details") {
        Swal.fire({
          title: "Success",
          text: data.message,
          icon: "success",
          confirmButtonText: "OK",
        });
      } else {
        Swal.fire({
          title: "Error",
          text: data.message,
          icon: "error",
          confirmButtonText: "OK",
        });
      }

      // You can handle the response here and provide feedback to the user
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error,
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
          <form onSubmit={handleSubmit}>
            <div className="form1">
              <p className="formcontent">Name</p>
              <br />
              <input
                type="text"
                placeholder="Enter name here"
                n
                ame=""
                id=""
                value={username}
                disabled={loading}
                onChange={(e) => setUsername(e.target.value)}
              />
              <br />

              <p className="formcontent">Email</p>
              <br />
              <input
                className=""
                type="text"
                placeholder="Your Email"
                name=""
                id=""
                value={email}
                disabled={loading}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />

              <p className="formcontent">Phone</p>
              <br />
              <input
                type="number"
                className=""
                placeholder="Your Phone number"
                name=""
                id=""
                value={phone}
                disabled={loading}
                onChange={(e) => setPhone(e.target.value)}
              />
              <br />

              <p className="formcontent">Company Name</p>
              <br />
              <input
                type="text"
                className=""
                placeholder="Enter your Company name"
                name=""
                id=""
                value={companyName}
                disabled={loading}
                onChange={(e) => setCompanyName(e.target.value)}
              />
              <br />

              <p className="formcontent">Company Domain</p>
              <br />
              <input
                type="text"
                className=""
                placeholder="Business Category"
                name=""
                id=""
                value={companyDomain}
                disabled={loading}
                onChange={(e) => setCompanyDomain(e.target.value)}
              />
              <br />

              <div className="flex-co">
                <div className="submit-div">
                  <input className="btn-submit" type="submit" value="Submit" />
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
