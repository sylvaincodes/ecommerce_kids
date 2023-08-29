import React from 'react'

const ButtonStyle = ({
    classBtn,
    title,
    classCol
}) => {
  return (
    <button type="submit" class={ `mx-auto ${classBtn ? classBtn : "btn btn-style-2 hover-style-2"}  ${classCol ? classCol : "col-12 "}` }> {title}</button>
  )
}

export default ButtonStyle