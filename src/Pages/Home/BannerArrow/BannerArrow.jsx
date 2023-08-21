
const BannerArrow = () => {

    const infos = [
        {
            id: 1,
            title: 'Affordable Price For Car Servicing',
            details: 'There are many variations of passages of  available, but the majority have suffered alteration in some form',
        },
        {
            id: 2,
            title: 'Affordable Price For Car Servicing',
            details: 'There are many variations of passages of  available, but the majority have suffered alteration in some form',
        },
        {
            id: 3,
            title: 'Affordable Price For Car Servicing',
            details: 'There are many variations of passages of  available, but the majority have suffered alteration in some form',
        },
        {
            id: 4,
            title: 'Affordable Price For Car Servicing',
            details: 'There are many variations of passages of  available, but the majority have suffered alteration in some form',
        },
        {
            id: 5,
            title: 'Affordable Price For Car Servicing',
            details: 'There are many variations of passages of  available, but the majority have suffered alteration in some form',
        },
        {
            id: 6,
            title: 'Affordable Price For Car Servicing',
            details: 'There are many variations of passages of  available, but the majority have suffered alteration in some form',
        },
    ]

    return (
        <div className="absolute h-full flex items-center font-bold left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
            <div className=' text-white space-y-7 w-1/2 pl-12 bg-transparent'>

                {
                    // infos.map(info => <h2>{info.title}</h2>)
                    //error for no key
                }
                <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div className='space-x-4'>
                    <button className="btn btn-info">Discover More</button>
                    <button className="btn btn-outline btn-secondary">Latest Project</button>
                </div>
            </div>
        </div>

    );
};

export default BannerArrow;