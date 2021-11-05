import { Center, Image, Text, VStack } from "@chakra-ui/react";

export default function Snake3() {
	return (
		<Center>
			<VStack>
				<Image src="/snakes/snake3.jpg" w="500px" />
				<Text maxW="400px">
					This is a snake game. The objective is to eat as many apples
					as possible. The snake can move in 4 directions: up, down,
					left and right. The snake can't go through walls. The snake
					can't go through the walls. The snake can't eat itself. The
					snake can't eat the apples.
				</Text>
			</VStack>
		</Center>
	);
}
