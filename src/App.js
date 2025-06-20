import { useState } from "react";

export default function App() {
  return (
    <div className="tip-card">
      <Total />
    </div>
  );
}

function Total() {
  const [bill, setBill] = useState(0);
  const [like1, setLike1] = useState(0);
  const [like2, setLike2] = useState(0);

  const tip = (bill * ((like1 + like2) / 2)) / 100;
  console.log(tip);

  function HandleReset() {
    setBill(0);
    setLike1(0);
    setLike2(0);
  }

  // console.log(`This is my own like ${like1}`);
  // console.log(`This is my friend's like ${like2}`);

  return (
    <div>
      <TipInput bill={bill} setBill={setBill} />
      <Dropdowns like={like1} onLike={setLike1}>
        <span>How much did you like the service</span>
      </Dropdowns>
      <Dropdowns like={like2} onLike={setLike2}>
        <span>How much did your friend like the service</span>
      </Dropdowns>
      <Output className='results' bill={bill} tip={tip} />

      <Reset HandleReset={HandleReset} />
      {/* <HandleReset setBill={setBill} setLike1={setLike1} setLike2={setLike2} /> */}
    </div>
  );
}

function TipInput({ bill, setBill }) {
  return (
    <div className="form-group">
      <label>How much was the bill</label>
      <input
        
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      ></input>
    </div>
  );
}

function Dropdowns({ children, like, onLike }) {
  return (
    <div className="form-group">
      {children}
      <select className="results" value={like} onChange={(e) => onLike(Number(e.target.value))}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was ok (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <div>
      <h3>
        You pay ${tip + bill}( ${bill} + ${tip} )
      </h3>
    </div>
  );
}

function Reset({ HandleReset }) {
  return (
    <div className="reset">
      <button className='btn-reset' onClick={HandleReset}>Reset</button>
    </div>
  )
}

// function Test() {
//   // const [check, setCheck] = useState(false);
//   const [country1, setCountry1] = useState("");
//   const [country2, setCountry2] = useState("");
//   return (
//     <div>
//       <Con c={country1} sc={setCountry1} />
//       <Con c={country2} sc={setCountry2} />
//       {/* <input type="checkbox" onChange={(e) => setCheck(e.target.checked)}></input> */}
//       {/* <h2 style={check ? { color: 'red' } : {}}> Hello</h2> */}
//     </div>
//   );
// }

// function Con({ c, sc }) {
//   return (
//     <div>
//       <select value={c} onChange={(e) => sc(e.target.value)}>
//         <option value="Nigeria">Nigeria</option>
//         <option value="Canada">Canada</option>
//         <option value="Russia">Russia</option>
//         <option value="South-Africa">South-Africa</option>
//       </select>

//     </div>
//   );
// }
