import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-transparent px-4 text-center">
      <span className="text-8xl block mb-4">🪐</span>
      <h1 className="text-6xl font-bold bg-linear-to-r from-violet-glow to-mystic-pink bg-clip-text text-transparent">404</h1>
      <p className="mt-4 text-xl text-light-gray">This coordinate does not exist in our galaxy.</p>
      <Link
        to="/"
        className="cursor-pointer mt-8 rounded-xl bg-violet-glow px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-glow/20 hover:bg-violet-glow/90 transition-all duration-300"
      >
        Return to Orbit
      </Link>
    </div>
  );
}
