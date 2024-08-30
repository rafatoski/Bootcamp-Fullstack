import React , { useState} from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{textAlign: 'center', marginTop: '50px'}}>
      <h1>Hit the button to add to {count}</h1>
      <button onClick={()=> setCount(count + 1)}>Add</button>
    </div>
  );
}

export default App;