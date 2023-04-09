import React, {useState} from 'react'

export default function Textform(props) {
    const[text,setText]=useState('')
    const handleUpClick=()=>{
        // console.log('uppercased');
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLowerClick=()=>{
        // console.log('uppercased');
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleClearClick=()=>{
        let newText = "";
        setText(newText)
    }

    const handleOnChange=(e)=>{
        setText(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))        
    }
    return (
      <>
          <div className='container my-5'>
              <h2 className='main-head'>{props.heading}</h2>
              <div className='mb-3 d-flex flex-column'>
                  {/* <label htmlFor="myBox" className='form-label'>Example TextArea</label> */}
                    <textarea name="text" id="myBox" value={text} onChange={handleOnChange} rows="6" placeholder='Enter your text'></textarea>
              </div>
              <button className="btn btn-primary fw-medium mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
              <button className="btn btn-primary fw-medium mx-2" onClick={handleLowerClick}>Convert to lowercase</button>
              <button className="btn btn-primary fw-medium mx-2" onClick={handleClearClick}>Clear</button>
              {/* <button className="btn btn-primary fw-medium mx-2" onClick={handleCapitalize}>Capitalize</button> */}
          </div>

          <div className='container'>
            <h3>Your text summary</h3>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008*(text.split(" ").length)} minutes to read this text</p>
            <h3 className='mt-2'>Preview</h3>
            <p>{text}</p>
          </div>
      </>
    )
}
