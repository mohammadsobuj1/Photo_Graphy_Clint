import React from 'react';

const HeaderSection = ({ header , subheader  }) => {
    return (
        <div>
            <p className='text-xl my-5 font-mono text-center text-violet-400 uppercase'>{subheader}</p>
            <p className='md:text-2xl rounded-lg text-xl font-serif  uppercase  mx-auto text-center bg-white  md:w-[50%] border-b-4  border-violet-500  p-4   mt-4 mb-10'>{header}</p>
        </div>
    );
};

export default HeaderSection;