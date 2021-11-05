import { HStack, VStack, Image, Heading, Text, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Lesson6() {
	const randomPokemon = Math.floor(Math.random() * 151 + 1);
	console.log(randomPokemon);

	const [pokemon, setPokemon] = useState() as any;

	//@ts.ignore
	useEffect(async () => {
		const { data } = await axios.get(
			`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`
		);
		console.log(data);
		setPokemon(data);
	}, []);

	return (
		<HStack
			spacing={{ base: 0, md: 10 }}
			bg="red"
			minH="500px"
			justify="center"
			flexDirection={{ base: "column", md: "row" }}
			display={{ base: "none", md: "flex" }}
		>
			<VStack w="600px" bg="orange">
				<Heading>{pokemon?.name}</Heading>
				<Text>{pokemon?.height} decimeters</Text>
				<Text>{pokemon?.weight} hectograms</Text>
				<HStack>
					<Text>Types:</Text>
					{/* <Text color="red">{pokemon?.types[0]?.type?.name}</Text> */}
					<Text color="red">
						{pokemon?.types
							.map((type) => {
								return type.type.name;
							})
							.join(", ")}
					</Text>
				</HStack>
			</VStack>
			<VStack w="600px" bg="black">
				<Heading>{pokemon?.name}</Heading>
				<Text>{pokemon?.height} decimeters</Text>
				<Text>{pokemon?.weight} hectograms</Text>
				<HStack>
					<Text>Types:</Text>
					{/* <Text color="red">{pokemon?.types[0]?.type?.name}</Text> */}
					<Text color="red">
						{pokemon?.types
							.map((type) => {
								return type.type.name;
							})
							.join(", ")}
					</Text>
				</HStack>
			</VStack>
			<VStack w="600px" bg="green">
				<Heading>{pokemon?.name}</Heading>
				<Text>{pokemon?.height} decimeters</Text>
				<Text>{pokemon?.weight} hectograms</Text>
				<HStack>
					<Text>Types:</Text>
					{/* <Text color="red">{pokemon?.types[0]?.type?.name}</Text> */}
					<Text color="red">
						{pokemon?.types
							.map((type) => {
								return type.type.name;
							})
							.join(", ")}
					</Text>
				</HStack>
			</VStack>
			<VStack w="600px" bg="yellow">
				<Heading>{pokemon?.name}</Heading>
				<Text>{pokemon?.height} decimeters</Text>
				<Text>{pokemon?.weight} hectograms</Text>
				<HStack>
					<Text>Types:</Text>
					{/* <Text color="red">{pokemon?.types[0]?.type?.name}</Text> */}
					<Text color="red">
						{pokemon?.types
							.map((type) => {
								return type.type.name;
							})
							.join(", ")}
					</Text>
				</HStack>
			</VStack>
		</HStack>
	);
}

// bg={{
//     // Mobile
//     base: "green",
//     // Tablet
//     sm: "orange",
//     // Laptop
//     md: "yellow",
//     // Desktop
//     lg: "purple",
//     // 4k monitors
//     xl: "black",
// }}
