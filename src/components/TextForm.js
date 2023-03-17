import { useState } from "react";
import React from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked", text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase","success");
  };
  const handleLoClick = () => {
    // console.log("Uppercase was clicked", text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!","success");
  };
  const handleClearClick = () => {
    // console.log("Uppercase was clicked", text);
    let newText ="";
    setText(newText);
    props.showAlert("Text Cleard!","success");
  };
  //Credits : A
  const handleCopy = () =>{
    //  var text = document.getElementById('myBox');
    //  text.select();
     navigator.clipboard.writeText(text);
    //  document.getSelection().removeAllRanges();
     props.showAlert("Text Copied to Clipboard!","success");
  }
   //Credits : Coding Wala
   const handleExtraSpaces = () =>{
    var newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Space Removed!","success");
 }
  
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{ color :props.mode=== 'dark'? 'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor :props.mode=== 'dark'? 'gray':'white',color :props.mode=== 'dark'? 'white':'black'}} id="myBox" rows="8" ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-2 " onClick={handleUpClick}>Convert to UpperCase </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleLoClick}> Convert to LowerCase </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleClearClick}> Clear text </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleCopy}> Copy text </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
      <div className="container my-4" style={{ color :props.mode=== 'dark'? 'white':'black'}}>
         <h2>Your text summary</h2>
         <p>{text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length} words, {text.length} characters</p>
         <p>Time take to read {0.008 * text.split(" ").filter((ele)=>{return ele.length!==0}).length} Minuts</p>
         <h2>Preview</h2>
         <p>{text.length>0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}
