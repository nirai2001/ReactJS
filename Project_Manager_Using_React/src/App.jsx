import { useState } from "react";
import Information from "./Components/Information";
import NoProject from "./Components/NoProject";
import Sidebar from "./Components/Sidebar";
import SelectedProject from "./Components/SelectedProject";


function App() {
  const [projectState, setProjectState] = useState({
    selectProjectId: undefined,
    projects: [],
    tasks: []
  });

  function handleAddTasks(text){
    setProjectState(prev => {
      const taskId= Math.random();
      const newTask={
        text:text,
        projectId: prev.selectProjectId,
        id:taskId
      }

      return {
        ...prev,
        tasks: [newTask, ...prev.tasks]
      }
    })
  }

  function handleDeleteTasks(id){
    setProjectState((prev) => {
      return{
        ...prev,
        tasks : prev.tasks.filter((task)=>task.id !=id)
      }
    })
  }

  function handleSelectedProject(id)
  {
    setProjectState(prev =>{
      return {
        ...prev,
        selectProjectId:id,
      };
    });
  }

  function handleStartAddProject(){
    setProjectState(prev =>{
      return {
        ...prev,
        selectProjectId: null,
      };
    });
  }

  function handleAddProject(projectData)
  {
    setProjectState(prev => {
      const newProj={
        ...projectData,
        id: Math.random()
      };

      return {
        ...prev,
        selectProjectId: undefined,
        projects: [...prev.projects, newProj]
      }
    })
  }

  function handleCancelAddProject()
  {
    setProjectState(prev =>{
      return {
        ...prev,
        selectProjectId: undefined,
      };
    });
  }

  function handleDeleteProject()
  {
    setProjectState(prev =>{
      return {
        ...prev,
        selectProjectId: undefined,
        projects: prev.projects.filter(
          (project) => project.id !== prev.selectProjectId
        )
      };
  });
 }

  const selProject = projectState.projects.find(pro => pro.id ===projectState.selectProjectId)

  let cont = <SelectedProject 
  project={selProject} 
  onDelete={handleDeleteProject} 
  onAddTask={handleAddTasks} 
  onDeleteTask={handleDeleteTasks}
  tasks={projectState.tasks}/>;

  if(projectState.selectProjectId===null){
    cont=<Information onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
  }
  else if(projectState.selectProjectId===undefined){
    cont=<NoProject onStartAddProject={handleStartAddProject}/>
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar selectedProjectId={projectState.selectProjectId  } onStartAddProject={handleStartAddProject} haveProject={projectState.projects} onSelect={handleSelectedProject}/>
      {cont}
    </main>
  );
}

export default App;
