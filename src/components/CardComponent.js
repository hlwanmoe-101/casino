import React from "react";

function Card(props){
    let rib = [];
    if(props.status){
        const a=props.game.categories;
        rib=a.filter(ri=>ri!=="top"&& ri!=="new")
    }
    return(
        <div className="col-12 col-md-6 col-lg-2 my-2">
            <figure className="imghvr-shutter-out-vert">
                 <h5 className="text-center custom-text-bg">{props.jacks ? props.jacks.length>0 ? "$"+props.jacks[0].amount : "" : ""}</h5>
                <img src={props.game.image} alt="Game"></img>
                <h4 className="ribbon">{rib}</h4>
                <figcaption>
                    <h3 className="">{props.game.name}</h3>
                    <button className="btn btn-success" href="#">Play Now</button>
                </figcaption>
            </figure>
        </div>
    )
}

export default Card