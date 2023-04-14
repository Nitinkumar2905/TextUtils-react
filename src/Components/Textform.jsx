import React, {useState} from 'react'

export default function Textform(props) {
    const[text,setText]=useState('')
    const handleUpClick=()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert('text has been uppercased', 'success')
    }

    const handleLowerClick=()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert('text has been lowercased', 'success')

    }

    const handleClearClick=()=>{
        let newText = "";
        setText(newText)
        props.showAlert('cleared', 'success')

    }

    const handleOnChange=(e)=>{
        setText(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))        
    }

    const handleCopy =()=>{
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        props.showAlert('Copied to clipboard', 'success')

    }

    const handleExtraSpace=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(""))
        props.showAlert('Extra space removed', 'success')
    }
    return (
      <>
          <div className='container my-3' style={{backgroundColor:props.mode==='light'? 'white':'darkgrey', color:props.mode==='light'? 'black':'white'}}>
              <h2 className='main-head'>{props.heading}</h2>
              <div className='mb-3 d-flex flex-column'>
                    <textarea name="text" id="myBox" value={text} onChange={handleOnChange} rows="6" cols="10" placeholder='Enter your text'></textarea>
              </div>
              <button disabled={text.length===0} className="btn btn-primary fw-medium m-1" style={{backgroundColor:props.mode==='light'?'blue':'black', border:props.mode==='light'?'1px solid black':'1px solid white'}} onClick={handleUpClick}>Convert to Uppercase</button>
              <button disabled={text.length===0} className="btn btn-primary fw-medium m-1" style={{backgroundColor:props.mode==='light'?'blue':'black', border:props.mode==='light'?'1px solid black':'1px solid white'}} onClick={handleLowerClick}>Convert to lowercase</button>
              <button disabled={text.length===0} className="btn btn-primary fw-medium m-1" style={{backgroundColor:props.mode==='light'?'blue':'black', border:props.mode==='light'?'1px solid black':'1px solid white'}} onClick={handleClearClick}>Clear</button>
              <button disabled={text.length===0} className="btn btn-primary fw-medium m-1" style={{backgroundColor:props.mode==='light'?'blue':'black', border:props.mode==='light'?'1px solid black':'1px solid white'}} onClick={handleCopy}>Copy Text</button>
              <button disabled={text.length===0} className="btn btn-primary fw-medium m-1" style={{backgroundColor:props.mode==='light'?'blue':'black', border:props.mode==='light'?'1px solid black':'1px solid white'}} onClick={handleExtraSpace}>Remove Extra Space</button>
          </div>

          <div className='container'>
            <h3 style={{color:props.mode==='light'? 'black':'white'}}>Your text summary</h3>
            <p style={{color:props.mode==='light'? 'black':'white'}}>{text.split(/\S+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p style={{color:props.mode==='light'? 'black':'white'}}>{0.008*(text.split(" ").filter((element)=>{return element.length!==0}).length)} minutes to read this text</p>
            <h3 style={{color:props.mode==='light'? 'black':'white'}} className='mt-2'>Preview</h3>
            <p style={{color:props.mode==='light'? 'black':'white'}}>{text.length>0?text:'Nothing to preview'}</p>
          </div>
      </>
    )
}
