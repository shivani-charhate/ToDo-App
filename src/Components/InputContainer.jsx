import React, { useState } from "react";

function InputContainer({inputValu,writeTodo,addTodos}) {
  return (
    <div className="inputContainer">
      <input type="text" value={inputValu} onChange={writeTodo} />
      <button onClick={addTodos}>+</button>
    </div>
  );
}

export default InputContainer;
