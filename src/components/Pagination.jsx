import React from "react";

export default function Pagination({
    totalPages,
    handleClick,
  
    page,
    setPage,
  }) {
    
  
    return (
      <div id="paginate" style={{ width: "fit-content", margin: "auto" }}>
        <button
          className="buttons"
          style={{ height: "30px", width: "50px" }}
          onClick={(e)=>{handleClick("prev")}}
          
          disabled={page === 1}
        >
          Prev
        </button>
  
        <button
          className="buttons"
          style={{ height: "30px", width: "50px" }}
          onClick={(e)=>{handleClick("next")}}
          disabled={page === 5}
        >
          Next
        </button>
      </div>
    );
  }