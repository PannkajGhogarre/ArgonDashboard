import React from 'react'



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


function Dashboard() {
    return (
        <>
            <div className='md:flex flex-1 p-5 mt-5 gap-3 '>
                <div className='md:w-auto h-28 box-border border-2 border-gray-400 rounded-2xl px-6 py-2 bg-white'>
                    <div className="flex flex-1 items-center justify-between gap-14">
                        <div>
                            <p className='text-base font-medium text-gray-500'>TODAY'S MONEY</p>
                            <h3 className='text-xl font-semibold text-black'>$53000</h3>
                        </div>
                        <div className='border-none border-r-gray-300 rounded-full px-4 py-2 bg-two'>
                            <a href="#"><i className="ri-coins-line text-xl font-medium text-white"></i></a>
                        </div>
                    </div>
                    <p className='text-base font-normal mt-5'><span className='text-green-500'>+55%</span>Since yesterday</p>
                </div>

                <div className='md:w-auto h-28 box-border border-2 border-gray-400 rounded-2xl px-6 py-2 bg-white'>
                    <div className="flex flex-1  items-center justify-between gap-14">
                        <div>
                            <p className='text-base font-medium text-gray-500'>TODAY'S USERS</p>
                            <h3 className='text-xl font-semibold text-black'>2,400</h3>
                        </div>
                        <div className='border-none border-r-gray-300 rounded-full px-4 py-2 bg-red-500'>
                            <a href="#"><i className="ri-group-line text-xl font-medium text-white"></i></a>
                        </div>
                    </div>
                    <p className='text-base font-normal mt-5'><span className='text-green-500'>3%</span>Since Last week</p>
                </div>

                <div className='md:w-auto h-28 box-border border-2 border-gray-400 rounded-2xl px-6 py-2 bg-white'>
                    <div className="flex flex-1  items-center justify-between gap-14">
                        <div>
                            <p className='text-base font-medium text-gray-500'>NEW CLIENT'S</p>
                            <h3 className='text-xl font-semibold text-black'>+3,462</h3>
                        </div>
                        <div className='border-none border-r-gray-300 rounded-full px-4 py-2 bg-[#628562]'>
                            <a href="#"><i className="ri-group-3-line text-xl font-medium text-white"></i></a>
                        </div>
                    </div>
                    <p className='text-base font-normal mt-5'><span className='text-red-500'>-2%</span>Since Last quarter</p>
                </div>

                <div className='md:w-auto h-28 box-border border-2 border-gray-400 rounded-2xl px-6 py-2 bg-white'>
                    <div className="flex flex-1  items-center justify-between gap-14">
                        <div>
                            <p className='text-base font-medium text-gray-500'>SALES</p>
                            <h3 className='text-xl font-semibold text-black'>$103,430</h3>
                        </div>
                        <div className='border-none border-r-gray-300 rounded-full px-4 py-2 bg-[#f3c22f]'>
                            <a href="#"><i className="ri-shopping-cart-2-line text-xl font-medium text-white"></i></a>
                        </div>
                    </div>
                    <p className='text-base font-normal mt-5'><span className='text-green-500'>+5%</span>than Last month</p>
                </div>
            </div>

            <div className='md:flex ml-5 gap-4'>
                <div className='bg-[white] px-4 py-2 rounded-xl border border-gray-200 flex-1 w-full'>
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

                <div className='bg-[white] px-4 py-4 rounded-xl border border-gray-200 min-w-72'>
                    <h2 className='py-6 text-base font-bold'>Catagories</h2>
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
                        <a href="#"><i className="ri-arrow-right-s-line text-xl"></i></a>
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
                        <a href="#"><i className="ri-arrow-right-s-line text-xl"></i></a>
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
                        <a href="#"><i className="ri-arrow-right-s-line text-xl"></i></a>
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
                        <a href="#"><i className="ri-arrow-right-s-line text-xl"></i></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard