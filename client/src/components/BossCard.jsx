import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardFooter, Image } from "@nextui-org/react";

const BossCard = ({ boss }) => {
  return (
    <Card
      key={boss.id}
      radius="lg"
      className="border-none relative hover:shadow-xl transition-transform duration-300 transform hover:scale-105"
    >
      <Image
        alt="Card background"
        className="object-cover rounded-xl w-full h-full"
        src={boss.image}
      />
      <CardFooter className="justify-end text-white before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)]">
        <p className="z-10 mr-5 text-center font-bold">{boss.name}</p>
        <Link to={`/bossdetails/${boss.id}`}>
          <Button
            className="text-tiny text-white bg-black/30 z-10"
            variant="flat"
            color="default"
            radius="lg"
            size="md"  
          >
            View
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BossCard;
