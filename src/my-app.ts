export class MyApp {
	username: string = "exampleUser";
	email: string = "example@example.com";
	description: string = "Hello, I'm an Aurelia application. ";
	technologies: string[{ id; name }] = [
		{ id: "0", name: "Angular" },
		{ id: "1", name: "Bootstrap" },
		{ id: "2", name: "React.js" },
		{ id: "3", name: "Vue.js" },
		{ id: "4", name: "Next.js" },
	];
	selectedTechnologies: string[] = ["1", "3"];
}
