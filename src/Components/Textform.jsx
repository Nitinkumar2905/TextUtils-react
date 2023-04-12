import React, {useState} from 'react'

export default function Textform(props) {
    const[text,setText]=useState('')
    const handleUpClick=()=>{
        // console.log('uppercased');
        let newText = text.toUpperCase();
        setText(newText)
        if(text===''){
            props.showAlert('text box is empty', 'warning')
        }
        else{
            props.showAlert('text has been uppercased', 'success')
        }
    }

    const handleLowerClick=()=>{
        // console.log('uppercased');
        let newText = text.toLowerCase();
        setText(newText)
        if(text===''){
            props.showAlert('text box is empty', 'warning')
        }
        else{
            props.showAlert('text has been lowercased', 'success')
        }

    }

    const handleClearClick=()=>{
        let newText = "";
        if(text===''){
            props.showAlert('text box is empty', 'warning')
        }
        else{
            setText(newText)
            props.showAlert('cleared', 'success')
        }

    }

    const handleOnChange=(e)=>{
        setText(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))        
    }

    const handleCopy =()=>{
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        if(text===''){
            props.showAlert('textbox is empty', 'warning')
        }
        else{
            props.showAlert('Copied to clipboard', 'success')
        }

    }

    const handleExtraSpace=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(""))
        if(text===''){
            props.showAlert('text box is empty', 'warning')
        }
        else{
            props.showAlert('Extra space removed', 'success')
        }

    }
    return (
      <>
          <div className='container my-5' style={{backgroundColor:props.mode==='light'? 'white':'darkgrey', color:props.mode==='light'? 'black':'white'}}>
              <h2 className='main-head'>{props.heading}</h2>
              <div className='mb-3 d-flex flex-column'>
                  {/* <label htmlFor="myBox" className='form-label'>Example TextArea</label> */}
                    <textarea name="text" id="myBox" value={text} onChange={handleOnChange} rows="6" cols="10" placeholder='Enter your text'></textarea>
              </div>
              <button className="btn btn-primary fw-medium mx-2" style={{backgroundColor:props.mode==='light'?'blue':'black', border:props.mode==='light'?'1px solid black':'1px solid white'}} onClick={handleUpClick}>Convert to Uppercase</button>
              <button className="btn btn-primary fw-medium mx-2" style={{backgroundColor:props.mode==='light'?'blue':'black', border:props.mode==='light'?'1px solid black':'1px solid white'}} onClick={handleLowerClick}>Convert to lowercase</button>
              <button className="btn btn-primary fw-medium mx-2" style={{backgroundColor:props.mode==='light'?'blue':'black', border:props.mode==='light'?'1px solid black':'1px solid white'}} onClick={handleClearClick}>Clear</button>
              <button className="btn btn-primary fw-medium mx-2" style={{backgroundColor:props.mode==='light'?'blue':'black', border:props.mode==='light'?'1px solid black':'1px solid white'}} onClick={handleCopy}>Copy Text</button>
              <button className="btn btn-primary fw-medium mx-2" style={{backgroundColor:props.mode==='light'?'blue':'black', border:props.mode==='light'?'1px solid black':'1px solid white'}} onClick={handleExtraSpace}>Remove Extra Space</button>
              {/* <button className="btn btn-primary fw-medium mx-2" onClick={handleCapitalize}>Capitalize</button> */}
          </div>

          <div className='container'>
            <h3 style={{color:props.mode==='light'? 'black':'white'}}>Your text summary</h3>
            <p style={{color:props.mode==='light'? 'black':'white'}}>{text.split(" ").length} words and {text.length} characters</p>
            <p style={{color:props.mode==='light'? 'black':'white'}}>{0.008*(text.split(" ").length)} minutes to read this text</p>
            <h3 style={{color:props.mode==='light'? 'black':'white'}} className='mt-2'>Preview</h3>
            <p style={{color:props.mode==='light'? 'black':'white'}}>{text.length>0?text:'Enter something in above textbox to preview it here'}</p>
          </div>
      </>
    )
}
