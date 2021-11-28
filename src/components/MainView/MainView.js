import React from 'react';
import './MainView.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faDoorOpen, faCheckSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

class MainView extends React.Component {

    render(){
  return (
    <div className="mainview" id="/mainview">
     <div className="mainviewList">
        <p className="mainviewListName">List name</p>
        <div className="mainviewTaskDiv">
        <FontAwesomeIcon icon={faCheckSquare} className="checkIcon"/>
        <input className="mainviewTask" placeholder="task"></input>
        <FontAwesomeIcon icon={faTrash} className="deleteIcon"/>
        </div>
     </div>
     <div className="mainviewList">
        <FontAwesomeIcon className="plusIcon" icon={faPlusCircle}/>
     </div>
    <Link to="/">
     <FontAwesomeIcon icon={faDoorOpen} className="exitIcon"/>
     </Link>
    </div>
  );
  }
}

export default MainView;