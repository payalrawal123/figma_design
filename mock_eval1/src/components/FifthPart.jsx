import React, { useState } from "react";
import { Box, Button, Flex, IconButton, Text, Spacer, Image } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

export const FifthPart = () => {
  return (
    <>
      <Box backgroundColor="black" w="1518px" h="550px" >
        <Box
          w="1159.1px"
          h="349px"
          justifyContent="space-between"
          margin="0 auto"
          padding="20px"
        >
          <Text
            fontSize="44px"
            fontWeight="400px"
            textAlign="center"
            marginBottom="20px"
            color="rgba(237, 1, 55, 1)"
            fontFamily={"Shojumaru"}
            
          >
            Road Map
          </Text>
          <Flex opacity={1} justify="space-between">
            <Box
              h="349px"
              w="237.06px"
              borderRadius="13.17px"
              bg="black"
              color="white"
              border="1px solid red"
              backgroundImage={"https://s3-alpha-sig.figma.com/img/7624/956b/bb5893d955ab92e34ab86102a42d6d23?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b1~NO03ErsYsNkWmXnSA4~DC7Miz~9BKRyLhfzbi4ncI2EtBpBikP6Ab9oWmJVCnbuvL5M5KQsrgtlkmEBero7xZoJOf-Dsq9HdEoOFfY0rtiFaC11Gc8600aJ2ZvcdEpmBl8cgjjqe6TVxO0IoTRFQx~yiKw~39A0RKm0N8Wba4ea5hDFCHkW7BV16Y~VhWxYbmVNwdN9RDfRhcVhTLovmGIoF6f5EQsHvNQzYFMkeStp4P2jypS7Sp1oHkTSrbEsH-NPnAiEJmfZf-Otbo3k0SXA~O5loOObJ6PqmF9VjlpIIdyk1ABF42YExaEu5QDj~1qeCtmXC0XClPMX2WQg__"
                }
              backgroundPosition={"center"}
              backgroundSize={"cover"}
            >
              

              <Text
               color={"white"}
               mt="220px" ml="20px" mb="8px"
              >
                Phase 1
              </Text>
              <Text
                ml="20px" mb="10px"
                w="195.35px"
                color=" rgba(174, 177, 184, 1)" 
              >
                Technical Readiness <br /> and Smart Contract <br /> Audit
              </Text>
            </Box>
            <Box
              h="349px"
              w="237.06px"
              borderRadius="13.17px"
              bg="black"
              color="white"
              border="1px solid red"
              backgroundImage={"https://s3-alpha-sig.figma.com/img/7624/956b/bb5893d955ab92e34ab86102a42d6d23?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b1~NO03ErsYsNkWmXnSA4~DC7Miz~9BKRyLhfzbi4ncI2EtBpBikP6Ab9oWmJVCnbuvL5M5KQsrgtlkmEBero7xZoJOf-Dsq9HdEoOFfY0rtiFaC11Gc8600aJ2ZvcdEpmBl8cgjjqe6TVxO0IoTRFQx~yiKw~39A0RKm0N8Wba4ea5hDFCHkW7BV16Y~VhWxYbmVNwdN9RDfRhcVhTLovmGIoF6f5EQsHvNQzYFMkeStp4P2jypS7Sp1oHkTSrbEsH-NPnAiEJmfZf-Otbo3k0SXA~O5loOObJ6PqmF9VjlpIIdyk1ABF42YExaEu5QDj~1qeCtmXC0XClPMX2WQg__"
                }
              backgroundPosition={"center"}
              backgroundSize={"cover"}
            >
             
              <Text
               color={"white"}
               mt="220px" ml="20px" mb="8px"
              >
                Phase 2
              </Text>
              <Text
               ml="20px" mb="10px"
                w="195.35px"
                color=" rgba(174, 177, 184, 1)"
              >
                Increase Liquidity and Trading Volume
              </Text>
            </Box>
            <Box
              h="349px"
              w="237.06px"
              borderRadius="13.17px"
              bg="black"
              color="white"
              border="1px solid red"
              backgroundImage={"https://s3-alpha-sig.figma.com/img/7624/956b/bb5893d955ab92e34ab86102a42d6d23?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b1~NO03ErsYsNkWmXnSA4~DC7Miz~9BKRyLhfzbi4ncI2EtBpBikP6Ab9oWmJVCnbuvL5M5KQsrgtlkmEBero7xZoJOf-Dsq9HdEoOFfY0rtiFaC11Gc8600aJ2ZvcdEpmBl8cgjjqe6TVxO0IoTRFQx~yiKw~39A0RKm0N8Wba4ea5hDFCHkW7BV16Y~VhWxYbmVNwdN9RDfRhcVhTLovmGIoF6f5EQsHvNQzYFMkeStp4P2jypS7Sp1oHkTSrbEsH-NPnAiEJmfZf-Otbo3k0SXA~O5loOObJ6PqmF9VjlpIIdyk1ABF42YExaEu5QDj~1qeCtmXC0XClPMX2WQg__"
                }
              backgroundPosition={"center"}
              backgroundSize={"cover"}
            >
              

              <Text
                color={"white"}
                mt="220px" ml="20px" mb="8px"
              >
                Phase 3
              </Text>
              <Text
                ml="20px" mb="10px"
                w="195.35px"
                color=" rgba(174, 177, 184, 1)"
              >
                Community Building and Marketing
              </Text>
            </Box>
            <Box
              h="349px"
              w="237.06px"
              borderRadius="13.17px"
              bg="black"
              color="white"
              border="1px solid red"
              backgroundImage={"https://s3-alpha-sig.figma.com/img/7624/956b/bb5893d955ab92e34ab86102a42d6d23?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b1~NO03ErsYsNkWmXnSA4~DC7Miz~9BKRyLhfzbi4ncI2EtBpBikP6Ab9oWmJVCnbuvL5M5KQsrgtlkmEBero7xZoJOf-Dsq9HdEoOFfY0rtiFaC11Gc8600aJ2ZvcdEpmBl8cgjjqe6TVxO0IoTRFQx~yiKw~39A0RKm0N8Wba4ea5hDFCHkW7BV16Y~VhWxYbmVNwdN9RDfRhcVhTLovmGIoF6f5EQsHvNQzYFMkeStp4P2jypS7Sp1oHkTSrbEsH-NPnAiEJmfZf-Otbo3k0SXA~O5loOObJ6PqmF9VjlpIIdyk1ABF42YExaEu5QDj~1qeCtmXC0XClPMX2WQg__"
                }
              backgroundPosition={"center"}
              backgroundSize={"cover"}
            >
             
              

              <Text
                 color={"white"}
                 mt="220px" ml="20px" mb="8px"
              >
                Phase 4
              </Text>
              <Text
               ml="20px" mb="10px"
               w="195.35px"
               color=" rgba(174, 177, 184, 1)
"
              >
                Ecosystem Expansion and Partnerships
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
};
