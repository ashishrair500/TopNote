/*this component is to show items (files , folder ) in the dashboard folder or in subfolders or in admin folder 
we are exporting it to the HomeComponent and everywhere in subfolders too
*/

import React from 'react'
import "./ShowItems.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faFolder } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


const ShowItems = ({ title, items, type }) => { //props receiving from the HomeComponents  letter from the fire base
console.log(items)  //items are the all folders
  const navigate = useNavigate();

  const handleDoubleClick = (itemId) => { 
    if (type === "folder") {
      navigate(`/dashboard/folder/${itemId}`)
      console.log(itemId)
    } else {
      alert("File clicked");

    }
  }
  return (
    <div className='w-100'>
      <h4 className='text-center border-bottom'>{title}</h4>
      <div className="row gap-2 p-4 flex-wrap">
  {items.map((item, index) => {
    // Check if item and item.data are defined before accessing 'name'
    if (item && item.data) {
      return (
        <p
          key={index * 55}
          className='col-md-2 py-2 border p-2 text-center d-flex flex-column border'
          onDoubleClick={() => handleDoubleClick(item.docId)}
        >
          {type === "folder" ? (
            <FontAwesomeIcon icon={faFolder} size='4x' className='mb-3' />
          ) : (
            <FontAwesomeIcon icon={faFileAlt} size='4x' className='mb-3' />
          )}
          {item.data.name}
        </p>
      );
    } else {
      // Handle the case where 'item' or 'item.data' is undefined
      return null; // or some other fallback UI
    }
  })}
</div>

    </div>
  );
};

export default ShowItems
