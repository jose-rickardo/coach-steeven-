
export default function Photo({ label, className = "", src="/images/photo-steeven.jpeg" }) {
  if (src) {
    return <img src={src} alt={label} loading="lazy" className={`${className} object-cover`} />;
  }

  return (
    <div
      className={`${className} flex items-center justify-center border border-dashed border-ring-700 bg-ring-800 px-3 text-center text-sm text-zinc-500`}
    >
      {label}
    </div>
  );
}
