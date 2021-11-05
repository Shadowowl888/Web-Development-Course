import { HStack, VStack, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Lesson5() {
	const randomPokemon = Math.floor(Math.random() * 151 + 1);
	console.log(randomPokemon);

	const [pokemon, setPokemon] = useState() as any;

	//@ts-ignore
	useEffect(async () => {
		const { data } = await axios.get(
			`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`
		);
		console.log(data);
		setPokemon(data);
	}, []);

	return (
		<VStack>
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
			<HStack>
				<Text>Abilities:</Text>
				<Text color="green">
					{pokemon?.abilities
						.map((ability) => {
							return ability.ability.name;
						})
						.join(", ")}
				</Text>
			</HStack>
			<HStack>
				<Text>Items:</Text>
				<Text color="orange">
					{pokemon?.held_items
						.map((item) => {
							return item.item.name;
						})
						.join(", ")}
				</Text>
			</HStack>
			<HStack>
				<Text>Stats:</Text>
				<Text color="yellow">
					{pokemon?.stats
						.map((stat) => {
							return stat.stat.name;
						})
						.join(", ")}
				</Text>
			</HStack>
		</VStack>
	);
}
