import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { color } from "framer-motion";

export const FigmaDesign = () => {
  return (
    <Box>
      {/* 1st part  */}
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
              <Flex>
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
      {/* 1st part  */}

      {/* 2nd part  */}
      <Box w="1518px" h="588px" bg={"black"}>
        <Flex>
          <Box w="750px" p="62px 0px 0px 207px">
            <Text className="heading-text">Introduction</Text>
            <Text
              color={"white"}
              fontFamily=" ZCOOL KuaiLe"
              fontSize="24px"
              fontWeight="400"
              pt="20px"
            >
              We've all been in the mud once, and now we've decided to fight it
              out. Pay tribute to those pioneers of WEB3 and the warriors who
              dedicated their love to the blockchain. Save the lucky ones alive,
              join us to save the future! Our mission is to empower everyone to
              share wealth and succeed.
              <span className="span">read more...</span>
              <Button
                width="127px"
                height="38px"
                mt="54px"
                mr="88px"
                colorScheme="red"
                p="10px 16px 10px 16px"
                gap="6.18px"
                borderRadius="20px"
                fontSize="16px"
                opacity="0px"
                fontFamily=" ZCOOL KuaiLe"
                fontWeight="200"
              >
                Document
              </Button>
            </Text>
          </Box>
          <Box
            w="700px"
            h="600px"
            backgroundImage={
              "https://s3-alpha-sig.figma.com/img/72d9/2d64/713f95c34c945a62844515044f63fcd4?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PH7-UOlccPF8t3q~uRPdjm-eXO6SvLELF6nO9w4LUU6BfSr6nbxJUS4VgrLNBE5kYPYre7L1iuNvZA~Ls2g3A7pJHrajP-wVdseuNITWEKfb9GHsGq9Z6RlqyutRBmEZ8yCUM-OrNElnieCQ3W6SMy4uYHUvnKEOwgjgFxtdw9NIuZ1NeGmkpzr8L8qoexAsa2BhvpJAmrgVJrtFJGvXMMKz3DZDEOhmaZQubI3H31OA9rOo-T5uVEsX4Q6yLvPvhR0yC2dB-IRVZ-U~9bMtl869PX2xvbXyMtYTGjvi7gnEr6fu3NEGmQk6MJIFWX2zS~dweCYm3~Hzo-AE-0EhBw__"
            }
            backgroundPosition={"center"}
            backgroundSize={"cover"}
          ></Box>
        </Flex>
      </Box>
      {/* 2nd part  */}

      {/* 3rd part  */}
      <Box
        w="1512px"
        h="1145px"
        // backgroundImage={
        //   "https://s3-alpha-sig.figma.com/img/b6b9/0f7f/8e9b3d8d12c20152d7f3a9b31de44fe8?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NCYtvR~628jEbUTFcpnz6ogAaDE3ysJ5D5cUi0Wq9Wz1QKJEabU4zd1DnR9LWwclo~hvPTUlIlF3tGRUnx5wrv01asgSn~y8Ye9ahEVu-5T~IJAkKokvfO9qN0VQQl-wllJe2c7A-jVHEAqGqL1k0VZ1diNOLmGKLE4kj1eKp-PT7aiOjEXIXgMYnr5s2Idt-rV~ZWIljgtjXbbtnRgKt3igmvC6OFIsUjxBN958KL2We91IfvNZtO5HUI5dmYdmY8y1vEfp1oYedenQnxSWuFpgq4-y5cj0QHi8~8wC4veprvWG98DC9mmlkSCgpSfm7TpiZu4mnynRLkAsOspuBQ__"
        // }
        // backgroundPosition={"center"}
        // backgroundSize={"cover"}
        backgroundColor={"black"}
      >
        <Text className="heading-text" textAlign={"center"}>
          Participate in our IDO Event!
        </Text>
        <Flex>
          <Box pl="120px">
            <Text  color={"white"}
              fontFamily=" ZCOOL KuaiLe"
              fontSize="20px"
              fontWeight="400"
              pt="20px"
              pl="50px">
              During our IDO event, you will gain early access to our
              revolutionary ecosystem, designed to empower everyone to share
              wealth and achieve success.
            </Text>
            
          </Box>
          <Box w="708px" h="738px" pr="160px" ></Box>
        </Flex>
      </Box>
      {/* 3rd part  */}
    </Box>
  );
};
