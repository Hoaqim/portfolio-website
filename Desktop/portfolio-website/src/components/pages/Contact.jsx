import React from "react";
import "../static/css/Form.scss";

export default function Contact() {
  return (
    <div className="panel" id="hire">
      <div className="container">
        <div className="form-container">
          <form
            action="https://formsubmit.co/075fc65f049a27dfb520d5ee8aa9c391"
            method="POST"
          >
            <h2>Contact me!</h2>
            <div className="input">
              <input type="email" name="email" autocomplete="off" required />
              <label>email</label>
            </div>
            <div className="input">
              <textarea name="message" />
            </div>
            <input type="submit" value="Submit" className="submit"></input>
          </form>
        </div>
      </div>
    </div>
  );
}
