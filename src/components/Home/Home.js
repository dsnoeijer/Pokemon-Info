import React, { useState } from "react";
import {
    chakra,
    Box,
    useColorModeValue,
    Flex,
    Badge,
    Input,
    SimpleGrid,
    Button,
    InputGroup,
    InputRightElement,
} from "@chakra-ui/react";
import Card from '../Card/Card'




const Home = () => {
    const [card, setCard] = useState('');

    const info = async (e) => {
        e.preventDefault();
        const el = document.getElementById("pkname");

        const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
        const userInput = el.value;
        const target = `${baseUrl}${userInput}`;

        const result = await fetch(target);
        const data = await result.json();

        console.log(data);
        setCard(<Card data={data} />)

    }

    return (
        <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={0}
            _after={{
                bg: "brand.500",
                opacity: 0.25,
                pos: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                zIndex: -1,
                content: '" "',
            }}
        >
            <Flex
                direction="column"
                alignItems="start"
                justifyContent="center"
                px={{ base: 4, lg: 20 }}
                py={24}
            >
                <Badge
                    color="white"
                    px={3}
                    py={1}
                    mb={3}
                    variant="solid"
                    colorScheme="brand"
                    rounded="full"
                >
                    Beta
                </Badge>
                <chakra.h1
                    mb={6}
                    fontSize={{ base: "4xl", md: "4xl", lg: "5xl" }}
                    fontWeight="bold"
                    color={useColorModeValue("brand.600", "gray.300")}
                    lineHeight="shorter"
                >
                    Enter your Pokemon
                </chakra.h1>
                <chakra.form w="full" mb={6}>
                    <InputGroup size="lg" w="full" display={{ base: "none", lg: "flex" }}>
                        <Input
                            id="pkname"
                            size="lg"
                            color="brand.900"
                            type="text"
                            placeholder="Enter your email..."
                            bg="white"
                            required="true"
                        />
                        <InputRightElement w="auto">
                            <Button
                                color="white"
                                variant="solid"
                                colorScheme="blue"
                                size="lg"
                                type="submit"
                                roundedLeft={0}
                                onClick={info}
                            >
                                Let's go!
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </chakra.form>
                <chakra.p
                    pr={{ base: 0, lg: 16 }}
                    mb={4}
                    fontSize="sm"
                    color={useColorModeValue("brand.600", "gray.400")}
                    letterSpacing="wider"
                >
                    Get all the info you need about your favorite pokemon
                </chakra.p>
            </Flex>
            <Box id="dataBox">
                {card}
            </Box>
        </SimpleGrid>
    );
};

export default Home;