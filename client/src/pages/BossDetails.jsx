import Header from "../components/Header";
import Footer from "../components/Footer";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const BossDetails = () => {
  const location = useLocation();

  const [boss, setBoss] = useState({
    id: 0,
    name: "",
    health: "",
    defense: "",
    type: "",
    image: "",
    lore: "",
  });

  const getBossById = async () => {
    const id = location.pathname.split("/").pop();

    const response = await fetch(`/bosses/${id}`);
    const json = await response.json();
    setBoss(json);
  };

  useEffect(() => {
    getBossById();
  }, []);

  return (
    <>
      <Header />

      <div className="flex justify-center items-center m-10">
        {Object.keys(boss).length > 0 ? (
          <Card className="py-4 max-w-md mx-4 my-8">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h1 className="uppercase text-lg font-bold">
                Name: {boss?.name}
              </h1>
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
