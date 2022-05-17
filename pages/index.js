import { Box, Flex } from "@chakra-ui/react";
import CustomScroll from "react-custom-scroll";
import Pomodoro from "../comps/pomodoro";

export default function Home() {
  return (
    <>
      <Flex>
        <Pomodoro />
      </Flex>
      <Flex>{/* COMPONENT */}</Flex>
      <Flex>{/* COMPONENT  */}</Flex>
    </>
  );
}
