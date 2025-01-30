import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      <h1 className="text-4xl font-bold text-center mb-6">
        Welcome to SBT Social Gallery
      </h1>
      <p className="text-xl text-center mb-8 max-w-2xl">
        Create your evolving AI-generated NFT and join our community of
        collectors. Watch your artwork grow as you participate in the ecosystem.
      </p>
      <div className="flex gap-4">
        <Link
          href="/gallery"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Explore Gallery
        </Link>
        <Link
          href="/profile"
          className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg"
        >
          Start Your Journey
        </Link>
      </div>
    </div>
  );
}
