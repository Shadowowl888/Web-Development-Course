import { Center, Box, Text } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";

export default function Lesson7() {
	const background = useColorModeValue("white", "black");
	return (
		<Center>
			<Center boxSize="400px" bg={background}>
				<Text>Hello World!</Text>
			</Center>
		</Center>
	);
}
