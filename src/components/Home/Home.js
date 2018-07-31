import React from "react";
import "./Home.css";
class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="Home_el-1">
          <header>
            <h1>A New Roof is NOT Something to Gamble With</h1>
            <h3>sub header goes underneath</h3>
            <hr />
          </header>
          <article>
            {" "}
            When it comes time to repair or replace your commercial roofing
            system, you want a roofing contractor who has the knowledge and
            experience to ensure that your project goes smoothly. Additionally,
            you want a contractor who offers more than one solution, so that you
            get the proper roofing system for your building. Crest Exteriors
            offers multiple options to ensure that you not only get the roof you
            need, but also the one that meets your budget constraints. We are
            here to listen to your goals and concerns, and then devise a plan to
            get you exactly what you need.
          </article>
        </div>
        <div className="Home_el-2">
          <article>
            <ul>
              <li>
                <span>01.</span> Revolving Credit Facilities
              </li>
              <hr />
              <li>
                <span>02.</span> First-Lien/Senior Debt
              </li>
              <hr />
              <li>
                <span>03.</span> Revolving Credit Facilities
              </li>
              <hr />
              <li>
                <span>04.</span> Second-Lien Loans
              </li>
              <hr />
              <li>
                <span>05.</span> Juniot Capital
              </li>
              <hr />
            </ul>
            <h2>When your commercial roof needs</h2>
            to be repaired, you need to hire someone who has experience with the
            complexities of commercial
            {/* roofing. Not all roofers are the same, and hiring an inexperienced
            roofer to complete your commercial project is playing with
            fire…sometimes literally. A commercial roofer needs to be highly
            trained so that you don’t have to replace your roof again
            prematurely. */}
          </article>
          <header>
            <h1>Not All Roofers</h1>
            <hr />
            <h2> are the Right Roofers</h2>
            <h3>sub header goes underneath</h3>
          </header>
        </div>
        <div className="Home_el-3">
          <header>
            <h1>Knowing when to Replace Your Roof</h1>
            <hr />
          </header>
          <article>
            {" "}
            A solid roof above your head is pretty crucial if you have become
            accustomed to having a warm, cozy, and leak free home or business.
            You need to change your roof if it is over 20 years old, the shingle
            sare curling, missing, cracked, or covered with moss or algae.
          </article>
        </div>
      </div>
    );
  }
}
export default Home;
