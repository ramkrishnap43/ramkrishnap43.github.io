import { Box, Center, chakra } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";

const Calender = () => {
  return (
    <Box>
      <chakra.h1
        textAlign={"center"}
        fontSize={"4xl"}
        py={10}
        fontWeight={"bold"}
      >
        My Github Calender
      </chakra.h1>

      <br />
      <Center>
        <GitHubCalendar blockSize={15} fontSize={15} username="ramkrishnap43">
          {" "}
          <ReactTooltip delayShow={20} html />
        </GitHubCalendar>
      </Center>
    </Box>
  );
};

export default Calender;
