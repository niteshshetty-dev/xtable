import { useEffect, useState } from "react";

export default function XTable() {
  const [sortedData, setSortedData] = useState([]);
  const [sortBy, setSortBy] = useState("");

  const data = [
    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" },
  ];

  useEffect(() => {
    setSortedData(data);

    if (sortBy === "date") {
      const sorted = [...data].sort(
        (a, b) => new Date(a.date) - new Date(b.date),
      );
      setSortedData(sorted);
    }

    if (sortBy === "view") {
      const sorted = [...data].sort((a, b) => b.views - a.views);
      setSortedData(sorted);
    }
  }, [sortBy]);

  return (
    <>
      <h1>Date and Views Table</h1>
      <button type="button" onClick={() => setSortBy("date")}>
        Sort by Date
      </button>
      <button type="button" onClick={() => setSortBy("view")}>
        Sort by Views
      </button>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, i) => (
            <tr key={i}>
              <td>{item.date}</td>
              <td>{item.views}</td>
              <td>{item.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
