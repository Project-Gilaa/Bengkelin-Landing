import carServices from "../../assets/images/motor-mogok.jpg";
import carMudik from "../../assets/images/servis-mudik.jpg";
import carHoliday from "../../assets/images/bengkel-buka-libur.jpg";

const cases = [
  {
    title: "Mobil Mogok Tiba-tiba",
    description:
      "Lagi di jalan dan motor mati total? Bingung cari bengkel terdekat? ServisGo bantu carikan bengkel cepat dan terpercaya di sekitar kamu.",
    image: carServices, // Ganti dengan path gambarmu
  },
  {
    title: "Butuh Servis Sebelum Perjalanan Jauh",
    description:
      "Mau mudik atau touring? Jangan ambil risiko. Kami bantu rekomendasikan bengkel terbaik untuk pengecekan kendaraan sebelum jalan jauh.",
    image: carMudik,
  },
  {
    title: "Hari Libur & Darurat",
    description:
      "Motor rusak pas weekend atau hari libur? Layanan kami tetap bisa mencarikan bengkel yang buka dan siap bantu kamu.",
    image: carHoliday,
  },
];

const UseCaseSection: React.FC = () => {
  return (
    <section className="py-16 px-6 md:px-16 bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        Kapan Kamu Butuh ServisGo?
      </h2>
      <div className="grid gap-12 md:grid-cols-3">
        {cases.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-50 rounded-lg shadow hover:shadow-lg transition p-4"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UseCaseSection;
