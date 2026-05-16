import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-baseline gap-1 mb-6" aria-label="Impian Bina home">
            <span className="font-black text-3xl tracking-tighter uppercase">Impian Bina</span>
            <span className="size-2 bg-primary rounded-full" />
          </Link>
          <p className="text-white/50 max-w-sm mb-6 leading-relaxed">
            CIDB-licensed construction across Negeri Sembilan and Melaka. From foundation
            pour to final handover, built to last.
          </p>
          <address className="not-italic space-y-1 mono text-xs text-white/60">
            <p>No. 42-1, Jalan Pusat Komersial,</p>
            <p>70450 Seremban, Negeri Sembilan</p>
          </address>
        </div>

        <div>
          <p className="mono text-[10px] text-white/30 uppercase tracking-widest mb-4">Contact</p>
          <ul className="space-y-3">
            <li><a className="text-sm font-semibold hover:text-primary" href="tel:+6067600000">+60 6-760 0000</a></li>
            <li><a className="text-sm font-semibold hover:text-primary" href="https://wa.me/60127600000" target="_blank" rel="noreferrer">WhatsApp +60 12-760 0000</a></li>
            <li><a className="text-sm font-semibold hover:text-primary break-all" href="mailto:hello@impianbina.com.my">hello@impianbina.com.my</a></li>
          </ul>
        </div>

        <div>
          <p className="mono text-[10px] text-white/30 uppercase tracking-widest mb-4">Explore</p>
          <ul className="space-y-2 text-sm">
            <li><Link className="hover:text-primary" to="/services">Services</Link></li>
            <li><Link className="hover:text-primary" to="/certifications">Certifications</Link></li>
            <li><Link className="hover:text-primary" to="/projects">Projects</Link></li>
            <li><Link className="hover:text-primary" to="/process">Our Process</Link></li>
            <li><Link className="hover:text-primary" to="/coverage">Coverage</Link></li>
            <li><Link className="hover:text-primary" to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/40">
        <p>&copy; {new Date().getFullYear()} Impian Bina Sdn Bhd. All rights reserved.</p>
        <p className="mono">CIDB G7 &middot; SSM Registered &middot; SPKK &middot; STB</p>
      </div>
    </footer>
  );
}
