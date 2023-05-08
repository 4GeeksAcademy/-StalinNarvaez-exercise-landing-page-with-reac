import React from "react";
const Jumbutron = ()=>{
    return(
        <div className="p-5 mb-4 bg-body-tertiary rounded-3 d-flex justify-content-start text-start bg-secondary">
            <div className="container-fluid py-5 ">
                <h1 className="display-5 fw-bold">                   
                            Jumbotron personalizado
                </h1>
                <p className="col-md-8 fs-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eius vero dignissimos laboriosam nesciunt officiis quod facere? Labore nisi, eveniet, amet excepturi quibusdam dolorum molestias tempora, et impedit optio mollitia!
                </p>
                <button className="btn btn-primary btn-lg" type="button">
                            Botón de ejemplo
                </button>
            </div>
        </div>
    )
}
export default Jumbutron