export const metadata = {
  title: "Geofísica | BERG",
  description: "Serviços de geofísica: planejamento, eletrorresistividade, investigações hidrogeológicas e análise de dados.",
};

export default function Page() {
  return (
    <section className="space-y-10">
      {/* Hero */}
      <div className="relative h-60 w-full overflow-hidden rounded-lg bg-[rgb(192,0,0)]">
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-10">
          <h1 className="m-0 text-white text-3xl md:text-4xl font-bold leading-tight drop-shadow">
            Geofísica
          </h1>
          <p className="m-0 mt-3 text-white/90 max-w-2xl text-sm md:text-base">
            Investigações geofísicas para suporte à hidrogeologia, meio ambiente e geologia estrutural.
          </p>
        </div>
      </div>

      {/* Descrição */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Descrição da Solução</h2>
        <p className="text-slate-700 leading-relaxed">
          Planejamos e executamos campanhas geofísicas com definição de método, malha e orientação,
          incluindo eletrorresistividade, magnetometria e gamaespectrometria, com interpretação técnica
          para decisões confiáveis.
        </p>
      </div>

      {/* Serviços */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[rgb(192,0,0)]">Serviços Oferecidos</h3>
        <ul className="list-disc list-inside space-y-2 text-slate-700 text-sm md:text-base">
          <li>Definição de método investigativo</li>
          <li>Definição da malha e orientação da pesquisa, além do acompanhamento</li>
          <li>Caminhamentos elétricos para levantamentos de eletrorresistividade</li>
          <li>
            Investigações hidrogeológicas e de monitoramento ambiental: determinação da profundidade do nível freático,
            identificação de aquíferos e zonas de saturação, acompanhamento de plumas de contaminação, etc.
          </li>
          <li>Investigações geológicas para delimitação de contatos litológicos</li>
          <li>Interpretação e análise de dados magnetométricos e gamaespectométricos</li>
          <li>Relatórios técnicos</li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="rounded-lg border bg-white p-6 shadow-sm">
        <p className="text-slate-700 mb-4">
          Quer planejar uma campanha geofísica eficiente? Fale conosco.
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
