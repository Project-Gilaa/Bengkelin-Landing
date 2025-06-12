import React, { useState } from 'react';

const CTASignupSection: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    location: '',
    whatsapp: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Submit ke backend, email, dll.
    console.log('Form data:', form);
    alert('Terima kasih! Kami akan segera hubungi kamu untuk carikan bengkel terbaik.');
  };

  return (
    <section id='form-section' className="py-16 px-6 md:px-16 bg-blue-50">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Butuh Bengkel Terdekat dan Terpercaya?</h2>
        <p className="text-gray-600 mb-8">
          Kami bantu carikan bengkel mitra yang terpercaya dan sesuai kebutuhanmu, cukup Rp25.000! Isi data singkatmu di bawah.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <input
            type="text"
            name="name"
            placeholder="Nama lengkap"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Lokasi kamu (contoh: Bandung Utara)"
            value={form.location}
            onChange={handleChange}
            className="w-full border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="tel"
            name="whatsapp"
            placeholder="Nomor WhatsApp aktif"
            value={form.whatsapp}
            onChange={handleChange}
            className="w-full border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded hover:bg-blue-700 transition"
          >
            Saya Mau Coba (Rp25.000)
          </button>
        </form>
      </div>
    </section>
  );
};

export default CTASignupSection;
