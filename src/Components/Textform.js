import React,{useState} from 'react'

export default function Textform(props) {
    const [text,settext]=useState("Enter your text :");
    const handleclick=()=>
    {
        let newtext=text.toLocaleUpperCase();
        settext(newtext);
    };
    const handlechange=(event)=>
    {
        settext(event.target.value);
    };
    return (
        <div>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handlechange} id="exampleFormControlTextarea1" rows="9"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleclick}>Convert to Uppercase</button>
        </div>
    )
}
