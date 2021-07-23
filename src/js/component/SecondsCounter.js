import React from "react";

//include images into your bundle

//create your first component
export function SecondsCounter(props) {
    // const partial = "00000" + seconds.toString()
    // const counterOrganization = partial.substr(partial.length - 6).split('')
    // let counterDivs = counterOrganization.map("div")
    return (
        <div className="text-center mt-5">
            <div className="">
                <i className="far fa-clock"></i>

            </div>
        </div>
    )
}
