import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGlobe as faGlobeSolid } from '@fortawesome/free-solid-svg-icons';
import { Button } from "@/components/ui/button";

export default function Home() {
  const links = [
    {
      title: "Melvyn Malherbe",
      url: "https://mlv.sh/linkedin",
      icon: faLinkedinIn,
      className: "bg-[#0077B5] hover:bg-[#005885] text-white"
    },
    {
      title: "@melvynxdev",
      url: "https://mlv.sh/x",
      icon: faXTwitter,
      className: "bg-black hover:bg-gray-800 text-white"
    },
    {
      title: "melvynx.com",
      url: "https://melvynx.com",
      icon: faGlobeSolid,
      className: "bg-white hover:bg-gray-100 text-black border-2 border-white/20"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center pt-16 px-4 noise-effect" style={{ backgroundColor: '#4834d4' }}>
      <div className="w-full max-w-md md:max-w-lg">
        {/* Photo de profil et titre/sous-titre */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-6 mb-8">
          {/* Photo de profil */}
          <div className="flex justify-center md:justify-start mb-6 md:mb-0 flex-shrink-0">
            <Image
              src="https://codelynx.dev/images/me.png"
              alt="Melvyn Malhebre"
              width={150}
              height={150}
              className="rounded-full border-4 border-white/20 shadow-lg"
              priority
            />
          </div>

          {/* Nom et description */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold text-white mb-2">Melvyn Malhebre</h1>
            <p className="text-white/80 text-lg">YouTubeur & Développeur</p>
          </div>
        </div>

        {/* Boutons des liens */}
        <div className="flex flex-col gap-4">
          {links.map((link, index) => (
            <Button
              key={index}
              asChild
              className={`w-full h-14 text-lg font-medium rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl ${link.className}`}
            >
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3"
              >
                <FontAwesomeIcon icon={link.icon} className="w-6 h-6" />
                <span>{link.title}</span>
              </a>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
