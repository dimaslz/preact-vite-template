import { render, screen } from "@testing-library/preact";
import Home from "./home";

describe("Pages - home", () => {
	test("title exists", () => {
		render(<Home />);

		expect(screen.getByText('Hello Vite + Tailwind + Preact!'));
	});

	test("link exists", () => {
		render(<Home />);

		expect(screen.getByRole('link', { name: 'go to other page' }));
	});
});
