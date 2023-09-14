import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    if (text.length > 0) {
      props.showAlert("Converted to UpperCase!", "success");
    } else {
      props.showAlert("First Enter text to change", "danger");
    }  };
  const handleDownClick = () => {
    console.log("lowercase was Clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    if (text.length > 0) {
      props.showAlert("Converted to LowerCase!", "success");
    } else {
      props.showAlert("First Enter text to change", "danger");
    }
  }
  const handleClear = () => {
    console.log("lowercase was Clicked" + text);
    let newText = "";
    setText(newText);
    if (text.length > 0) {
      props.showAlert("TextArea Cleard!", "success");
    } else {
      props.showAlert("First Enter text in textarea to clear", "danger");
    }
  };
  const handleOnChange = (event) => {
    //console.log("On Change")
    setText(event.target.value);
  };
  const [text, setText] = useState("");






  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode==='dark'?'rgb(2,0,36)':'white',color:props.mode==='dark'?'white':'black'}}
            id="MyBox"
            rows="4"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleDownClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-danger mx-2 my-1" onClick={handleClear}>
          Clear Text
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{text.split(" ").length * 0.008} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here !!!"}</p>
      </div>
    </>
  );
}
