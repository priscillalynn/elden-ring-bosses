import BossGrid from "./BossGrid";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
  useDisclosure,
} from "@nextui-org/react";
import { PlusCircle, RouteOff, Search } from "lucide-react";

/* FILTERS */
const Main = () => {
  const bossTypes = ["All", "Required", "Optional"];

  /* ADD NEW BOSS MODAL */
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className="flex gap-3 mx-20 p-4 mt-8 rounded-xl">
        <Select label="Boss Type" className="max-w-xs" size="sm">
          {bossTypes.map((boss) => (
            <SelectItem key={boss}>{boss}</SelectItem>
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

        {/* ADD BOSS */}
        <Button color="default" endContent={<PlusCircle />} onPress={onOpen}>
          ADD
        </Button>

        {/* ADD BOSS MODAL */}
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Modal Title
                </ModalHeader>
                <ModalBody>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam pulvinar risus non risus hendrerit venenatis.
                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam pulvinar risus non risus hendrerit venenatis.
                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                  </p>
                  <p>
                    Magna exercitation reprehenderit magna aute tempor cupidatat
                    consequat elit dolor adipisicing. Mollit dolor eiusmod sunt
                    ex incididunt cillum quis. Velit duis sit officia eiusmod
                    Lorem aliqua enim laboris do dolor eiusmod. Et mollit
                    incididunt nisi consectetur esse laborum eiusmod pariatur
                    proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    Action
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>

      {/* BOSS GRID DISPLAY */}
      <div className="mb-10 px-24 pt-8">
        <BossGrid />
      </div>
    </>
  );
};

export default Main;
