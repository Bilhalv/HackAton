import {
  Button
} from "@chakra-ui/react";

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center h-16 absolute w-full px-4">
        <p></p>
        <Button
          variant="ghost"
          _hover={{ bg: "none", transform: "scale(1.1)" }}
          aria-label="Menu"
          w={100}
        >
          <img src="./Icon.png" className="w-full" />
        </Button>
      </nav>
    </>
  );
}
