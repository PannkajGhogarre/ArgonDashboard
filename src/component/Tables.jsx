import React from 'react'
import { getStatus } from './utils/index'
import { completion } from './utils/complete'

const table = [
  {
    id: 1,
    AUTHER: 'John Michael',
    EMAIL: 'john@creative-tim.com',
    FUNCTION: 'Manager Organization',
    STATUS: 'online',
    EMPLOYED: '23/04/18',
    ACTION: 'Edit'

  },
  {
    id: 2,
    AUTHER: 'Alexa Liras',
    EMAIL: 'alexa@creative-tim.com',
    FUNCTION: 'Programator Developer',
    STATUS: 'offline',
    EMPLOYED: '11/09/19',
    ACTION: 'Edit'

  },
  {
    id: 3,
    AUTHER: 'Laurent Perrier',
    EMAIL: 'Laurent@creative-tim.com',
    FUNCTION: 'Executive Projects',
    STATUS: 'online',
    EMPLOYED: '19/09/17',
    ACTION: 'Edit'

  },
  {
    id: 4,
    AUTHER: 'Michael Levi',
    EMAIL: 'Michael@creative-tim.com',
    FUNCTION: 'Programator Developer',
    STATUS: 'online',
    EMPLOYED: '24/12/08',
    ACTION: 'Edit'

  },
  {
    id: 5,
    AUTHER: 'Richard Gran',
    EMAIL: 'Richard@creative-tim.com',
    FUNCTION: 'Manager Executive',
    STATUS: 'offline',
    EMPLOYED: '04/10/21',
    ACTION: 'Edit'

  },
  {
    id: 6,
    AUTHER: 'Miriam Eric',
    EMAIL: 'Miriam@creative-tim.com',
    FUNCTION: 'Programator Developer',
    STATUS: 'offline',
    EMPLOYED: '14/09/20',
    ACTION: 'Edit'

  },
]

const project = [
  {
    id:1,
    img:<img src='./spotify.png'/>,
    PROJECT: 'Spotift',
    BUDGET: '$2,500',
    STATUS: 'working',
    COMPLETION:'60%',
    ACTION: '-'
  },
  {
    id:2,
    PROJECT: 'Invesion',
    img:<img src='./knowledge.png'/>,
    BUDGET: '$5,000',
    STATUS: 'done',
    COMPLETION:'100%',
    ACTION: '-'
  },
  {
    id:3,
    img:<img src='./jira.png'/>,
    PROJECT: 'Jira',
    BUDGET: '$3,400',
    STATUS: 'canceled',
    COMPLETION:'30%',
    ACTION: '-'
  },
  {
    id:4,
    img:<img src='./slack.png'/>,
    PROJECT: 'Slack',
    BUDGET: '$1,400',
    STATUS: 'canceled',
    COMPLETION:'0%',
    ACTION: '-'
  },
  {
    id:5,
    PROJECT: 'Webdev',
    img:<img src='./network.png'/>,
    BUDGET: '$14,000',
    STATUS: 'working',
    COMPLETION:'80%',
    ACTION: '-'
  },
  {
    id:6,
    img:<img src='./xd.png'/>,
    PROJECT: 'Adobe XD',
    BUDGET: '$2,300',
    STATUS: 'done',
    COMPLETION:'100%',
    ACTION: '-'
  },
]


const Tables = () => {
  return (
    <div className='p-5'>
      <div data-aos='fade-left' data-aos-delay='800' className='bg-[white] px-4 py-5 rounded-xl border-none border-gray-200 flex-1'>
        <h1 className='pt-4 text-base font-bold'>Authors table</h1>
        <div className='border border-gray-200 mt-2'></div>
        <div className='mt-5 overflow-x-auto'>
          <table className='w-full min-w-max'>
            <thead className='border-b-2'>
              <tr>
                <td className="px-4 py-2 text-left text-sm font-semibold text-gray-400">AUTHER</td>
                <td className="px-4 py-2 text-left text-sm font-semibold text-gray-400">FUNCTION</td>
                <td className="px-4 py-2 text-left text-sm font-semibold text-gray-400">STATUS</td>
                <td className="px-4 py-2 text-left text-sm font-semibold text-gray-400">EMPLOYED</td>
                <td className="px-4 py-2 text-left text-sm font-semibold text-gray-400">ACTION</td>
              </tr>
            </thead>
            <tbody>
              {table.map((item) => (
                <tr key={item.id} className='border-b-2 p-2'>
                  <td className='px-4 py-2 md:flex flex-col my-2 text-base font-semibold'>
                    <div>{item.AUTHER}</div>
                    <div className='text-sm font-normal text-gray-400'>{item.EMAIL}</div>
                  </td>
                  <td className='px-4 py-2'>{item.FUNCTION}</td>
                  <td className='px-4 py-2'>{getStatus(item.STATUS)}</td>
                  <td className='px-4 py-2'>{item.EMPLOYED}</td>
                  <td className='px-4 py-2'>{item.ACTION}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className='bg-[white] px-4 py-5 rounded-xl border-none border-gray-200 flex-1 mt-10'>
        <h1 className='pt-4 text-base font-bold'>Projects table</h1>
        <div className='mt-5 overflow-x-auto'>
          <table className='w-full min-w-max'>
            <thead className='border-b-2'>
              <tr>
                <td className="px-4 py-2 text-left text-sm font-semibold text-gray-400">PROJECT</td>
                <td className="px-4 py-2 text-left text-sm font-semibold text-gray-400">BUDGET</td>
                <td className="px-4 py-2 text-left text-sm font-semibold text-gray-400">STATUS</td>
                <td className="px-4 py-2 text-left text-sm font-semibold text-gray-400">COMPLETION</td>
                <td className="px-4 py-2 text-left text-sm font-semibold text-gray-400">ACTION</td>
              </tr>
            </thead>
            <tbody>
              {project.map((item) => (
                <tr key={item.id} className='border-b-2 p-2'>
                  <td className='px-4 py-2 text-base font-semibold md:flex gap-3'><div className='w-6'>{item.img}</div><div>{item.PROJECT}</div></td>
                  <td className='px-4 py-2 text-base font-semibold text-gray-700'>{item.BUDGET}</td>
                  <td className='px-4 py-2 text-base font-semibold text-gray-500'>{item.STATUS}</td>
                  <td className='px-4 py-2'>{completion(item.COMPLETION)}</td>
                  <td className='px-4 py-2'>{item.ACTION}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )  
}

export default Tables
// return (
//   <div className='md:w-auto px-6 py-2'>
//     <div className='items-center justify-center p-8 border border-gray-300 rounded-xl mt-5 bg-white'>
//     <h2 className='text-base font-bold md:text-left text-center'>Authors table</h2>
//     <div className='md:flex items-center gap-52 text-center mt-5'>
//       <h3>Auther</h3>
//       <h3>Function</h3>
//       <h3>Status</h3>
//       <h3>Employyed</h3>
//       <h3>Action</h3>
//     </div>
//       <div className='border border-gray-100 mt-2'></div>

//       <div className='md:flex items-center gap-40 mt-5'>
//         <div>
//           <h2 className='text-base font-bold'>John Michael</h2>
//           <h3 className='text-base font-normal text-gray-400'>john@creative-tim.com</h3>
//         </div>
//         <div className=''>
//           <h2>Manager</h2>
//           <h3>Organization</h3>
//         </div>
//         <p className='border-none border-gray-300 text-white bg-green-600 h-6 px-2 rounded-xl'>ONLINE</p>
//         <p className=''>23/04/18</p>
//         <p className=''>edit</p>
//       </div>
//       <div className='border border-gray-100 mt-2'></div>

//       <div className='md:flex flex-1 items-center gap-40 mt-5'>
//         <div>
//           <h2 className='text-base font-bold'>Alexa Liras</h2>
//           <h3 className='text-base font-normal text-gray-400'>Alexa@creative-tim.com</h3>
//         </div>
//         <div className=''>
//           <h2>Programator</h2>
//           <h3>Developer</h3>
//         </div>
//         <p className='border-none border-gray-300 text-white bg-gray-600 h-6 px-2 rounded-xl'>OFFLINE</p>
//         <p className=''>11/01/19</p>
//         <p className=''>edit</p>
//       </div>
//       <div className='border border-gray-100 mt-2'></div>

//       <div className='md:flex flex-1 items-center gap-40 mt-5'>
//         <div>
//           <h2 className='text-base font-bold'>Laurent Perrier</h2>
//           <h3 className='text-base font-normal text-gray-400'>Laurent@creative-tim.com</h3>
//         </div>
//         <div className=''>
//           <h2>Executive</h2>
//           <h3>Projects</h3>
//         </div>
//         <p className='border-none border-gray-300 text-white bg-green-600 h-6 px-2 rounded-xl'>ONLINE</p>
//         <p className=''>11/01/19</p>
//         <p className=''>edit</p>
//       </div>
//       <div className='border border-gray-100 mt-2'></div>

//       <div className='md:flex flex-1 items-center gap-40 mt-5'>
//         <div>
//           <h2 className='text-base font-bold'>Michael Levi</h2>
//           <h3 className='text-base font-normal text-gray-400'>Michael@creative-tim.com</h3>
//         </div>
//         <div className=''>
//         <h2>Programator</h2>
//         <h3>Developer</h3>
//         </div>
//         <p className='border-none border-gray-300 text-white bg-green-600 h-6 px-2 rounded-xl'>ONLINE</p>
//         <p className=''>24/12/08</p>
//         <p className=''>edit</p>
//       </div>
//       <div className='border border-gray-100 mt-2'></div>
//     </div>
//   </div>
// )


// const Tables = ({ table }) => {
//   return (
//     <div className="p-5">
//       <div className="md:bg-white px-4 py-5 rounded-xl border-none border-gray-400 flex-1">
//         <h1 className="pt-4 text-base font-bold">Authors table</h1>
//         <div className="border border-gray-200 mt-2"></div>
//         <div className="mt-5 overflow-x-auto">
//           <table className="w-full min-w-max">
//             <thead className="border-b-2">
//               <tr>
//                 <th className="px-4 py-2 text-left">AUTHOR</th>
//                 <th className="px-4 py-2 text-left">FUNCTION</th>
//                 <th className="px-4 py-2 text-left">STATUS</th>
//                 <th className="px-4 py-2 text-left">EMPLOYED</th>
//                 <th className="px-4 py-2 text-left">ACTION</th>
//               </tr>
//             </thead>
//             <tbody>
//               {table.map((item) => (
//                 <tr key={item.id} className="border-b-2">
//                   <td className="px-4 py-2 md:flex flex-col my-2">
//                     <div>{item.AUTHOR}</div>
//                     <div className="text-sm text-gray-500">{item.EMAIL}</div>
//                   </td>
//                   <td className="px-4 py-2">{item.FUNCTION}</td>
//                   <td className="px-4 py-2">{getStatus(item.STATUS)}</td>
//                   <td className="px-4 py-2">{item.EMPLOYED}</td>
//                   <td className="px-4 py-2">{item.ACTION}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Tables;
