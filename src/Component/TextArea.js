import React, { useState } from 'react';
function TextArea(props){
   
    const [text,setText]=useState("");
    const [characterCount, setCharacterCount]=useState(0);
    const [wordCount,setWordCount]=useState(0);
    const onHandleText =(event)=>{
        setText(event.target.value);
        setWordCount((text.split(" ")).length);
        setCharacterCount(text.length+1);
     }
     const onBtnHandleUpDown =()=>{
        if(text===text.toLowerCase()){
            setText(text.toUpperCase());
        } else{
            setText(text.toLowerCase());
        }
     }
     const onBtnHandleCopy=()=>{
        const textArea = document.getElementById("txtarea");
        textArea.select();
        textArea.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(textArea.value);
        
     }
     const onBtnHandleReplace =()=>{
       const valueText = document.getElementById("findTxt").value;
       const replaceText = document.getElementById("repTxt").value;
       const newText=text.split(" ").map(word =>{
        if(word===valueText) return replaceText;
        return word;
       }).join(" ");
       setText(newText);
     }
 return(
   <div className='container-fluid p-5 txt-div' style={props.style} >
        <h1>{props.title}</h1>
        <div>
        <textarea className="form-control mt-3 mb-3" id="txtarea" placeholder='Enter Text to manipulate' onChange={onHandleText} value={text} rows="7" cols={100}/>
        </div>
        <div className="form-control" >
          <input type="text" placeholder='Find' id="findTxt" />
          <input type="text" placeholder='Replace' id="repTxt"  className='ms-1' />
         <button className='btn btn-primary ms-3' onClick={onBtnHandleReplace}>Replace</button>
        </div>
        <button className='btn btn-primary ms-3' onClick={onBtnHandleUpDown}>Convert characters</button>
        <button className='btn btn-primary ms-3' onClick={onBtnHandleCopy}>Copy Content</button>
        
        <div className='mt-3'><span>Characters: {characterCount}</span>   <span className='ms-3'>Words: {wordCount}</span> </div>
        <div>
            <h1>Preview:</h1>
            <p>{text}</p>
        </div>
   </div>
 );
}
export default TextArea;