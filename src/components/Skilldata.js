import React from 'react'

function Skilldata(props) {
  return (
     <div className="item">
      <img
        src={props.imglink}
        alt="Image"
        style={{ height: 100, width: 100, marginTop: 10 }}
      />
      <h6 style={{ margin: 10 }}>{props.skillname}</h6>
    </div>
  )
}

export default Skilldata
