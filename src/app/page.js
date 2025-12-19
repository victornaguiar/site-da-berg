export default function HomePage() {
  return (
    <section className="space-y-20">

      {/* SEÇÃO HERO */}
      <div className="grid md:grid-cols-2 gap-10 md:items-center">
        <div className="space-y-5">
          <p className="text-[rgb(0,0,0)] font-semibold">Consultoria Hidrogeológica</p>

          <h1 className="text-4xl font-bold leading-tight text-[rgb(192,0,0)]">
            Gestão inteligente de recursos hídricos para empresas
          </h1>

          <p className="text-[rgb(0,0,0)] text-sm">
            Apoiamos mineração, indústria e agricultura com soluções avançadas em hidrogeologia, modelagem e gestão da água.
          </p>

          <div className="flex gap-4">
            <a href="/contact"
              className="bg-[rgb(192,0,0)] text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-[rgb(160,0,0)]">
              Entrar em contato
            </a>

            <a href="/services"
              className="border border-slate-300 px-5 py-2 rounded-md text-sm text-[rgb(192,0,0)] hover:bg-slate-100">
              Ver serviços
            </a>
          </div>
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="font-semibold text-lg text-black mb-3">Por que trabalhar conosco?</h2>
          <ul className="space-y-2 text-sm text-slate-700 list-disc list-inside">
            <li>Mais de 10 anos de experiência em hidrogeologia e modelagem.</li>
            <li>Atendimento direto de especialistas sem intermediários.</li>
            <li>Soluções econômicas e em conformidade legal.</li>
          </ul>
        </div>
      </div>

      {/* SETORES */}
      <section className="space-y-6">
        <h2 className="text-2xl text-[rgb(192,0,0)] font-semibold">Setores que apoiamos</h2>

        <div className="grid md:grid-cols-3 gap-6 text-sm">
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <h3 className="font-medium text-lg text-black">Mineração</h3>
            <p className="text-slate-600 mt-1">
              Balanço hídrico, drenagem, monitoramento e modelagem 3D.
            </p>
          </div>

            <div className="rounded-lg border bg-white p-6 shadow-sm">
            <h3 className="font-medium text-lg text-black">Indústria</h3>
            <p className="text-slate-600 mt-1">
              Água de processo, análise de risco, conformidade regulatória.
            </p>
          </div>

          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <h3 className="font-medium text-lg text-black">Agricultura & Meio Ambiente</h3>
            <p className="text-slate-600 mt-1">
              Proteção de nascentes, planejamento de irrigação e gestão sustentável da água.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}