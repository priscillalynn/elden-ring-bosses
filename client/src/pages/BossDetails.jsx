import Header from "../components/Header";
import Footer from "../components/Footer";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";


const BossDetails = () => {
  return (
    <>
      <Header />

      <div className="flex justify-center items-center m-10">

      <Card className="py-4 max-w-md mx-4 my-8">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h1 className="uppercase text-lg font-bold">BOSS NAME</h1>
          <md className="text-default-500">Health: </md>
          <md className="text-default-500">Defense: </md>
          <md className="text-default-500">Type: </md>
          <md className="text-default-500">Lore: </md>
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
      </div>

      <Footer />
    </>
  );
};

export default BossDetails;
