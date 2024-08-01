import React, {useState} from 'react'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
const data = {
    labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
        {
            label: 'Dataset 1',
            data: [65, 59, 80, 81, 56, 55, 40],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: true,
        },
    ],
};

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart Overview',
        },
    },
};

const sales = [
    {
        id: 1,
        country: 'Country:',
        countryN: 'UNITED STATE',
        sales: 'Sales:',
        salesP: '2500',
        value: 'Value:',
        valueP: '$230,900',
        bounce: 'Bounce:',
        bounceP: '29.9%'
    },
    {
        id: 2,
        country: 'Country:',
        countryN: 'Germany',
        sales: 'Sales:',
        salesP: '3.900',
        value: 'Value:',
        valueP: '$440,000',
        bounce: 'Bounce:',
        bounceP: '40.22%'
    },
    {
        id: 3,
        country: 'Country:',
        countryN: 'Great Britain',
        sales: 'Sales:',
        salesP: '1.400',
        value: 'Value:',
        valueP: '$190,700',
        bounce: 'Bounce:',
        bounceP: '23.44%'
    },
    {
        id: 4,
        country: 'Country:',
        countryN: 'Brasil',
        sales: 'sales:',
        salesP: '562',
        value: 'Value:',
        valueP: '$143,960',
        bounce: 'Bounce:',
        bounceP: '32.14%'
    },
]

const images = [
    "https://wallpapercave.com/wp/wp3386769.jpg",
    "https://images.unsplash.com/photo-1721633617180-97c67428a48e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg",
    "https://plus.unsplash.com/premium_photo-1720823182783-3b9fb27e40d9?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg"
];

const Rtl = ({isOpen}) => {

  const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

  return (
    <>
    <div className='md:flex flex-1 p-5 mt-5 gap-3 flex-wrap'>
        <div className='flex-1 md:w-auto md:h-auto h-28 box-border border-2 border-gray-400 rounded-2xl px-6 py-2 bg-white mb-3 md:mb-0'>
            <div className="flex flex-1 items-center justify-between gap-4">
                <div>
                    <p className='text-base font-medium text-gray-500'>TODAY'S MONEY</p>
                    <h3 className='text-xl font-semibold text-black'>$53000</h3>
                </div>
                <div className='border-none border-l-gray-300 rounded-full px-4 py-2 bg-two'>
                    <a href="#"><i className="ri-coins-line text-xl font-medium text-white"></i></a>
                </div>
            </div>
            <p className='text-base font-normal mt-5'><span className='text-green-500'>+55%</span>Since yesterday</p>
        </div>

        <div className='flex-1 md:w-auto md:h-auto h-28 box-border border-2 border-gray-400 rounded-2xl px-6 py-2 bg-white mb-3 md:mb-0'>
            <div className="flex flex-1 items-center justify-between gap-4">
                <div>
                    <p className='text-base font-medium text-gray-500'>TODAY'S USERS</p>
                    <h3 className='text-xl font-semibold text-black'>2,400</h3>
                </div>
                <div className='border-none border-l-gray-300 rounded-full px-4 py-2 bg-red-500'>
                    <a href="#"><i className="ri-group-line text-xl font-medium text-white"></i></a>
                </div>
            </div>
            <p className='text-base font-normal mt-5'><span className='text-green-500'>3%</span>Since Last week</p>
        </div>

        <div className='flex-1 md:w-auto md:h-auto h-28 box-border border-2 border-gray-400 rounded-2xl px-6 py-2 bg-white mb-3 md:mb-0'>
            <div className="flex flex-1 items-center justify-between gap-4">
                <div>
                    <p className='text-base font-medium text-gray-500'>NEW CLIENT'S</p>
                    <h3 className='text-xl font-semibold text-black'>+3,462</h3>
                </div>
                <div className='border-none border-l-gray-300 rounded-full px-4 py-2 bg-[#628562]'>
                    <a href="#"><i className="ri-group-3-line text-xl font-medium text-white"></i></a>
                </div>
            </div>
            <p className='text-base font-normal mt-5'><span className='text-red-500'>-2%</span>Since Last quarter</p>
        </div>

        <div className='flex-1 md:w-auto md:h-auto h-28 box-border border-2 border-gray-400 rounded-2xl px-6 py-2 bg-white mb-3 md:mb-0'>
            <div className="flex flex-1 items-center justify-between gap-4">
                <div>
                    <p className='text-base font-medium text-gray-500'>SALES</p>
                    <h3 className='text-xl font-semibold text-black'>$103,430</h3>
                </div>
                <div className='border-none border-l-gray-300 rounded-full px-4 py-2 bg-[#f3c22f]'>
                    <a href="#"><i className="ri-shopping-cart-2-line text-xl font-medium text-white"></i></a>
                </div>
            </div>
            <p className='text-base font-normal mt-5'><span className='text-green-500'>+5%</span>than Last month</p>
        </div>
    </div>

    <div className='md:flex flex-1 gap-5 mr-5'>
        <div className="w-full max-w-4xl mx-auto mt-10 p-4 bg-white shadow-md rounded-xl border-none">
            <Line data={data} options={options} />
        </div>

        <div className="relative w-full max-w-xl mx-auto mt-10">
            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }} >
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-auto"
                        />
                    ))}
                </div>
            </div>
            <button
                onClick={prevSlide}
                className="absolute top-1/2 transform -translate-y-1/2 right-0 bg-white p-2 rounded-full shadow-md">
                &#10094;
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 transform -translate-y-1/2 left-0 bg-white p-2 rounded-full shadow-md" >
                &#10095;
            </button>
        </div>

    </div>

    <div className='md:flex mr-5 gap-4 flex-wrap mt-10'>
        <div className='bg-white px-4 py-2 rounded-xl border border-gray-200 flex-1 w-full mb-3 md:mb-0'>
            <h1 className='pt-4 text-base font-bold'>Sales by Country</h1>
            <div className='border border-gray-200 mt-2'></div>
            <div className='mt-5 overflow-x-auto'>
                <table className='w-full min-w-max'>
                    <tbody>
                        {sales.map((item) => (
                            <tr key={item.id} className='border-b-2 p-2'>
                                <td className='px-4 py-2 md:flex flex-col my-2 text-base text-gray-500'>
                                    <div>{item.country}</div>
                                    <div className='text-base font-semibold text-gray-800'>{item.countryN}</div>
                                </td>
                                <td className='px-4 py-2'>{item.sales}{item.salesP}</td>
                                <td className='px-4 py-2'>{item.value}{item.salesP}</td>
                                <td className='px-4 py-2'>{item.bounce}{item.bounceP}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

        <div className='bg-white px-4 py-4 rounded-xl border border-gray-200 min-w-72 flex-1 mb-3 md:mb-0'>
            <h2 className='py-6 text-base font-bold'>Categories</h2>
            <div className='flex justify-between py-3'>
                <div className='flex gap-3'>
                    <a href="">
                        <i className="ri-smartphone-fill border-none border-gray-300 rounded-full bg-gray-600 text-white p-2 items-center justify-center"></i>
                    </a>
                    <div>
                        <h2 className='text-base font-medium text-gray-600'>Devices</h2>
                        <p className='text-sm font-normal text-gray-400'>250 in stock, <span className='text-base font-medium text-gray-500'>346+ sold</span></p>
                    </div>
                </div>
                <a href="#"><i className="ri-arrow-left-s-line text-xl"></i></a>
            </div>

            <div className='flex justify-between py-3'>
                <div className='flex gap-3'>
                    <a href="">
                        <i className="ri-coupon-line border-none border-gray-300 rounded-full bg-gray-600 text-white p-2 items-center justify-center"></i>
                    </a>
                    <div>
                        <h2 className='text-base font-medium text-gray-600'>Ticket</h2>
                        <p className='text-sm font-normal text-gray-400'>123 closed, <span className='text-base font-medium text-gray-500'>15 open</span></p>
                    </div>
                </div>
                <a href="#"><i className="ri-arrow-left-s-line text-xl"></i></a>
            </div>

            <div className='flex justify-between py-3'>
                <div className='flex gap-3'>
                    <a href="">
                        <i className="ri-error-warning-line border-none border-gray-300 rounded-full bg-gray-600 text-white p-2 items-center justify-center"></i>
                    </a>
                    <div>
                        <h2 className='text-base font-medium text-gray-600'>Error logs</h2>
                        <p className='text-sm font-normal text-gray-400'>1 is active, <span className='text-base font-medium text-gray-500'>40 closed</span></p>
                    </div>
                </div>
                <a href="#"><i className="ri-arrow-left-s-line text-xl"></i></a>
            </div>

            <div className='flex justify-between py-3'>
                <div className='flex gap-3'>
                    <a href="">
                        <i className="ri-emotion-happy-line border-none border-gray-300 rounded-full bg-gray-600 text-white p-2 items-center justify-center"></i>
                    </a>
                    <div>
                        <h2 className='text-base font-medium text-gray-600'>Happy Users</h2>
                        <p className='text-sm font-normal text-gray-400'>+430</p>
                    </div>
                </div>
                <a href="#"><i className="ri-arrow-left-s-line text-xl"></i></a>
            </div>
        </div>
    </div>
</>

  )
}

export default Rtl