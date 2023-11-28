import { Link } from "@nextui-org/react";
import { Swords } from "lucide-react";

const Footer = () => {
  return (
    <div className="footer text-sm bg-neutral-50 text-default-600 p-10">
      <p>
        Built by{" "}
        <Link
          href="https://www.priscillalynn.me/"
          color="foreground"
          isExternal
          underline="hover"
          className="text-sm"
        >
          Priscilla Colon<Swords size={15} />
        </Link>
      </p>
    </div>
  );
};

export default Footer;
