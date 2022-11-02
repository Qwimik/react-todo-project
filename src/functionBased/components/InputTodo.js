import React, { useState } from "react";
import { FaApple } from "react-icons/fa";

const InputTodo = (props) => {
  const [inputText, setInputText] = useState({
    title: "",
  });

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.title.trim()) {
      props.addTodoProps(inputText.title);
      setInputText({
        title: "",
      });
    } else {
      alert("Please write item");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={inputText.title}
        name="title"
        onChange={onChange}
      />
      <button className="input-submit">
        <FaApple
          style={{ color: "darkcyan", fontSize: "20px", marginTop: "2px" }}
        />
      </button>
    </form>
  );
};

export default InputTodo;

// import React, { useState } from "react"

// const [title, setTitle] = useState('Hello');
//title = "Hello"

// const InputTodo = () => {
//   console.log(useState("hello"))
//   return <div></div>
// }
// export default InputTodo

// const onChange = e => {setInputText({
// ...inputText,[e.target.name]: e.target.value,})}