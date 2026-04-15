/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Shield, 
  AlertTriangle, 
  Globe, 
  Lock, 
  Zap, 
  Database, 
  BookOpen, 
  Scale, 
  Cpu, 
  ChevronRight, 
  ChevronLeft,
  Terminal,
  Activity,
  UserCheck,
  ExternalLink,
  Smartphone,
  MousePointer2
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

// --- Components ---

const Section = ({ children, className = "", id = "" }: { children: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`min-h-[100dvh] flex flex-col justify-center items-center p-4 sm:p-8 md:p-12 relative overflow-hidden ${className}`}>
    {children}
  </section>
);

const CyberBackground = () => (
  <>
    <div className="grid-bg" />
    <div className="scanline" />
  </>
);

const StatCard = ({ label, value, subValue, icon: Icon, color = "cyan" }: { label: string, value: string, subValue?: string, icon: any, color?: "cyan" | "red" | "emerald" }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, translateY: -5 }}
      className="p-4 sm:p-6 rounded-lg border border-border bg-card backdrop-blur-sm flex flex-col gap-2 sm:gap-3 relative overflow-hidden"
    >
      <div className="card-title-theme flex items-center gap-2">
        <Icon size={12} className="sm:w-[14px] sm:h-[14px]" />
        <span className="text-[9px] sm:text-[11px]">{label}</span>
      </div>
      <div className={`stat-large-theme text-2xl sm:text-3xl md:text-4xl ${color === 'cyan' ? 'text-[var(--accent)]' : color === 'emerald' ? 'text-emerald-400' : 'text-[var(--danger)]'}`}>
        {value}
      </div>
      {subValue && <div className="text-[8px] sm:text-[10px] text-[var(--dim)] font-mono uppercase tracking-wider">{subValue}</div>}
    </motion.div>
  );
};

// --- Main App ---

export default function App() {
  const [activeSection, setActiveSection] = useState(0);
  const { scrollYProgress } = useScroll();
  
  const sections = [
    "Inicio",
    "Definición",
    "Estadísticas",
    "Caso WannaCry",
    "Legislación",
    "Propuesta",
    "Protección",
    "Conclusión"
  ];

  return (
    <div className="text-[var(--text)] font-sans selection:bg-[var(--accent)]/30 min-h-screen flex flex-col">
      <CyberBackground />
      
      {/* Header */}
      <header className="sticky top-0 z-[100] bg-[var(--panel)]/80 border-b border-border px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between backdrop-blur-md">
        <div>
          <h1 className="text-sm sm:text-base md:text-xl font-bold tracking-[1px] sm:tracking-[2px] uppercase text-[var(--accent)]">
            CyberThreat Intel <span className="font-light opacity-50 hidden xs:inline">VENEZUELA</span>
          </h1>
        </div>
        <div className="hidden md:flex gap-6 font-mono text-[10px] text-[var(--dim)]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--danger)] animate-pulse" />
            LATAM_SEC_LEVEL: <span className="text-[var(--danger)]">CRITICAL</span>
          </div>
          <div>THREAT_DETECTED: <span className="text-[var(--danger)]">TRUE</span></div>
          <div>LOC: 10.4806° N, 66.9036° W</div>
        </div>
        <div className="md:hidden flex items-center gap-2 font-mono text-[8px] text-[var(--danger)]">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--danger)] animate-pulse" />
          SEC_LEVEL: CRITICAL
        </div>
      </header>

      {/* Navigation Rail */}
      <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
        {sections.map((section, idx) => (
          <button
            key={section}
            onClick={() => {
              const el = document.getElementById(`section-${idx}`);
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group flex items-center gap-4 text-left"
          >
            <div className={`h-px transition-all duration-300 ${activeSection === idx ? 'w-12 bg-[var(--accent)]' : 'w-4 bg-slate-600 group-hover:w-8 group-hover:bg-slate-400'}`} />
            <span className={`text-[10px] uppercase tracking-[0.2em] transition-all duration-300 ${activeSection === idx ? 'text-[var(--accent)] opacity-100' : 'text-slate-500 opacity-0 group-hover:opacity-100'}`}>
              {section}
            </span>
          </button>
        ))}
      </nav>

      {/* Progress Bar */}
      <motion.div 
        className="fixed top-[61px] left-0 right-0 h-0.5 bg-[var(--accent)] z-[110] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <main className="flex-1 max-w-6xl mx-auto w-full relative">
        
        {/* SECTION 0: HERO */}
        <Section id="section-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-8 w-full"
          >
            <div className="flex flex-col items-center gap-4 sm:gap-6">
              <motion.img 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                src="/logo_unet_azul.png" 
                alt="UNET Logo" 
                className="w-24 sm:w-32 h-auto opacity-90"
                referrerPolicy="no-referrer"
              />
              <div className="pill-theme animate-pulse text-[8px] sm:text-[10px]">ALERTA DE SEGURIDAD CRÍTICA</div>
            </div>
            <div className="flex flex-col gap-2 sm:gap-4">
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tighter leading-none uppercase">
                CRÍMENES <span className="text-[var(--accent)] italic">INFORMÁTICOS</span>
              </h1>
              <p className="text-sm sm:text-lg font-semibold text-[var(--accent)] tracking-tight">
                Aspirante Miguel Durantt Paolini de Ingeniería Informática
              </p>
              <p className="text-base sm:text-xl md:text-2xl text-[var(--dim)] max-w-2xl mx-auto font-light leading-relaxed px-4">
                Venezuela y Latinoamérica bajo fuego digital. Una amenaza invisible que cuesta billones.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12 w-full max-w-4xl px-4">
              <StatCard 
                label="Ataque DDoS 28-Jul" 
                value="30M" 
                subValue="Ataques por minuto" 
                icon={Activity} 
                color="red"
              />
              <StatCard 
                label="Impacto CNE/Cantv" 
                value="500K" 
                subValue="Ataques por segundo" 
                icon={Zap} 
                color="red"
              />
              <StatCard 
                label="Estado" 
                value="COLAPSO" 
                subValue="Sistemas críticos" 
                icon={AlertTriangle} 
                color="red"
              />
            </div>

            <div className="urgency-box-theme max-w-md mx-auto mx-4 text-[10px] sm:text-[11px]">
              ALERT: Legislación desactualizada (Ley 2001). 70% de casos archivados por falta de laboratorios forenses.
            </div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="pt-12 opacity-50 flex flex-col items-center gap-2"
            >
              <span className="text-[10px] uppercase tracking-widest font-mono">Desliza para explorar</span>
              <div className="w-px h-12 bg-gradient-to-b from-[var(--accent)] to-transparent" />
            </motion.div>
          </motion.div>
        </Section>

        {/* SECTION 1: DEFINITION */}
        <Section id="section-1">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center w-full px-4">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4 sm:space-y-6"
            >
              <div className="card-title-theme">Taxonomía del Delito (Budapest)</div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight uppercase">¿Qué es el <span className="text-[var(--accent)]">Cibercrimen</span>?</h2>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="pl-4 border-l-2 border-[var(--accent)] py-1">
                  <strong className="text-xs sm:text-sm block uppercase tracking-wider">Ataque Directo:</strong>
                  <p className="text-[10px] sm:text-xs text-[var(--dim)]">Virus, DDoS, Intrusión. Buscan inhabilitar sistemas.</p>
                </div>
                <div className="pl-4 border-l-2 border-[var(--accent)] py-1">
                  <strong className="text-xs sm:text-sm block uppercase tracking-wider">Instrumental:</strong>
                  <p className="text-[10px] sm:text-xs text-[var(--dim)]">Phishing, Ransomware, Fraude. Robo de activos.</p>
                </div>
                <div className="pl-4 border-l-2 border-[var(--accent)] py-1">
                  <strong className="text-xs sm:text-sm block uppercase tracking-wider">Contenido:</strong>
                  <p className="text-[10px] sm:text-xs text-[var(--dim)]">Desinformación masiva, Deepfakes, Contenido ilegal.</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2 sm:pt-4">
                <span className="pill-theme">VPN-HIDDEN</span>
                <span className="pill-theme">TOR-ANONYMOUS</span>
                <span className="pill-theme">Ransom-as-a-Service</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square max-w-[300px] sm:max-w-none mx-auto w-full rounded-lg border border-border bg-card p-4 sm:p-8 flex items-center justify-center overflow-hidden group"
            >
              <Terminal className="text-[var(--accent)] w-16 h-16 sm:w-32 sm:h-32 animate-pulse" />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 font-mono text-[8px] sm:text-[10px] text-[var(--accent)]/50">
                {`> Initializing Budapest Protocol...`}
                <br />
                {`> Scanning for vulnerabilities...`}
                <br />
                {`> Threat detected: Global Scale`}
              </div>
            </motion.div>
          </div>
        </Section>

        {/* SECTION 2: STATISTICS */}
        <Section id="section-2">
          <div className="w-full space-y-8 sm:space-y-12 px-4">
            <div className="text-center space-y-2 sm:space-y-4">
              <div className="card-title-theme inline-block px-4">Inteligencia de Amenazas</div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight uppercase">Números <span className="text-[var(--danger)]">Aterradores</span></h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <StatCard 
                label="Costo Global Anual" 
                value="$10.5B" 
                subValue="Billones de dólares" 
                icon={Globe} 
                color="red"
              />
              <StatCard 
                label="Pérdidas LATAM" 
                value="$56B" 
                subValue="Millones anuales" 
                icon={Database} 
                color="red"
              />
              <StatCard 
                label="Amenazas en Venezuela" 
                value="9.3M" 
                subValue="Detectadas 2023-2024" 
                icon={Activity} 
                color="red"
              />
              <StatCard 
                label="Ritmo de Ataque" 
                value="17" 
                subValue="Ataques por minuto (VZLA)" 
                icon={Zap} 
                color="red"
              />
            </div>

            <Card className="bg-card border-border overflow-hidden">
              <CardContent className="p-4 sm:p-8 flex flex-col md:flex-row items-center gap-6 sm:gap-8">
                <div className="flex-1 space-y-3 sm:space-y-4">
                  <div className="card-title-theme">Estudio de Caso Crítico</div>
                  <h3 className="text-xl sm:text-2xl font-bold flex items-center gap-2 uppercase">
                    <AlertTriangle className="text-[var(--danger)]" size={18} /> WannaCry (2017)
                  </h3>
                  <p className="text-[var(--dim)] text-xs sm:text-sm leading-relaxed">
                    Un solo código infectó <span className="text-[var(--text)] font-semibold">200,000 computadoras</span> en 150 países en solo 24 horas. 
                    Paralizó hospitales británicos cancelando <span className="text-[var(--text)] font-semibold">4,400 cirugías</span>.
                  </p>
                  <div className="flex gap-4">
                    <div className="pill-theme text-[8px] sm:text-[10px]">Daños: $4B - $8B</div>
                  </div>
                </div>
                <div className="w-full md:w-64 aspect-video rounded-lg bg-black/40 border border-border flex items-center justify-center relative overflow-hidden">
                  <span className="text-[var(--danger)] font-mono text-[10px] sm:text-xs font-bold animate-pulse">SYSTEM ENCRYPTED</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* SECTION 3: LEGISLATION */}
        <Section id="section-3">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-2">
                <div className="card-title-theme">Marco Normativo</div>
                <h2 className="text-4xl font-bold tracking-tight uppercase">El Drama <span className="text-yellow-500 italic">Legal</span></h2>
                <p className="text-[var(--dim)]">Nuestra legislación está 25 años atrasada.</p>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-card border border-border flex gap-4">
                  <div className="w-1 bg-[var(--danger)] rounded-full" />
                  <div>
                    <h4 className="font-bold text-sm uppercase">Ley de 2001</h4>
                    <p className="text-xs text-[var(--dim)]">No contempla Deepfakes, IA Generativa ni Ransomware-as-a-Service.</p>
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-card border border-border flex gap-4">
                  <div className="w-1 bg-[var(--danger)] rounded-full" />
                  <div>
                    <h4 className="font-bold text-sm uppercase">Impunidad del 70%</h4>
                    <p className="text-xs text-[var(--dim)]">Casos archivados por falta de laboratorios forenses y protocolos certificados.</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg border border-border bg-card">
                  <h4 className="text-[var(--accent)] font-bold text-xs uppercase tracking-widest mb-2">Brasil</h4>
                  <p className="text-[10px] text-[var(--dim)]">Ley Carolina Dieckmann con penas agravadas.</p>
                </div>
                <div className="p-4 rounded-lg border border-border bg-card">
                  <h4 className="text-[var(--accent)] font-bold text-xs uppercase tracking-widest mb-2">Colombia</h4>
                  <p className="text-[10px] text-[var(--dim)]">Ley 1273 y Policía Cibernética activa.</p>
                </div>
              </div>
            </motion.div>

            <div className="relative">
              <Card className="bg-card border-border relative z-10 overflow-hidden">
                <CardHeader className="border-b border-border bg-black/20">
                  <CardTitle className="text-sm font-mono flex items-center gap-2">
                    <Scale size={16} className="text-[var(--accent)]" /> VZLA_LEGAL_STATUS.log
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 font-mono text-[11px] space-y-2 text-[var(--dim)]">
                  <p><span className="text-[var(--danger)]">[ERROR]</span> Outdated Protocol: Ley 2001</p>
                  <p><span className="text-yellow-400">[WARN]</span> Missing: AI Regulation</p>
                  <p><span className="text-yellow-400">[WARN]</span> Missing: Deepfake Penalties</p>
                  <p><span className="text-[var(--danger)]">[CRITICAL]</span> Evidence Gap: No Forensic Labs</p>
                  <p className="pt-4 text-[var(--accent)] animate-pulse">_ Awaiting Proposal...</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Section>

        {/* SECTION 4: PROPOSAL */}
        <Section id="section-4">
          <div className="w-full space-y-12">
            <div className="text-center space-y-4">
              <div className="card-title-theme inline-block px-4">Modelo Nacional de Ciberseguridad</div>
              <h2 className="text-4xl font-bold tracking-tight uppercase">Tres Pilares para <span className="text-[var(--accent)]">Venezuela</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div whileHover={{ y: -10 }} className="p-8 rounded-lg bg-card border border-border space-y-4">
                <div className="card-title-theme">01. REFORMA LEGAL</div>
                <p className="text-sm text-[var(--dim)] leading-relaxed">
                  Ley Especial de Ciberseguridad Crítica. Penas de <span className="text-[var(--text)] font-bold">15-25 años</span>. Ratificación Convenio Budapest.
                </p>
              </motion.div>

              <motion.div whileHover={{ y: -10 }} className="p-8 rounded-lg bg-card border border-border space-y-4">
                <div className="card-title-theme">02. INVERSIÓN FORENSE</div>
                <p className="text-sm text-[var(--dim)] leading-relaxed">
                  Labs acreditados en <span className="text-[var(--text)] font-bold">UNET/LUZ/UCV</span>. Herramientas: EnCase, FTK Imager, Estándares NIST.
                </p>
              </motion.div>

              <motion.div whileHover={{ y: -10 }} className="p-8 rounded-lg bg-card border border-border space-y-4">
                <div className="card-title-theme">03. EDUCACIÓN MASIVA</div>
                <p className="text-sm text-[var(--dim)] leading-relaxed">
                  Certificación de <span className="text-[var(--text)] font-bold">1M en ciberhigiene</span>. Currículo UNET obligatorio. 10k especialistas anuales.
                </p>
              </motion.div>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border flex items-center gap-6">
              <div className="hidden md:block">
                <Globe className="text-[var(--accent)] w-12 h-12" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold uppercase tracking-widest text-[var(--accent)]">El Caso de Éxito: Estonia</h4>
                <p className="text-xs text-[var(--dim)]">Post-2007 certificó al 80% de su población. Hoy son líderes mundiales y exportan expertos.</p>
              </div>
            </div>
          </div>
        </Section>

        {/* SECTION 5: PROTECTION */}
        <Section id="section-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            <div className="space-y-8">
              <div className="space-y-2">
                <div className="card-title-theme">Protocolos de Defensa</div>
                <h2 className="text-4xl font-bold tracking-tight uppercase">Protección <span className="text-emerald-400">Práctica</span></h2>
                <p className="text-[var(--dim)]">El 85% de las brechas son por error humano. No seas parte de la estadística.</p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: Lock, text: "Verifique URL (https:// + candado)", color: "text-[var(--accent)]" },
                  { icon: Smartphone, text: "Active 2FA (Doble Factor) en TODO", color: "text-blue-400" },
                  { icon: UserCheck, text: "Nunca dé datos por WhatsApp", color: "text-emerald-400" },
                  { icon: Activity, text: "Llame directo al banco ante dudas", color: "text-yellow-400" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border group hover:border-[var(--accent)]/30 transition-colors"
                  >
                    <item.icon className={item.color} size={20} />
                    <span className="text-sm font-medium uppercase tracking-wide">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative group">
              <Card className="bg-card border-border relative z-10 p-8 text-center space-y-6">
                <Shield className="w-24 h-24 text-emerald-400 mx-auto animate-bounce" />
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold uppercase">Escudo Digital Activo</h3>
                  <p className="text-xs text-[var(--dim)] font-mono">Tu seguridad es tu responsabilidad.</p>
                </div>
                <Button className="w-full bg-[var(--accent)] hover:bg-[var(--accent)]/80 text-black font-bold uppercase tracking-widest">
                  VERIFICAR MI SEGURIDAD
                </Button>
              </Card>
            </div>
          </div>
        </Section>

        {/* SECTION 6: CONCLUSION */}
        <Section id="section-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl text-center space-y-8 sm:space-y-12 w-full px-4"
          >
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter uppercase">
                ESTO ES <span className="text-[var(--danger)]">PERSONAL</span>
              </h2>
              <p className="text-base sm:text-xl text-[var(--dim)] leading-relaxed">
                El phishing vacía cuentas en 30 segundos. Los ataques DDoS tumban procesos democráticos. 
                No es una posibilidad futura, <span className="text-[var(--text)] font-bold italic">es una amenaza que ya está aquí.</span>
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-lg bg-card border border-border space-y-4 sm:space-y-6">
              <p className="text-lg sm:text-2xl font-light italic text-cyan-100">
                "Venezuela no solo se protege — exporta talento en ciberseguridad."
              </p>
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-1 bg-[var(--accent)] rounded-full" />
                <p className="text-[10px] sm:text-sm font-bold uppercase tracking-widest">¿Qué vas a hacer tú?</p>
              </div>
            </div>

            <div className="pt-8 sm:pt-12">
              <h3 className="text-2xl sm:text-4xl font-bold mb-8 uppercase">¡Muchas gracias por su atención!</h3>
            </div>
          </motion.div>
        </Section>

      </main>

      {/* Footer */}
      <footer className="bg-[var(--accent)] text-[var(--bg)] py-3 sm:py-4 px-4 sm:px-6 flex flex-col md:flex-row items-center justify-around font-bold uppercase text-[8px] sm:text-[11px] tracking-widest gap-2 text-center">
        <div>ESCUDO DIGITAL: HTTPS + CANDADO</div>
        <div>ACTIVA 2FA EN TODO</div>
        <div className="hidden xs:block">NO ENTREGUES DATOS POR WHATSAPP</div>
        <div>CIBERHIGIENE ES SOBERANÍA</div>
      </footer>

      {/* Scroll Spy Logic */}
      <ScrollSpy setActiveSection={setActiveSection} />
    </div>
  );
}

function ScrollSpy({ setActiveSection }: { setActiveSection: (idx: number) => void }) {
  useEffect(() => {
    const handleScroll = () => {
      const sections = [0, 1, 2, 3, 4, 5, 6].map(id => document.getElementById(`section-${id}`));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, idx) => {
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(idx);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveSection]);

  return null;
}
