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
    </div>);

}

export default Contact;