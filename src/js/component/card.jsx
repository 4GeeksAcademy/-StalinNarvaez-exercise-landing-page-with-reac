import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
const Cards = ()=>{
    return(
        <div className="row row-cols-1 row-cols-sm-3 g-4 container-fluid d-flex justify-content-center">
            <div className="col" style= {{width: "18rem"}}>
                <div className="card h-100">
                        <img src={rigoImage} />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>                            
                        </div>
                        <div className="card-footer">
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                </div>
            </div>
            <div className="col" style= {{width: "18rem"}}>
                <div className="card h-100">
                        <img src={rigoImage} />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>                            
                        </div>
                        <div className="card-footer">
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                </div>
            </div>
            <div className="col" style= {{width: "18rem"}}>
                <div className="card h-100">
                        <img src={rigoImage} />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>                            
                        </div>
                        <div className="card-footer">
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                </div>
            </div>
            <div className="col" style= {{width: "18rem"}}>
                <div className="card h-100">
                        <img src={rigoImage} />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>                            
                        </div>
                        <div className="card-footer">
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                </div>
            </div>
        </div>
                
    )
}
export default Cards