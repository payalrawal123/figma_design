import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Radio,
  RadioGroup,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { color } from "framer-motion";
import { ForthPart } from "./components/4thPart";
import { FirstPart } from "./components/1stPart";
import { SecondPart } from "./components/2ndPart";
import { ThirdPart } from "./components/3rdPart";
import { FifthPart } from "./components/5thPart";
import { SixPart } from "./components/6thPart";
import { SevenPart } from "./components/7thPart";

export const FigmaDesign = () => {
  return (
    <Box>
      <FirstPart />
      <SecondPart />
      <ThirdPart />

      <ForthPart />
      <FifthPart/>
      <SixPart/>
      <SevenPart/>
    </Box>
  );
};
