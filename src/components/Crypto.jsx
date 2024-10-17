import { useEffect, useState } from "react";

const Crypto = () => {
  const [currencyData, setCurrencyData] = useState();

  useEffect(() => {
    fetch("https://api.coincap.io/v2/assets", { fields: "price" })
      .then((response) => response.json())
      .then((response) => setCurrencyData(response.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Price</th>
            <th>Crypto Currency</th>
          </tr>
        </thead>
        <tbody>
          {currencyData?.map((currency) => (
            <tr key={currency.id}>
              <td>{currency.name}</td>
              <td>{Math.trunc(currency.supply)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Crypto;
