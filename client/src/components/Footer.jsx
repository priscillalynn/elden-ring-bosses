import { Link } from "@nextui-org/react";
import { Layers3 } from "lucide-react";

const Footer = () => {
  return (
    <div className="footer bg-neutral-50 text-default-600 p-10">
      <p>
        Built by{" "}
        <Link
          href="https://www.priscillalynn.me/"
          color="foreground"
          isExternal
        >
          Priscilla Colon.
        </Link>
      </p>
    </div>
  );
};

export default Footer;
