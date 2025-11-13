import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, FileCheck2, Clock3, Lock, Sparkles } from "lucide-react";

export default function TrustSection({ WHATSAPP = "522712128513" }) {
    const LOGOS = useMemo(
        () => [
            { src: "/multiservicios.png", alt: "multiservicios" },
            { src: "/volkswagen.png", alt: "volkswagen" },
            { src: "/fisionerv.png", alt: "fisionerv" },
            { src: "/orthoclinic.png", alt: "orthoclinic" }
        ],
        []
    );

    const STATS = [
        { k: "99.3%", v: "Satisfacción", d: "según encuestas post-implementación" },
        { k: "24/7", v: "Disponibilidad", d: "chatbot activo todo el día" },
        { k: "3-10d", v: "Go-Live", d: "tiempo típico de implementación" },
    ];

    return (
        <section id="confianza" className="border-t border-white/5 bg-neutral-900/30">
            <div className="mx-auto max-w-7xl px-4 py-16">
                <header className="flex items-start justify-between gap-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black tracking-tight">
                            Confianza y resultados reales
                        </h2>
                        <p className="mt-2 max-w-2xl text-white/70">
                            Marcas y negocios locales ya implementaron nuestras soluciones de IA y
                            desarrollo web a medida. Aquí tienes una muestra rápida.
                        </p>
                    </div>
                    <a
                        href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                            "Hola, me interesa conocer casos de éxito y referencias."
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-amber-500 px-4 py-2.5 text-sm font-semibold text-neutral-900 hover:bg-amber-400"
                    >
                        <Sparkles className="h-4 w-4" />
                        Pide referencias verificadas
                    </a>
                </header>

                <LogoWall logos={LOGOS} />

                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                    {STATS.map((s) => (
                        <StatCard key={s.v} k={s.k} v={s.v} d={s.d} />
                    ))}
                </div>

                {/* GARANTÍAS Y SEGURIDAD */}
                <div className="mt-12 grid gap-4 lg:grid-cols-2">
                    <TrustBadge
                        icon={<FileCheck2 className="h-5 w-5" />}
                        title="Acuerdo de confidencialidad (NDA)"
                        desc="Protegemos tu información desde el primer contacto."
                    />
                    <TrustBadge
                        icon={<ShieldCheck className="h-5 w-5" />}
                        title="Buenas prácticas y seguridad"
                        desc="Control de accesos, roles, respaldos y hardening en cada proyecto."
                    />
                    <TrustBadge
                        icon={<Clock3 className="h-5 w-5" />}
                        title="SLA y soporte evolutivo"
                        desc="Planes de soporte y mejoras continuas según tus metas."
                    />
                    <TrustBadge
                        icon={<Lock className="h-5 w-5" />}
                        title="Cumplimiento y privacidad"
                        desc="Cumplimos políticas internas y normativas aplicables."
                    />
                </div>

                {/* CTA */}
                <div className="mt-12 rounded-2xl border border-white/10 bg-neutral-900/50 p-6">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div>
                            <h4 className="text-lg font-semibold">
                                ¿Quieres ver un caso similar al tuyo?
                            </h4>
                            <p className="text-white/70 text-sm">
                                Te compartimos ejemplo, alcance y resultados. Sin compromiso.
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <a
                                href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                                    "Hola, ¿pueden mostrarme un caso similar al de mi negocio?"
                                )}`}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-600 to-amber-400 px-4 py-2 text-sm font-semibold text-neutral-900 shadow hover:brightness-110"
                            >
                                Ver un caso similar
                            </a>
                            <a
                                href={`mailto:hola@robots.ai?subject=Solicito%20casos%20de%20%C3%A9xito&body=${encodeURIComponent(
                                    "Hola, me interesa ver un caso de éxito y hablar de mi proyecto."
                                )}`}
                                className="inline-flex items-center justify-center rounded-xl border border-white/15 px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/5"
                            >
                                Solicitar por correo
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ----------------------------- Subcomponentes ----------------------------- */

function LogoWall({ logos = [] }) {
    const list = logos.concat(logos);

    return (
        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/60">
            <motion.div
                className="flex items-center gap-10 px-6 py-5"
                animate={{ x: [0, -240] }}
                transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            >
                {list.map((l, i) => (
                    <img
                        key={i}
                        src={l.src}
                        alt={l.alt || "Logo"}
                        loading="lazy"
                        className="h-16 w-auto transition bg-white/95 rounded-2xl p-2"
                    />
                ))}
            </motion.div>
        </div>
    );
}

function StatCard({ k, v, d }) {
    return (
        <div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-5">
            <div className="text-3xl font-black">{k}</div>
            <div className="mt-1 font-semibold">{v}</div>
            <div className="text-sm text-white/70">{d}</div>
        </div>
    );
}

function TestimonialCarousel({ items = [] }) {
    const [idx, setIdx] = useState(0);
    const len = items.length;
    const next = () => setIdx((i) => (i + 1) % len);
    const prev = () => setIdx((i) => (i - 1 + len) % len);

    // Autoplay
    useEffect(() => {
        const t = setInterval(next, 4500);
        return () => clearInterval(t);
    }, [len]);

    const item = items[idx] || {};

    return (
        <div className="relative mt-4 rounded-2xl border border-white/10 bg-neutral-900/40 p-5">
            <motion.div
                key={idx}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
            >
                <div className="flex items-start gap-4">
                    <img
                        src={item.avatar || "/avatars/placeholder.jpg"}
                        alt={item.name || "Cliente"}
                        loading="lazy"
                        className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                        <p className="text-white/90">“{item.quote}”</p>
                        <p className="mt-2 text-sm text-white/70">
                            <span className="font-semibold text-white/90">{item.name}</span> • {item.role}
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Controles */}
            <div className="mt-4 flex items-center justify-between">
                <div className="flex gap-1">
                    {items.map((_, i) => (
                        <span
                            key={i}
                            className={`h-1.5 w-6 rounded-full transition ${i === idx ? "bg-amber-400" : "bg-white/15"
                                }`}
                        />
                    ))}
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={prev}
                        className="rounded-lg border border-white/15 px-2 py-1 text-xs text-white/80 hover:bg-white/5"
                        aria-label="Anterior testimonio"
                    >
                        Anterior
                    </button>
                    <button
                        onClick={next}
                        className="rounded-lg border border-white/15 px-2 py-1 text-xs text-white/80 hover:bg-white/5"
                        aria-label="Siguiente testimonio"
                    >
                        Siguiente
                    </button>
                </div>
            </div>
        </div>
    );
}

function TrustBadge({ icon, title, desc }) {
    return (
        <div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-5">
            <div className="mb-1 inline-flex items-center gap-2 text-sm text-white/80">
                {icon}
                {title}
            </div>
            <p className="text-white/70 text-sm">{desc}</p>
            <div className="mt-3 inline-flex items-center gap-1 text-xs text-emerald-400">
                <CheckCircle2 className="h-4 w-4" />
                Verificable bajo solicitud
            </div>
        </div>
    );
}
