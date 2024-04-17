import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Backbutton from "../Components/Backbutton";
function Form() {
  return (
    <>
      <form className="form">
        <Backbutton />
        <label>Project Title</label>
        <input type="text"></input>
        <label>Tags</label>
        <input type="text"></input>
        <label>Description</label>
        <input type="textbox"></input>
        <label>Project Link</label>
        <input type="text"></input>
        <button className="form-submit" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default Form;
