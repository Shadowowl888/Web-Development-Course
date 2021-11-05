import {
	HStack,
	VStack,
	Image,
	Heading,
	Text,
	Center,
	Button,
} from "@chakra-ui/react";
import { useState } from "react";

export default function Lesson4() {
	// let money = 0;
	const [money, setMoney] = useState(0);
	const [upgrades, setUpgrade] = useState(0);

	return (
		<VStack>
			<Center>
				<VStack>
					<Heading>${money}</Heading>
					<Heading>{upgrades} $/click </Heading>

					<HStack>
						<Button
							onClick={() => {
								setMoney(money + 1 * upgrades);
							}}
							colorScheme="orange"
						>
							Click Me
						</Button>

						<Button
							onClick={() => {
								if (money >= 50) {
									setMoney(money - 50);
									setUpgrade(upgrades + 1);
								}
							}}
							colorScheme="orange"
						>
							Buy 2x Clicks (${45 + upgrades * 5})
						</Button>
					</HStack>
				</VStack>
			</Center>

			<HStack justify="center">
				<SnakeBox
					src="/snakes/snake.jpg"
					alt="looking derpy maybe don't know what it looks like tbh so sucks for you"
					heading="Snake #1"
					description="Description of snake #1"
				/>
				<SnakeBox
					src="/snakes/snake2.jpg"
					alt="looking derpy maybe don't know what it looks like tbh so sucks for you"
					heading="Snake #2"
					description="Description of snake #2"
				/>
				<SnakeBox
					src="/snakes/snake3.jpg"
					alt="looking derpy maybe don't know what it looks like tbh so sucks for you"
					heading="Snake #3"
					description="Description of snake #3"
				/>
			</HStack>
		</VStack>
	);
}

function SnakeBox(props) {
	return (
		<VStack>
			<Image src={props.src} alt={props.alt} h="300px" />
			<Heading>{props.heading}</Heading>
			<Text>{props.description}</Text>
		</VStack>
	);
}
