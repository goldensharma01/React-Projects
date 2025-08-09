import { useEffect, useState } from "react";

function useCurrencyInfo(fromCurrency) {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!fromCurrency) return;

    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json`)
      .then((res) => res.json())
      .then((res) => setData(res[fromCurrency]))
      .catch((err) => console.error("Currency fetch failed", err));
  }, [fromCurrency]);

  return data;
}

export default useCurrencyInfo;
