import React ,{useState}from "react";

function Navbar(props){
    
    
    return(
   <div>
        <nav className="navbar navbar-expand-lg" style={props.style} >
            <div className="container-fluid">
                <img src={props.logo} alt="" style={{width:'50px'}}/>
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                        </li>
                    </ul>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch"  onChange={props.themeChange} id="flexSwitchCheckChecked" checked={props.isChecked}/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckChecked" >{props.mode}</label>
                    </div>
                </div>
            </div>
        </nav>
   </div>
    );
}
export default Navbar;