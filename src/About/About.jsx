import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
  createIcon,
  Button,
  Center,
} from "@chakra-ui/react";
import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import "./About.css"


export default function About() {
  return (
    <Box id="about" >
      <Container maxW={"3xl"}  boxShadow="2xl">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "xl", sm: "2xl", md: "4xl" }}
            lineHeight={"10%"}
          >
            ABOUT ME <br />
          </Heading>
          <Text >
            🏡 I am from Kolhapur, Maharashtra.
            <br />
            <br />
            🤝 I think of myself as a people person.
            <br />
            <br />
            ❤️ I love designing websites and I am looking for more opportunities
            to work in coding.
            <br />
            <br />
            🤗 As an Aspiring Full Stack Developer I am seeking for a role
            wherein I can directly make an impact on the company's growth as
            well as my own Career.
          </Text>

          <Text>Drop a mail @ ramkrishnap.prabhu43@gmail.com</Text>
          <Center>
            <Stack direction={"row"} spacing={6}>
              <Button label={"Github"}>
                <a href="https://github.com/ramkrishnap43">
                  <BsGithub />
                </a>
              </Button>
              <Button label={"Mail"} >
                <a  href="https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=ramkrishnap.prabhu43@gmail.com&hl=en-GB">
                  <GrMail />
                </a>
              </Button>
              <Button label={"Linkdin"}>
                <a href="https://www.linkedin.com/in/ramkrishna-prabhu-2720aa166/">
                  <AiFillLinkedin />
                </a>
              </Button>
            </Stack>
          </Center>
        </Stack>
      </Container>
    </Box>
  );
}


