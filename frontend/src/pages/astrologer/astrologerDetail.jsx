import { useParams, Link } from "react-router-dom";
import Header from "../home/_components/header/header";

const AstrologerDetail = () => {
  const { id } = useParams();

  return (
    <>
      <section className="w-full max-w-4xl mx-auto px-4 md:px-6 my-16 text-center">
        <p className="text-light-gray/40 text-xs uppercase tracking-widest mb-4">
          Astrologer Profile
        </p>
        <h1 className="font-Cinzel text-2xl md:text-3xl font-bold text-soft-white mb-6">
          {id
            .split("-")
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
            .join(" ")}
        </h1>
        <p className="text-light-gray/50 text-sm mb-8">
          This page is under construction. Full profile coming soon.
        </p>
        <Link
          to="/astrologers"
          className="inline-flex items-center gap-2 text-sm font-semibold text-violet-glow hover:text-gold transition-colors duration-300"
        >
          ← Back to Astrologers
        </Link>
      </section>
    </>
  );
};

export default AstrologerDetail;
