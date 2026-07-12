function FeatureCard({
  icon: Icon,
  title,
  description,
}: any) {
  return (
    <div
      className="
        bg-slate-900/70
        border border-slate-800
        backdrop-blur-lg
        rounded-2xl
        p-8
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-cyan-400
        hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]
      "
    >
      <Icon
        size={42}
        className="text-cyan-400 mb-6"
      />

      <h3 className="text-2xl font-bold mb-3">
        {title}
      </h3>

      <p className="text-gray-400 leading-7">
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;