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
            <label className="w-1/5 text-lg opacity-50">Name</label>
            <input
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              className="w-4/5 ml-10 p-2 rounded-md shadow-lg border-2"
              type="text"></input>
          </div>
          <div className="mt-5 flex items-center">
            <label className="w-1/5 text-sx opacity-50">
              Header Tagline One
            </label>
            <input
              value={data.headerTaglineOne}
              onChange={(e) =>
                setData({ ...data, headerTaglineOne: e.target.value })
              }
              className="w-4/5 ml-10 p-2 rounded-md shadow-lg border-2"
              type="text"></input>
          </div>
          <div className="mt-5 flex items-center">
            <label className="w-1/5 text-lg opacity-50">
              Header Tagline Two
            </label>
            <input
              value={data.headerTaglineTwo}
              onChange={(e) =>
                setData({ ...data, headerTaglineTwo: e.target.value })
              }
              className="w-4/5 ml-10 p-2 rounded-md shadow-lg border-2"
              type="text"></input>
          </div>
          <div className="mt-5 flex items-center">
            <label className="w-1/5 text-lg opacity-50">
              Header Tagline Three
            </label>
            <input
              value={data.headerTaglineThree}
              onChange={(e) =>
                setData({ ...data, headerTaglineThree: e.target.value })
              }
              className="w-4/5 ml-10 p-2 rounded-md shadow-lg border-2"
              type="text"></input>
          </div>
          <div className="mt-5 flex items-center">
            <label className="w-1/5 text-lg opacity-50">
              Header Tagline Four
            </label>
            <input
              value={data.headerTaglineFour}
              onChange={(e) =>
                setData({ ...data, headerTaglineFour: e.target.value })
              }
              className="w-4/5 ml-10 p-2 rounded-md shadow-lg border-2"
              type="text"></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
