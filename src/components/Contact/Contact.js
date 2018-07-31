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
              Please contact us for additional about Sack's and the solutions we
              can deliver for you
            </h2>

            <span>
              Borrowers & Private Equity
              <h4>borrowers@varagon.com</h4>
              Investors 
              <h4>investors@varagon.com</h4>
              General Inquiries
              <h4>info@varagon.com</h4>
            </span>
          </article>
        </div>
        <div className="Contact_el-2">
          <h1>Locatoins</h1>
          <article>
           <h2>New York Office</h2>
           <span><i class="fas fa-map-marker-alt"></i></span>2500 Branch Oaks ln Flower Mound Tx75028
           <br />
           <span><i class="fas fa-phone"></i></span> 972-997-6586
          </article>
        </div>
        <div className="Contact_el-3">
          <h1>Join Our Mainling List</h1>
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
