import './Contact.css';

const Contact = () => {
    return(
        <div id="contact">
            <div className="col-md-5" id='form'>
            <h3 className="mb4">Contact Form</h3>
            <form>
            <div className="mb-3"> 
                <label for="name" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="name"/>
            </div>

            <div className="mb-3"> 
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>

            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
        </div>
    );
}

export default Contact;