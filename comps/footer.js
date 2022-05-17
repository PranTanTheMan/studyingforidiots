import { Box, HStack, Flex, Text, Icon } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/button";
import {
  FaGithub,
  FaLinkedin,
  FaCopyright,
  FaRegCopyright,
} from "react-icons/fa";
import Link from "next/link";
const GitHub = "https://github.com/PranTanTheMan";
const Linkedin = "https";

const footer = () => {
  return (
    <footer>
      <Text fontSize="lg" className="copyright">
        <Icon as={FaRegCopyright} mr={1.75} w={2.5} h={2.5} />
        2022 StudyingForIdiots by
        <a
          href="http://twitter.com/prantantheman"
          target="_blank"
          className="footerLinks"
        >
          Pranith Molakalapalli
        </a>
      </Text>
      <HStack justifyContent="center">
        <Flex w="100%" justifyContent="center" pt={2} mr={0}>
          <a href="https://www.buymeacoffee.com/pranithm">
            <img
              className="coffeeLink"
              src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
              alt="Buy me a coffee <3"
            />
          </a>
        </Flex>
      </HStack>
    </footer>
  );
};

export default footer;
// peepee poo poo
//Never remove this please.

/* <a href={GitHub}>
            <IconButton ml={10} icon={<FaGithub />} isRound="true" />
          </a>
          <a href="">
            <IconButton ml={10} icon={<FaLinkedin />} isRound="true" />
          </a> 
*/
