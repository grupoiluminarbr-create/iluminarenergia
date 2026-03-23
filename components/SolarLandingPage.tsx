"use client";

import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";

export default function SolarLandingPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const whatsappHref =
    "https://wa.me/5598999332000?text=Olá%2C%20quero%20uma%20simulação%20de%20energia%20solar%20com%20a%20I-Luminar%20Energia.";

  function handleInputChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitted(false);

    const message = [
      "Olá! Quero solicitar uma proposta de energia solar.",
      "",
      `Nome: ${formData.name}`,
      `E-mail: ${formData.email}`,
      `WhatsApp: ${formData.phone}`,
      `Mensagem: ${formData.message || "Nao informado"}`,
    ].join("\n");

    const whatsappFormHref = `https://wa.me/5598999332000?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappFormHref, "_blank", "noopener,noreferrer");

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
    setIsSubmitted(true);
  }

  const benefits = [
    {
      title: "Economia real na conta",
      description:
        "Reduza drasticamente o valor da fatura com um projeto dimensionado para o seu consumo.",
    },
    {
      title: "Instalação homologada",
      description:
        "Equipe técnica especializada, materiais de qualidade e processo completo até a conexão.",
    },
    {
      title: "Retorno previsível",
      description:
        "Transforme custo fixo em investimento com payback claro e valorização do imóvel.",
    },
  ];

  const stats = [
    { value: "+ de 80%", label: "de redução potencial na conta" },
    { value: "25+ anos", label: "de vida útil dos módulos" },
    { value: "100%", label: "acompanhamento do projeto" },
  ];

  const steps = [
    {
      step: "01",
      title: "Análise do consumo",
      description:
        "Avaliamos seu histórico de energia e definimos a solução ideal para residência, comércio ou empresa.",
    },
    {
      step: "02",
      title: "Projeto e aprovação",
      description:
        "Desenvolvemos o projeto técnico e cuidamos da documentação junto à concessionária.",
    },
    {
      step: "03",
      title: "Instalação e ativação",
      description:
        "Executamos a instalação com segurança, realizamos os testes finais e oferecemos suporte após a entrega.",
    },
  ];

  const faqs = [
    {
      question: "Em quanto tempo o sistema começa a gerar economia?",
      answer:
        "Depois da aprovação da concessionária e da ativação do sistema, a economia aparece nas faturas seguintes, conforme o perfil de consumo e a compensação de energia.",
    },
    {
      question: "A I-Luminar Energia cuida da homologação?",
      answer:
        "Sim. Organizamos a documentação técnica e acompanhamos o processo junto à concessionária até a liberação da conexão.",
    },
    {
      question: "Energia solar vale para residência e empresa?",
      answer:
        "Sim. O dimensionamento considera consumo, área disponível, objetivo financeiro e características da unidade.",
    },
  ];

  const projects = [
    {
      title: "Residência com geração própria",
      location: "Santo Amaro - MA",
      category: "Projeto residencial de 6,1 kWp",
      imageSrc: "/obras/obra-1.png",
    },
    {
      title: "Residência com economia imediata",
      location: "São Luís - MA",
      category: "Projeto residencial de 4,88 kWp",
      imageSrc: "/obras/obra-2.jpg",
    },
    {
      title: "Usina Comercial",
      location: "Santo Amaro - MA",
      category: "Projeto comercial de 41,40 kWp",
      imageSrc: "/obras/obra-3.png",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-transparent text-[#102218]">
      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 rounded-full border border-[#f8b319]/30 bg-[#f8b319] px-5 py-3 text-sm font-semibold text-zinc-950 shadow-[0_20px_60px_rgba(248,179,25,0.28)] transition hover:-translate-y-0.5"
      >
        <span className="inline-flex h-2.5 w-2.5 rounded-full bg-zinc-950" />
        Falar no WhatsApp
      </a>

      <header className="sticky top-0 z-40 border-b border-[#018d5f]/10 bg-white/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5 lg:px-8">
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="I-Luminar Energia"
              width={460}
              height={140}
              className="h-28 w-auto"
              priority
            />
          </div>

          <nav className="hidden items-center gap-3 text-sm text-zinc-700 md:flex">
            <a
              href="#beneficios"
              className="rounded-full border border-[#018d5f]/12 bg-white/70 px-4 py-2 font-medium text-zinc-700 shadow-[0_8px_24px_rgba(16,24,40,0.04)] transition hover:border-[#018d5f]/30 hover:text-[#018d5f]"
            >
              Benefícios
            </a>
            <a
              href="#como-funciona"
              className="rounded-full border border-[#018d5f]/12 bg-white/70 px-4 py-2 font-medium text-zinc-700 shadow-[0_8px_24px_rgba(16,24,40,0.04)] transition hover:border-[#018d5f]/30 hover:text-[#018d5f]"
            >
              Como funciona
            </a>
            <a
              href="#obras"
              className="rounded-full border border-[#018d5f]/12 bg-white/70 px-4 py-2 font-medium text-zinc-700 shadow-[0_8px_24px_rgba(16,24,40,0.04)] transition hover:border-[#018d5f]/30 hover:text-[#018d5f]"
            >
              Obras
            </a>
            <a
              href="#contato"
              className="rounded-full border border-[#018d5f]/12 bg-white/70 px-4 py-2 font-medium text-zinc-700 shadow-[0_8px_24px_rgba(16,24,40,0.04)] transition hover:border-[#018d5f]/30 hover:text-[#018d5f]"
            >
              Contato
            </a>
          </nav>

          <a
            href="#contato"
            className="rounded-full border border-[#f8b319]/50 bg-[#f8b319] px-5 py-2.5 text-sm font-semibold text-[#3f2a00] shadow-[0_14px_30px_rgba(248,179,25,0.24)] transition hover:-translate-y-0.5 hover:bg-[#ffbf2f]"
          >
            Solicitar proposta
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden pt-4">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(248,179,25,0.18),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(1,141,95,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(1,141,95,0.04),transparent_22%)]" />
          <div className="absolute left-[-10rem] top-20 h-72 w-72 rounded-full bg-[#f8b319]/15 blur-3xl" />
          <div className="absolute right-[-8rem] top-32 h-80 w-80 rounded-full bg-[#018d5f]/20 blur-3xl" />
          <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
            <div className="relative z-10 flex flex-col justify-center">
              <div className="mb-6 inline-flex w-fit items-center gap-3 rounded-full border border-[#f8b319]/20 bg-white/70 px-4 py-2 text-sm text-[#234133] shadow-[0_10px_30px_rgba(1,141,95,0.08)]">
                <span className="inline-flex h-2 w-2 rounded-full bg-[#f8b319] shadow-[0_0_18px_rgba(248,179,25,0.9)]" />
                Solução para residências, comércios e empresas
              </div>

              <h1 className="max-w-2xl text-4xl font-semibold leading-[1.02] tracking-tight text-balance text-[#102218] sm:text-5xl lg:text-[4.5rem]">
                Pare de pagar caro na conta de energia e comece a economizar com
                a I-Luminar Energia.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-700">
                Atendemos São Luís - MA e região com projetos solares sob medida
                para residências, comércios e empresas que querem reduzir custos,
                ganhar previsibilidade e investir com segurança.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contato"
                  className="rounded-2xl bg-[#f8b319] px-6 py-4 text-center font-medium text-zinc-950 shadow-[0_18px_50px_rgba(248,179,25,0.25)] transition hover:-translate-y-0.5"
                >
                  Quero uma simulação
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-[#018d5f]/20 bg-white/80 px-6 py-4 text-center font-medium text-[#018d5f] transition hover:bg-[#018d5f]/10"
                >
                  Conversar agora
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-zinc-600">
                <span>Projeto sob medida</span>
                <span className="h-1 w-1 rounded-full bg-zinc-600" />
                <span>Homologação completa</span>
                <span className="h-1 w-1 rounded-full bg-zinc-600" />
                <span>Suporte pós-venda</span>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-3xl border border-[#018d5f]/10 bg-white/80 p-5 shadow-[0_20px_50px_rgba(16,24,40,0.06)]"
                  >
                    <p className="text-3xl font-semibold text-[#102218]">
                      {item.value}
                    </p>
                    <p className="mt-1 text-sm text-zinc-600">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10">
              <div className="absolute -left-8 top-12 hidden h-28 w-28 rounded-full border border-[#f8b319]/20 bg-[#f8b319]/10 blur-2xl lg:block" />
              <div className="rounded-[2rem] border border-white/70 bg-white/70 p-4 shadow-[0_30px_80px_rgba(16,24,40,0.12)]">
                <div className="rounded-[1.5rem] border border-[#018d5f]/10 bg-white/80 p-6">
                  <div className="rounded-[1.5rem] bg-[linear-gradient(145deg,#fff7db_0%,#fff1bf_38%,#ebfff5_100%)] p-8 text-zinc-950">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#8a5b00]">
                      Simulação ilustrativa
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold leading-tight">
                      Um projeto bem dimensionado pode transformar sua conta em
                      previsibilidade.
                    </h2>
                    <p className="mt-4 max-w-lg text-sm leading-6 text-zinc-700">
                      Os valores abaixo são apenas um exemplo comercial. A
                      economia real depende do consumo, da tarifa, da área
                      disponível e do dimensionamento do sistema.
                    </p>

                    <div className="mt-8 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
                      <div className="rounded-[1.75rem] border border-[#f8b319]/20 bg-white/70 p-5 shadow-[0_18px_40px_rgba(16,24,40,0.06)]">
                        <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full bg-[conic-gradient(#018d5f_0deg,#018d5f_288deg,#ffffff_288deg,#ffffff_360deg)] p-3">
                          <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-[#fffaf0] text-center">
                            <span className="text-4xl font-semibold text-[#018d5f]">
                              80%
                            </span>
                            <span className="mt-1 max-w-[6rem] text-xs uppercase tracking-[0.18em] text-zinc-600">
                              de economia estimada
                            </span>
                          </div>
                        </div>

                        <div className="mt-5 rounded-2xl bg-[#102218] px-4 py-4 text-white">
                          <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                            Economia mensal
                          </p>
                          <p className="mt-2 text-3xl font-semibold">
                            R$ 2.800
                          </p>
                          <p className="mt-2 text-sm text-white/70">
                            Com base em uma conta média de R$ 3.500.
                          </p>
                        </div>
                      </div>

                      <div className="grid gap-4">
                        <div className="rounded-[1.5rem] border border-[#018d5f]/12 bg-white/80 p-5 shadow-[0_14px_30px_rgba(16,24,40,0.05)]">
                          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                            Conta média mensal
                          </p>
                          <p className="mt-2 text-2xl font-semibold text-[#102218]">
                            R$ 3.500
                          </p>
                        </div>

                        <div className="rounded-[1.5rem] border border-[#018d5f]/12 bg-white/80 p-5 shadow-[0_14px_30px_rgba(16,24,40,0.05)]">
                          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                            Payback estimado
                          </p>
                          <p className="mt-2 text-2xl font-semibold text-[#102218]">
                            Cerca de 2 anos
                          </p>
                        </div>

                        <div className="rounded-[1.5rem] border border-[#018d5f]/12 bg-white/80 p-5 shadow-[0_14px_30px_rgba(16,24,40,0.05)]">
                          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                            Leitura comercial
                          </p>
                          <p className="mt-2 text-sm leading-7 text-zinc-700">
                            Uma análise técnica correta mostra o potencial de
                            economia e o retorno do investimento com muito mais
                            clareza para a decisão.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 rounded-2xl border border-[#018d5f]/12 bg-white/65 p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                        Diferencial I-Luminar Energia
                      </p>
                      <p className="mt-2 text-sm leading-6 text-zinc-700">
                        Atendimento consultivo, análise técnica e instalação com
                        foco em economia real e retorno inteligente.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="beneficios"
          className="border-t border-[#018d5f]/10 bg-white/30"
        >
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#ffd45c]">
                Benefícios
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Uma decisão financeira sólida com ganho operacional.
              </h2>
              <p className="mt-4 text-lg leading-8 text-zinc-700">
                Energia solar não é apenas sustentabilidade. É controle de custo,
                previsibilidade e independência energética.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {benefits.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.75rem] border border-[#018d5f]/10 bg-white/85 p-8 shadow-[0_20px_50px_rgba(16,24,40,0.05)]"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f8b319]/15 text-lg text-[#ffd45c]">
                    +
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-zinc-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="como-funciona">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#ffd45c]">
                  Como funciona
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Processo claro, técnico e sem improviso.
                </h2>
                <p className="mt-4 text-lg leading-8 text-zinc-700">
                  Cuidamos de toda a jornada, do diagnóstico ao
                  pós-instalação, para garantir desempenho e tranquilidade.
                </p>
              </div>

              <div className="space-y-5">
                {steps.map((item) => (
                  <div
                    key={item.step}
                    className="rounded-[1.75rem] border border-[#018d5f]/10 bg-white/85 p-6 shadow-[0_20px_50px_rgba(16,24,40,0.05)] sm:p-8"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f8b319] text-lg font-semibold text-zinc-950 shadow-lg shadow-black/20">
                        {item.step}
                      </span>
                      <div>
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <p className="mt-3 leading-7 text-zinc-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="obras"
          className="border-t border-[#018d5f]/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.4),rgba(238,246,241,0.9))]"
        >
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#ffd45c]">
                  Obras realizadas
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Ver instalações reais gera muito mais confiança na decisão.
                </h2>
              </div>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={`${project.title}-${project.location}`}
                  className="overflow-hidden rounded-[1.8rem] border border-[#018d5f]/10 bg-white/88 shadow-[0_20px_50px_rgba(16,24,40,0.06)]"
                >
                  <div className="relative h-72">
                    <Image
                      src={project.imageSrc}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#102218]/80 via-[#102218]/15 to-transparent" />
                    <div className="absolute left-5 top-5 rounded-full border border-[#f8b319]/30 bg-white/85 px-3 py-1 text-xs uppercase tracking-[0.2em] text-[#8a5b00] backdrop-blur">
                      {project.category}
                    </div>
                  </div>

                  <div className="space-y-2 p-6">
                    <p className="text-xl font-semibold text-[#102218]">
                      {project.title}
                    </p>
                    <p className="text-sm text-zinc-600">{project.location}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[#018d5f]/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.72),rgba(247,250,247,0.92))]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="rounded-[2rem] border border-[#018d5f]/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(245,251,247,0.96))] p-8 shadow-[0_20px_60px_rgba(16,24,40,0.06)] lg:p-12">
              <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#ffd45c]">
                    Por que escolher a I-Luminar Energia
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                    Quem quer economizar de verdade precisa de uma empresa que
                    entrega do projeto à ativação.
                  </h2>
                  <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-700">
                    A I-Luminar Energia une atendimento comercial ágil, projeto
                    técnico bem dimensionado e instalação profissional para você
                    investir com confiança.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-[#018d5f]/10 bg-white/98 p-5 shadow-[0_12px_30px_rgba(16,24,40,0.04)]">
                    <p className="text-sm text-zinc-500">
                      Projetos personalizados
                    </p>
                    <p className="mt-2 text-lg font-semibold">
                      Dimensionamento sob medida
                    </p>
                  </div>
                  <div className="rounded-2xl border border-[#018d5f]/10 bg-white/98 p-5 shadow-[0_12px_30px_rgba(16,24,40,0.04)]">
                    <p className="text-sm text-zinc-500">
                      Equipe especializada
                    </p>
                    <p className="mt-2 text-lg font-semibold">
                      Instalação com padrão técnico
                    </p>
                  </div>
                  <div className="rounded-2xl border border-[#018d5f]/10 bg-white/98 p-5 shadow-[0_12px_30px_rgba(16,24,40,0.04)]">
                    <p className="text-sm text-zinc-500">Suporte completo</p>
                    <p className="mt-2 text-lg font-semibold">
                      Acompanhamento até a homologação
                    </p>
                  </div>
                  <div className="rounded-2xl border border-[#018d5f]/10 bg-white/98 p-5 shadow-[0_12px_30px_rgba(16,24,40,0.04)]">
                    <p className="text-sm text-zinc-500">Visão financeira</p>
                    <p className="mt-2 text-lg font-semibold">
                      Retorno com previsibilidade
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[#018d5f]/10 bg-white/35">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#ffd45c]">
                Dúvidas frequentes
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Transparência também faz parte de um bom projeto.
              </h2>
              <p className="mt-4 text-lg leading-8 text-zinc-600">
                Antes da proposta comercial, o cliente precisa entender prazos,
                aprovações e onde, exatamente, a economia aparece.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((item) => (
                <div
                  key={item.question}
                  className="rounded-[1.6rem] border border-[#018d5f]/10 bg-white/92 p-6 shadow-[0_16px_40px_rgba(16,24,40,0.04)]"
                >
                  <h3 className="text-lg font-semibold text-[#102218]">
                    {item.question}
                  </h3>
                  <p className="mt-3 leading-7 text-zinc-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="border-t border-[#018d5f]/10 bg-white/35">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#ffd45c]">
                  Contato
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Solicite agora sua proposta e veja quanto você pode economizar.
                </h2>
                <p className="mt-4 max-w-xl text-lg leading-8 text-zinc-700">
                  Fale com a I-Luminar Energia e receba um atendimento rápido,
                  consultivo e focado em fechar a melhor solução para o seu
                  imóvel ou negócio.
                </p>
                <div className="mt-8 rounded-[1.75rem] border border-[#018d5f]/10 bg-white/92 p-6 shadow-[0_20px_50px_rgba(16,24,40,0.05)]">
                  <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                    Atendimento direto
                  </p>
                  <p className="mt-3 text-2xl font-semibold text-[#102218]">
                    (98) 99933-2000
                  </p>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex rounded-2xl border border-[#f8b319]/50 bg-[#f8b319] px-5 py-3 text-sm font-semibold text-[#3f2a00] shadow-[0_14px_30px_rgba(248,179,25,0.24)] transition hover:-translate-y-0.5 hover:bg-[#ffbf2f]"
                  >
                    Abrir conversa no WhatsApp
                  </a>
                </div>
              </div>

              <form
                className="rounded-[2rem] border border-[#018d5f]/10 bg-white/92 p-6 shadow-[0_20px_60px_rgba(16,24,40,0.06)] sm:p-8"
                onSubmit={handleSubmit}
              >
                <div className="grid gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Nome"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="rounded-2xl border border-[#018d5f]/10 bg-white px-4 py-3 text-[#102218] outline-none placeholder:text-zinc-500 focus:border-[#f8b319]"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="rounded-2xl border border-[#018d5f]/10 bg-white px-4 py-3 text-[#102218] outline-none placeholder:text-zinc-500 focus:border-[#f8b319]"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="WhatsApp"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="rounded-2xl border border-[#018d5f]/10 bg-white px-4 py-3 text-[#102218] outline-none placeholder:text-zinc-500 focus:border-[#f8b319]"
                    required
                  />
                  <textarea
                    name="message"
                    placeholder="Fale sobre seu consumo ou tipo de imóvel"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="rounded-2xl border border-[#018d5f]/10 bg-white px-4 py-3 text-[#102218] outline-none placeholder:text-zinc-500 focus:border-[#f8b319]"
                  />
                  <button
                    type="submit"
                    className="mt-2 rounded-2xl bg-[#f8b319] px-6 py-4 font-medium text-zinc-950 transition hover:scale-[1.01]"
                  >
                    Receber proposta
                  </button>
                  {isSubmitted ? (
                    <p className="rounded-2xl border border-[#018d5f]/25 bg-[#018d5f]/10 px-4 py-3 text-sm text-[#018d5f]">
                      Abrimos o WhatsApp com seus dados preenchidos para agilizar
                      o atendimento.
                    </p>
                  ) : null}
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
