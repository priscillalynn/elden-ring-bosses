import React from "react";
import {
  Button,
  Card,
  CardFooter,
  Image,
} from "@nextui-org/react";

const BossCard = ({ boss }) => {

  return (
    <Card
      radius="lg"
      className="border-none relative hover:shadow-xl transition-transform duration-300 transform hover:scale-105"
    >
      <Image
        alt="Card background"
        className="object-cover rounded-xl w-full h-full"
        /*src="https://64.media.tumblr.com/272d6803b73c717a27102cca216ace13/266ebc8889fe46d6-52/s540x810/1a1f8273934f4e5a318424b2c89417ef625393ff.gif"*/
        src={boss.image}
      />
      <CardFooter className="justify-end text-white before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)]">
        <p className="z-10 mr-5 text-center font-bold">{boss.name}</p>
        <Button
          className="text-tiny text-white bg-black/30 z-10"
          variant="flat"
          color="default"
          radius="lg"
          size="md"
        >
          View
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BossCard;
