export default function WorkPage() {
  return (
    <section className="mx-auto min-h-[calc(100vh-9rem)] w-full max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
      <p className="text-xs uppercase tracking-[0.28em] text-gold">Selected work</p>
      <div className="mt-16 flex flex-col gap-8 border-b border-line pb-8 sm:flex-row sm:items-end sm:justify-between">
        <h1 className="font-serif text-6xl leading-[0.95] text-ink sm:text-8xl">[Work archive]</h1>
        <p className="max-w-xs text-sm leading-6 text-muted">[A concise description of the projects collected here]</p>
      </div>
      <div className="mt-10 grid min-h-64 place-items-center border border-dashed border-line text-sm text-muted">
        [Project grid placeholder]
      </div>
    </section>
  );
}