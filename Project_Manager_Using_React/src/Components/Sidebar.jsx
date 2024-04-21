import Button from "./Button";

export default function Sidebar({onStartAddProject,haveProject,onSelect,selectedProjectId})
{
    return(
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 text-2xl font-bold uppercase" >MY PROJECTS</h2>
            <div>
                <Button onClick={onStartAddProject} labels="+ Add Projects"/>
            </div>
            <ul className="mt-8">
                {haveProject.map( pro => {
                    let css="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";
                
                    if(pro.id === selectedProjectId){
                        css += ' bg-stone-800 text-stone-200'
                    }
                    else{
                        css += ' text-stone-400'
                    }
                    return(
                    <li key={pro.id}>
                        <button className={css}
                        onClick={() => onSelect(pro.id)}>
                            {pro.title}
                        </button>
                    </li>
                    )
                } )}
            </ul>
        </aside>
    )
}