import React from "react";
import SecondsCounter from "./component/SecondsCounter";
import Icons from "././icons";

//include images into your bundle

//create your first component
export function Home() {
	return (<div className="BigCounter">
        <div className="calendar">
            <i className="far fa-clock"></i>
        </div>
        <div className="far fa-clock"></div>
        <div className="far fa-clock"></div>
        <div className="four"></div>
        <div className="three"></div>
        <div className="two"></div>
        <div className="one"></div>
        </div>);
}
