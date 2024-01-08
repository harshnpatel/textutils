import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        // setText("You have clicked on HandleUpChack")
        props.showAlert("Converted to UpperCase!", "Success");
    }

    const handleLoClick = () =>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        // setText("You have clicked on HandleUpChack")
        props.showAlert("Converted to LowerCase!", "Success");
    }
    
    const handleClearClick = () =>{
        // console.log("Uppercase was clicked" + text);
        let newText = '';
        setText(newText)
        // setText("You have clicked on HandleUpChack")
        props.showAlert("Text Cleared!", "Success");
    }

    const handleOnChange = (event) =>{
        console.log("On Change");
        setText(event.target.value);
    }
//==================================================================================================
    const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode === `dark`?'white':`#042743`}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            {/* <label for="myBox" class="form-label">Example textarea</label> */}
            {/* style={{backgroundColor: props.mode === `dark`?'white':`gray`,color:props.mode === `dark`?'white':`black`}}  */}
        <textarea className="form-control" value={text} onChange={handleOnChange}  id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>

    </div>
    <div className="container" my-3 style={{color: props.mode === `dark`?'white':`#042743`}}>
        <h2>Your text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters </p>
        <p>{0.008 * text.split(" ").length} Minites to Read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something to preview here"}</p>
    </div>
    </>
  )
} 
