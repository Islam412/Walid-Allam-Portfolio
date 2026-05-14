import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10 text-center text-gray-400">
      <div className="flex justify-center gap-6 mb-4">
        <a href="https://linkedin.com/in/walidallam" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
          <FaLinkedin size={24} />
        </a>
        <a href="https://github.com/walidallam" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
          <FaGithub size={24} />
        </a>
        <a href="mailto:walid.allam@example.com" className="hover:text-blue-400 transition">
          <FaEnvelope size={24} />
        </a>
      </div>
      <p>© 2025 Walid Allam - Aerospace Engineer</p>
    </footer>
  );
};

export default Footer;