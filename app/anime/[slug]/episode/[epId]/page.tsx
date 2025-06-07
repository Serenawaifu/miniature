import dynamic from 'next/dynamic';
const VideoPlayer = dynamic(() => import('@/components/VideoPlayer'), { ssr: false });

export default function EpisodePage({ params }) {
  return (
    <div>
      <h1>Episode {params.epId}</h1>
      <VideoPlayer />
    </div>
  );
}
