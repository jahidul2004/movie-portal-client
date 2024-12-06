const Slider = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div
                    id="slide1"
                    className="max-h-[400px] carousel-item relative w-full"
                >
                    <img
                        src="https://i.ibb.co.com/rH5tfZL/lead-image-movie-tv-show-templates-01-1648519747.jpg"
                        className="w-full"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide2" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
                <div
                    id="slide2"
                    className="max-h-[400px] carousel-item relative w-full"
                >
                    <img
                        src="https://i.ibb.co.com/t4mRtmC/best-movie-of-2024-so-far-v0-0a4hfucrwxnd1.webp"
                        className="w-full"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide3" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
                <div
                    id="slide3"
                    className="max-h-[400px] carousel-item relative w-full"
                >
                    <img
                        src="https://i.ibb.co.com/7yFsw07/a0ce48-7e1313413286498f90c06c62fc1412a8-mv2.webp"
                        className="w-full"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide1" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;
