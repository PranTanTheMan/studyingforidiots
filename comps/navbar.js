import Link from "next/link";
import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Heading, Spacer } from "@chakra-ui/layout";
import { FaSun, FaMoon } from "react-icons/fa";

const navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading ml="10" size="xl" fontWeight="bold" color="black.600">
          SI
        </Heading>

        {/* SPACE */}
        <Spacer></Spacer>
        {/* SPACE */}

        <IconButton
          ml={8}
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound="true"
          onClick={toggleColorMode}
        />
      </Flex>
    </VStack>
  );
};

export default navbar;

{
  /* <div className="links">
          <Link href="/pomodoro">
            <a className="linkItem">pomodoro</a>
          </Link>
          <Link href="/notes">
            <a className="linkItem">Notes</a>
          </Link>
          <Link href="/to-do">
            <a className="linkItem"></a>
          </Link>
        </div> */
}
