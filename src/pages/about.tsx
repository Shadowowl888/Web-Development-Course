import { Box, Text, Heading, Center } from "@chakra-ui/react";

export default function About() {
	return (
		<Center flexDirection="column">
			<Heading>About Me</Heading>
			{/* <Text maxW="800px" fontSize="24px" color="rgb(67, 20, 235)">
				Do not go gentle into that good night, <br />
				Old age should burn and rave at close of day; <br />
				Rage, rage against the dying of the light. <br />
				<br />
				Though wise men at their end know dark is right, <br />
				Because their words had forked no lightning they <br />
				Do not go gentle into that good night. <br />
				<br />
				Good men, the last wave by, crying how bright <br />
				Their frail deeds might have danced in a green bay, <br />
				Rage, rage against the dying of the light. <br />
				<br />
				Wild men who caught and sang the sun in flight, <br />
				And learn, too late, they grieved it on its way, <br />
				Do not go gentle into that good night. <br />
				<br />
				Grave men, near death, who see with blinding sight <br />
				Blind eyes could blaze like meteors and be gay, <br />
				Rage, rage against the dying of the light. <br />
				<br />
				And you, my father, there on the sad height, <br />
				Curse, bless, me now with your fierce tears, I pray. <br />
				Do not go gentle into that good night. <br />
				Rage, rage against the dying of the light. <br />
			</Text>
			 */}

			<Box>
				<Text>I am a full stack developer with a passion for</Text>
				<Text color="red">building and designing software.</Text>
			</Box>
		</Center>
	);
}
