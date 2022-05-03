import React from "react";
import {
    chakra,
    Box,
    Image,
    Flex,
    Icon,
    useColorModeValue,
} from "@chakra-ui/react";

import { MdHeadset } from "react-icons/md";


const Card = ({ data }) => {

    const colors = {
        "normal": "#a8a878", "fire": "#f08030",
        "water": "#6890f0", "fighting": "#c03028",
        "grass": "#78c850", "poison": "#a040a0",
        "ground": "#e0c068", "rock": "#b8a038",
        "electric": "#f8d030", "ice": "#98d8d8",
        "dragon": "#7038f8", "psychic": "#f85888",
        "flying": "#a890f0", "bug": "#a8b820",
        "ghost": "#705898", "dark": "#705848",
        "steel": "#b8b8d0", "fairy": "#ee99ac"
    }

    console.log(data);
    return (
        <Flex
            w="full"
            alignItems="center"
            justifyContent="center"
            style={{ paddingTop: '70px' }}
        >
            <Box
                w="sm"
                mx="auto"
                bg="radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,121,114,1) 68%, rgba(0,212,255,1) 100%)"

                shadow="lg"
                rounded="lg"
                overflow="hidden"
                borderColor="#cfbc82"
                borderWidth="15px"
            >
                <Image
                    w="max"
                    mx="auto"
                    h={72}
                    fit="cover"
                    objectPosition="center"
                    src={data.sprites.other.home.front_default}
                    alt="avatar"

                />

                <Flex alignItems="center" px={6} py={3} bg={colors[data.types[0].type.name]}>
                    <Icon as={MdHeadset} h={6} w={6} color="white" />

                    <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize="lg">
                        {data.name}
                        <span> (
                            {
                                Object.entries(data.types).map(([key, value], i) => {
                                    if (i < (data.types.length - 1)) {
                                        return <em><span>{value.type.name} / </span></em>
                                    } else {
                                        return <em><span>{value.type.name}</span></em>
                                    }
                                })
                            }
                            )</span>
                    </chakra.h1>
                </Flex>

                <Box py={4} px={6} bg={useColorModeValue("white", "white")} style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span><strong>Moves</strong></span><span><strong>Stats</strong></span>
                </Box>
                <Box py={4} px={6} bg={useColorModeValue("white", "white")}>
                    <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box>
                            {
                                Object.entries(data.abilities).map(([key, value], i) => {
                                    return <em><span style={{ display: 'flex' }}>
                                        {value.ability.name} </span></em>;
                                })
                            }
                        </Box>
                        <Box>
                            {
                                Object.entries(data.stats).map(([key, value], i) => {
                                    return <em>
                                        <span style={{ display: 'flex', justifyContent: 'right' }}>
                                            {value.stat.name}: {value.base_stat}
                                        </span>
                                    </em>;
                                })
                            }
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Flex >
    );
};

export default Card;