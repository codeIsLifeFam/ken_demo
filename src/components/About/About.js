import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
class About extends React.Component {
  render() {
    return (
      <div className="About">
        <div className="About_el-1">
          <h2>
            We believe that lending to mid-sized businesses is a compelling way
            to invest
          </h2>
          <article>
            We view middle market credit as a core part of a balanced investment
            portfolio. We created Varagon to provide direct exposure to quality
            loans with best-in-class underwriting and portfolio management. Our
            business was built on the belief that lenders that lead and
            structure transactions are able to originate the most attractive
            investments.
          </article>
          <h2>
            Varagon was created to be a long-term provider of capital to the
            middle market
          </h2>
          <article>
            We offer complete, ‘one-stop’ financing solutions and are a
            preferred lender to leading private equity firms. Our loans are
            funded by capital commitments from long-term institutional
            investors.
          </article>
        </div>
        <div className="About_el-2">
          <span>$4.5B+</span>
          <h1>Over $4.5 billion investment portfolio</h1>
        </div>
        <hr />
        <div className="About_el-3">
          <h2>
            Investment products that meet the needs of institutional investors
          </h2>
          <hr />
          <Link to="/team">Learn more</Link>
        </div>
        <div className="About_el-4">
          <span>
            <span>20+ years</span>
            <h3>Average middle market experience of leadership team</h3>
          </span>
          <span className="About_el-4_sec">
            <span>45+</span>
            <h3>Employees</h3>
          </span>
        </div>
      </div>
    );
  }
}
export default About;
