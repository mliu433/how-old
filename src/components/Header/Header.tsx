import * as React from 'react'
import './Header.css'


export default function Header() {
return (
    
<div className="header">
<h1 className='headerText' id="title">How Old? 🤔</h1>
<div className="toggle-container">
<input type="checkbox" id="switch" name="theme" onChange={change}  />
<label htmlFor="switch"  >Toggle</label>

</div>
</div>
)

function change() {
    const element =  document.getElementById("switch") as HTMLInputElement;  
if(element !=null){
    if(element.checked){
        document.body.style.backgroundColor = "#FCFCFC";
       const ele = document.getElementById("title");
       if(ele!=null){
        ele.style.color = "#red";
       }
    }else if(!element.checked){
        document.body.style.backgroundColor = "#323639";
    }
}
   
   
}

}