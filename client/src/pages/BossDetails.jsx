import Header from "../components/Header";
import Footer from "../components/Footer";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@nextui-org/react";
import {
  Activity,
  ChevronRight,
  Gem,
  Map,
  Shield,
  Swords,
  Target,
} from "lucide-react";

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
    location: "",
    level: "",
    insight: "",
    reward: "",
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

  const InfoItem = ({ icon, text }) => (
    <div className="flex items-center">
      {icon && React.cloneElement(icon, { className: "mr-2 m-3" })}
      <p>{text}</p>
    </div>
  );

  return (
    <>
      <Header />

      {/* BOSS DETAILS */}
      <div className="flex justify-center items-center m-10">
        {Object.keys(boss).length > 0 ? (
          <Card className="py-4 max-w-2xl mx-4 my-8">
            {/* CARD HEADER */}
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h1 className="uppercase text-3xl font-bold">{boss?.name}</h1>
            </CardHeader>

            {/* CARD BODY */}
            <CardBody className="overflow-visible py-2">
              <div className="flex flex-col w-full">
                <InfoItem text={boss?.lore} />
                <InfoItem icon={<Activity />} text={boss?.health} />
                <InfoItem icon={<Shield />} text={boss?.defense} />
                <InfoItem icon={<ChevronRight />} text={boss?.type} />
                <InfoItem icon={<Map />} text={boss?.location} />
                <InfoItem icon={<Swords />} text={boss?.level} />
                <InfoItem icon={<Target />} text={boss?.insight} />
                <InfoItem icon={<Gem />} text={boss?.reward} />
              </div>

              <div className="flex justify-center items-center">
                <Image
                  alt="Boss Image"
                  className="object-cover rounded-lg my-6"
                  src={boss?.image}
                  width={500}
                />
              </div>
            </CardBody>

            {/* CARD FOOTER */}
            <div className="flex justify-center items-center pb-4">
              <Button color="default" className="m-1">
                Edit
              </Button>
              <Button color="danger" className="m-1">
                Delete
              </Button>
            </div>
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
