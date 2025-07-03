import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-3'>
            <p className='text-base-100 bg-secondary px-2 py-3'>Latest</p>
            <Marquee className='flex 'pauseOnHover={true}>
                <p className='font-bold'>France has banned smoking in public places like beaches and parks. Any smoker who lights up a cigarette in public will be breaking the law. The new smoking ban is to protect children from passive smoking. This happens when you breathe in smoke from other people who are smoking..</p>
                
            </Marquee>
            
        </div>
    );
};

export default LatestNews;