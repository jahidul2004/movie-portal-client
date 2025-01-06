import { Link } from "react-router-dom";

const LatestBlog = () => {
    return (
        <div className="my-10">
            <h1 className="text-3xl font-bold text-[#e50912] m-4 text-center py-6">
                Latest Blog <br />
                ------------------------------
            </h1>
            <div className="mx-5 grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure className="w-full h-[250px] overflow-hidden">
                        <img
                            className="w-full h-full object-cover"
                            src="https://i.ibb.co.com/ZXYLB70/05ed3663-71ba-4e60-ae36-13f279867f55.jpg"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">O-Purush</h2>
                        <p>
                            Priyotoma is a 2023 Bengali film directed by Himel
                            Ashraf and produced by Arshad Adnan. The movie stars
                            popular Bangladeshi actor Shakib Khan alongside
                            Indian actress Idhika Paul, who makes her debut in
                            this film.
                        </p>
                        <div className="card-actions justify-start">
                            <Link to={'/trendingNow'} className="btn bg-[#e50912] text-white">
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure className="w-full h-[250px] overflow-hidden">
                        <img
                            className="w-full h-full object-cover"
                            src="https://i.ibb.co.com/sjyHtmc/0a9ddc30-5d75-4959-82a9-48b88b2303df-1.jpg"
                            alt="Shoes"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Black Money</h2>
                        <p>
                            Priyotoma is a 2023 Bengali film directed by Himel
                            Ashraf and produced by Arshad Adnan. The movie stars
                            popular Bangladeshi actor Shakib Khan alongside
                            Indian actress Idhika Paul, who makes her debut in
                            this film.
                        </p>
                        <div className="card-actions justify-start">
                            <Link to={'/trendingNow'} className="btn bg-[#e50912] text-white">
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure className="w-full h-[250px] overflow-hidden">
                        <img
                            className="w-full h-full object-cover"
                            src="https://i.ibb.co.com/QkK12XS/thumbnails-7454bcba7bb17c330d9a239a9c49a3dd-goplay-baaji.webp"
                            alt="Shoes"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Baji</h2>
                        <p>
                            Priyotoma is a 2023 Bengali film directed by Himel
                            Ashraf and produced by Arshad Adnan. The movie stars
                            popular Bangladeshi actor Shakib Khan alongside
                            Indian actress Idhika Paul, who makes her debut in
                            this film.
                        </p>
                        <div className="card-actions justify-start">
                            <Link to={'/trendingNow'} className="btn bg-[#e50912] text-white">
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestBlog;
