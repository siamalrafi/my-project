import React, { useState } from 'react';
import Modal from '../Modal/Modal';

const Gun = (props) => {
    const [modalData, setModalData] = useState(0);
    const { gun, inCreaseCount } = props;
    const { name, img, price, action, bullet } = gun;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img className='w-96 h-52' src={img} alt="Gun" /></figure>
                <div className="card-body">
                    <h2 className="card-title"> {name}</h2>
                    <p className='font-bold'>Price $ {price}</p>
                    <div className="card-actions ">
                        <div className="badge badge-outline">{action}</div>
                        <div className="badge badge-outline">{bullet.slice(0, 5)}</div>

                        <button onClick={() => inCreaseCount()} className="mt-5 btn btn-sm btn-primary">Add To Cart</button>

                        <label onClick={() => setModalData(gun)} htmlFor="my-modal-3" className="mt-5 btn btn-sm btn-info">Details</label>

                    </div>
                </div>
            </div>

            {modalData && <Modal data={modalData} setModalData={setModalData}></Modal>}
        </div>
    );
};

export default Gun;