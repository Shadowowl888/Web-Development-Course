import { Center, Text, VStack, HStack, Link, Image } from "@chakra-ui/react";

let friends = [
	{
		name: "John",
		age: "25",
	},
	{
		name: "Jane",
		age: "24",
	},
	{
		name: "Jack",
		age: "23",
	},
	{
		name: "Jill",
		age: "22",
	},
	{
		name: "Jenny",
		age: "21",
	},
];

export default function Lesson3(): JSX.Element {
	return (
		<Center>
			<VStack>
				<HStack>
					{friends.map((friend) => {
						return (
							<VStack boxSize="200px" bg="green" mx="10px">
								<Text>Name: {friend.name}</Text>;
								<Text>Age: {friend.age}</Text>;
							</VStack>
						);
					})}
				</HStack>

				<HStack spacing="50px" justify="center">
					<Link href="/snake3">
						<Image
							src="/snakes/snake3.jpg"
							alt="blue snake looking at camera"
							h="300px"
						/>
					</Link>
					<Link href="/snake">
						<Image
							src="/snakes/snake.jpg"
							alt="yellow toothless snake"
							h="300px"
						/>
					</Link>
					<Link href="/snake2">
						<Image
							src="/snakes/snake2.jpg"
							alt="yellow toothless snake opening it's mouth"
							h="300px"
						/>
					</Link>
				</HStack>
			</VStack>
		</Center>
	);
}
