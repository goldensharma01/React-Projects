import React from "react";
import "./App.css";

const data = [
  { date: "2021-09-10", title: "Nirma" },
  { date: "2021-03-02", title: "Sirf Excel" },
  { date: "2022-01-28", title: "Tide" },
  { date: "2021-06-05", title: "Maggi" },
];

const formatDate = (dateStr) => {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  const date = new Date(dateStr);
  return {
    day: String(date.getDate()).padStart(2, "0"),
    month: months[date.getMonth()],
    year: date.getFullYear(),
  };
};

function App() {
  return (
    <div className="container">
      {data.map((item, index) => {
        const { day, month, year } = formatDate(item.date);
        return (
          <div key={index} className="card">
            <div className="date-box">
              <span className="month">{month}</span>
              <span className="year">{year}</span>
              <span className="day">{day}</span>
            </div>
            <div className="title">{item.title}</div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
