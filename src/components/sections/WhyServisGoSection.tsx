import {
  ShieldCheckIcon,
  MapPinIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";

const benefits = [
  {
    title: "Terverifikasi & Terpercaya",
    description:
      "Semua bengkel sudah dicek dan diverifikasi langsung oleh tim kami.",
    icon: <ShieldCheckIcon className="w-10 h-10 text-blue-600" />,
  },
  {
    title: "Terdekat & Siap Bantu",
    description:
      "Kami bantu carikan bengkel paling dekat dengan lokasi kamu saat ini.",
    icon: <MapPinIcon className="w-10 h-10 text-blue-600" />,
  },
  {
    title: "Harga Transparan",
    description: "Biaya servis sesuai standar tanpa biaya tersembunyi.",
    icon: <CurrencyDollarIcon className="w-10 h-10 text-blue-600" />,
  },
];

const WhyServisGoSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-16 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-12">
        Kenapa Harus ServisGo?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300"
          >
            <div className="flex justify-center mb-4">{benefit.icon}</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              {benefit.title}
            </h3>
            <p className="text-gray-600 text-sm">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyServisGoSection;
