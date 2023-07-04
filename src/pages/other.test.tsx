import { render, screen } from "@testing-library/preact";
import Other from "./other";

describe("Pages - other", () => {
	test("title exists", () => {
		render(<Other />);

		expect(screen.getByText('Other page'));
	});

	test("link exists", () => {
		render(<Other />);

		expect(screen.getByRole('link', { name: 'back to home' }))
	});
});