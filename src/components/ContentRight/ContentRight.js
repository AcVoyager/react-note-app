import React from 'react'

function ContentRight(props) {

  /**
   * props.data
   * props.setData()
   * props.checkedProjects
   * props.setCheckedProjects()
   */

  return (
    <div>
      {props.checkedProjects.map((value, index) => <p key={index}>{value}</p>)}
    </div>
  );

}

export default ContentRight;