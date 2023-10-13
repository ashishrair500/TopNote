/*this component is to show items (files , folder ) in the dashboard folder or in subfolders or in admin folder 
we are exporting it to the HomeComponent and everywhere in subfolders too
*/
import React from 'react'
import "./ShowItems.css";
const ShowItems = ({title,items}) => { //props receiving from the HomeComponents  letter from the fire base
  return (
    <div className='w-100'>
      <h4 className='text-center border-bottom'>{title}</h4>
      <div className="row gap-2 p-4 flex-wrap">
        {items.map((item,index)=>{

       return <p key={index * 55} className='col-md-2 border p-2 text-center' > {item}</p>;

        })
        }
      </div>
    </div>
  );
};

export default ShowItems
