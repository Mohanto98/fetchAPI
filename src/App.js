import React, { useState } from "react";

const Table = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const getData = () => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        setLoading(false);
        setData(json);
      });
  };
  return (
    <>
      <button onClick={getData}>Get Data</button>
      {loading ? (
        <div>Loading...</div>
      ) : (
        data.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>USERID</th>
                <th>TITLE</th>
                <th>BODY</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 &&
                data.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.userId}</td>
                      <td>{item.title}</td>
                      <td>{item.body}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        )
      )}
    </>
  );
};

export default Table;
