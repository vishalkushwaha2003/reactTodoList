import { useState, useRef } from "react";

function App() {
  const [task, setTask] = useState("");
  const [items, setItems] = useState([]);
  const vishal = useRef("");

  function additems() {
    if (task != "") {
      setItems([...items, task]);
      setTask("");
      vishal.current.focus();
    } else {
      alert("please enter task");
    }
  }
  function removeItem(i) {
    const updatedItems = items.filter((el, id) => i != id);
    setItems(updatedItems);
  }
  function removeAll() {
    setItems([]);
  }

  return (
    <>
      <div className="search">
        <input
          type="text"
          value={task}
          ref={vishal}
          placeholder="task name"
          onChange={(e) => setTask(e.target.value)}
        />
        <span>
          <button onClick={additems}>+</button>
        </span>
      </div>
      {items.map((items, i) => (
        <div className="items">
          <div className="text">
            {i + 1} {items}
          </div>
          <button className="minus" onClick={() => removeItem(i)}>
            -
          </button>
        </div>
      ))}
      {items.length >= 1 && (
        <div className="btn">
          <button onClick={removeAll}>Remove all</button>
        </div>
      )}
    </>
  );
}

export default App;
