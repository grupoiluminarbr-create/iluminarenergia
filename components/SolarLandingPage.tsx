"use client";

import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";

type FormField =
  | HTMLInputElement
  | HTMLTextAreaElement
  | HTMLSelectElement;

export default function SolarLandingPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    propertyType: "",
    billRange: "",
    message: "",
  });

  const whatsappHref =
    "https://wa.me/5598999332000?text=Olá%2C%20quero%20uma%20simulação%20gratuita%20de%20energia%20solar%20com%20a%20I-Luminar%20Energia.";
  const instagramHref = "https://instagram.com/iluminar_energia";

  const benefits = [
    {
      title: "Projeto sob medida",
      description:
        "Cada proposta considera consumo, perfil do imóvel e retorno esperado para sua decisão ser mais segura.",
    },
    {
      title: "Homologação completa",
      description:
        "A equipe cuida do processo técnico e documental até a ativação do sistema junto à concessionária.",
    },
    {
      title: "Suporte pós-venda",
      description:
        "Você conta com acompanhamento depois da instalação para operar com tranquilidade e previsibilidade.",
    },
  ];

  const stats = [
    { value: "Até 95%", label: "de economia na conta" },
    { value: "25+ anos", label: "de vida útil dos módulos" },
    {
      value: "Completo",
      label: "do início à homologação",
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Análise do consumo",
      description:
        "Entendemos seu perfil de gasto com energia para indicar a solução mais vantajosa para residência, comércio ou empresa.",
    },
    {
      step: "02",
      title: "Projeto e aprovação",
      description:
        "Montamos a proposta técnica, cuidamos da documentação e conduzimos a aprovação junto à concessionária.",
    },
    {
      step: "03",
      title: "Instalação e ativação",
      description:
        "Executamos a obra, realizamos os testes e acompanhamos até o sistema começar a gerar economia.",
    },
  ];

  const trustPoints = [
    {
      eyebrow: "Projeto personalizado",
      title: "Solução alinhada ao seu consumo",
    },
    {
      eyebrow: "Dimensionamento técnico",
      title: "Potência correta para economizar com previsibilidade",
    },
    {
      eyebrow: "Instalação especializada",
      title: "Execução segura com padrão profissional",
    },
    {
      eyebrow: "Suporte até a homologação",
      title: "Acompanhamento técnico até a ativação",
    },
    {
      eyebrow: "Retorno com previsibilidade",
      title: "Análise comercial clara para sua decisão",
    },
  ];

  const faqs = [
    {
      question: "Em quanto tempo o sistema começa a gerar economia?",
      answer:
        "Após a instalação, aprovação da concessionária e ativação do sistema, a economia passa a aparecer nas faturas seguintes conforme o perfil de consumo da unidade.",
    },
    {
      question: "A I-Luminar Energia cuida da homologação?",
      answer:
        "Sim. A equipe acompanha a documentação técnica e todo o processo junto à concessionária até a liberação final do sistema.",
    },
    {
      question: "Energia solar vale para residência, comércio e empresa?",
      answer:
        "Sim. O dimensionamento muda conforme consumo, área disponível e objetivo financeiro, por isso a simulação comercial ajuda a indicar o melhor cenário para cada cliente.",
    },
  ];

  const projects = [
    {
      title: "Usina Residencial",
      location: "Santo Amaro - MA",
      category: "Projeto residencial de 6,1 kWp",
      badge: "Residencial",
      imageSrc: "/obras/obra-1.png",
    },
    {
      title: "Usina Residencial",
      location: "São Luís - MA",
      category: "Projeto residencial de 4,88 kWp",
      badge: "Residencial",
      imageSrc: "/obras/obra-2.jpg",
    },
    {
      title: "Usina Comercial",
      location: "Santo Amaro - MA",
      category: "Projeto comercial de 41,40 kWp",
      badge: "Comercial",
      imageSrc: "/obras/obra-3.png",
    },
    {
      title: "Usina Comercial",
      location: "São José de Ribamar - MA",
      category: "Projeto comercial de 44,80 kWp",
      badge: "Comercial",
      imageSrc: "/obras/obra-4.png",
    },
    {
      title: "Usina Residencial",
      location: "São Luís - MA",
      category: "Projeto residencial de 16,80 kWp",
      badge: "Residencial",
      imageSrc: "/obras/obra-5.png",
    },
    {
      title: "Usina Comercial",
      location: "São José de Ribamar - MA",
      category: "Projeto comercial de 225 kWp",
      badge: "Comercial",
      imageSrc: "/obras/obra-6.png",
    },
  ];

  function handleInputChange(event: ChangeEvent<FormField>) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitted(false);

    const message = [
      "Olá! Quero receber uma simulação comercial de energia solar.",
      "",
      `Nome: ${formData.name}`,
      `WhatsApp: ${formData.phone}`,
      `Cidade: ${formData.city}`,
      `Tipo de imóvel/cliente: ${formData.propertyType}`,
      `Valor médio da conta: ${formData.billRange}`,
      `Mensagem: ${formData.message || "Não informado"}`,
    ].join("\n");

    const whatsappFormHref = `https://wa.me/5598999332000?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappFormHref, "_blank", "noopener,noreferrer");

    setFormData({
      name: "",
      phone: "",
      city: "",
      propertyType: "",
      billRange: "",
      message: "",
    });
    setIsSubmitted(true);
  }

  return (
    <div className="min-h-screen overflow-hidden bg-transparent text-[#102218]">
      <a
        id="cta-floating-whatsapp"
        data-cta="floating-whatsapp"
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 rounded-full border border-[#f8b319]/30 bg-[#f8b319] px-5 py-3 text-sm font-semibold text-zinc-950 shadow-[0_20px_60px_rgba(248,179,25,0.28)] transition hover:-translate-y-0.5"
      >
        <span className="inline-flex h-2.5 w-2.5 rounded-full bg-zinc-950" />
        Falar no WhatsApp
      </a>

      <header className="sticky top-0 z-40 border-b border-[#018d5f]/10 bg-white/78 backdrop-blur-xl">
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
            id="cta-header-simulacao"
            data-cta="header-simulacao"
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

          <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-28">
            <div className="relative z-10 flex flex-col justify-center">
              <div className="mb-6 inline-flex w-fit items-center gap-3 rounded-full border border-[#f8b319]/20 bg-white/70 px-4 py-2 text-sm text-[#234133] shadow-[0_10px_30px_rgba(1,141,95,0.08)]">
                <span className="inline-flex h-2 w-2 rounded-full bg-[#f8b319] shadow-[0_0_18px_rgba(248,179,25,0.9)]" />
                Projetos para residências, comércios e empresas
              </div>

              <h1 className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-tight text-balance text-[#102218] sm:text-5xl lg:text-[4.2rem]">
                Reduza sua conta de energia em até 95% com energia solar em São
                Luís e região
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-700">
                Solicite uma simulação gratuita e descubra quanto você pode
                economizar com um projeto solar sob medida para sua residência,
                comércio ou empresa.
              </p>

              <div className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-[#018d5f]/15 bg-[#018d5f]/8 px-4 py-2 text-sm font-medium text-[#016746]">
                <span className="inline-flex h-2 w-2 rounded-full bg-[#018d5f]" />
                Atendimento rápido para análise e proposta comercial
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  id="cta-hero-simulacao"
                  data-cta="hero-simulacao"
                  href="#contato"
                  className="rounded-2xl bg-[#f8b319] px-6 py-4 text-center font-semibold text-zinc-950 shadow-[0_18px_50px_rgba(248,179,25,0.25)] transition hover:-translate-y-0.5"
                >
                  Quero minha simulação gratuita
                </a>
                <a
                  id="cta-hero-whatsapp"
                  data-cta="hero-whatsapp"
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-[#018d5f]/20 bg-white/85 px-6 py-4 text-center font-semibold text-[#018d5f] transition hover:bg-[#018d5f]/10"
                >
                  Falar no WhatsApp
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4 text-sm font-medium text-zinc-600">
                <span>Projeto sob medida</span>
                <span className="h-1 w-1 rounded-full bg-zinc-500" />
                <span>Homologação completa</span>
                <span className="h-1 w-1 rounded-full bg-zinc-500" />
                <span>Suporte pós-venda</span>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-3xl border border-[#018d5f]/10 bg-white/82 p-5 shadow-[0_20px_50px_rgba(16,24,40,0.06)]"
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
                      Economia solar
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold leading-tight">
                      Veja como a energia solar pode transformar sua conta de luz
                      em economia mensal
                    </h2>
                    <p className="mt-4 max-w-lg text-sm leading-6 text-zinc-700">
                      Analisamos seu consumo, estimamos a economia e apresentamos
                      uma proposta técnica e financeira clara para sua decisão.
                    </p>

                    <div className="mt-8 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
                      <div className="rounded-[1.75rem] border border-[#f8b319]/20 bg-white/76 p-5 shadow-[0_18px_40px_rgba(16,24,40,0.06)]">
                        <div className="rounded-[1.6rem] bg-[#102218] px-5 py-6 text-white shadow-[0_18px_40px_rgba(16,24,40,0.2)]">
                          <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                            Economia estimada
                          </p>
                          <p className="mt-3 text-4xl font-semibold">R$ 2.800</p>
                          <p className="mt-2 text-sm leading-6 text-white/72">
                            Destaque comercial para uma conta média analisada de
                            R$ 3.500 por mês.
                          </p>
                        </div>

                        <div className="mt-5 flex items-center justify-between rounded-2xl border border-[#018d5f]/12 bg-[#f3fbf6] px-4 py-4">
                          <div>
                            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                              Redução potencial
                            </p>
                            <p className="mt-2 text-2xl font-semibold text-[#018d5f]">
                              Até 80%
                            </p>
                          </div>
                          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#018d5f]/15 bg-white text-sm font-semibold text-[#018d5f]">
                            Real
                          </div>
                        </div>
                      </div>

                      <div className="grid gap-4">
                        <div className="rounded-[1.5rem] border border-[#018d5f]/12 bg-white/85 p-5 shadow-[0_14px_30px_rgba(16,24,40,0.05)]">
                          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                            Conta média analisada
                          </p>
                          <p className="mt-2 text-2xl font-semibold text-[#102218]">
                            R$ 3.500
                          </p>
                        </div>

                        <div className="rounded-[1.5rem] border border-[#018d5f]/12 bg-white/85 p-5 shadow-[0_14px_30px_rgba(16,24,40,0.05)]">
                          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                            Payback estimado
                          </p>
                          <p className="mt-2 text-2xl font-semibold text-[#102218]">
                            Cerca de 2 anos
                          </p>
                        </div>

                        <div className="rounded-[1.5rem] border border-[#018d5f]/12 bg-white/85 p-5 shadow-[0_14px_30px_rgba(16,24,40,0.05)]">
                          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                            Próximo passo
                          </p>
                          <p className="mt-2 text-sm leading-7 text-zinc-700">
                            Receba uma simulação comercial para entender a
                            economia, a viabilidade técnica e o retorno esperado
                            no seu cenário.
                          </p>
                        </div>
                      </div>
                    </div>

                    <a
                      id="cta-economia-simulacao"
                      data-cta="economia-simulacao"
                      href="#contato"
                      className="mt-6 inline-flex rounded-2xl border border-[#f8b319]/50 bg-[#f8b319] px-5 py-3 text-sm font-semibold text-[#3f2a00] shadow-[0_14px_30px_rgba(248,179,25,0.22)] transition hover:-translate-y-0.5 hover:bg-[#ffbf2f]"
                    >
                      Receber análise comercial
                    </a>
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
                Menos peso na conta, mais previsibilidade para sua decisão de
                compra.
              </h2>
              <p className="mt-4 text-lg leading-8 text-zinc-700">
                A proposta certa ajuda você a comparar economia, retorno e
                viabilidade antes de investir.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {benefits.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.75rem] border border-[#018d5f]/10 bg-white/85 p-8 shadow-[0_20px_50px_rgba(16,24,40,0.05)]"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f8b319]/15 text-lg font-semibold text-[#8a5b00]">
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
                  Processo claro para sair da conta alta e chegar à economia.
                </h2>
                <p className="mt-4 text-lg leading-8 text-zinc-700">
                  O atendimento foi desenhado para quem veio do anúncio, quer
                  entender rápido se vale a pena e precisa de uma proposta bem
                  estruturada.
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
              <div className="max-w-3xl">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#ffd45c]">
                  Obras realizadas
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Instalações reais que comprovam nossa experiência
                </h2>
                <p className="mt-4 text-lg leading-8 text-zinc-700">
                  Projetos residenciais e comerciais executados com padrão
                  técnico, segurança e foco em desempenho.
                </p>
              </div>

              <a
                id="cta-obras-simulacao"
                data-cta="obras-simulacao"
                href="#contato"
                className="inline-flex w-fit rounded-2xl border border-[#018d5f]/14 bg-white/85 px-5 py-3 text-sm font-semibold text-[#018d5f] shadow-[0_12px_30px_rgba(16,24,40,0.05)] transition hover:-translate-y-0.5 hover:bg-[#018d5f]/10"
              >
                Pedir minha simulação
              </a>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={`${project.title}-${project.location}-${project.category}`}
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
                    <div className="absolute left-5 top-5 rounded-full border border-[#f8b319]/30 bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#8a5b00] backdrop-blur">
                      {project.badge}
                    </div>
                  </div>

                  <div className="space-y-2 p-6">
                    <p className="text-xl font-semibold text-[#102218]">
                      {project.title}
                    </p>
                    <p className="text-sm font-medium text-[#018d5f]">
                      {project.category}
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
              <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#ffd45c]">
                    Por que escolher a I-Luminar Energia
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                    Quem quer economizar com segurança precisa de execução
                    técnica e suporte de ponta a ponta
                  </h2>
                  <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-700">
                    A I-Luminar Energia une atendimento ágil, projeto bem
                    dimensionado, instalação profissional e acompanhamento
                    completo até a ativação do sistema.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {trustPoints.map((item) => (
                    <div
                      key={item.eyebrow}
                      className="rounded-2xl border border-[#018d5f]/10 bg-white/98 p-5 shadow-[0_12px_30px_rgba(16,24,40,0.04)]"
                    >
                      <p className="text-sm text-zinc-500">{item.eyebrow}</p>
                      <p className="mt-2 text-lg font-semibold">{item.title}</p>
                    </div>
                  ))}
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
                Transparência ajuda o cliente a decidir com mais confiança.
              </h2>
              <p className="mt-4 text-lg leading-8 text-zinc-600">
                Reunimos respostas diretas para as dúvidas que mais aparecem
                antes da solicitação da simulação.
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
            <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#ffd45c]">
                  Contato
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Solicite agora sua simulação gratuita e veja se já vale a pena
                  instalar energia solar
                </h2>
                <p className="mt-4 max-w-xl text-lg leading-8 text-zinc-700">
                  Fale com a equipe da I-Luminar Energia e receba um atendimento
                  consultivo, rápido e focado em economia real.
                </p>

                <div className="mt-8 rounded-[1.75rem] border border-[#018d5f]/10 bg-white/92 p-6 shadow-[0_20px_50px_rgba(16,24,40,0.05)]">
                  <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                    Atendimento direto
                  </p>
                  <p className="mt-3 text-2xl font-semibold text-[#102218]">
                    (98) 99933-2000
                  </p>
                  <div className="mt-5 flex flex-col gap-4">
                    <a
                      id="cta-contact-instagram"
                      data-cta="contact-instagram"
                      href={instagramHref}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-fit rounded-2xl border border-[#f8b319]/50 bg-[#f8b319] px-5 py-3 text-sm font-semibold text-[#3f2a00] shadow-[0_14px_30px_rgba(248,179,25,0.24)] transition hover:-translate-y-0.5 hover:bg-[#ffbf2f]"
                    >
                      Abrir Instagram
                    </a>

                    <a
                      id="cta-contact-whatsapp"
                      data-cta="contact-whatsapp"
                      href={whatsappHref}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-fit rounded-2xl border border-[#f8b319]/50 bg-[#f8b319] px-5 py-3 text-sm font-semibold text-[#3f2a00] shadow-[0_14px_30px_rgba(248,179,25,0.24)] transition hover:-translate-y-0.5 hover:bg-[#ffbf2f]"
                    >
                      Abrir conversa no WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              <form
                id="lead-form"
                data-form="lead-qualificado"
                className="rounded-[2rem] border border-[#018d5f]/10 bg-white/92 p-6 shadow-[0_20px_60px_rgba(16,24,40,0.06)] sm:p-8"
                onSubmit={handleSubmit}
              >
                <div className="grid gap-4">
                  <div className="rounded-[1.5rem] border border-[#018d5f]/10 bg-[#f7fbf8] px-5 py-4">
                    <p className="text-sm font-medium text-[#102218]">
                      Preencha os dados abaixo e receba uma simulação comercial
                      personalizada.
                    </p>
                  </div>

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
                    type="tel"
                    name="phone"
                    placeholder="WhatsApp"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="rounded-2xl border border-[#018d5f]/10 bg-white px-4 py-3 text-[#102218] outline-none placeholder:text-zinc-500 focus:border-[#f8b319]"
                    required
                  />

                  <input
                    type="text"
                    name="city"
                    placeholder="Cidade"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="rounded-2xl border border-[#018d5f]/10 bg-white px-4 py-3 text-[#102218] outline-none placeholder:text-zinc-500 focus:border-[#f8b319]"
                    required
                  />

                  <select
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleInputChange}
                    className="rounded-2xl border border-[#018d5f]/10 bg-white px-4 py-3 text-[#102218] outline-none focus:border-[#f8b319]"
                    required
                  >
                    <option value="">Tipo de imóvel/cliente</option>
                    <option value="Residência">Residência</option>
                    <option value="Comércio">Comércio</option>
                    <option value="Empresa">Empresa</option>
                    <option value="Fazenda / outro">Fazenda / outro</option>
                  </select>

                  <select
                    name="billRange"
                    value={formData.billRange}
                    onChange={handleInputChange}
                    className="rounded-2xl border border-[#018d5f]/10 bg-white px-4 py-3 text-[#102218] outline-none focus:border-[#f8b319]"
                    required
                  >
                    <option value="">Valor médio da conta de energia</option>
                    <option value="Até R$200">Até R$200</option>
                    <option value="R$200 a R$500">R$200 a R$500</option>
                    <option value="R$500 a R$1.000">R$500 a R$1.000</option>
                    <option value="Acima de R$1.000">Acima de R$1.000</option>
                  </select>

                  <textarea
                    name="message"
                    placeholder="Mensagem opcional"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="rounded-2xl border border-[#018d5f]/10 bg-white px-4 py-3 text-[#102218] outline-none placeholder:text-zinc-500 focus:border-[#f8b319]"
                  />

                  <button
                    id="cta-form-submit"
                    data-cta="form-submit"
                    type="submit"
                    className="mt-2 rounded-2xl bg-[#f8b319] px-6 py-4 font-semibold text-zinc-950 shadow-[0_18px_40px_rgba(248,179,25,0.22)] transition hover:-translate-y-0.5"
                  >
                    Receber minha simulação
                  </button>

                  {isSubmitted ? (
                    <p className="rounded-2xl border border-[#018d5f]/25 bg-[#018d5f]/10 px-4 py-3 text-sm text-[#018d5f]">
                      Abrimos o WhatsApp com seus dados preenchidos para agilizar
                      o atendimento comercial.
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
