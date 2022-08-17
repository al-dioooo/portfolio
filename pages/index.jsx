const Home = () => {
    return (
        <div className="flex md:flex-row flex-col min-h-screen space-y-8 md:space-y-0 p-16 items-start md:items-center bg-neutral-900 text-white font-sans">
            <div className="w-full md:w-1/2 md:p-16">
                <div className="aspect-square relative bg-neutral-600 rounded-3xl overflow-hidden pointer-events-none select-none">
                    <img src="topography.svg" alt="" className="w-full" />
                    <div className="absolute inset-0 p-16 lg:p-24">
                        <img src="face.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="space-y-16 leading-4">
                <h1 className="text-4xl lg:text-7xl font-bold space-y-4">
                    <div>Sorry!</div>
                    <div className="text-2xl lg:text-4xl text-neutral-400">
                        This website is under construction.
                    </div>
                </h1>
                <h3 className="lg:text-2xl">You might wanna visit my instagram <span><a href="https://www.instagram.com/al.dioooo/" target="blank" className="underline underline-offset-8 decoration-neutral-600 decoration-4 hover:decoration-neutral-400">here</a></span>.</h3>
            </div>
        </div>
    )
}

export default Home