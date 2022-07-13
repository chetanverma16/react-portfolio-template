import React, { useState } from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import yourData from "../data/portfolio.json";

const Edit = () => {
  // states
  const [data, setData] = useState(yourData);

  const saveData = () => {
    if (process.env.NODE_ENV === "development") {
      fetch("/api/portfolio", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } else {
      alert("This thing only works in development mode.");
    }
  };

  return (
    <div className="container mx-auto">
      <Header></Header>
      <div className="mt-10">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl">Dashboard</h1>
          <div className="flex items-center">
            <Button>Reset</Button>
            <Button onClick={saveData} type="primary">
              Save
            </Button>
          </div>
        </div>

        <div className="mt-10">
          <div className="flex items-center">
            <label className="text-lg opacity-50">Name</label>
            <input
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              className="ml-10 p-2 rounded-md shadow-lg border-2"
              type="text"></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
