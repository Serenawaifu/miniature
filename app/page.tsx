import Band from '@/components/Band';

export default function HomePage() {
  return (
    <div className="space-y-8 mt-8">
      <Band title="Anime" />
      <Band title="Manga" />
      <Band title="Manhwa & Marketplace" />
    </div>
  );
}
