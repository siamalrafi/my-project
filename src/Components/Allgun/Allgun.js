import React, { useEffect, useState } from 'react';
import Gun from '../Gun/Gun';

const Allgun = () => {
    const [guns, setGuns] = useState([]);

    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`)
            .then(res => res.json())
            .then(data => setGuns(data))
    }, []);


    return (
        <div>

            <div>
                <h1 className='text-2xl font-black m-5 text-center'>Welcome to Gun store</h1>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-[90%] md:mx-auto lg:mx-auto'>
                {
                    guns.map(gun => <Gun
                        key={gun.id}
                        gun={gun}>

                    </Gun>)
                }


            </div>
        </div>
    );
};


export default Allgun;