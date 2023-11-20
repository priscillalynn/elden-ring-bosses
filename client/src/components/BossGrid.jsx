import BossCard from "./BossCard";
import { useEffect, useState } from "react";

const BossGrid = () => {
  const [bosses, setBosses] = useState([]);

  useEffect(() => {
    // Fetch data from the backend API endpoint
    fetch("/bosses")
      .then((response) => response.json())
      .then((data) => setBosses(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      {bosses.map((boss) => (
        <BossCard key={boss.id} boss={boss} />
      ))}
    </div>
  );
};

export default BossGrid;
