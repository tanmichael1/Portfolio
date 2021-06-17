import React from "react";
import Swal from "sweetalert2";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { feedback: "", name: "", subject: "", email: "" };
  }

  // saves the inputs entered to state
  nameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  emailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  subjectChange = (event) => {
    this.setState({ subject: event.target.value });
  };

  messageChange = (event) => {
    this.setState({ feedback: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const templateId = "basic";

    //Takes the information from the form and sends the email with the information gathered
    //and formats the email based on the templateID provided.
    this.sendFeedback(templateId, {
      message: this.state.feedback,
      name: this.state.name,
      subject: this.state.subject,
      email: this.state.email,
    });
  };

  //Custom EmailJS method

  sendFeedback = (templateId, variables) => {
    window.emailjs
      .send("gmail", templateId, variables)
      .then((res) => {
        // Email successfully sent alert
        Swal.fire({
          title: "Email Successfully Sent",
          icon: "success",
        });
      })
      // Email Failed to send Error alert
      .catch((err) => {
        Swal.fire({
          title: "Email Failed to Send",
          icon: "error",
        });
        console.error("Email Error:", err);
      });

    // Use this instead if testing
    // Swal.fire({
    //   title: "Email Successfully Sent",
    //   text: `message: ${variables.message}, name: ${variables.name}, subject: ${variables.subject}, email: ${variables.email}`,
    //   icon: "success",
    // });
  };

  render() {
    return (
      <div id="contact" className="contact">
        <h1>Contact Me</h1>

        <form className="test-mailing contact" onSubmit={this.handleSubmit}>
          <br />

          <div className="contact1stHalf">
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

          <div className="contact2ndHalf">
            <button
              type="submit"
              className="contact btn btn-lg active"
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
