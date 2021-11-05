import { Center, Button, Heading, VStack, HStack } from "@chakra-ui/react";
import { useState } from "react";

export default function Contact() {
	// let money = 0;
	const [money, setMoney] = useState(0);
	const [upgrades, setUpgrade] = useState(1);
	const [farms, setFarm] = useState(0);
	setTimeout(passiveIncome, 2000);

	return (
		<Center>
			<VStack>
				<Heading>${money}</Heading>
				<Heading>{upgrades} $/click </Heading>
				<Heading>{farms} farms </Heading>

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
						Buy {upgrades}x Clicks (${45 + upgrades * 5})
					</Button>

					<Button
						onClick={() => {
							if (money >= 100) {
								setMoney(money - 100);
								setFarm(farms + 1);
							}
						}}
						colorScheme="green"
					>
						Buy {farms} Farms (${100 + farms * 50})
					</Button>
				</HStack>
			</VStack>
		</Center>
	);

	function passiveIncome() {
		if (farms > 0) {
			setMoney(money + farms * 20);
		}
		setMoney(money + 2);
	}
}
