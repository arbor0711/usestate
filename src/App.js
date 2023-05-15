import React, { useState } from "react";

function GoalForm(props) {
  const [formData, setFormData] = useState({ goal: "", by: "" });

  function changeHandler(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function submitHandler(e) {
    e.preventDefault();
    props.onAdd(formData); //TODO: SHOULD LEARN
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

function GiftCard(props) {
  const giftCard = props.giftCard;
  const spendGiftCard = props.spendGiftCard;
  return (
    <div>
      <h1>Gift Card Page</h1>
      <h2>
        Customer: {giftCard.firstName} {giftCard.lastName}
      </h2>
      <h3>{giftCard.text}</h3>
      <p>{giftCard.instructions}</p>
      {giftCard.valid && (
        <button onClick={spendGiftCard}>Spend Gift Card</button>
      )}
    </div>
  );
}

export default function APP() {
  const [allGoals, setAllGoals] = useState([]);
  const [giftCard, setGiftCard] = useState({
    firstName: "Jennifer",
    lastName: "Smith",
    text: "Free dinner for 4 guests",
    valid: true,
    instructions: "To use your coupon, click the button below.",
  });

  function spendGiftCard() {
    setGiftCard({
      ...giftCard,
      valid: false,
      text: "Your coupon has been used.",
      instructions: "Please visit our restaurant to renew your gift card.",
    });
  }

  function addGoal(goal) {
    setAllGoals([...allGoals, goal]);
  }

  return (
    <div className="App">
      <GoalForm onAdd={addGoal} />
      <ListOfGoals allGoals={allGoals} />
      <GiftCard giftCard={giftCard} spendGiftCard={spendGiftCard} />
    </div>
  );
}
