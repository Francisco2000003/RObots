import { useRef, useState, useEffect } from "react";
import robotsLogo from "../assets/logo.jpg";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { Particles } from "@/components/magicui/particles";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

import Lenis from "lenis";

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
  const planes = {
    consultorios: [
      {
        tier: "Esencial",
        price: "$2,490",
        period: "/mes",
        bullets: [
          "Citas y recordatorios",
          "Respuestas a preguntas frecuentes",
          "1 integración (Sheets)",
          "Soporte por chat",
        ],
      },
      {
        tier: "Pro",
        price: "$4,490",
        period: "/mes",
        bullets: [
          "Todo Esencial",
          "Reprogramaciones + confirmaciones",
          "2–3 integraciones",
          "Flujos personalizados",
        ],
        highlight: true,
      },
      {
        tier: "Plus",
        price: "$6,990",
        period: "/mes",
        bullets: [
          "Agenda multi-doctor",
          "Reportes automáticos",
          "Integraciones a medida",
          "SLA básico",
        ],
      },
    ],

    concesionarias: [
      {
        tier: "Esencial",
        price: "$6,990",
        period: "/mes",
        bullets: [
          "Leads y seguimiento",
          "Catálogo y cotizaciones simples",
          "1–2 integraciones",
          "Soporte por chat",
        ],
      },
      {
        tier: "Pro",
        price: "$9,990",
        period: "/mes",
        bullets: [
          "Todo Esencial",
          "Agendador de pruebas de manejo",
          "3–4 integraciones (CRM/Drive)",
          "Flujos personalizados",
        ],
        highlight: true,
      },
      {
        tier: "Plus",
        price: "$14,990",
        period: "/mes",
        bullets: [
          "Integración avanzada a CRM",
          "Reportes y KPIs",
          "SLA y capacitación",
          "Onboarding dedicado",
        ],
      },
    ],

    restaurantes: [
      {
        tier: "Esencial",
        price: "$1,990",
        period: "/mes",
        bullets: [
          "Reservas y confirmaciones",
          "Menú en WhatsApp",
          "1 integración (Sheets)",
          "Soporte por chat",
        ],
      },
      {
        tier: "Pro",
        price: "$3,490",
        period: "/mes",
        bullets: [
          "Todo Esencial",
          "Pedidos simples para recoger",
          "2–3 integraciones",
          "Flujos personalizados",
        ],
        highlight: true,
      },
      {
        tier: "Plus",
        price: "$4,990",
        period: "/mes",
        bullets: [
          "Segmentación de clientes",
          "Promos automatizadas",
          "Reportes de ocupación",
          "Integraciones a medida",
        ],
      },
    ],

    gimnasios: [
      {
        tier: "Esencial",
        price: "$1,990",
        period: "/mes",
        bullets: [
          "Inscripciones y consultas",
          "Horarios y clases",
          "1 integración (Sheets)",
          "Soporte por chat",
        ],
      },
      {
        tier: "Pro",
        price: "$3,490",
        period: "/mes",
        bullets: [
          "Todo Esencial",
          "Recordatorios de pagos",
          "2–3 integraciones",
          "Flujos personalizados",
        ],
        highlight: true,
      },
      {
        tier: "Plus",
        price: "$5,490",
        period: "/mes",
        bullets: [
          "Gestión de membresías",
          "Reportes y retención",
          "Integraciones a medida",
          "SLA básico",
        ],
      },
    ],
  };

  const otherBizHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hola, tengo un negocio de tipo: ${customRole || "(especificar)"} y me interesa un chatbot RObots.`
  )}`;

  return (


    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-amber-500/30 selection:text-neutral-950">
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

            <div className="flex items-center gap-2">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20quiero%20una%20demo%20de%20RObots`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-600 to-amber-400 px-4 py-2 text-sm font-semibold text-neutral-900 shadow-lg shadow-amber-500/20 hover:brightness-110"
              >
                <img className="h-6 w-6" src="/whatsapp.svg" alt="" />
                Solicitar demo
              </a>
            </div>
          </nav>
        </div>
      </header>

      <section className="relative">
        <Particles className="absolute min-w-full" quantity={120} staticity={40} ease={40} size={1} color="#F59E0B" />
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 pb-20 pt-14 md:grid-cols-2 md:pt-24">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              <img className="h-5 w-5" src="/shine.svg" alt="" />
              Ya operando en agencias automotrices
            </p>
            <h1 className="text-4xl font-black leading-tight tracking-tight md:text-5xl">
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
                  <img className="h-5 w-5" src="/check.svg" alt="" />
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
                      <img src={robotsLogo} alt="RObots" className="h-7 w-7 object-contain" />
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
          <Reveal as="h2" className="text-2xl font-bold md:text-3xl">
            Beneficios clave
          </Reveal>
          <Reveal delay={0.05} className="mt-2 max-w-2xl text-white/70">
            Ahorra tiempo, reduce costos y brinda una experiencia consistente a cada cliente.
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard title="Atención 24/7" desc="Nunca pierdas oportunidades por fuera de horario." icon={<img className="h-6 w-6" src="/clock.svg" alt="" />} />
            <FeatureCard title="Agenda automática" desc="Reservas y recordatorios sin intervención humana." icon={<img className="h-6 w-6" src="/calendar.svg" alt="" />} />
            <FeatureCard title="Promos al instante" desc="Comparte menús, planes, catálogos y PDFs." icon={<img className="h-6 w-6" src="/thunderWhite.svg" alt="" />} />
            <FeatureCard title="Datos centralizados" desc="Todo en un solo lugar: clientes, citas y pedidos." icon={<img className="h-6 w-6" src="/database.svg" alt="" />} />
          </div>
        </div>
      </section>

      <section id="industrias" className="border-t border-white/5">
        <Particles className="absolute min-w-full" quantity={120} staticity={40} ease={40} size={1} color="#F59E0B" />
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <Reveal as="h2" className="text-2xl font-bold md:text-3xl">
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
                    <li key={i} className="flex items-center gap-2"><img className="h-5 w-5" src="/check.svg" alt="" /> {i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section id="funciona" className="border-t border-white/5 bg-neutral-900/30">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <Reveal as="h2" className="text-2xl font-bold md:text-3xl">
            Cómo funciona
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Step n={1} title="Diagnóstico" desc="Entendemos tu proceso actual y definimos objetivos claros." />
            <Step n={2} title="Implementación" desc="Conectamos WhatsApp con Sheets/archivos y adaptamos los flujos." />
            <Step n={3} title="Optimización" desc="Medimos, mejoramos y agregamos nuevas funciones según tu operación." />
          </div>
        </div>
      </section>

      {/* Integraciones */}
      <section id="integraciones" className="border-t border-white/5">

        <Particles className="absolute min-w-full" quantity={120} staticity={40} ease={40} size={1} color="#F59E0B" />
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <Reveal as="h2" className="text-2xl font-bold md:text-3xl">
                Integraciones nativas
              </Reveal>
              <Reveal delay={0.05} className="mt-2 max-w-2xl text-white/70">
                Conectamos con tus herramientas de todos los días.
              </Reveal>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <IntegrationCard title="WhatsApp" desc="Atiende y automatiza donde están tus clientes.">
              <img className="h-6 w-6" src="/whatsappColor.svg" alt="" />
            </IntegrationCard>
            <IntegrationCard title="Google Sheets" desc="Registra clientes, citas, pedidos y reportes.">
              <img className="h-6 w-6" src="/sheets.svg" alt="" />
            </IntegrationCard>
            <IntegrationCard title="Google Drive" desc="Comparte catálogos y PDFs en segundos.">
              <img className="h-6 w-6" src="/drive.svg" alt="" />
            </IntegrationCard>
            <IntegrationCard title="Webhooks" desc="Conecta con tu CRM, ERP o sistema propio.">
              <img className="h-6 w-6" src="/thunder.svg" alt="" />
            </IntegrationCard>
          </div>
        </div>
      </section>

      {/* Precios con tabs por giro */}
      <section id="precios" className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <Reveal as="h2" className="text-2xl font-bold md:text-3xl">
                Planes por giro
              </Reveal>
              <Reveal delay={0.05} className="mt-2 max-w-2xl text-white/70">
                Precios en MXN. Ajustamos según complejidad y volumen.
              </Reveal>
            </div>
          </div>

          {/* Tabs */}
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

          {/* Grid de planes del sector activo */}
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

          {/* Otro giro */}
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

      {/* FAQ */}
      <section id="faq" className="border-t border-white/5 bg-neutral-900/30">
        <Particles className="absolute min-w-full" quantity={120} staticity={40} ease={40} size={1} color="#F59E0B" />
        <div className="mx-auto max-w-7xl px-4 py-16">
          <Reveal as="h2" className="text-2xl font-bold md:text-3xl">
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

      {/* Contacto */}
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
                <img className="h-5 w-5" src="/whatsapp.svg" alt="" />
                Chatear ahora
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-white/70">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p>© {year} RObots — Automatización con IA</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white">Planes</a>
              <a href="#" className="hover:text-white">FAQ</a>
              <a href="#" className="hover:text-white">Contacto</a>
            </div>


            <div className="flex items-center gap-3">
              <BottomDock></BottomDock>
            </div>
          </div>
        </div>
      </footer>
      <InteractiveHoverButton className="fixed bottom-20 right-4 mb-24 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-700 to-amber-400 px-4 py-3 w-32
        font-semibold text-neutral-950 shadow-xl hover:brightness-110 
        [animation:pulse-soft_3.5s_ease-in-out_infinite]"
        onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20quiero%20informes`, "_blank")}
      >Contacto</InteractiveHoverButton>
    </div >
  );
}
/* -------------------- UI atoms -------------------- */
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

function CaseCard({ title, lines, emoji }) {
  return (
    <Card>
      <div className="mb-2 text-3xl">{emoji}</div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <ul className="mt-2 space-y-1 text-white/80 text-sm">
        {lines.map((l) => (
          <li key={l} className="flex items-center gap-2">
            <img className="h-5 w-5" src="/check.svg" alt="" /> {l}
          </li>
        ))}
      </ul>
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
            <img className="h-5 w-5" src="/check.svg" alt="" />
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
          <img className="h-5 w-5" src="/question.svg" alt="" />
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
      {/* Glow/borde animado sutil cuando highlight */}
      {highlight && (
        <div className="pointer-events-none absolute inset-0 rounded-2xl">
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

    <Dock className=" rounded-2xl border border-white/10 bg-neutral-900/70 p-2 backdrop-blur">
      <DockIcon className="flex items-center gap-3">
        <SvgHover>
          <a href="https://youtu.be/x9AWQ6WVSNY?si=azPcNTso5aUWPPlE&t=8702" target="_blank" rel="noreferrer">
            <img className="h-5 w-5" src="/url.svg" />
          </a>
        </SvgHover>
      </DockIcon>
      <DockIcon>
        <SvgHover>
          <a href="https://youtu.be/x9AWQ6WVSNY?si=azPcNTso5aUWPPlE&t=8702" target="_blank" rel="noreferrer">
            <img className="h-5 w-5" src="/url.svg" />
          </a>
        </SvgHover>
      </DockIcon>

      <DockIcon>
        <SvgHover>
          <a href="https://www.instagram.com/reyvallejo003/" target="_blank" rel="noreferrer">
            <img className="h-5 w-5" src="/instagram.svg" />
          </a>
        </SvgHover>
      </DockIcon>
      <DockIcon>
        <SvgHover>
          <a href="https://www.instagram.com/waldopenaa/" target="_blank" rel="noreferrer">
            <img className="h-5 w-5" src="/instagram.svg" />
          </a>
        </SvgHover>
      </DockIcon>

      <DockIcon>
        <SvgHover>
          <a href="https://github.com/Reynaldo003" target="_blank" rel="noreferrer">
            <img className="h-5 w-5" src="/github.svg" />
          </a>
        </SvgHover>
      </DockIcon>
      <DockIcon>
        <SvgHover>
          <a href="https://github.com/Francisco2000003" target="_blank" rel="noreferrer">
            <img className="h-5 w-5" src="/github.svg" />
          </a>
        </SvgHover>
      </DockIcon>
    </Dock>
  );
}