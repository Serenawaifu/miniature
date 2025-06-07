import Link from "next/link";

export default function ProductCard({ prod }: { prod: any }) {
  return (
    <div className="rounded-lg shadow-lg p-4 bg-white dark:bg-gray-800
      hover:scale-105 hover:shadow-xl transform transition duration-200 ease-out">
      <Link href={`/marketplace/${prod.id}`}>
        <img src={prod.imageUrl} alt={prod.title} className="w-full h-48 object-cover rounded" />
        <h3 className="text-lg font-semibold">{prod.title}</h3>
        <p className="mt-1 text-sm">${prod.price}</p>
      </Link>
    </div>
  );
}
