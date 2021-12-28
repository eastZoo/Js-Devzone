import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onChange = (event) => setKeyword(event.target.value);
  const onClick = () => setValue((prev) => prev + 1);
  useEffect(() => {
    console.log("I run only one");
  },[]);
  useEffect(() => {
    console.log("I run when 'keyword' changes.")
  },[keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes.")
  },[counter]);
  useEffect(() => {
    console.log("I run when 'keyword & counter' changes.")
  },[keyword, counter]);
  return (
    <div>
      <input value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
} 

export default App;

//6.2~


// import Button from "./Button";
// import styles from "./App.module.css";

// function App() {
//   return (
//     <div>
//       <h1 className={styles.title}>Welcome back!!!</h1>
//       <Button text={"Continue"}/>
//     </div>
//   );
// }

// export default App;
