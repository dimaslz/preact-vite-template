import { Logo } from '@/components/logo'
import { Link } from 'preact-router';

const Home = () => {
  return (
    <>
      <Logo />
      <p>Hello Vite + Tailwind + Preact!</p>
      <p>
        <a
          className="text-white"
          href="https://preactjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Preact
        </a>
			</p>

			<div className="mt-12">
				<Link href={'/other'} className="underline-offset-2 underline">go to other page</Link>
			</div>
    </>
  )
}

export default Home;
