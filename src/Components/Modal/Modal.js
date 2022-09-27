import React from 'react';

const Modal = ({ data }) => {
    return (
        <div>
            {/* <label htmlFor="my-modal-3" className="btn modal-button">open modal</label> */}

            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label onClick={() => data.setModalData(null)} htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{data.name}</h3>
                    <h3 className="text-lg font-bold">Price ${data.price}</h3>
                    <h3 className="text-lg font-bold">Action {data.action}</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                </div>
            </div>
        </div>
    );
};

export default Modal;