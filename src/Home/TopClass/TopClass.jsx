import React from 'react';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import './toclass.css'

const TopClass = () => {
    const [sliderRef] = useKeenSlider(

        {
            loop: true,
        },
        [
            (slider) => {
                let timeout
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 1000)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )

    return (
        <>
            <div className='w-[50%] mx-auto '>
                <div ref={sliderRef} className="keen-slider ">
                    <div className="keen-slider__slide number-slide1 "><img className='  w-[50%]' src="https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHlvZ2F8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                        <h3 className='w-[50%] text-black'>     hello</h3>
                    </div>
                    <div className="keen-slider__slide number-slide2 "><img className='w-[50%]' src="https://media.istockphoto.com/id/1348936924/photo/young-woman-practicing-yoga-in-a-public-park.webp?b=1&s=170667a&w=0&k=20&c=SAxJytX1OoiSFQ2tcvGukEkZ3CJsoIpG23oxHUaa0h4=" alt="" />
                        <h3 className='w-[50%] ml-5 text-black'>     hello</h3>
                    </div>
                    <div className="keen-slider__slide number-slide3 "><img className='w-[50%]' src="https://media.istockphoto.com/id/1391541888/photo/asian-and-african-american-woman-friend-doing-yoga-pilates-workout-together-close-up-of-the.webp?b=1&s=170667a&w=0&k=20&c=oqitXcKISvLt1wnCdx571oSPXZQUZHI392bvZIKUWdA=" alt="" />
                        <h3 className='w-[50%] ml-5 text-black'>     hello</h3>
                    </div>
                    <div className="keen-slider__slide number-slide4 "><img className='w-[50%]' src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHlvZ2F8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                        <h3 className='w-[50%] ml-5 text-black'>     hello</h3>
                    </div>
                    <div className="keen-slider__slide number-slide5 "><img className='w-[50%]' src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8eW9nYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                        <h3 className='w-[50%] ml-5 text-black'>     hello</h3>
                    </div>
                    <div className="keen-slider__slide number-slide6 "><img className='w-[50%]' src="https://media.istockphoto.com/id/1423180733/photo/elderly-woman-making-yoga-meditation-in-lotus-pose-in-fitness-center.webp?b=1&s=170667a&w=0&k=20&c=K2kEJJSLU2pyskgEKvRE4G_J1nm9zIRsYpRliVoBpKs=" alt="" />
                        <h3 className='w-[50%] ml-5 text-black'>     hello</h3>
                    </div>

                </div>
            </div>
        </>
    );
};

export default TopClass;