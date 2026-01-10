import { useState } from "react";
import { InputBox } from "./components";
import usecurrencyinfo from "./hook/usecurrencyinfo";

function App() {
  const [amount, setamount] = useState(0);
  const [from, setfrom] = useState("usd");
  const [to, setto] = useState("inr");
  const [convertedamount, setconvertedamount] = useState(0);

  const currencyinfo = usecurrencyinfo(from);
  const options = Object.keys(currencyinfo);

  const swap = () => {
   const tempto = to;
   const tempfrom = from;
   const tempamount = amount;
   const tempconverted = convertedamount;
    setfrom(tempto);
    setto(tempfrom);
    setamount(tempconverted);
    setconvertedamount(tempamount);
  };

  const convert = () => {
   if(amount === "") return;
    setconvertedamount(amount * currencyinfo[to]);
  };
  const BackgroundImage = "https://i.pinimg.com/736x/ee/54/0d/ee540d5359b893f03b3a4ce73c647d5d.jpg";
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-contain bg-no-repeat"
      style={{
        backgroundImage: `url('${BackgroundImage}')`,
        backgroundPosition: "center",
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}
          >
            <div className="w-full mb-1">
              <InputBox label="From" 
               amount={amount}
               currencyoptions={options}
               oncurrencychange={(currency) => {
                  setfrom(currency)
               }}
               onamountchange={(amount) => 
               {
                  setamount(amount)
               }}
               onFocus = {() => {
                  if(amount == 0)
                  {
                     onamountchange("");
                  }
               }}
               selectcurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox label="To" 
               amount={convertedamount}
               currencyoptions={options}
               oncurrencychange={(currency) => {
                  setto(currency)
               }}
               selectcurrency={to}
               amountdisable/>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
