import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-line/70">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>© {new Date().getFullYear()} Francine Jace Bachiller.</p>
        <Link href="#top" className="flex min-h-11 w-fit items-center gap-1 transition-colors hover:text-gold-light">
          Back to top <ArrowUpRight size={14} strokeWidth={1.5} />
        </Link>
      </div>
    </footer>
  );
}
