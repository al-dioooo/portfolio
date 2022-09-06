const Home = () => {
    return (
        <div className="flex flex-col items-start min-h-screen p-16 space-y-8 font-sans text-white md:flex-row md:space-y-0 md:items-center bg-neutral-900">
            <div className="w-full md:w-1/2 md:p-16">
                <div className="relative overflow-hidden pointer-events-none select-none aspect-square bg-neutral-600 rounded-3xl">
                    <img src="topography.svg" alt="" className="w-full" />
                    <div className="absolute inset-0 p-16 lg:p-24">
                        <img src="face.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="flex-1 space-y-16 leading-4">
                <h1 className="space-y-4 text-4xl font-bold lg:text-7xl">
                    <div>Sorry!</div>
                    <div className="text-2xl lg:text-4xl text-neutral-400">
                        This website is under construction.
                    </div>
                </h1>
                <h3 className="lg:text-2xl">You might wanna visit my instagram <span><a href="https://www.instagram.com/al.dioooo/" target="blank" className="underline underline-offset-4 decoration-neutral-600 decoration-4 hover:decoration-neutral-400">here</a></span>. Or maybe you wanna visit my old portfolio <span><a href="https://aldiolisafrongdrivesite.on.drv.tw/Curriculum%20Vitae/" target="blank" className="underline underline-offset-4 decoration-neutral-600 decoration-4 hover:decoration-neutral-400">here</a></span>.</h3>
            </div>
        </div>
    )
}

export default Home