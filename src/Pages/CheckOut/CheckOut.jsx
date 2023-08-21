import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const CheckOut = () => {
    const service = useLoaderData();
    const { title, price, _id, img } = service

    const { user } = useContext(AuthContext);

    const handleBookService = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = user?.email;
        const name = form.name.value;
        const date = form.date.value;
        const booking = {
            customerName: name,
            email,
            date,
            img,

            service: title,
            service_id: _id,
            price: price
        }
        console.log(booking);

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {

                if (data.insertedId) {
                    alert('Service book successfully')
                }
            })

    }

    return (
        <div>
            <h2 className="text-center font-bold text-3xl text-orange-500 mb-5">Check Out:{title}</h2>


            <div className="card-body bg-base-200">
                <form onSubmit={handleBookService}>
                    <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-control">
                            <input type="text" name="name" defaultValue={user?.displayName} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="Date" name="date" placeholder="date" className="input input-bordered" />
                        </div> <div className="form-control">
                            <input type="text" name="email" defaultValue={user?.email} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="text" name="price" defaultValue={'$ ' + price} className="input input-bordered" />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input type="text" placeholder="You message" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-error btn-block" type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckOut;