import { useState } from "react";
import { useDispatch } from "react-redux";
import { createGoal } from "../features/goals/goalSlice";

function GoalForm() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createGoal({ text }));
    setText("");
  };

  return (
    <section className="form">
      <form className="form-group" onSubmit={onSubmit}>
        <label htmlFor="text">Goal</label>
        <input
          type="text"
          name="text"
          id="text"
          value={text}
          onChange={(e) => e.target.value}
          placeholder="Enter a goal"
        />
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            Add Goal
          </button>
        </div>
      </form>
    </section>
  );
}

export default GoalForm;
