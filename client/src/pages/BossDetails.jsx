import Header from "../components/Header";
import Footer from "../components/Footer";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import axios from "axios";


const BossDetails = ({ bossId }) => {
  const [boss, setBoss] = useState([]);

  /*
  useEffect(() => {
    const fetchBossData = async () => {
      try {
        const response = await fetch(`/bosses/${boss.id}`);
        const data = await response.json();
        setBoss(data);
      } catch (error) {
        console.error("Error fetching boss data:", error);
      }
    };

    fetchBossData();
  }, []);
  */
 useEffect(() => {
   const fetchBossData = async () => {
     try {
       const response = await axios.get(`/bosses/${bossId}`);
       setBoss(response.data);
     } catch (error) {
       console.error("Error fetching boss data:", error);
     }
   };

   fetchBossData();
 }, [bossId]);

  return (
    <>
      <Header />

      <div className="flex justify-center items-center m-10">
        {boss ? (
          <Card className="py-4 max-w-md mx-4 my-8">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h1 className="uppercase text-lg font-bold">{boss.name}</h1>
              <md className="text-default-500">Health: {boss.health}</md>
              <md className="text-default-500">Defense: {boss.defense}</md>
              <md className="text-default-500">Type: {boss.type}</md>
              <md className="text-default-500">Lore: {boss.lore}</md>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src="https://64.media.tumblr.com/272d6803b73c717a27102cca216ace13/266ebc8889fe46d6-52/s540x810/1a1f8273934f4e5a318424b2c89417ef625393ff.gif"
                width={270}
              />
              <p>Strategic Insights: </p>
            </CardBody>
          </Card>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <Footer />
    </>
  );
};

export default BossDetails;
