export const metadata = {
  title: "Exploração e Prospecção Mineral | BERG",
  description: "Serviços de exploração e prospecção mineral.",
};

export default function Page() {
  return (
    <section className="space-y-10">
      <div className="relative h-60 w-full overflow-hidden rounded-lg bg-[rgb(192,0,0)]">
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-10">
          <h1 className="m-0 text-white text-3xl md:text-4xl font-bold leading-tight drop-shadow">
            Exploração e Prospecção Mineral
          </h1>
          <p className="m-0 mt-3 text-white/90 max-w-2xl text-sm md:text-base">
            Soluções completas para transformar dados geológicos em decisões seguras.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Serviços</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-700 text-sm md:text-base">
          <li>Mapeamento geológico regional, local e detalhado</li>
          <li>Plano de pesquisa, sondagem e acompanhamento</li>
          <li>Descrição de testemunhos e seleção de amostras (QAQC)</li>
          <li>Interpretação de análises geoquímicas</li>
          <li>Amostragem de canal em trincheiras</li>
          <li>Sedimento de corrente e análise de solo (ouro e similares)</li>
          <li>Modelagem geológica 3D</li>
          <li>Avaliação de Reservas e Recursos (geoestatística)</li>
          <li>Relatórios técnicos</li>
        </ul>
      </div>

      <div className="rounded-lg border bg-white p-6 shadow-sm">
        <p className="text-slate-700 mb-4">
          Precisa avançar seu projeto com rigor técnico? Fale conosco.
        </p>
        <a href="/contact" className="inline-block bg-[rgb(192,0,0)] hover:bg-[rgb(160,0,0)] text-white text-sm font-medium px-5 py-2 rounded-md">
          Entrar em contato
        </a>
      </div>
    </section>
  );
}