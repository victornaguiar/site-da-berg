import Image from "next/image";

export const metadata = {
  title: "Soluções | BERG",
  description: "Serviços especializados em geociências.",
};

const services = [
  { slug: "exploracao-prospeccao-mineral", title: "Exploração e Prospecção Mineral", img: "/images/exploracao.png" },
  { slug: "hidrogeologia", title: "Hidrogeologia", img: "/images/hidrogeologia.jpg" },
  { slug: "espeleologia", title: "Espeleologia", img: "/images/espeleologia.jpg" },
  { slug: "geofisica", title: "Geofísica", img: "/images/geofisica.jpg" },
  { slug: "legislacao", title: "Legislação", img: "/images/legislacao.jpg" },
  { slug: "licenciamento-ambiental", title: "Licenciamento Ambiental", img: "/images/licenciamento.jpg" },
  { slug: "geotecnia", title: "Geotecnia", img: "/images/geotecnia_mosba.jpg" },
];

export default function ServicesPage() {
  return (
    <section className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Soluções</h1>
        <p className="text-[rgb(192,0,0)]">Escolha uma solução para saber mais.</p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <a
            key={s.slug}
            href={`/services/${s.slug}`}
            className="group rounded-lg border bg-white shadow-sm overflow-hidden hover:shadow-md transition"
          >
            <div className="relative h-40 w-full bg-slate-100">
              {/* Platzhalter-Bild; später ersetzen */}
              <Image
                src={s.img}
                alt={s.title}
                fill
                className="object-cover"
              />
              {/* Falls Bild fehlt, einfache Farbe als Fallback */}
              {/* <div className="h-full w-full bg-slate-200" /> */}
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-black">{s.title}</h3>
              <p className="text-sm text-[rgb(192,0,0)]">Saiba mais →</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}