import { IconButton } from "@chakra-ui/react";
import { AlignJustify } from "lucide-react";

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center h-16 absolute w-full px-4">
        <IconButton
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="17"
              viewBox="0 0 23 17"
              fill="none"
            >
              <rect width="23" height="3.92308" rx="1.96154" fill="#4F541B" />
              <rect
                y="13.0769"
                width="23"
                height="3.92308"
                rx="1.96154"
                fill="#4F541B"
              />
              <rect
                y="6.53846"
                width="23"
                height="3.92308"
                rx="1.96154"
                fill="#4F541B"
              />
            </svg>
          }
          variant="ghost"
          _hover={{ bg: "none", transform: "scale(1.1)" }}
          aria-label="Home"
        />
        <IconButton
          icon={<img src="./icon.png" />}
          variant="ghost"
          _hover={{ bg: "none", transform: "scale(1.1)" }}
          aria-label="Menu"
        />
      </nav>
    </>
  );
}
