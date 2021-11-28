import React from 'react'
import Tasks from '../Tasks/Tasks';
import './Lists.scss';

const Lists = ({ lists }) => {
    return (
        <>
            {lists ? lists.map((item) => (
                <div className="mainviewList" key={item.id}>
                    <p className="listsListName">{item.name}</p>
                    <Tasks tasks={item.task} />
                </div>
            )) : null}
        </>
    )
}
export default Lists;
