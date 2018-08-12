import React from "react";
import "./Contact.css";
class Contact extends React.Component {
    submit(){

    }
  render() {
    return (
      <div className="Contact">
        <div className="Contact_el-1">
          <h1>Addtional Information</h1>
          <article>
            <h2>
              Please contact us for additional about how Sak's General Contracting
              can deliver for you
            </h2>

            <span>   
              General Inquiries
              <h4>info@Sack's.com</h4>
            </span>
          </article>
        </div>
        <div className="Contact_el-2">
          <h1>Locations</h1>
          <article>
           <h2>Dallas/ Fort Worth</h2>
           <span><i className="fas fa-map-marker-alt"></i></span>9322 David Fort Road, Argyle, TX 76226
           <br />
           <span><i className="fas fa-phone"></i></span>817.501.4968
          </article>
        </div>
        <div className="Contact_el-3">
          <h1>Join Our Mailing List</h1>
          <form onSubmit={()=>this.sumbit()}>
           <input placeholder="Type in your e-mail"/>
           <button>Submit ></button>
              </form>
        </div>
      </div>
    );
  }
}
export default Contact;
