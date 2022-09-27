import React from 'react';

const Gun = (props) => {
    console.log(props);
    const { name, category, img, price, action, bullet } = props.gun;

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

                        <button className="mt-5 btn btn-sm btn-primary">Add To Cart</button>
                        <button className="mt-5 btn btn-sm btn-info">Details</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Gun;