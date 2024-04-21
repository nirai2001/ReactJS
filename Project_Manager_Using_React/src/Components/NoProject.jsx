import noimage from '../assets/no-projects.png'
import Button from './Button'
export default function NoProject({onStartAddProject})
{
    return(
        <div className='w-2/3 mt-24 text-center'>
            <img src={noimage} alt="Task List" className='w-16 h-16 object-contain mx-auto'/>
            <h2 className='text-xl font-bold text-stone-500 my-4'>No Project Selected</h2>
            <p className='text-stone-400 mb-4'>Select a project or get started with the new one</p>
            <p className='mt-8'>
                <Button onClick={onStartAddProject} labels="Create a new project" />
            </p>
        </div>
    )
}