import { useRef, useState, useEffect } from "react";
import robotsLogo from "../assets/logo.jpg";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { Particles } from "@/components/magicui/particles";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import Lenis from "lenis";
import { Home } from "lucide-react";

export default function Presentacion() {
  const year = new Date().getFullYear();

  const WHATSAPP_NUMBER = "522712128513";

  useEffect(() => {
    const lenis = new Lenis();
    const raf = (t) => { lenis.raf(t); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  const [sector, setSector] = useState("consultorios");
  const [customRole, setCustomRole] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  const planes = {
    consultorios: [
      {
        tier: "Nova",
        price: "$1,990",
        period: "/mes",
        bullets: [
          "Citas y recordatorios",
          "Respuestas Inteligentes a Cualquier Pregunta",
          "1 integración (Sheets)",
          "Soporte por chat",
          "Detalles Promocionales PDF"
        ],
      },
      {
        tier: "Quásar",
        price: "$3,490",
        period: "/mes",
        bullets: [
          "Todo Nova",
          "Generacion de Receta Automatica",
          "Reprogramaciones",
          "2–3 integraciones (Sheets, BD, MetaAds)",
          "Promocion Web",
          "Flujos Conversacionales personalizados",
        ],
        highlight: true,
      },
      {
        tier: "Supernova",
        price: "$5,990",
        period: "/mes",
        bullets: [
          "Agenda multi-doctor",
          "Reportes automáticos",
          "Integraciones multiples",
          "Visualizador Web",
          "IA Avanzada"
        ],
      },
    ],

    concesionarias: [
      {
        tier: "Nova",
        price: "$4,990",
        period: "/mes",
        bullets: [
          "Registro de Leads",
          "Notificaciones De Citas Por Correo",
          "Detalles Promocionales PDF",
          "1 Integracion (Sheets)",
          "Soporte por chat",
        ],
      },
      {
        tier: "Quásar",
        price: "$6,990",
        period: "/mes",
        bullets: [
          "Todo Nova",
          "Agendador de pruebas de manejo",
          "Fichas Tecnicas PDF",
          "Respuestas Profesionales y Avanzadas",
          "3–4 integraciones (Sheets, BD, Drive/MetaAds)",
          "Promocion Web",
          "Flujos Conversacionales Personalizados",
        ],
        highlight: true,
      },
      {
        tier: "Supernova",
        price: "$8,990",
        period: "/mes",
        bullets: [
          "Integracion avanzada a CRM",
          "Reportes Graficos Personalizados",
          "Capacitación",
          "Onboarding dedicado",
          "Visualizador Web"
        ],
      },
    ],

    restaurantes: [
      {
        tier: "Nova",
        price: "$1,490",
        period: "/mes",
        bullets: [
          "Reservas y confirmaciones",
          "Notificacion de pedidos",
          "Menú en WhatsApp",
          "1 integración (Sheets)",
          "Soporte por chat",
        ],
      },
      {
        tier: "Quásar",
        price: "$2,790",
        period: "/mes",
        bullets: [
          "Todo Nova",
          "Pedidos Para Recoger o a domicilio",
          "Promociones Activas PDF",
          "2–3 integraciones (Sheets, BD, MetaAds)",
          "Promocion Web",
          "Flujos Conversacionales Personalizados",
        ],
        highlight: true,
      },
      {
        tier: "Supernova",
        price: "$4,490",
        period: "/mes",
        bullets: [
          "Segmentación de clientes",
          "Promos automatizadas",
          "Reportes de ocupación",
          "Integraciones a medida",
          "Visualizador Web"
        ],
      },
    ],

    gimnasios: [
      {
        tier: "Nova",
        price: "$1,490",
        period: "/mes",
        bullets: [
          "Inscripciones Automatizadas",
          "Detalles Promocionales PDF",
          "1 integración (Sheets)",
          "Soporte por chat",
        ],
      },
      {
        tier: "Quásar",
        price: "$2,190",
        period: "/mes",
        bullets: [
          "Todo Nova",
          "Recordatorios de pagos",
          "2–3 integraciones (Sheets, BD, MetaAds)",
          "Promocion Web",
          "Flujos Conversacionales Personalizados",
        ],
        highlight: true,
      },
      {
        tier: "Supernova",
        price: "$4,490",
        period: "/mes",
        bullets: [
          "Gestión de membresías",
          "Reportes y retención",
          "Integraciones a medida",
          "Visualizador Web"
        ],
      },
    ],
  };


  const otherBizHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hola, tengo un negocio de tipo: ${customRole || "(especificar)"} y me interesa un chatbot RObots.`
  )}`;

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-amber-500/30 selection:text-neutral-950 overflow-x-clip antialiased">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-amber-600/20 blur-3xl" />
        <div className="absolute top-1/2 -right-16 h-72 w-72 -translate-y-1/2 rounded-full bg-amber-400/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 translate-y-1/3 rounded-full bg-amber-500/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 py-3">
          <nav className="flex items-center justify-between gap-6">
            <a href="#" className="flex items-center gap-3 group">
              <img
                src={robotsLogo}
                alt="RObots logo"
                className="h-8 w-8 rounded-xl bg-amber-400/10 p-1 shadow-lg shadow-amber-500/20 object-contain"
                loading="lazy"
              />
              <span className="text-lg font-extrabold tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-500">
                  RO
                </span>
                <span className="text-white/90">bots</span>
              </span>
            </a>

            <ul className="hidden md:flex items-center gap-6 text-sm text-white/80">
              <li><a className="hover:text-white" href="#beneficios">Beneficios</a></li>
              <li><a className="hover:text-white" href="#industrias">Industrias</a></li>
              <li><a className="hover:text-white" href="#funciona">Cómo funciona</a></li>
              <li><a className="hover:text-white" href="#integraciones">Integraciones</a></li>
              <li><a className="hover:text-white" href="#precios">Precios</a></li>
              <li><a className="hover:text-white" href="#faq">FAQ</a></li>
            </ul>

            <button className="md:hidden" onClick={() => setMobileOpen(v => !v)} aria-expanded={mobileOpen} />
            {mobileOpen && (
              <div className="md:hidden border-t bg-neutral-950/80 backdrop-blur">
                <ul className="grid gap-2 text-sm">
                  <li><a href="#beneficios" onClick={() => setMobileOpen(false)} className="block px-3 py-2 hover:bg-white/5">Beneficios</a></li>
                  <li><a href="#beneficios" onClick={() => setMobileOpen(false)} className="block px-3 py-2 hover:bg-white/5">Beneficios</a></li>
                  <li><a href="#industrias" onClick={() => setMobileOpen(false)} className="block px-3 py-2 hover:bg-white/5">Industrias</a></li>
                  <li><a href="#funciona" onClick={() => setMobileOpen(false)} className="block px-3 py-2 hover:bg-white/5">Cómo funciona</a></li>
                  <li><a href="#integraciones" onClick={() => setMobileOpen(false)} className="block px-3 py-2 hover:bg-white/5">Integraciones</a></li>
                  <li><a href="#precios" onClick={() => setMobileOpen(false)} className="block px-3 py-2 hover:bg-white/5">Precios</a></li>
                  <li><a href="#faq" onClick={() => setMobileOpen(false)} className="block px-3 py-2 hover:bg-white/5">FAQ</a></li>
                </ul>
              </div>
            )}

            <div className="flex items-center gap-2">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20quiero%20una%20demo%20de%20RObots`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-600 to-amber-400 px-4 py-2 text-sm font-semibold text-neutral-900 shadow-lg shadow-amber-500/20 hover:brightness-110"
              >
                <img className="h-6 w-6" src="/whatsapp.svg" alt="" loading="lazy" />
                Solicitar demo
              </a>
            </div>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <Particles className="pointer-events-none absolute inset-0 w-full h-full" quantity={100} staticity={40} ease={40} size={1} color="#F59E0B" />
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 pb-20 pt-14 md:grid-cols-2 md:pt-24">
          <div>
            <h1 className="text-balance text-4xl md:text-5xl font-black leading-tight tracking-tight">
              Chatbot para WhatsApp que{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-500">
                atiende por ti
              </span>{" "}
              24/7
            </h1>
            <p className="mt-4 text-base leading-relaxed text-white/80 md:text-lg">
              Somos <strong>RObots</strong>, un equipo que crea soluciones con IA para automatizar la atención al cliente.
              Nuestro chatbot se conecta con <strong>Google Sheets</strong> y archivos para almacenar, consultar y actualizar información en tiempo real.
            </p>
            <ul className="mt-6 space-y-2 text-white/90">
              {[
                "Responder automáticamente a clientes 24/7.",
                "Agendar citas sin intervención humana.",
                "Compartir promociones, planes o catálogos al instante.",
                "Centralizar toda la información en un solo lugar.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <img className="h-5 w-5" src="/check.svg" alt="" loading="lazy" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-neutral-950 hover:bg-white/90"
              >
                Agendar visita presencial
              </a>
              <a
                href="#precios"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 px-4 py-2.5 text-sm font-semibold text-white/90 hover:bg-white/5"
              >
                Ver planes
              </a>
            </div>
          </div>
          <HeroChat>
            <div className="md:justify-self-end">
              <div className="mx-auto w-full max-w-md rounded-3xl border border-white/10 bg-neutral-900/60 p-4 shadow-2xl backdrop-blur">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-2xl bg-amber-400/20 grid place-items-center overflow-hidden">
                      <img src={robotsLogo} alt="RObots" className="h-7 w-7 object-contain" loading="lazy" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">RObots Asistente</p>
                      <p className="text-xs text-white/60">en línea • WhatsApp</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="h-2 w-2 rounded-full bg-emerald-400" />
                    <div className="h-2 w-2 rounded-full bg-amber-400" />
                    <div className="h-2 w-2 rounded-full bg-rose-400" />
                  </div>
                </div>

                <div className="space-y-3">
                  <ChatBubble side="left" text="¡Hola! 👋 Soy el asistente de RObots. ¿En qué negocio quieres automatizar la atención?" />
                  <ChatBubble side="right" text="Restaurante" />
                  <ChatBubble side="left" text="Perfecto 🍽️ Puedo tomar reservaciones, enviar menús y confirmar asistencia sin intervención humana." />
                  <ChatBubble side="right" text="¿Se integra con Google Sheets?" />
                  <ChatBubble side="left" text="Sí. Guardamos clientes, citas y pedidos en Sheets y otros formatos en tiempo real." />
                </div>

                <div className="mt-4 flex items-center gap-2 rounded-2xl border border-white/10 bg-neutral-800 px-3 py-2 text-sm text-white/60">
                  <div className="flex -space-x-1">
                    <Dot />
                    <Dot />
                    <Dot />
                  </div>
                  Generando respuesta…
                </div>
              </div>
            </div>

          </HeroChat>
        </div>
      </section>

      <section id="beneficios" className="border-t border-white/5 bg-neutral-900/30">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <Reveal as="h2" className="text-balance text-3xl md:text-3xl font-black leading-tight tracking-tight">
            Beneficios clave
          </Reveal>
          <Reveal delay={0.05} className="mt-2 max-w-2xl text-white/70">
            Ahorra tiempo, reduce costos y brinda una experiencia consistente a cada cliente.
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard title="Atención 24/7" desc="Nunca pierdas oportunidades por fuera de horario." icon={<img className="h-6 w-6" src="/clock.svg" alt="" loading="lazy" />} />
            <FeatureCard title="Agenda automática" desc="Reservas y recordatorios sin intervención humana." icon={<img className="h-6 w-6" src="/calendar.svg" alt="" loading="lazy" />} />
            <FeatureCard title="Promos al instante" desc="Comparte menús, planes, catálogos y PDFs." icon={<img className="h-6 w-6" src="/thunderWhite.svg" alt="" loading="lazy" />} />
            <FeatureCard title="Datos centralizados" desc="Todo en un solo lugar: clientes, citas y pedidos." icon={<img className="h-6 w-6" src="/database.svg" alt="" loading="lazy" />} />
          </div>
        </div>
      </section>

      <section id="industrias" className="relative overflow-hidden border-t border-white/5">
        <Particles className="pointer-events-none absolute inset-0 w-full h-full" quantity={100} staticity={40} ease={40} size={1} color="#F59E0B" />
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <Reveal as="h2" className="text-balance text-3xl md:text-3xl font-black leading-tight tracking-tight">
                Funciona para distintos giros
              </Reveal>
              <Reveal delay={0.05} className="mt-2 max-w-2xl text-white/70">
                Personalizamos flujos para tu operativa actual.
              </Reveal>
            </div>
            <a href="#contacto" className="hidden md:inline rounded-xl border border-white/15 px-4 py-2 text-sm text-white/90 hover:bg-white/5">
              Solicitar casos de uso
            </a>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Restaurantes", items: ["Reservas", "Menús", "Confirmaciones"] },
              { title: "Consultorios", items: ["Citas", "Recordatorios", "Historial básico"] },
              { title: "Talleres", items: ["Órdenes", "Presupuestos", "Seguimiento"] },
              { title: "Gimnasios", items: ["Inscripciones", "Pagos", "Clases"] },
              { title: "Escuelas", items: ["Inscripciones", "Reportes", "Avisos"] },
              { title: "Tiendas", items: ["Catálogo", "Stock", "Pedidos"] },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-white/10 bg-neutral-900/40 p-5">
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <ul className="mt-3 space-y-1 text-white/80 text-sm">
                  {c.items.map((i) => (
                    <li key={i} className="flex items-center gap-2"><img className="h-5 w-5" src="/check.svg" alt="" loading="lazy" /> {i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="funciona" className="border-t border-white/5 bg-neutral-900/30">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <Reveal as="h2" className="text-balance text-3xl md:text-3xl font-black leading-tight tracking-tight">
            Cómo funciona
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Step n={1} title="Diagnóstico" desc="Entendemos tu proceso actual y definimos objetivos claros." />
            <Step n={2} title="Implementación" desc="Conectamos WhatsApp con Sheets/archivos y adaptamos los flujos." />
            <Step n={3} title="Optimización" desc="Medimos, mejoramos y agregamos nuevas funciones según tu operación." />
          </div>
        </div>
      </section>

      <section id="integraciones" className="relative overflow-hidden border-t border-white/5">
        <Particles className="pointer-events-none absolute inset-0 w-full h-full" quantity={100} staticity={40} ease={40} size={1} color="#F59E0B" />
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <Reveal as="h2" className="text-balance text-3xl md:text-3xl font-black leading-tight tracking-tight">
                Integraciones nativas
              </Reveal>
              <Reveal delay={0.05} className="mt-2 max-w-2xl text-white/70">
                Conectamos con tus herramientas de todos los días.
              </Reveal>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <IntegrationCard title="WhatsApp" desc="Atiende y automatiza donde están tus clientes.">
              <img className="h-6 w-6" src="/whatsappColor.svg" alt="" loading="lazy" />
            </IntegrationCard>
            <IntegrationCard title="Google Sheets" desc="Registra clientes, citas, pedidos y reportes.">
              <img className="h-6 w-6" src="/sheets.svg" alt="" loading="lazy" />
            </IntegrationCard>
            <IntegrationCard title="Google Drive" desc="Comparte catálogos y PDFs en segundos.">
              <img className="h-6 w-6" src="/drive.svg" alt="" loading="lazy" />
            </IntegrationCard>
            <IntegrationCard title="Webhooks" desc="Conecta con tu CRM, ERP o sistema propio.">
              <img className="h-6 w-6" src="/thunder.svg" alt="" loading="lazy" />
            </IntegrationCard>
          </div>
        </div>
      </section>

      <section id="precios" className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <Reveal as="h2" className="text-balance text-3xl md:text-3xl font-black leading-tight tracking-tight">
                Planes por giro
              </Reveal>
              <Reveal delay={0.05} className="mt-2 max-w-2xl text-white/70">
                Precios en MXN. Ajustamos según complejidad y volumen.
              </Reveal>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              ["consultorios", "Consultorios"],
              ["concesionarias", "Concesionarias"],
              ["restaurantes", "Restaurantes"],
              ["gimnasios", "Gimnasios"],
            ].map(([key, label]) => (
              <button
                key={key}
                onClick={() => setSector(key)}
                className={`rounded-xl px-3 py-2 text-sm font-semibold border ${sector === key
                  ? "bg-amber-500 text-neutral-900 border-amber-400"
                  : "bg-white/5 text-white/80 border-white/10 hover:bg-white/10"
                  }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {planes[sector].map((p) => (
                <motion.div
                  key={`${sector}-${p.tier}`}
                  initial={{ opacity: 0, y: 0, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -12, scale: 0.98 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <PriceCard {...p} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-neutral-900/40 p-5">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              ¿Otro giro?
              <span className="rounded-full bg-amber-500/20 px-2 py-0.5 text-xs text-amber-300 border border-amber-400/30">Servicio especializado</span>
            </h3>
            <p className="mt-2 text-white/80 text-sm">
              Cuéntanos tu tipo de negocio y armamos un flujo a tu medida.
            </p>
            <div className="mt-3 flex flex-col gap-2 sm:flex-row">
              <input
                type="text"
                value={customRole}
                onChange={(e) => setCustomRole(e.target.value)}
                placeholder="Ej. clínica dental, escuela de música, spa…"
                className="flex-1 rounded-xl border border-white/10 bg-neutral-800/70 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-amber-500"
              />
              <a
                href={otherBizHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-amber-600 to-amber-400 px-4 py-2 text-sm font-semibold text-neutral-900 shadow hover:brightness-110"
              >
                Enviar por WhatsApp
              </a>
            </div>
          </div>

          <p className="mt-4 text-xs text-white/60">
            * Implementación inicial puede requerir un pago único según complejidad.
          </p>
        </div>
      </section>

      <section id="faq" className="relative overflow-hidden border-t border-white/5 bg-neutral-900/30">
        <Particles className="pointer-events-none absolute inset-0 w-full h-full" quantity={100} staticity={40} ease={40} size={1} color="#F59E0B" />
        <div className="mx-auto max-w-7xl px-4 py-16">
          <Reveal as="h2" className="text-balance text-3xl md:text-3xl font-black leading-tight tracking-tight">
            Preguntas frecuentes
          </Reveal>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            <Faq q="¿Necesito cambiar mis herramientas actuales?" a="No. Nos integramos a tus flujos existentes (Sheets, Drive o tu CRM vía webhooks)." />
            <Faq q="¿Cuánto tarda la implementación?" a="Depende del alcance. Un flujo base suele estar listo en pocos días una vez recibimos la información." />
            <Faq q="¿Puedo pausar o cambiar de plan?" a="Sí, los planes son flexibles y puedes escalar conforme crece tu operación." />
            <Faq q="¿Manejan confidencialidad?" a="Sí. Ofrecemos acuerdos de confidencialidad (NDA) y buenas prácticas de seguridad." />
          </div>
        </div>
      </section>

      <section id="contacto" className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid items-start gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-6">
              <h3 className="text-xl font-bold">Agenda una visita presencial</h3>
              <p className="mt-2 text-white/70">
                Vamos a tu negocio en el horario que indiques. Te mostramos el sistema y resolvemos dudas.
              </p>
              <a
                href="mailto:hola@robots.ai?subject=Cita%20presencial%20RObots&body=Hola%2C%20quisiera%20agendar%20una%20cita%20presencial%20para%20ver%20el%20chatbot."
                className="mt-4 inline-flex rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-neutral-950 hover:bg-white/90"
              >
                Escribir por correo
              </a>
            </div>
            <div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-6">
              <h3 className="text-xl font-bold">Escríbenos por WhatsApp</h3>
              <p className="mt-2 text-white/70">Asesoría sin compromiso, demo en vivo y total confidencialidad.</p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20quiero%20una%20demo%20de%20RObots`}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-600 to-amber-400 px-4 py-2.5 text-sm font-semibold text-neutral-900 shadow hover:brightness-110"
              >
                <img className="h-5 w-5" src="/whatsapp.svg" alt="" loading="lazy" />
                Chatear ahora
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-white/70">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <img src={robotsLogo} alt="Logo RObots" className="h-8 w-8 rounded-xl bg-white/5 p-1" loading="lazy" />
                <span className="font-semibold">RObots — Automatización con IA</span>
              </div>
              <p className="text-white/60">IA conversacional para negocios en México.</p>
            </div>
            <div className="grid grid-cols-2 gap-6 md:justify-items-center">
              <div>
                <h4 className="mb-2 text-white/90 font-semibold">Sitio</h4>
                <ul className="space-y-1">
                  <li><a className="hover:text-white" href="#precios">Planes</a></li>
                  <li><a className="hover:text-white" href="#faq">FAQ</a></li>
                  <li><a className="hover:text-white" href="#contacto">Contacto</a></li>
                </ul>
              </div>
              <div>
                <h4 className="mb-2 text-white/90 font-semibold">Legal</h4>
                <ul className="space-y-1">
                  <li><a className="hover:text-white" href="#">Aviso de privacidad</a></li>
                  <li><a className="hover:text-white" href="#">Términos</a></li>
                </ul>
              </div>
            </div>
            <div className="">
              <BottomDock />
            </div>
          </div>
          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 text-xs text-white/60 md:flex-row">
            <p>© {year} RObots</p>
          </div>
        </div>
      </footer>
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 sm:left-auto sm:right-4 sm:translate-x-0 h-0 mb-36 pr-10">
        <InteractiveHoverButton className="bottom-20 right-4 mb-24 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-700 to-amber-400 px-4 py-3 w-32
        font-semibold text-neutral-950 shadow-xl hover:brightness-110 
        [animation:pulse-soft_3.5s_ease-in-out_infinite]"
          onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20quiero%20informes`, "_blank")}
        >Contacto</InteractiveHoverButton>
      </div>
    </div >
  );
}

function ChatBubble({ side = "left", text }) {
  const isLeft = side === "left";
  const bubbleClass = isLeft
    ? "rounded-2xl rounded-tl-sm bg-white/10"
    : "rounded-2xl rounded-tr-sm bg-gradient-to-r from-amber-600/70 to-amber-400/70";

  return (
    <div className={`flex ${isLeft ? "justify-start" : "justify-end"}`}>
      <div className={`${bubbleClass} max-w-[85%] p-3 text-sm backdrop-blur`}>
        {text}
      </div>
    </div>
  );
}

function Dot() {
  return <div className="h-2 w-2 animate-bounce rounded-full bg-white/40 [animation-delay:0.15s]" />;
}
function FeatureCard({ icon, title, desc }) {
  return (
    <Card>
      <div className="mb-3 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/80">
        {icon}{title}
      </div>
      <p className="text-white/80">{desc}</p>
    </Card>
  );
}

function IntegrationCard({ title, desc, children }) {
  return (
    <Card>
      <div className="mb-3 inline-flex items-center gap-2 rounded-xl bg-white/10 px-2.5 py-1 text-xs text-white/80">
        {children}{title}
      </div>
      <p className="text-white/80">{desc}</p>
    </Card>
  );
}

function Step({ n, title, desc }) {
  return (
    <Card>
      <div className="mb-3 inline-flex items-center gap-2 rounded-xl bg-white/10 px-2.5 py-1 text-xs text-white/80">
        Paso {n}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-white/80">{desc}</p>
    </Card>
  );
}

function PriceCard({ tier, price, period, bullets, highlight }) {
  return (
    <Card highlight={!!highlight}>
      {highlight && (
        <div className="absolute -top-3 left-5 rounded-full bg-gradient-to-r from-amber-600 to-amber-400 px-3 py-1 text-xs font-semibold text-neutral-900 shadow">
          Recomendado
        </div>
      )}
      <h3 className="text-lg font-bold">{tier}</h3>
      <div className="mt-2 text-3xl font-black">
        {price} <span className="text-sm font-semibold text-white/70">{period}</span>
      </div>
      <ul className="mt-4 space-y-1 text-white/80 text-sm">
        {bullets.map((b) => (
          <li key={b} className="flex items-center gap-2">
            <img className="h-5 w-5" src="/check.svg" alt="" loading="lazy" />
            {b}
          </li>
        ))}
      </ul>
      <a
        href="#contacto"
        className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-neutral-950 hover:bg-white/90 transition active:scale-[0.98]"
      >
        Empezar
      </a>
    </Card>
  );
}


function Faq({ q, a }) {
  return (
    <details className="group rounded-2xl border border-white/10 bg-neutral-900/40 p-4">
      <summary className="cursor-pointer list-none text-base font-semibold">
        <span className="inline-flex items-center gap-2">
          <img className="h-5 w-5" src="/question.svg" alt="" loading="lazy" />
          {q}
        </span>
      </summary>
      <p className="mt-2 text-white/80">{a}</p>
    </details>
  );
}

function Reveal({ children, delay = 0, y = 16, as = "div", className = "" }) {
  const Tag = motion[as] || motion.div;
  return (
    <Tag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </Tag>
  );
}

function SvgHover({ children }) {
  return (
    <motion.span
      className="inline-grid place-items-center"
      whileHover={{ scale: 1.08, rotate: 2 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 320, damping: 20 }}
    >
      {children}
    </motion.span>
  );
}

function Card({ className = "", children, highlight = false, }) {
  return (
    <motion.div
      className={`relative rounded-2xl border p-5 bg-neutral-900/40 border-white/10 ${className}`}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {highlight && (
        <div className="pointer-events-none absolute inset-0 rounded-2xl overflow-hidden">

          <motion.div
            className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-amber-500/40 via-amber-300/40 to-amber-500/40 blur-[2px]"
            animate={{ x: ["-10%", "110%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            style={{ maskImage: "radial-gradient(220px 80px at 50% -20px, black, transparent)" }}
          />
        </div>
      )}
      {children}
    </motion.div>
  );
}
function HeroChat({ children }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 60]); // 0→60px
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <motion.div ref={ref} style={{ y, opacity }}>
      {children}
    </motion.div>
  );
}

export function BottomDock() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <Dock className="absolute rounded-2xl border border-white/10 bg-neutral-900/70 p-2 backdrop-blur">
      <DockIcon className="flex items-center gap-3 ml-2">
        <SvgHover>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Ir al inicio"
            className="flex items-center justify-center"
            rel="noreferrer"
          >
            <Home className="h-5 w-5" />
          </button>
        </SvgHover>
      </DockIcon>

      <div
        role="separator"
        aria-orientation="vertical"
        className="mx-2 h-10 w-px bg-white/15 self-stretch"
      />
      <DockIcon className="flex items-center gap-3">
        <SvgHover>
          <a href="https://rey-khaki.vercel.app/" target="_blank" rel="noreferrer">
            <img className="h-5 w-5" src="/url.svg" loading="lazy" />
          </a>
        </SvgHover>
      </DockIcon>
      <DockIcon>
        <SvgHover>
          <a href="https://youtu.be/x9AWQ6WVSNY?si=azPcNTso5aUWPPlE&t=8702" target="_blank" rel="noreferrer">
            <img className="h-5 w-5" src="/url.svg" loading="lazy" />
          </a>
        </SvgHover>
      </DockIcon>

      <DockIcon>
        <SvgHover>
          <a href="https://github.com/Reynaldo003" target="_blank" rel="noreferrer">
            <img className="h-5 w-5" src="/github.svg" loading="lazy" />
          </a>
        </SvgHover>
      </DockIcon>
      <DockIcon>
        <SvgHover>
          <a href="https://github.com/Francisco2000003" target="_blank" rel="noreferrer">
            <img className="h-5 w-5" src="/github.svg" loading="lazy" />
          </a>
        </SvgHover>
      </DockIcon>
    </Dock>
  );
}