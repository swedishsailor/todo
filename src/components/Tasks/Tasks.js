import React, {useEffect} from 'react'
import { faCheckSquare, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { addTask } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import './Tasks.scss';

export const Tasks = ({ tasks }) => {

    const newTask = {
        id:10,
        name: 'name your task',
        isDone: false,
    }

    {/*onClick={
                useEffect((e) => {
                  dispatch(addTask(newTask, e));
                  console.log(e.target.id)
                }, [])
                }*/} 

    let dispatch = useDispatch();
    return (
        <div className="tasksWrapper">
            {tasks ? tasks.map((task) => (
                <div className="tasksTaskDiv" key={task.id}>
                    <FontAwesomeIcon icon={faCheckSquare} className="checkIcon" id={task.id} onClick={(e) => { console.log(e.target.id)}}/>
                    <input className="tasksTask" placeholder="task name" defaultValue={task.name}></input>
                    <FontAwesomeIcon icon={faTrash} className="deleteIcon" id={task.id} onClick={(e) => { console.log(e.target.id)}}/>
                </div>
            )) : null}
            <div className="tasksAddTask"  onClick={(e) => { console.log(e.target.key)}}>
                <FontAwesomeIcon icon={faPlus} className="addTaskIcon" />
                <p className="text"> Add Task</p>
            </div>
        </div>
    )
}
export default Tasks;
