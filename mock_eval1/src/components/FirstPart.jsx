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

export const FirstPart = () =>{

    return(
        <Box>
<Box backgroundColor={"black"}>
        <Box
          w="1518px"
          h="588px"
          backgroundImage={
            "https://s3-alpha-sig.figma.com/img/894b/df6e/56b90bbef82ad188765f40d12a46caef?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jBniJIIabUM5Sz2MptOUCZcISt5SJUkYa~32yo4k4uKIZOnsv2UPfRCUlYo-w2quEcv9rqDuuafokBaRla7zZMxJf6ILz1UBaSYRjEtjO9Is-QiWLUdkXnOgDQSf2oZEvHTyyPZkokWIVlUlyVkawK~OaqKGqcoGccfLpefDMbC4Gzb9p8Ta~8QmdfAVadD~0KfT8IvJYgefdHWYAyFSSAUkE35Ne4jTu0pXAH61KDcvPipctfKO-Pkq3j3Q9ADYxg-c8H2970mBZ8c7Ap8dDwtCB3Nx7ZseV8CNB-SnNW4TjDWGB9wVYeRtEnABJmkKot4pxdnjs04l5mKHfXR4VA__"
          }
          backgroundPosition={"center"}
          backgroundSize={"cover"}
        >
          <Flex>
            <Box>
              <Flex >
              
                <Box
                  className="logo"
                  w="106px"
                  h="117px"
                  backgroundImage={
                    "https://s3-alpha-sig.figma.com/img/79e0/db14/6de61e6b7e512045a7cc5fab1681c6dc?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=myczd~GQsAb6milWNlczm~ovDCoFYtBtokVxcWQ2lMW1Q2wZ8OcFgeETzLYKzWzeCly5WR1E~fVyhUA8rDvf0n4zgLE7bGpxSohq1s1A4KJo6tYf0baF~wWNfCPXsI-rJBuI1CEVSuK9CPPPusZrsxZbjs8OqF32EIbD5fiWBewnSsihCpc6AK3rBbfgUTp6k~TdAyjM0icncVdwoQokJIMguM~~vE~PzzHMD2GaE116oqbko293C6i9boY-q5s6M8VhdJ8TLYDx-uZ4asIZsiIimOYN81MMzbAtGzlUq7abGwN80kQSBCo7lsCKP150lUiUigXSMrN85aanxdOlSQ__"
                  }
                  backgroundPosition={"center"}
                  backgroundSize={"cover"}
                  mt="27px"
                  ml="88px"
                ></Box>
                <Text
                  fontFamily="ZCOOL KuaiLe"
                  sans-serif
                  fontWeight={400}
                  fontSize="32px"
                  color={"white"}
                  textAlign={"center"}
                  mt="56px"
                >
                  Saviour
                </Text>
              </Flex>
            </Box>
            <Spacer />

            <Box
              width="583px"
              height="52px"
              mt="46px"
              p=" 16px 24px 16px 24px"
              gap="24px"
              borderRadius="20px"
              bg={"black"}
              color={"white"}
              fontFamily="ZCOOL KuaiLe"
              display={{ base: 'none', md: 'flex' }}
            >
              <Flex>
                <Text>HOME</Text>
                <Text ml="24px">IDO</Text>
                <Text ml="24px">TACKNOMICS</Text>
                <Text ml="24px">ROADMAP</Text>
                <Text ml="24px">COMMING SOON</Text>
              </Flex>
            </Box>
            <Spacer />
            <Box>
              <Button
                width="127px"
                height="38px"
                mt="54px"
                mr="88px"
                colorScheme="red"
                p="10px 16px 10px 16px"
                gap="6.18px"
                borderRadius="16px"
                fontSize="14px"
                opacity="0px"
              >
                Connect Wallet
              </Button>
            </Box>
          </Flex>
          <Box
            width="1262px"
            height="108px"
            mt="116px"
            ml="123px"
            fontSize="45px"
            textAlign={"center"}
            color={"white"}
            fontFamily="Shojumaru"
          >
            <Text>
              Where Blockchain Heroes Thrive, Rescuing Dreams, Elevating
              Fortunes.
            </Text>
          </Box>
        </Box>
      </Box>
     
        </Box>
    )
}