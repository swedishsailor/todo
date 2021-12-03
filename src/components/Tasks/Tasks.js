import React from 'react'
import { faCheckSquare, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Tasks.scss';

export const Tasks = ({ tasks }) => {
    return (
        <div className="tasksWrapper">
            {tasks ? tasks.map((task) => (
                <div className="tasksTaskDiv" key={task.id}>
                    <FontAwesomeIcon icon={faCheckSquare} className="checkIcon" />
                    <input className="tasksTask" placeholder="task name" defaultValue={task.name}></input>
                    <FontAwesomeIcon icon={faTrash} className="deleteIcon" />
                </div>
            )) : null}
            <div className="tasksAddTask">
                <FontAwesomeIcon icon={faPlus} className="addTaskIcon" />
                <p className="text"> Add Task</p>
            </div>
        </div>
    )
}
export default Tasks;
