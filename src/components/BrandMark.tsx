export function BrandMark() {
  return (
    <span className="flex items-center gap-3" aria-hidden="true">
      <svg
        viewBox="0 0 68 44"
        className="h-10 w-[3.85rem] overflow-visible"
        role="presentation"
      >
        <path
          d="M1 13V1h15 M52 1h15v12 M67 31v12H52 M16 43H1V31"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-gold/65 transition-colors duration-500 group-hover/logo:text-gold"
        />
        <text
          x="8"
          y="32"
          fill="currentColor"
          fontFamily="var(--font-cormorant)"
          fontSize="29"
          fontWeight="500"
          className="text-ink"
        >
          F
        </text>
        <text
          x="26"
          y="32"
          fill="currentColor"
          fontFamily="var(--font-cormorant)"
          fontSize="30"
          fontStyle="italic"
          fontWeight="500"
          className="text-gold transition-colors duration-500 group-hover/logo:text-gold-light"
        >
          J
        </text>
        <text
          x="40"
          y="32"
          fill="currentColor"
          fontFamily="var(--font-cormorant)"
          fontSize="29"
          fontWeight="500"
          className="text-ink"
        >
          B
        </text>
        <path d="M15 36H53" stroke="currentColor" strokeWidth="0.75" className="text-gold/75" />
      </svg>

      <span className="hidden flex-col leading-none md:flex">
        <span className="font-serif text-lg tracking-[0.03em] text-ink">Francine Jace</span>
        <span className="mt-1 text-[0.5rem] uppercase tracking-[0.34em] text-gold">Bachiller</span>
      </span>
    </span>
  );
}
