import {
  Container,
  Flex,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";

const decrement = {};

const Pomodoro = () => {
  return (
    <>
      <Container centerContent pt={100}>
        <Flex>
          <CircularProgress value={69} size="200px">
            <CircularProgressLabel>poop</CircularProgressLabel>
          </CircularProgress>
        </Flex>
      </Container>
    </>
  );
};

export default Pomodoro;
