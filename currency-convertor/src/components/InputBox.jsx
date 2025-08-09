import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div
      className={`bg-white/20 backdrop-blur-lg p-3 rounded-lg text-sm flex items-center justify-between ${className}`}
    >
      {/* Amount Input */}
      <div className="w-1/2">
        <label htmlFor={amountInputId} className="text-white/80 mb-2 inline-block">
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5 text-white placeholder-white/50"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>

      {/* Currency Dropdown */}
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-white/80 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-2 py-1 bg-white/30 text-white cursor-pointer outline-none backdrop-blur-md"
          value={selectCurrency}
          onChange={(e) =>
            onCurrencyChange && onCurrencyChange(e.target.value)
          }
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option
              key={currency}
              value={currency}
              className="text-black" // ensures dropdown list items stay visible
            >
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
