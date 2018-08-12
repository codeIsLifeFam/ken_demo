import React from "react";
class Works extends React.Component{

    render(){
        return(
            <div className="Works">
                 <div className="Works_el-1">
              <h1 className="somecoolheader">
                 DuraLast Certified
                 </h1>
                 <article>We are one of only 13 certified DuraLast roofing companies in the DFW area. </article>
             </div>
             <div className="Works_el-2">
              <h1 className="somecoolheader">
            Build-out
                 </h1>
                 <article>We provide full build-out services. </article>
             </div>
             <div className="Works_el-3">
             <h1 className="somecoolheader">Finishing services
                 </h1>
                 <article>When the other contractor leaves you holding the bag, we are there for you. A couple of quick signatures on the ECN and you can consider the work done. any work, any time.</article>
             </div>
            </div>
        )
    }
}
export default Works;