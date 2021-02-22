import React from 'react'

function ContentRight(props) {

  /**
   * props.data
   * props.setData()
   * props.checkedProjects
   * props.setCheckedProjects()
   */

  return (

    // <div>

    // </div>

    // test for checkbox logic only
    <div>
      {props.checkedProjects.map((value, index) => <p key={index}>{value}</p>)}
    </div>
    
  );

}

export default ContentRight;