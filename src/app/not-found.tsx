import Link from "next/link";

export const dynamic = "force-dynamic";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        <p className="kicker">404</p>
        <h1 className="font-display text-4xl md:text-5xl text-deep-bronze mt-2">
          Page not found
        </h1>
        <p className="font-body text-deep-bronze/70 mt-4">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <Link href="/" className="btn-gold inline-block mt-8">
          Back to home
        </Link>
      </div>
    </section>
  );
}
