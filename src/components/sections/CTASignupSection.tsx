import { useState, useMemo } from "react";
import { CAR_BRANDS, CAR_TYPES_BY_BRAND } from "../../static";
import { Autocomplete, TextField } from "@mui/material";

const TRANSMISSIONS = [
  "Manual",
  "Automatic (AT)",
  "CVT (Continuously Variable Transmission)",
  "AMT (Automated Manual Transmission)",
  "DCT (Dual Clutch Transmission)",
  "Hybrid",
];

const ISSUE_CATEGORIES = [
  "Mesin",
  "Transmisi",
  "Rem (Brake)",
  "Suspensi",
  "Sistem Kelistrikan",
  "AC (Air Conditioning)",
  "Body & Cat",
  "Ban & Velg",
  "Sistem Bahan Bakar",
  "Exhaust System",
  "Radiator & Cooling System",
  "Steering System",
  "Clutch (Kopling)",
  "Differential",
  "Sistem Audio/Multimedia",
  "Lampu & Lighting",
  "Wiper & Washer",
  "Kaca & Mirror",
  "Interior",
  "Service Berkala",
  "Tune Up",
  "Ganti Oli",
  "Spooring & Balancing",
  "Lainnya",
];

const CTASignupSection: React.FC = () => {
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const [form, setForm] = useState({
    name: "",
    location: "",
    whatsapp: "",
    brand: "",
    type: "",
    transmission: "",
    issueCategory: "",
  });

  const availableTypes = useMemo(() => {
    return form.brand ? CAR_TYPES_BY_BRAND[form.brand] || [] : [];
  }, [form.brand]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleAutocompleteChange = (name: string, value: string | null) => {
    if (name === "brand") {
      setForm({ ...form, brand: value || "", type: "" });
    } else {
      setForm({ ...form, [name]: value || "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage(null);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzs2tWi-a4UFaoyq-RhdxlQGlDusqhd8n93d4SGPNsRzSTDMpciVtYyLiHzJ2Cr8hW2ZQ/exec",
        {
          method: "POST",
          body: JSON.stringify(form),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const result = await response.json();
      if (result.result === "success") {
        setMessage({
          type: "success",
          text: "Terima kasih! Data kamu berhasil dikirim. Kami akan segera menghubungi kamu.",
        });
        setForm({
          name: "",
          location: "",
          whatsapp: "",
          brand: "",
          type: "",
          transmission: "",
          issueCategory: "",
        });
      } else {
        setMessage({
          type: "error",
          text: "Gagal mengirim data. Silakan coba lagi.",
        });
      }
    } catch (err) {
      console.error("Error:", err);
      setMessage({
        type: "error",
        text: "Terjadi kesalahan teknis. Coba lagi nanti.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="form-section" className="py-16 px-6 md:px-16 bg-blue-50">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Butuh Bengkel Terdekat dan Terpercaya?
        </h2>
        <p className="text-gray-600 mb-8">
          Kami bantu carikan bengkel mitra yang terpercaya dan sesuai
          kebutuhanmu, cukup Rp25.000! Isi data singkatmu di bawah.
        </p>
        {message && (
          <div
            className={`p-3 rounded mb-4 text-sm ${
              message.type === "success"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {message.text}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <TextField
            fullWidth
            required
            name="name"
            label="Nama lengkap"
            value={form.name}
            onChange={handleInputChange}
            sx={{ marginBottom: "15px" }}
          />
          <TextField
            fullWidth
            required
            name="location"
            label="Lokasi kamu (contoh: Bandung Utara)"
            value={form.location}
            onChange={handleInputChange}
            sx={{ marginBottom: "15px" }}
          />
          <TextField
            fullWidth
            required
            name="whatsapp"
            label="Nomor WhatsApp aktif"
            type="tel"
            value={form.whatsapp}
            onChange={handleInputChange}
            sx={{ marginBottom: "15px" }}
          />
          <Autocomplete
            options={CAR_BRANDS}
            value={form.brand || null}
            onChange={(_, value) => handleAutocompleteChange("brand", value)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Merk Mobil"
                required
                fullWidth
                sx={{ marginBottom: "15px" }}
              />
            )}
          />
          <Autocomplete
            options={availableTypes}
            value={form.type || null}
            onChange={(_, value) => handleAutocompleteChange("type", value)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Tipe Mobil"
                required
                fullWidth
                disabled={!form.brand}
                sx={{ marginBottom: "15px" }}
              />
            )}
          />
          <Autocomplete
            options={TRANSMISSIONS}
            value={form.transmission || null}
            onChange={(_, value) =>
              handleAutocompleteChange("transmission", value)
            }
            renderInput={(params) => (
              <TextField
                {...params}
                label="Transmisi"
                required
                fullWidth
                sx={{ marginBottom: "15px" }}
              />
            )}
          />
          <Autocomplete
            options={ISSUE_CATEGORIES}
            value={form.issueCategory || null}
            onChange={(_, value) =>
              handleAutocompleteChange("issueCategory", value)
            }
            renderInput={(params) => (
              <TextField
                {...params}
                label="Kategori Masalah"
                required
                fullWidth
                sx={{ marginBottom: "15px" }}
              />
            )}
          />

          <button
            type="submit"
            disabled={submitting}
            className={`w-full font-semibold py-3 rounded transition ${
              submitting
                ? "bg-blue-300 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            {submitting ? "Mengirim..." : "Saya Mau Coba (Rp25.000)"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default CTASignupSection;
