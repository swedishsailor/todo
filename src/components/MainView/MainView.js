import React, { useEffect, useMemo, useState } from 'react';
import './MainView.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getListsInfo, addList } from '../../redux/actions';
import Lists from '../Lists/Lists';

const MainView = () => {

  const makeid = (length) =>
{
    var text = "";
    var possible = "0123456789";

    for(var i=0; i < length; i++)
    {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}

  const newList = {
    id: makeid(3),
    name: "I'm nameless list :(",
    task: []
}

  const state = useSelector((state) => ({ ...state }));
  console.log(state);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListsInfo());
  }, []);

  /* Create array from server request to use .map function */
  Array.from(state);
  return (
    <div className="mainview" id="/mainview">
      
        <Lists lists={state.lists.lists}/>
      

      <div className="mainviewList">
        <FontAwesomeIcon className="plusIcon" icon={faPlusCircle} onClick={useEffect(() => {
          dispatch(addList(newList), getListsInfo())
         
          
        }, [])} />
      </div>
      <Link to="/">
        <FontAwesomeIcon icon={faDoorOpen} className="exitIcon" />
      </Link>
    </div>
  );
}

export default MainView;