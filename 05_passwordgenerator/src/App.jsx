import { useState, useCallback , useEffect, useRef} from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberallowed, setNumberallowed] = useState(false);
  const [charallowed, setCharallowed] = useState(false);
  const [password, setPassword] = useState();
  const passref = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberallowed) {
      str += "0123456789";
    }
    if (charallowed) {
      str += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    }
    for (let i = 0; i < length; i++) {
      pass += str[Math.floor(Math.random() * str.length)];
    }
    setPassword(pass);
  }, [length, numberallowed, charallowed, setPassword]);

  const copytoclipboard = useCallback(()=>{
   passref.current?.select();
   window.navigator.clipboard.writeText(password);
},[password])

  useEffect(() => {
	generatePassword()
  },[length,numberallowed,charallowed,generatePassword])

  return (
    <>
      <div className="w-full text-orange-500 max-w-md mx-auto shadow-md rounded-lg px-4 py-4 pb-9 my-10 bg-gray-600 ">
        <h1 className="text-white text-4xl text-center p-4">
          Password Generator
        </h1>
        <div className="bg-white flex shadow-lg rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2px px-3px"
            placeholder="Password"
            readOnly
            ref = {passref}
          />
          <button
          onClick={copytoclipboard} 
          className="outline-none text-white bg-blue-600 shrink-0 flex items-center justify-center text-xs w-15 h-9 cursor-pointer">
            COPY!
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={4}
              max={32}
              value={length}
              className="cursor-pointer"
              onChange={(event) => setLength(event.target.value)}
            />
            <label>Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberallowed}
              id="numberinput"
              onChange={() => {
                setNumberallowed((prev) => !prev);
              }}
              className="cursor-pointer"
            />
            <label>Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charallowed}
              id="characterInput"
              onChange={() => {
                setCharallowed((prev) => !prev);
              }}
              className="cursor-pointer"
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
