import React, { useEffect, useState } from "react";

const ChefBanner = () => {
    // console.log(recipe)


  const [chef, setChef] = useState([]);
  useEffect(() => {
    const fetchChef = async () => {
      const result = await fetch(
        "https://chef-recipe-server-nashif770.vercel.app/chef/"
      );
      const json = await result.json();
      setChef(json);
    };

    fetchChef();
  }, []);

  console.log(chef)

    // const individualChef = chef.find((c) => c.id === recipe.chef_id);
    // console.log(individualChef.chef_id)
    // const { id, name } = individualChef;

  return (
    <div>
      <div>
        <h1>Chef Name:</h1>
        <h3>Experience: </h3>
        <h3>Bio: </h3>
        <p></p>
      </div>
      <img className="rounded " src="" alt="" />
    </div>
  );
};

export default ChefBanner;
