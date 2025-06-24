import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { PhoneIcon } from "@heroicons/react/24/solid"; // Custom icon karena heroicons belum ada ikon Instagram

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-6">
        {/* Branding */}
        <div>
          <h3 className="text-2xl font-bold mb-2">ServisGo</h3>
          <p className="text-gray-300">
            Solusi cepat dan terpercaya untuk temukan bengkel recommended
            terdekat. #ServisTanpaRibet
          </p>
        </div>

        {/* Kontak */}
        <div>
          <h4 className="text-xl font-semibold mb-2">Hubungi Kami</h4>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center gap-2">
              <PhoneIcon className="h-5 w-5 text-white" />
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
              >
                +62 812-3456-7890
              </a>
            </li>
            <li className="flex items-center gap-2">
              <EnvelopeIcon className="h-5 w-5 text-white" />
              <a href="mailto:halo@servisgo.id">halo@servisgo.id</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-10 text-gray-500 text-sm">
        © {new Date().getFullYear()} ServisGo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
