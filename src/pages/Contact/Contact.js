import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import con from "../../assets/images/contact-us.jpg";
import { toast } from "react-toastify";
// import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    let st = false;
    if (!name || !email || !msg) {
      toast.error("Please Provide all Fields");
    }
    else {
      st=true;
    }
    console.log(form.current);
    if (st) {
      emailjs
        .sendForm(
          "service_0o9gqse",
          "template_sr91imj",
          form.current,
          "nDCfYsSCScLNtIK0q"
        )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          form.current.reset();
          toast.success("Message Sent 👍");
          setName("");
          setEmail("");
          setMsg("");
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send Message");
        }
      );
    }
  };

  //handle submit button
  // eslint-disable-next-line
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     if (!name || !email || !msg) {
  //       toast.error("Please Provide all Fields");
  //     }
  //     const res = await axios.post("/api/v1/portfolio/sendEmail", {
  //       name,
  //       email,
  //       msg,
  //     });
  //     //validation success
  //     if (res.data.success) {
  //       toast.success(res.data.message);
  //       setName("");
  //       setEmail("");
  //       setMsg("");
  //     } else {
  //       toast.error(res.data.message);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <>
      <div className="contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <img src={con} alt="contact" className="image" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="card2 d-flex card border-0 px-4 py-5">
                <div className="row">
                  <div className="row">
                    <h6>
                      Contact with
                      <BsLinkedin color="blue" size="30px" className="ms-2" />
                      <BsGithub color="black" size="30px" className="ms-2" />
                      <FaXTwitter color="black" size="30px" className="ms-2" />
                    </h6>
                  </div>
                  <div className="row px-3 mb-4 extra">
                    <div className="line" />
                    <small className="or text-center">OR</small>
                    <div className="line" />
                  </div>
                  {/* <form>
                    <div className="row px-3">
                      <input
                        type="text"
                        name="name"
                        placeholder="Write your Name"
                        className="mb-3"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <input
                        type="text"
                        name="email"
                        placeholder="Write your Email"
                        className="mb-3"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <textarea
                        type="text"
                        name="msg"
                        placeholder="Write your Message"
                        className="mb-3"
                        value={msg}
                        onChange={(e) => setMsg(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <button className="button" onClick={sendEmail}>
                        SEND MESSAGE
                      </button>
                    </div>
                  </form> */}

                  <form ref={form} onSubmit={sendEmail}>
                    <div className="row px-3">
                      <label className="label">Name</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Write your Name"
                        className="mb-3"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>

                    <div className="row px-3">
                      <label className="label">Email</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Write your Email"
                        className="mb-3"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <label className="label">Message</label>
                      <textarea
                        type="text"
                        name="msg"
                        placeholder="Write your Message"
                        className="mb-3"
                        value={msg}
                        onChange={(e) => setMsg(e.target.value)}
                      />
                    </div>
                    {/* <input type="submit" value="Send" /> */}
                    <div className="row px-3">
                      <button
                        className="button text-center"
                        onClick={sendEmail}
                        value="Send"
                      >
                        SEND MESSAGE
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
