import React from "react";
import Comment from "./helpers/Comment";

function Comments() {
  return (
    <div className="comments">
      <div className="comments__columnOne">
  {/* <div className="comments__columnOne-div"/>*/}
       <div> <h1>What our clients & partners says about us?</h1>
       </div> </div>
      <Comment className="comments__columnTwo"/>
    </div>
  );
}

export default Comments;
