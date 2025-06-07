import CardPlaceholder from './CardPlaceholder';

interface BandProps {
  title: string;
}

export default function Band({ title }: BandProps) {
  return (
    <section className="py-6">
      <h2 className="text-2xl font-semibold mb-4 px-2">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <CardPlaceholder />
        <CardPlaceholder />
        <CardPlaceholder />
        <CardPlaceholder />
      </div>
    </section>
  );
}
