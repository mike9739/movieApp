import React from "react";


const Modal = (props) => {
    let showModal = false;
    const  submitModal= () => {
        showModal.click();
    }
    return (
        <>

            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Create Movie
            </button>


            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {props.children}
                        </div>
                        <div className="modal-footer">
                            <button ref={(element) => showModal=element}  type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button onClick={submitModal} type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Modal