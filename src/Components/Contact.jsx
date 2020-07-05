import React from "react";
import Swal from "sweetalert2";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { feedback: "", name: "", subject: "", email: "" };
  }

  // saves the user's name entered to state
  nameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  // saves the user's email entered to state
  emailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  // saves the user's subject entered to state
  subjectChange = (event) => {
    this.setState({ subject: event.target.value });
  };

  // saves the user's message entered to state
  messageChange = (event) => {
    this.setState({ feedback: event.target.value });
  };

  //onSubmit of email form
  handleSubmit = (event) => {
    event.preventDefault();

    //This templateId is created in EmailJS.com
    const templateId = "basic";

    //This is a custom method from EmailJS that takes the information
    //from the form and sends the email with the information gathered
    //and formats the email based on the templateID provided.
    this.sendFeedback(templateId, {
      message: this.state.feedback,
      name: this.state.name,
      email: this.state.email,
    });
  };

  //Custom EmailJS method
  sendFeedback = (templateId, variables) => {
    Swal.fire({
      title: "Email Successfully Sent",
      // text only here for testing without using up 200 message cap
      text: `message: ${variables.message}, name: ${variables.name}, email: ${variables.email}`,
      icon: "success",
    });

    // commented out to stop using up 200 message cap
    // window.emailjs
    //   .send("gmail", templateId, variables)
    //   .then((res) => {
    //     // Email successfully sent alert
    //     Swal.fire({
    //       title: "Email Successfully Sent",
    //       icon: "success",
    //     });
    //   })
    //   // Email Failed to send Error alert
    //   .catch((err) => {
    //     Swal.fire({
    //       title: "Email Failed to Send",
    //       icon: "error",
    //     });
    //     console.error("Email Error:", err);
    //   });
  };

  render() {
    return (
      <div
        id="contact"
        /*style={{ width: "65vw", margin: "auto" }}*/
        className="contact"
      >
        {/*className="contact" */}
        <h1>Contact Me</h1>
        {/*Form layout that requires a Name, Email, and message */}
        <form className="test-mailing" onSubmit={this.handleSubmit}>
          <br />
          <div style={{ fontSize: "1.2rem", paddingBottom: "2vh" }}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                className="form-control email-inputs"
                name="name"
                type="text"
                id="name"
                onChange={this.nameChange}
                required
              />
            </div>

            <div>
              <label htmlFor="subject">Subject</label>
              <input
                className="form-control email-inputs"
                name="subject"
                type="subject"
                id="subject"
                onChange={this.subjectChange}
                required
              />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input
                className="form-control email-inputs"
                name="email"
                type="email"
                id="email"
                onChange={this.emailChange}
                required
              />
            </div>

            <div>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                onChange={this.messageChange}
                required
                className="email-text-area form-control"
              />
            </div>
          </div>
          <br />

          <div>
            <button
              type="submit"
              class="btn btn-lg active"
              /*class="btn btn-primary btn-lg active"*/
              onClick={() => this.handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Contact;
