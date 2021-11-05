import { Center, Button, Heading, VStack } from "@chakra-ui/react";
import { useState } from "react";

export default function State(): JSX.Element {
	const [money, setMoney] = useState(0);
	const [boat, setBoat] = useState(0);
	setTimeout(alertFunc, 3000);

	return (
		<Center>
			<VStack>
				<Heading>${money}</Heading>
				<Heading>Boats: {boat}</Heading>
				<Button
					onClick={() => {
						setMoney(money + 1);
						console.log(money);
					}}
					colorScheme="green"
				>
					Click Me
				</Button>
				<Button
					onClick={() => {
						if (money >= 10) {
							setMoney(money - 10);
							setBoat(boat + 1);
							console.log(money);
						}
					}}
					colorScheme="red"
				>
					Buy Boat $10
				</Button>
			</VStack>
		</Center>
	);

	function alertFunc() {
		if (money < 1000) {
			setMoney(money + 2);
		}
	}
}

//Button click
//Money
//Upgrades
//Passive Income
