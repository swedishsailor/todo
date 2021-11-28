import React, { useEffect } from 'react';
import './MainView.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getListsInfo } from '../../redux/actions';
import Lists from '../Lists/Lists';

const MainView = () => {

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
        <FontAwesomeIcon className="plusIcon" icon={faPlusCircle} />
      </div>
      <Link to="/">
        <FontAwesomeIcon icon={faDoorOpen} className="exitIcon" />
      </Link>
    </div>
  );
}

export default MainView;