export const metadata = {
  title: "Espeleologia | BERG",
  description: "Serviços de espeleologia: prospecção, relevância, espeleotopografia, bioespeleologia e licenciamento.",
};

export default function Page() {
  return (
    <section className="space-y-10">
      {/* Hero */}
      <div className="relative h-60 w-full overflow-hidden rounded-lg bg-[rgb(192,0,0)]">
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-10">
          <h1 className="m-0 text-white text-3xl md:text-4xl font-bold leading-tight drop-shadow">
            Espeleologia
          </h1>
          <p className="m-0 mt-3 text-white/90 max-w-2xl text-sm md:text-base">
            Estudos completos de cavidades naturais: mapeamento, análise ecológica e licenciamento.
          </p>
        </div>
      </div>

      {/* Descrição */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Descrição da Solução</h2>
        <p className="text-slate-700 leading-relaxed">
          Realizamos prospecção de cavernas, avaliação de relevância e áreas de influência,
          espeleotopografia, bioespeleologia e suporte a licenciamento e compensação ambiental.
        </p>
      </div>

      {/* Serviços */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[rgb(192,0,0)]">Serviços Oferecidos</h3>
        <ul className="list-disc list-inside space-y-2 text-slate-700 text-sm md:text-base">
          <li>Prospecção de cavidades</li>
          <li>Avaliação de grau de relevância e áreas de influência</li>
          <li>Espeleotopografia (mapeamento de cavernas)</li>
          <li>Bioespeleologia</li>
          <li>Licenciamento de áreas de compensação</li>
          <li>Relatórios técnicos</li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="rounded-lg border bg-white p-6 shadow-sm">
        <p className="text-slate-700 mb-4">
          Precisa de estudos espeleológicos confiáveis e completos? Fale conosco.
        </p>
        <a
          href="/contact"
          className="inline-block bg-[rgb(192,0,0)] hover:bg-[rgb(160,0,0)] text-white text-sm font-medium px-5 py-2 rounded-md"
        >
          Entrar em contato
        </a>
      </div>
    </section>
  );
}
