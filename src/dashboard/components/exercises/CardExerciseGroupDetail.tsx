
// card that shows the details by exercise

import type React from "react";


interface ExerciseGroups{
    id:    number;
    name?: string;    
}

interface CardExerciseDetailProps {
    name: string;
    exercises: ExerciseGroups[];
}


export const CardExerciseGroupDetail : React.FC<CardExerciseDetailProps> = ({
    name = ""
}) => {
  return (
    <div className='bg-white shadow-md rounded-xl'>
        <h1 className='text-md font-bold tracking-normal text-black'>Exercise Detail</h1>
        
        <p className="text-xs font-semibold text-indigo-500 tracking-tighter">{name}</p>
        <img 
            src=''
            alt=''
            className="bg-cover rounded-2xl w-max h-[700px]"
        />

        {/* characterisitcs : this section describe the */}
        <div className='grid grid-cols-1 md:grid-cols-1'>
            <div className="rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-bold">
                {/* Here should be the group muscle */}
            </div>

        </div>
    </div>
  )
}
