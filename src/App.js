import React, { useState } from "react";

function GoalForm(props) {
  const [formData, setFormData] = useState({ goal: "", by: "" });

  function changeHandler(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function submitHandler(e) {
    e.preventDefault();
    props.onAdd(formData); //SHOULD LEARN
    setFormData({ goal: "", by: "" });
  }

  return (
    <>
      <h1>My Little Lemon Goals</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Goal"
          name="goal"
          onChange={changeHandler}
          value={formData.goal}
        />
        <input
          type="text"
          placeholder="by..."
          name="by"
          onChange={changeHandler}
          value={formData.by}
        />
        <button>Submit Goal</button>
      </form>
    </>
  );
}

function ListOfGoals(props) {
  return (
    <ul>
      {props.allGoals.map((g) => (
        <li key={g.goal}>
          <span>
            My goal is to {g.goal}, by {g.by}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function APP() {
  const [allGoals, setAllGoals] = useState([]);

  function addGoal(goal) {
    setAllGoals([...allGoals, goal]);
  }

  return (
    <div className="App">
      <GoalForm onAdd={addGoal} />
      <ListOfGoals allGoals={allGoals} />
    </div>
  );
}
