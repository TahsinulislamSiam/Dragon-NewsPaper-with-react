import React from 'react';
import swimmingimage from '../../assets/swimming.png'
import classimage from '../../assets/class.png'
import playimage from '../../assets/playground.png'

const Qzone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h2 className='font-bold mb-5'>Qzone</h2>
            <div className='space-y-5'>
                <img src={swimmingimage} alt="" />
                <img src={classimage} alt="" />
                <img src={playimage} alt="" />
            </div>
        </div>
    );
};

export default Qzone;