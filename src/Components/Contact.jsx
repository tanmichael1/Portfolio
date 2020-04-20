import React from 'react';

function Contact(){
    function handleSubmit(event){

    }
    return (<div>
    <h1>Get in Contact with Me</h1>
    <form onSubmit>
        <label>Name: 
        <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />


    </form>
    //Name
    //Email
    //Subject
    //Message

    <form class="ui form contact-form">
        <div class="field">
            <div class="ui input">
                <input placeholder="Name" name="name" type="text" >

                </input>
            </div>
        </div>
        <div class="not-allowed button-wrapper">
            <button type="submit" class="ui disabled button submit-button contact-submit" disabled tabindex="-1">
                Submit
            </button>
        </div>
    </form>
    </div>);

}

export default Contact;