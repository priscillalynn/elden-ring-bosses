import Header from "../components/Header";
import Footer from "../components/Footer";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import BossesAPI from "../services/BossesAPI";
import axios from "axios";

const BossDetails = ({ bossId }) => {
  const [boss, setBoss] = useState([]);

  /*
  useEffect(() => {
    const fetchBossData = async () => {
      try {
        const response = await axios.get(`/bosses/${boss}/3`);
        //const response = await axios.get('/bosses/3');

        //const response = await axios.get(`/bosses/${bossId}`);
        console.log("API Response:", response.data);
        console.log("bossId:", bossId);

        setBoss(response.data);
      } catch (error) {
        console.error("Error fetching boss data:", error.response);
      }
    };

    fetchBossData();
  }, [bossId]);
  */

   useEffect(() => {
  const fetchBossData = async () => {
    try {
      if (!bossId) {
        console.error("Boss ID is undefined");
        return;
      }

      const response = await axios.get(`/bosses/${bossId}`);
      console.log("API Response:", response.data);
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
        {Object.keys(boss).length > 0 ? (
          <Card className="py-4 max-w-md mx-4 my-8">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h1 className="uppercase text-lg font-bold">Name: {boss?.name}</h1>
              <p className="text-default-500">Health: {boss?.health}</p>
              <p className="text-default-500">Defense: {boss?.defense}</p>
              <p className="text-default-500">Type: {boss?.type}</p>
              <p className="text-default-500">Lore: {boss?.lore}</p>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src={boss?.image}
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
