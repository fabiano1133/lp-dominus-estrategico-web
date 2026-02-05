"use client"

const stats = [
  { value: "+36%", label: "Conversão vs últimos 6 meses", sub: "em projetos de otimização" },
  { value: "-24%", label: "Custo por lead", sub: "quando canal e mensagem estão alinhados" },
  { value: "100%", label: "Estratégia + canal", sub: "na mesma mão, sem terceirizar" },
]

export function StatsSection() {
  return (
    <section
      className="py-16 md:py-20 bg-card border-y border-border text-foreground"
      data-gtm-section="stats"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-4xl md:text-5xl font-bold text-primary">{stat.value}</p>
                <p className="mt-2 font-medium text-foreground/95">{stat.label}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
