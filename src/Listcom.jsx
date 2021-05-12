import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";

const Listcom = (props) => {
  const [line, setLine] = useState(false);
  const deleteIt = () => {
    setLine(true);
  };
  return (
    <div className="todo_style">
      <span onClick={deleteIt}>
        <DeleteIcon className="deleteIcon" />
      </span>
      <li style={{ textDecoration: line ? "line-through" : "none" }}>
        {props.text}
      </li>
    </div>
  );
};

export default Listcom;
