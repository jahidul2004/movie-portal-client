import Swal from "sweetalert2";

const NewsLatter = () => {
    const handleSubscribe = (e) => {
        e.preventDefault();
        const form = e.target;
        Swal.fire({
            title: "Success!",
            text: "You have successfully subscribed to our news latter",
            icon: "success",
            confirmButtonText: "Close",
            customClass: {
                confirmButton: "bg-[#e50912] text-white",
            },
        });
        form.reset();
    };
    return (
        <div className="mx-5 my-10 p-10 shadow-xl rounded-lg flex flex-col justify-center items-center">
            <h1 className="text-center leading-12 text-3xl font-bold text-[#e50912] mb-5">
                Subscribe to Movie Portal <br /> Weekly News latter
            </h1>
            <form onSubmit={handleSubscribe} className="my-5 w-full md:w-1/2">
                <div className="flex flex-col md:flex-row gap-2 justify-center items-center">
                    <label className="input input-bordered flex items-center gap-2">
                        <input
                            required
                            name="email"
                            type="email"
                            className="grow"
                            placeholder="Enter Your Email"
                        />
                    </label>
                    <button className="btn bg-[#e50912] text-white">
                        Subscribe
                    </button>
                </div>
            </form>
        </div>
    );
};

export default NewsLatter;
