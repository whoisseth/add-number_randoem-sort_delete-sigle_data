import "./styles.css";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export default function App() {
  const [items, setItems] = useState([0, 1, 2]);
  const [parent] = useAutoAnimate();

  function removeNumber(itemIndex) {
    const newNumber = items.filter((data, index) => itemIndex !== index);
    setItems(newNumber);
  }

  return (
    <>
      <button onClick={() => setItems([...items, items.length + 1])}>
        Add number
      </button>
      <button
        onClick={() => setItems([...items.sort(() => Math.random() - 0.5)])}
      >
        Random sorting
      </button>
      <button onClick={() => setItems([])}>Clear</button>

      <ul ref={parent}>
        {items.map((item, index) => (
          <div>
            <li key={item}>{item}</li>
            <button onClick={() => removeNumber(index)}>Delete</button>
          </div>
        ))}
      </ul>
    </>
  );
}
