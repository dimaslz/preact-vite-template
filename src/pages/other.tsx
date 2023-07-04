import { Link } from "preact-router";

const Other = () => {

	return (<>
		<h1 className="text-4xl font-bold uppercase">Other page</h1>

		<div className="mt-12">
			<Link href={'/'} className="underline-offset-2 underline">back to home</Link>
		</div>
	</>);
}

export default Other;