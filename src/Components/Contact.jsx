import React from 'react';

function Contact() {
    function handleSubmit(event) {

    }
    return (<div className="contact">
        <h1>Get in Contact with Me</h1>





        <form>
            <div class="form-group">
                <label for="exampleInputName1">Name</label>
                <input type="name" class="form-control" id="exampleInputName1" placeholder="Enter Name" />
            </div>

            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

                <small id="emailHelp" class="form-text text-muted">Your email won't be shared with anyone else
                </small>
            </div>
            <div class="form-group">
                <label for="exampleInputMessage">Message</label>
                <textarea type="message" class="form-control" id="exampleInputMessage1" placeholder="Enter Message" />
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
        </form>


    </div>);

}

export default Contact;