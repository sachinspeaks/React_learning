import React,{useState} from 'react'

export default function Textform(props) {
    const [text,settext]=useState("");
    const handleclick=()=>
    {
        let newtext=text.toUpperCase();
        settext(newtext);
        props.showAlert("Converted to Uppercase","success");
    };
    const handleloclick=()=>
    {
        let newtext=text.toLowerCase();
        settext(newtext);
        props.showAlert("Converted to Lowercase","success");
    };
    const handlefield=()=>{
        settext("");
        props.showAlert("Field Cleared","success");
    };
    const handlechange=(event)=>
    {
        settext(event.target.value);
    };
    const handleCopy = () => {
        navigator.clipboard.writeText(text); 
        props.showAlert("Copied to Clipboard!", "success");
    };
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        settext(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }
    const handleicase=()=>
    {
        let ctext="";
        for(let i=0;i<text.length;i++)
        {
            if(text[i]===text[i].toLowerCase())
            {
                ctext+=text[i].toUpperCase();
            }
            else
            {
                ctext+=text[i].toLowerCase();
            }
        }
        settext(ctext);
    };
    return (
        <>
        <div className='container' style={{color: props.mode==='light'?'black':'white'}}>
            <h2 className='my-3'>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control border border-dark-subtle" style={{backgroundColor: props.mode==='dark'?'#032352':'#F8F9FA',color: props.mode==='dark'?'white':'black'}} value={text} onChange={handlechange} id="exampleFormControlTextarea1" rows="9"></textarea>
            </div>
            <button type="button" className="btn btn-dark mx-2" onClick={handleclick}>Convert to Uppercase</button>
            <button type="button" className="btn btn-dark mx-2" onClick={handleloclick}>Convert to Lowercase</button>
            <button type="button" className="btn btn-dark mx-2" onClick={handlefield}>Clear Field</button>
            <button type="button" className="btn btn-dark mx-2" onClick={handleicase}>Inverse Case</button>
            <button type="button" className="btn btn-dark mx-2" onClick={handleCopy}>Copy to Clipboard</button>
            <button type="button" className="btn btn-dark mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3">
            <h2>
                Your Word Summary :
            </h2>
            <p>
                {text===""?0:text.split(" ").length} <b>Words</b><br/>
                {text.length} <b>Characters</b> <br/>
                <b>Time to read : </b>{text===""?0:text.split(" ").length*0.008} <b>Minutes</b><br/>
                <h2 className='my-3'>
                    Preview :
                </h2>
                <p>
                    {text.length===0?'Enter something above to preview it here .':text}
                </p>
            </p>
        </div>
        </>
    )
}
