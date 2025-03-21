import React, { useState } from "react";

const Todo = () => {
  const [initial, setInitial] = useState("");
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const getChange = (e) => {
    console.log(e.target.value);
    setInitial(e.target.value);
  };

  const getData = () => {
    if (initial.trim() === "") {
      window.alert("Enter a task");
    } else if (editIndex !== null) {
      const updateData = data.map((item, index) =>
        index === editIndex ? initial : item
      );
      setData(updateData);
      setEditIndex(null);
    } else {
      setData([...data, initial]);
    }
    setInitial("");
  };

  const deleteData = (index) => {
    console.log(initial);
    const filterData = data.filter((currentValue, id) => {
      return id != index;
    }, []);
    setData(filterData);
  };

  const editData = (index) => {
    setInitial(data[index]);
    setEditIndex(index);
  };
  return (
    <>
      <div className="container">
        <input
          type="text"
          placeholder="Enter Task"
          value={initial}
          onChange={getChange}
        />
        <button type="button" onClick={getData}>
          {editIndex != null ? "UPDATE" : "ADD"}
        </button>
      </div>
      {data.map((curValue, index) => {
        return (
          <>
            <div className="taskData">
              <p>{curValue}</p>
              <button
                className="edit"
                onClick={() => {
                  editData(index);
                }}
              >
                Edit
              </button>
              <button
                className="delete"
                onClick={() => {
                  deleteData(index);
                }}
              >
                Delete
              </button>
            </div>
          </>
        );
      }, [])}
    </>
  );
};
export default Todo;
