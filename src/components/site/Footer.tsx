import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.webp";
import { useLang } from "@/lib/i18n";

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="bg-accent text-accent-foreground py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <Link to="/" className="inline-block mb-6 bg-white p-3" aria-label="Impian Bina home">
            <img src={logo} alt="Impian Bina — Building Dream" className="h-20 w-auto" width={200} height={80} />
          </Link>
          <p className="text-white/50 max-w-sm mb-6 leading-relaxed">{t("footer.tagline")}</p>
          <address className="not-italic space-y-1 mono text-xs text-white/60">
            <p>E30 Jalan Melati, Felda Sendayan</p>
            <p>71950 Seremban, Negeri Sembilan</p>
          </address>
        </div>

        <div>
          <p className="mono text-[10px] text-white/30 uppercase tracking-widest mb-4">{t("footer.contact")}</p>
          <ul className="space-y-3">
            <li><a className="text-sm font-semibold hover:text-primary" href="tel:+6067600000">+60 6-760 0000</a></li>
            <li><a className="text-sm font-semibold hover:text-primary" href="https://wa.me/60127600000" target="_blank" rel="noreferrer">WhatsApp +60 12-760 0000</a></li>
            <li><a className="text-sm font-semibold hover:text-primary break-all" href="mailto:hello@impianbina.com.my">hello@impianbina.com.my</a></li>
          </ul>
        </div>

        <div>
          <p className="mono text-[10px] text-white/30 uppercase tracking-widest mb-4">{t("footer.explore")}</p>
          <ul className="space-y-2 text-sm">
            <li><Link className="hover:text-primary" to="/services">{t("nav.services")}</Link></li>
            <li><Link className="hover:text-primary" to="/certifications">{t("nav.certifications")}</Link></li>
            <li><Link className="hover:text-primary" to="/projects">{t("nav.projects")}</Link></li>
            <li><Link className="hover:text-primary" to="/portfolio">{t("nav.portfolio")}</Link></li>
            <li><Link className="hover:text-primary" to="/process">{t("nav.process")}</Link></li>
            <li><Link className="hover:text-primary" to="/coverage">{t("nav.coverage")}</Link></li>
            <li><Link className="hover:text-primary" to="/contact">{t("cta.contactUs")}</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/40">
        <p>&copy; {new Date().getFullYear()} Impian Bina Sdn Bhd. {t("footer.rights")}</p>
        <p className="mono">CIDB G7 &middot; SSM Registered &middot; SPKK &middot; STB</p>
      </div>
    </footer>
  );
}
