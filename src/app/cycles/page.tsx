import React from 'react'

const raw=[
    {
    title:"Cycle 1: Introduction and Goal Setting",
    des:" Introduce the topic, set clear learning goals, and assess prior knowledge",
    acc:"Activites",
    accDes : `Present an overview of the subject matter, and Discuss the relevance and applications further Conduct a pre-assessment to gauge students' current understanding Set specific, measurable, achievable, relevant, and time-bound (SMART) goals.`
    },

    {
        heading:"Cycle 2:working",
        sub:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci amet nesciunt sed exercitationem sit. Dolore earum voluptates, error beatae alias sapiente. Quaerat totam dolorem dicta nemo iusto error quod officia!"

     },

    {
            heading:"Cycle 3:",
            sub:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci amet nesciunt sed exercitationem sit. Dolore earum voluptates, error beatae alias sapiente. Quaerat totam dolorem dicta nemo iusto error quod officia!"
  },
    
]







const Cycles = () => {


  return (
    <div className='w-full h-screen px-24 py-8 flex flex-col items-center justify-center bg-black text-white gap-10'>
        <h1 className='font-bold text-4xl '>Cycles</h1>
        <div className=' w-1/2 px-6 py-4 border rounded-lg'>
            <h2 className='font-bold text-3xl mb-6'>Cycle 1: Learning</h2>
          <h4>Introduce the topic, set clear learning goals, and assess prior knowledge</h4>  
            <p className='font-thin text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci amet nesciunt sed exercitationem sit. Dolore earum voluptates, error beatae alias sapiente. Quaerat totam dolorem dicta nemo iusto error quod officia!</p>

        </div>
        
    </div>
  )
}

export default Cycles