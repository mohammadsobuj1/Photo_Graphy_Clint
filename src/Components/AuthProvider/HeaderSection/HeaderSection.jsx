import React from 'react';
import { Fade, Slide } from "react-awesome-reveal";

const HeaderSection = ({ header , subheader  }) => {
    return (
        <div>
         <Slide>
         <Fade  cascade damping={0.1}>
           <p className='text-xl my-5 font-mono text-center text-violet-400 uppercase'>{subheader}</p>
           <p className='md:text-2xl rounded-lg text-xl font-serif  uppercase  mx-auto text-center bg-white  md:w-[50%] border-b-4  border-violet-500  p-4   mt-4 mb-10'>{header}</p>
           </Fade>
         </Slide>
        </div>
    );
};

export default HeaderSection;