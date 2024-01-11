export default function DashboardCard({ amount, desc, icon, bg }: any) {
  return (
    <div
      className={`relative flex h-[180px] w-full min-w-[220px] flex-col items-start justify-end gap-1 overflow-hidden rounded-2xl object-cover px-5 py-4 md:w-[47%]`}
      key={desc}
      style={{ background: `${bg} no-repeat`, backgroundSize: 'cover' }}
    >
      <h2 className="text-5xl font-bold">{amount}</h2>
      <p className="text-xl">{desc}</p>
      <div className="absolute bottom-4 right-4">{icon}</div>
    </div>
  );
}
