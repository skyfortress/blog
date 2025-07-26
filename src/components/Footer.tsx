export default function Footer() {
  return (
    <footer className="gradient-bg text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="font-bold text-xl">SkyFortress Audit</div>
            </div>
            <p className="opacity-80">
              Trust, but Verify. Ensure Your AI-Generated project is Ready for the Real World.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="opacity-80 hover:opacity-100">
                  Services
                </a>
              </li>
              <li>
                <a href="/mlops-services" className="opacity-80 hover:opacity-100">
                  MLOps Solutions
                </a>
              </li>
              <li>
                <a href="#why-us" className="opacity-80 hover:opacity-100">
                  Why Us
                </a>
              </li>
              <li>
                <a href="#contact" className="opacity-80 hover:opacity-100">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center opacity-80">
                <i className="fas fa-envelope-open-text mr-2"></i>
                <a href="mailto:oleksii@skyfortress.dev" className="hover:underline">
                  oleksii@skyfortress.dev
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white border-opacity-20 mt-8 pt-8 text-center opacity-80">
          <p>&copy; 2025 SkyFortress Audit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
