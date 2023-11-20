import BossGrid from "./BossGrid";
import { Input, Select, SelectItem } from "@nextui-org/react";
import { RouteOff, Search } from "lucide-react";
import { useQuery, useQueryClient } from "react-query";

const Main = () => {
  const bossTypes = ["All", "Major", "Minor"];

  return (
    <>
      <div className="flex gap-3 mx-20 sm:w-1/2 p-4 mt-8 rounded-xl">
        <Select label="Boss Type" className="max-w-xs" size="sm">
          {bossTypes.map((boss) => (
            <SelectItem>{boss}</SelectItem>
          ))}
        </Select>
        <Input
          isClearable
          placeholder="Search for a boss..."
          variant="filled"
          size="sm"
          type="text"
          className="rounded-xl"
          startContent={<Search size={20} />}
        />
        <RouteOff size={44} cursor={"pointer"} />
      </div>
      <div className="mb-10 px-24 pt-8">
        <BossGrid />
      </div>
    </>
  );
};

export default Main;
