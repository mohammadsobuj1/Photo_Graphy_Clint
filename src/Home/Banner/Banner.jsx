


const Bannar = () => {

    const btnGroup = <>
        <div className="btn-group">
            <button className="btn btn-active">Button</button>
            <button className="btn btn-outline btn-accent text-white">Button</button>

        </div>
    </>


    return (
        <div>




            <div className="carousel h-96 md:h-screen w-full">
                <div id="item1" className="carousel-item w-full">
                    <div className="hero h-full" style={{ backgroundImage: `url("https://img.freepik.com/free-photo/closeup-shot-beautiful-butterfly-with-interesting-textures-orange-petaled-flower_181624-7640.jpg?size=626&ext=jpg&ga=GA1.1.1318835724.1670345660&semt=ais")` }}>
                        <div className="hero-overlay bg-opacity-35"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">

                                <h1 className="text-3xl md:text-5xl font-bold uppercase text-white font-ital">wlcome Our <p className="text-orange-400  ">Hero's univers</p></h1>
                                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                {btnGroup}
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item2" className="carousel-item w-full">


                    <div className="hero h-full" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1524863479829-916d8e77f114?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8eW9nYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60")` }}>
                        <div className="hero-overlay bg-opacity-35"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="text-5xl font-bold uppercase text-white font-ital">wlcome Our <p className="text-orange-400  ">Hero's univers</p></h1>
                                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                {btnGroup}
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item3" className="carousel-item w-full">
                    <div className="hero h-full" style={{ backgroundImage: `url("https://media.istockphoto.com/id/1322778088/photo/close-up-group-of-adult-people-practicing-yoga.webp?b=1&s=170667a&w=0&k=20&c=NiAxjPcC0TJ91e17gLwHpCn015cYnvNjCurOXm2-zpE=")` }}>
                        <div className="hero-overlay bg-opacity-35"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="text-5xl font-bold uppercase text-white font-ital">wlcome Our <p className="text-orange-400  ">Hero's univers</p></h1>
                                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                {btnGroup}
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item4" className="carousel-item w-full">
                    <div className="hero h-full" style={{ backgroundImage: `url("https://media.istockphoto.com/id/1438703240/photo/yoga-outdoor-class-in-new-york.webp?b=1&s=170667a&w=0&k=20&c=gImvry4sPgxwvq_RzaSNnw_T25zeDiGBaDEyeZC6uMQ=")` }}>
                        <div className="hero-overlay bg-opacity-35"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="text-5xl font-bold uppercase text-white font-ital">wlcome Our <p className="text-orange-400  ">Hero's univers</p></h1>
                                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                {btnGroup}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>



        </div>
    );
};

export default Bannar;