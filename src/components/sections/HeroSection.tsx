const HeroSection: React.FC = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-16 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
          Butuh Bengkel Terpercaya Saat Darurat?
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          ServisGo bantu kamu temukan bengkel terpercaya, terdekat, dan terverifikasi oleh tim kami. Cukup satu klik, langsung kami bantu carikan.
        </p>
        <a
          href="#form-section"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
        >
          Saya Butuh Rekomendasi Bengkel Sekarang
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
