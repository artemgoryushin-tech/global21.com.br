export const siteConfig = {
  name: "AfiliadosPro Brasil",
  domain: "https://afiliadosprobr.com",
  description:
    "Guias, rankings e análises independentes sobre programas de afiliados para brokers, forex, trading e fintech no Brasil.",
  locale: "pt_BR"
};

export const navigation = [
  { label: "Programas", href: "/programas" },
  { label: "Análises", href: "/reviews" },
  { label: "Clone Script", href: "/clone-script" },
  { label: "Guias", href: "/guias" },
  { label: "Ferramentas", href: "/ferramentas" },
  { label: "White Label", href: "/white-label/solucao-white-label-para-broker" }
];

export const positioning = {
  eyebrow: "Marketing de afiliados para trading e fintech",
  headline: "Compare programas de afiliados para brokers, forex e trading",
  subheadline:
    "Analisamos comissões, modelos CPA/RevShare, reputação, mercados, pagamentos e riscos para ajudar afiliados brasileiros a escolher ofertas melhores.",
  bebrokerValue:
    "Para afiliados que já dominam aquisição de traders, o próximo passo B2B pode ser lançar uma marca própria de corretora com plataforma white label (marca branca), operação estruturada e captação direta de receita."
};

export type Program = {
  name: string;
  slug: string;
  category: "broker" | "forex" | "trading" | "cripto" | "fintech";
  officialUrl: string;
  officialLabel: string;
  payoutModel: string;
  commission: string;
  payoutFrequency: string;
  subAffiliate: string;
  bestFor: string;
  markets: string;
  paymentMethods: string;
  verdict: string;
  pros: string[];
  cons: string[];
  affiliateTools: string[];
  trafficNotes: string[];
  complianceNotes: string[];
  facts: string[];
  sources: Array<{ label: string; url: string }>;
  lastChecked: string;
  keywords: string[];
};

export const programs: Program[] = [
  {
    name: "Pocket Option",
    slug: "pocket-option-affiliate-program",
    category: "trading",
    officialUrl: "https://affiliate.pocketoption.com/en",
    officialLabel: "Pocket Partners",
    payoutModel: "RevShare e CPA, conforme negociação",
    commission: "RevShare por nível: Regular 50%, Premium 60%, Influence 70%, Ambassador 80%; CPA personalizado por mercado e FTD",
    payoutFrequency: "Comissões conforme painel; bônus e planos especiais para parceiros ativos",
    subAffiliate: "5% das comissões geradas por sub-afiliados",
    bestFor: "Afiliados com tráfego para opções digitais e trading de curto prazo",
    markets: "Foco forte em mercados emergentes; página oficial destaca países como Nigéria, Paquistão, Índia, África do Sul, Bangladesh, Egito, Venezuela e Gana",
    paymentMethods: "Cripto, e-wallets e métodos definidos no painel",
    verdict:
      "Programa agressivo para performance, com níveis claros de RevShare e CPA sob negociação. É interessante para quem já domina tráfego de trading, mas exige cuidado com alegações e qualidade dos leads.",
    pros: ["RevShare escalável até 80%", "CPA personalizado por mercado e FTD", "App dedicado para parceiros", "Bônus como LATAM Bonus e impulso de tráfego"],
    cons: ["Termos de CPA dependem de aprovação", "Categoria sensível para anúncios pagos", "Exige validação frequente de regras por país"],
    affiliateTools: ["Painel de parceiros", "Links de indicação", "App Pocket Partners", "Bônus por FTD", "Compensação parcial de tráfego para parceiros elegíveis"],
    trafficNotes: ["Tráfego social, YouTube, Instagram e streams aparecem nos níveis Influence e Ambassador", "CPA depende de mercado e valor de primeiro depósito", "Pode fazer sentido separar campanhas por país e fonte para negociar planos melhores"],
    complianceNotes: ["Não prometer lucro", "Evitar criativos que minimizem risco", "Checar regras para anúncios em cada plataforma e jurisdição"],
    facts: ["Regular começa a partir de 3 FTDs com 50% de comissão sobre lucro", "Premium exige 50+ FTDs e paga 60%", "Influence exige 50+ FTDs de social/YouTube/Instagram/streams e paga 70%", "Ambassador exige 200+ FTDs nesses canais e paga 80%"],
    sources: [
      { label: "Pocket Partners página oficial de afiliados", url: "https://affiliate.pocketoption.com/en" }
    ],
    lastChecked: "2026-04-28",
    keywords: ["pocket option programa de afiliados", "programa de afiliados pocket option"]
  },
  {
    name: "Quotex",
    slug: "quotex-affiliate-program",
    category: "trading",
    officialUrl: "https://quotex-partner.com/",
    officialLabel: "Quotex Affiliate Center",
    payoutModel: "RevShare",
    commission: "RevShare de 50% a 80% e participação sobre volume negociado de 2% a 5%, conforme nível por depósitos",
    payoutFrequency: "Pagamentos semanais segundo a página oficial",
    subAffiliate: "O site menciona acompanhamento de sub-afiliados no painel, mas termos específicos devem ser confirmados no contrato",
    bestFor: "Publicadores e compradores de mídia focados em conversão rápida",
    markets: "Brasil, LATAM, Índia e mercados emergentes",
    paymentMethods: "Cripto e e-wallets conforme disponibilidade",
    verdict:
      "Oferta forte para afiliados que querem RevShare alto e pagamento semanal. A estrutura por níveis é simples de explicar em conteúdo comparativo e útil para compradores de mídia que medem FTD por campanha.",
    pros: ["RevShare até 80%", "participação sobre volume negociado até 5%", "Pagamentos semanais", "Painel com estatísticas detalhadas"],
    cons: ["Nicho com alta competição orgânica", "Promessas financeiras precisam ser conservadoras", "Dados promocionais da página devem ser checados antes de publicar números sensíveis"],
    affiliateTools: ["Painel de estatísticas", "Páginas de destino testadas", "Materiais de marketing", "Códigos promocionais para influenciadores", "Competições e incentivos para parceiros de maior volume"],
    trafficNotes: ["A página oficial menciona sites, fóruns, YouTube, redes sociais, arbitragem, cursos, webinars e sinais", "Níveis são baseados em depósitos: 0-14, 15-49, 50-99, 100-199, 200-399, 400-699 e 700+", "Parceiros de maior volume podem negociar ofertas personalizadas"],
    complianceNotes: ["Evitar promessa de renda fácil", "Separar análise editorial de CTA comercial", "Confirmar regras do contrato de afiliados em PDF antes de escalar tráfego pago"],
    facts: ["Nível 1 paga 50% RevShare e 2% participação sobre volume negociado", "Nível 7 exige 700+ depósitos e paga 80% RevShare e 5% participação sobre volume negociado", "A página oficial declara pagamentos semanais e suporte responsivo"],
    sources: [
      { label: "Quotex Affiliate Center", url: "https://quotex-partner.com/" },
      { label: "Quotex contrato de afiliados", url: "https://quotex-partner.com/documents/en/Affiliate_agreement_QTX.pdf" }
    ],
    lastChecked: "2026-04-28",
    keywords: ["quotex programa de afiliados", "programa de afiliados quotex"]
  },
  {
    name: "IQ Option",
    slug: "iq-option-affiliate-program",
    category: "broker",
    officialUrl: "https://affiliate.iqoption.com/en",
    officialLabel: "IQ Option Affiliate",
    payoutModel: "CPA, RevShare ou híbrido por região",
    commission: "Até 50% RevShare e CPA instantâneo para usuários ativos, conforme oferta disponível",
    payoutFrequency: "Duas vezes por mês, em até 3 dias úteis segundo a página oficial",
    subAffiliate: "Não destacado como pilar principal na página oficial; confirmar com Affstore/IQ Option antes de prometer",
    bestFor: "Afiliados que priorizam marcas com reconhecimento histórico",
    markets: "Mercados internacionais com restrições por jurisdição",
    paymentMethods: "Transferência, e-wallets e opções do programa",
    verdict:
      "Marca conhecida e boa para páginas de busca por marca, mas o afiliado precisa checar a transição para Affstore e a disponibilidade por região antes de planejar escala.",
    pros: ["Até 50% RevShare", "CPA na mesma conta de afiliado", "Universal links por localização, idioma e dispositivo", "Relatórios em tempo real"],
    cons: ["Programa migrando para Affstore", "Disponibilidade e produtos variam por país", "Histórico de restrições por jurisdição exige cuidado editorial"],
    affiliateTools: ["Universal links", "Banners e páginas de destino", "Relatórios em tempo real", "Suporte multiplataforma web/mobile"],
    trafficNotes: ["Funciona melhor para tráfego que reconhece a marca", "Universal links podem reduzir fricção em campanhas multilíngues", "Conteúdo comparativo deve citar que o programa está migrando para Affstore"],
    complianceNotes: ["Não listar como disponível no Brasil sem validação atual", "Revisar produtos e entidades legais por país", "Evitar linguagem de investimento garantido"],
    facts: ["Página oficial menciona até 50% RevShare recorrente", "Pagamentos são enviados duas vezes por mês", "IQ Option Affiliate informa migração para Affstore"],
    sources: [
      { label: "IQ Option programa de afiliados", url: "https://affiliate.iqoption.com/en" },
      { label: "IQ Option contrato de afiliados", url: "https://affiliate.iqoption.com/en/agreement" }
    ],
    lastChecked: "2026-04-28",
    keywords: ["iq option programa de afiliados", "programa de afiliados iq option"]
  },
  {
    name: "Olymp Trade / Kingfin",
    slug: "olymp-trade-affiliate-program",
    category: "trading",
    officialUrl: "https://olymptrade.com/pages/affiliate/",
    officialLabel: "Kingfin Partners",
    payoutModel: "RevShare, CPA, Indicação, Híbrido e Personalizado",
    commission: "RevShare até 80%, CPA até US$250, Indicação até 7%",
    payoutFrequency: "Pagamentos frequentes e pontuais; página menciona saque de até US$5.000 por dia",
    subAffiliate: "Modelo de indicação até 7%, conforme termos Kingfin",
    bestFor: "Bloggers, influenciadores e compradores de mídia que querem planos flexíveis",
    markets: "Mercados globais conforme disponibilidade da Olymp Trade",
    paymentMethods: "Mais de 15 métodos de pagamento segundo a página oficial",
    verdict:
      "Kingfin é interessante porque comunica vários modelos de monetização em uma única página: RevShare, CPA, indicação, híbrido e personalizado. Bom para afiliados que querem negociar conforme fonte de tráfego.",
    pros: ["Até 80% RevShare", "CPA até US$250", "bots de Telegram para rastreamento/conversão", "pagamentos diários e materiais prontos"],
    cons: ["Detalhes finos dependem do acordo", "Categoria de trading exige forte aviso de risco", "É preciso confirmar países aceitos e restrições de mídia"],
    affiliateTools: ["estatísticas em tempo real", "bots de Telegram", "materiais promocionais", "gerente dedicado", "central de treinamento"],
    trafficNotes: ["Página oficial cita blogueiros, influenciadores e compradores de mídia", "Planos híbridos e personalizados são mais adequados para parceiros experientes", "Telegram pode ser um canal relevante para comunidades LATAM"],
    complianceNotes: ["Checar regras para uso de marca", "Não usar promessa de retorno", "Atualizar dados de pagamento se o programa alterar planos"],
    facts: ["Kingfin é apresentado como programa oficial da Olymp Trade", "RevShare até 80%", "CPA até US$250", "Indicação até 7%"],
    sources: [
      { label: "Olymp Trade programa de afiliados / Kingfin", url: "https://olymptrade.com/pages/affiliate/" }
    ],
    lastChecked: "2026-04-28",
    keywords: ["olymp trade programa de afiliados", "kingfin parceiros"]
  },
  {
    name: "Exness",
    slug: "exness-affiliate-program",
    category: "forex",
    officialUrl: "https://www.exnessaffiliates.com/affiliate-program/",
    officialLabel: "Exness Affiliates",
    payoutModel: "CPA e Introducing Broker",
    commission: "CPA até US$1,850 por indicação qualificada; IB com RevShare até 40%",
    payoutFrequency: "Pagamentos diários para afiliados, segundo a página oficial",
    subAffiliate: "IB e estruturas recorrentes existem separadamente; confirmar termos por conta de parceiro",
    bestFor: "Afiliados forex com audiência mais madura",
    markets: "5 regiões principais no CPA: MENA, APAC, SSA, LATAM e CIS",
    paymentMethods: "Transferência, carteiras digitais e métodos locais",
    verdict:
      "Uma das ofertas mais claras para comparação CPA: a página oficial mostra pagamento máximo por região, pagamentos diários e material promocional robusto.",
    pros: ["CPA até US$1,850", "Pagamentos diários", "5,000+ criativos", "Rastreamento em tempo real", "Aceita blogs, canais privados e comunidades"],
    cons: ["CPA depende de região, FTD e volume de negociação", "Tráfego precisa ser qualificado", "Forex/CFDs exigem avisos de risco fortes"],
    affiliateTools: ["Links profundos", "central de materiais promocionais", "Integrações com ferramentas de rastreamento", "área pessoal do parceiro"],
    trafficNotes: ["Página oficial cita educadores financeiros, comunidades privadas, blogs, comunidades em redes sociais e influenciadores", "LATAM aparece com CPA máximo de US$960", "IB pode fazer sentido para afiliados com público trader mais ativo"],
    complianceNotes: ["CFDs são produtos de alto risco", "Evitar alegações de renda", "Separar conteúdo educacional de recomendação financeira"],
    facts: ["CPA máximo por região: MENA US$1,850, APAC US$1,760, SSA US$1,080, LATAM US$960, CIS US$680", "Exness diferencia afiliado CPA de Introducing Broker recorrente", "Página oficial menciona mais de 75 mil afiliados"],
    sources: [
      { label: "Exness programa de afiliados", url: "https://www.exnessaffiliates.com/affiliate-program/" },
      { label: "Página inicial da Exness Affiliates", url: "https://www.exnessaffiliates.com/" }
    ],
    lastChecked: "2026-04-28",
    keywords: ["exness programa de afiliados", "programa de afiliados forex"]
  },
  {
    name: "XM",
    slug: "xm-affiliate-program",
    category: "forex",
    officialUrl: "https://partners.xm.com/",
    officialLabel: "XM Partners",
    payoutModel: "CPA e RevShare",
    commission: "comissões ilimitadas e 10% extra de ganhos de sub-afiliados segundo a página oficial",
    payoutFrequency: "Pagamentos e saques instantâneos segundo a página oficial",
    subAffiliate: "10% de ganhos de sub-afiliados",
    bestFor: "Sites de educação forex e comparadores",
    markets: "190 países segundo a página oficial",
    paymentMethods: "Transferência, e-wallets e métodos do painel",
    verdict:
      "Bom programa para afiliados que trabalham com educação forex, porque a marca enfatiza conversão, retenção, bônus e copy trading como argumentos de aquisição.",
    pros: ["Comissões ilimitadas", "10% extra de sub-afiliados", "Pagamentos instantâneos", "Alcance em 190 países", "250 mil+ parceiros declarados"],
    cons: ["Taxas específicas não aparecem claramente na página pública", "Termos variam por entidade", "É preciso checar restrições por país"],
    affiliateTools: ["Materiais de marketing", "recompensas para parceiros", "estrutura de sub-afiliados", "Equipes de suporte"],
    trafficNotes: ["Boa combinação com conteúdo de educação forex e comparadores", "copy trading e contas Ultra Low podem ser ângulos de conteúdo", "Sub-afiliados podem atrair gestores de comunidades"],
    complianceNotes: ["Confirmar entidade legal, licenças e restrições por mercado", "Não tratar bônus como garantia de resultado", "Adicionar risco de CFDs e forex"],
    facts: ["Página oficial menciona mais de 250 mil parceiros", "XM destaca 20 milhões+ de clientes", "Oferece 10% extra sobre ganhos de sub-afiliados"],
    sources: [
      { label: "XM Partner Program", url: "https://partners.xm.com/" }
    ],
    lastChecked: "2026-04-28",
    keywords: ["xm programa de afiliados", "programas de afiliados forex"]
  },
  {
    name: "AvaTrade",
    slug: "avatrade-affiliate-program",
    category: "forex",
    officialUrl: "https://www.avapartner.com/",
    officialLabel: "AvaPartner",
    payoutModel: "CPA",
    commission: "CPA, RevShare, CPA dinâmico, Híbrido e Master Affiliate; valores negociados com gerente",
    payoutFrequency: "Pagamentos até o dia 15 de cada mês segundo FAQ do AvaPartner",
    subAffiliate: "10% de subcomissão para afiliados indicados, segundo FAQ",
    bestFor: "Afiliados que trabalham com tráfego educacional e comparativos",
    markets: "Global com foco em forex, CFDs e educação",
    paymentMethods: "transferência bancária, PayPal, Moneybookers/Skrill, WebMoney, Neteller, Ava Debit Card ou conta de trading, segundo FAQ",
    verdict:
      "AvaPartner é interessante para afiliados maduros porque permite negociar CPA, RevShare, CPA dinâmico e híbridos. É menos transparente em números públicos, mas forte para acordos personalizados.",
    pros: ["Modelos flexíveis", "gerente de afiliados dedicado", "cookies de rastreamento vitalícios citados no FAQ", "10% de subcomissão"],
    cons: ["Poucas taxas públicas fixas", "Condições dependem de negociação", "transferência bancária pode ter mínimo mais alto"],
    affiliateTools: ["Plataforma de rastreamento", "gerente dedicado", "planos de comissão personalizados", "Master Affiliate"],
    trafficNotes: ["Bom para afiliados que já têm volume e querem negociar", "CPA dinâmico pode alinhar pagamento ao FTD", "Master Affiliate serve para quem recruta outros publicadores"],
    complianceNotes: ["Confirmar entidade e restrições de CFDs por país", "Evitar linguagem de consultoria financeira", "Deixar claro que valores são negociáveis"],
    facts: ["AvaPartner oferece CPA, RevShare, CPA dinâmico e Master Affiliate", "FAQ menciona pagamento até o dia 15", "FAQ menciona 10% de subcomissão"],
    sources: [
      { label: "Site oficial da AvaPartner", url: "https://www.avapartner.com/" },
      { label: "Planos de comissão da AvaPartner", url: "https://www.avapartner.com/commision-plans" },
      { label: "AvaPartner FAQ", url: "https://www.avapartner.com/faq" }
    ],
    lastChecked: "2026-04-28",
    keywords: ["avatrade programa de afiliados", "broker programa de afiliados"]
  },
  {
    name: "Deriv",
    slug: "deriv-affiliate-program",
    category: "broker",
    officialUrl: "https://deriv.com/partners",
    officialLabel: "Deriv Partners",
    payoutModel: "RevShare, volume negociado, volume de CFDs e Master Partner",
    commission: "RevShare em opções até 45%; volume negociado até 1.5% em opções digitais; CFDs até US$50 por US$100 mil volume negociado",
    payoutFrequency: "CFDs com pagamentos diários; opções/indicação com pagamentos mensais",
    subAffiliate: "Master Partner paga 20% das comissões de subparceiros",
    bestFor: "Afiliados com audiência global, comunidades e desenvolvedores que usam API/apps de trading",
    markets: "190+ países segundo a página oficial",
    paymentMethods: "Saque a qualquer momento, sem mínimo destacado na página oficial",
    verdict:
      "Deriv é um dos programas mais interessantes para conteúdo avançado porque mistura CFDs, opções, API, níveis de parceria e Master Partner. Bom para afiliados que pensam em comunidade e longo prazo.",
    pros: ["Até 45% RevShare", "20% Master Partner", "Níveis Bronze, Silver, Gold e Platinum", "Pagamentos diários para CFDs", "API e apps como ângulo de conteúdo"],
    cons: ["Estrutura mais complexa de explicar", "Produtos de alto risco", "Regras de opções/CFDs variam por jurisdição"],
    affiliateTools: ["Anúncios dinâmicos", "insights de IA", "rastreamento de performance", "Eventos", "programa de níveis para parceiros"],
    trafficNotes: ["Pode funcionar para comunidades técnicas, criadores e educadores", "API permite conteúdo diferenciado para desenvolvedores", "O sistema de níveis recompensa parceiros com média de comissão crescente"],
    complianceNotes: ["CFDs e derivativos exigem risco claro", "Checar regras de diretrizes promocionais", "Não sugerir que alavancagem alta é vantagem sem explicar risco"],
    facts: ["Deriv declara 117 mil+ parceiros e US$118 milhões+ pagos desde o lançamento", "Silver adiciona 4% bônus mensal, Gold 6%, Platinum 8% e bônus trimestral extra", "Master Partner paga 20% das comissões de subparceiros"],
    sources: [
      { label: "Programa de parceiros da Deriv", url: "https://deriv.com/partners" },
      { label: "Termos de afiliados e IBs da Deriv", url: "https://deriv.com/terms-and-conditions/affiliates-introducing-brokers-ibs" }
    ],
    lastChecked: "2026-04-28",
    keywords: ["deriv programa de afiliados", "deriv parceiros"]
  },
  {
    name: "FBS",
    slug: "fbs-affiliate-program",
    category: "forex",
    officialUrl: "https://fbs.com/multi-level",
    officialLabel: "FBS Partnership",
    payoutModel: "parceria multinível, CPA e participação em receita por região",
    commission: "Multinível com 20% sobre atividade de clientes de subparceiros; ofertas CPA/participação em receita dependem da região e conta",
    payoutFrequency: "Consultar painel oficial; materiais públicos destacam parceria multinível",
    subAffiliate: "20% sobre operações de clientes de subparceiros na página multinível",
    bestFor: "Afiliados que criam rede de sub-parceiros ou comunidades forex",
    markets: "Global com restrições por entidade e jurisdição",
    paymentMethods: "Métodos definidos no painel FBS",
    verdict:
      "FBS é mais interessante como programa de rede e sub-parceria do que como simples CPA público. Vale incluir em comparativos, mas com nota para validar termos atuais no painel.",
    pros: ["Estrutura multinível", "Potencial para gestores de comunidades", "Marca conhecida em forex", "Subparceria como ângulo editorial"],
    cons: ["Página pública não deixa todos os valores de CPA claros", "CFDs têm risco elevado", "É necessário confirmar entidade e disponibilidade no Brasil"],
    affiliateTools: ["link de parceiro", "Rastreamento de subparceiros", "Materiais do painel", "Área pessoal FBS"],
    trafficNotes: ["Boa opção para quem recruta outros afiliados", "Comunidades e educação forex podem ajudar na ativação", "Não publicar CPA sem fonte atualizada do programa"],
    complianceNotes: ["Página oficial exibe aviso de risco de CFDs", "Não minimizar perdas potenciais", "Verificar termos locais antes de promover"],
    facts: ["Página multinível destaca 20% sobre operações de clientes de subparceiros", "A página oficial mostra aviso de risco: 68,53% das contas de varejo perdem dinheiro com CFDs nessa entidade", "FBS posiciona o programa como crescimento de comunidade"],
    sources: [
      { label: "FBS parceria multinível", url: "https://fbs.com/multi-level" }
    ],
    lastChecked: "2026-04-28",
    keywords: ["fbs programa de afiliados", "fbs programa de parceiros"]
  },
  {
    name: "Binance",
    slug: "binance-affiliate-program",
    category: "cripto",
    officialUrl: "https://www.binance.com/en/events/affiliate",
    officialLabel: "Binance Affiliates",
    payoutModel: "comissão sobre taxas de negociação",
    commission: "Até 50% de comissão sobre taxas de negociação, conforme elegibilidade e performance",
    payoutFrequency: "Liquidação em tempo real indicada em materiais oficiais",
    subAffiliate: "Consultar termos oficiais; foco público está em afiliados com audiência própria",
    bestFor: "criadores, comunidades cripto, publicadores e negócios com audiência financeira já estabelecida",
    markets: "Global, sujeito a restrições regulatórias e disponibilidade por país",
    paymentMethods: "Conta Binance e métodos do ecossistema",
    verdict:
      "Binance é forte para tráfego cripto por reconhecimento de marca, mas exige audiência estabelecida e revisão regulatória por país. Para Brasil, é útil como comparação fintech/cripto, não como broker forex.",
    pros: ["Marca global forte", "Até 50% de comissão", "Eventos e gerente de conta para afiliados aprovados", "Boa demanda por busca de marca"],
    cons: ["Elegibilidade exige audiência", "Comissões podem ser revistas por performance", "Regulação cripto muda por país"],
    affiliateTools: ["Painel de afiliados", "Links de campanha", "Suporte dedicado", "Eventos e materiais da marca"],
    trafficNotes: ["O guia oficial cita criadores, líderes de comunidade, plataformas de análise e negócios com base ativa de usuários", "Referral Pro ajuda a separar links por canal e rebate", "A elegibilidade e os benefícios podem ser revisados periodicamente conforme desempenho spot e futures"],
    complianceNotes: ["Incluir risco de criptoativos", "Checar disponibilidade local e KYC do público antes de estimar receita", "Os termos oficiais proíbem phishing, bulk accounts e anúncios em buscadores com referral link"],
    facts: ["O guia oficial informa que qualquer usuário Binance que atinja pelo menos Tier 1 no programa de avaliação spot e/ou futures pode se tornar elegível a benefícios de afiliado", "Indivíduos podem se cadastrar com 5.000+ seguidores; comunidades com 3.000+ membros; negócios podem exigir base de 10.000+ usuários ou 10.000+ visitas diárias em plataforma de análise", "O guia oficial diz que a elegibilidade é revisada periodicamente e que é possível ganhar até 50% de comissão"],
    sources: [
      { label: "Programa Binance Affiliates", url: "https://www.binance.com/en/events/affiliate" },
      { label: "Guia inicial da Binance para afiliados", url: "https://www.binance.com/en/support/faq/detail/cbf9ab9a11fa44a293d44607803c6c2d" }
    ],
    lastChecked: "2026-06-12",
    keywords: ["binance programa de afiliados", "programas de afiliados cripto"]
  },
  {
    name: "OKX",
    slug: "okx-affiliate-program",
    category: "cripto",
    officialUrl: "https://www.okx.com/affiliates",
    officialLabel: "OKX programa de afiliados",
    payoutModel: "comissão de negociação em USDT",
    commission: "Até 50% de comissão em USDT",
    payoutFrequency: "Rastreamento de performance em tempo real; confirmar liquidação no painel",
    subAffiliate: "gestão de sub-afiliados disponível segundo a página oficial",
    bestFor: "Afiliados cripto que querem campanhas personalizadas e rastreamento em tempo real",
    markets: "120+ países/regiões segundo a página oficial",
    paymentMethods: "USDT e métodos do ecossistema OKX",
    verdict:
      "OKX é uma boa peça para o cluster cripto/fintech: comissão alta, campanhas personalizáveis e gestão de sub-afiliados. Requer checar restrições locais antes de promover.",
    pros: ["Até 50% em USDT", "campanhas personalizadas", "gestão de sub-afiliados", "24/7 gestão de conta dedicada"],
    cons: ["Foco cripto, não broker/forex", "Regras variam por país", "É preciso validar compliance local"],
    affiliateTools: ["rastreamento de performance em tempo real", "campanhas personalizadas", "gestão de sub-afiliados", "gestão de conta dedicada"],
    trafficNotes: ["A página oficial mira influenciadores, criadores e comunidades cripto", "Campanhas personalizadas e acompanhamento em tempo real ajudam a separar ROI por canal", "A estrutura de sub-afiliados favorece operações com rede de creators ou comunidades"],
    complianceNotes: ["Adicionar risco de criptoativos", "Validar disponibilidade e termos por país/região antes de promover no Brasil", "Evitar alegações de rentabilidade e tratar exemplos da página como marketing, não garantia"],
    facts: ["A página oficial menciona até 50% de comissão em USDT", "A OKX informa 15.000+ afiliados globais e cobertura em 120+ países/regiões", "O programa destaca suporte 24/7 com Affiliate BD Manager, sub-afiliados e acompanhamento de desempenho em tempo real"],
    sources: [
      { label: "OKX programa de afiliados", url: "https://www.okx.com/affiliates" }
    ],
    lastChecked: "2026-06-12",
    keywords: ["okx programa de afiliados", "programas de afiliados cripto"]
  },
  {
    name: "KuCoin",
    slug: "kucoin-affiliate-program",
    category: "cripto",
    officialUrl: "https://www.kucoin.com/affiliate",
    officialLabel: "KuCoin Affiliate Program",
    payoutModel: "comissão sobre taxas de spot e futures",
    commission: "Até 60% de comissão sobre taxas de negociação, com comissões de segundo nível segundo a página oficial",
    payoutFrequency: "Comissões diárias segundo a página oficial",
    subAffiliate: "Sistema multi-tier com comissões de segundo nível",
    bestFor: "criadores, comunidades e sites cripto que querem monetização direta e rede de parceiros",
    markets: "Disponibilidade e termos variam por país ou região segundo a página oficial",
    paymentMethods: "Gestão pelo painel da KuCoin; confirmar moeda, saque e entidade aplicável no programa",
    verdict:
      "KuCoin é uma expansão forte para o cluster cripto porque publica elegibilidade básica, comissão diária e estrutura multi-tier. Para Brasil, o ponto principal é validar país, entidade contratante e produtos elegíveis antes de projetar receita.",
    pros: ["Até 60% de comissão", "comissões diárias", "comissão de segundo nível", "dashboard visual com gestão multi-canal"],
    cons: ["Termos variam por país ou região", "Exige validação da entidade contratante", "Audiência fria tende a converter pior em spot/futures"],
    affiliateTools: ["links de indicação", "dashboard visual", "gestão de comissão multi-canal", "links com incentivo configurável"],
    trafficNotes: ["A página oficial aceita criadores, líderes de comunidade, sites cripto e organizações", "O FAQ cita criadores com 5.000+ seguidores e comunidades com 500+ membros", "Faz mais sentido para conteúdo educativo, comunidades e sites com tráfego recorrente do que para promessa de ganho rápido"],
    complianceNotes: ["A KuCoin informa que disponibilidade e termos variam por país ou região", "Cada afiliado está associado à sua própria entidade contratante segundo a página oficial", "Evite estimar receita para Brasil sem validar spot, futures, KYC e regras locais aplicáveis"],
    facts: ["A página oficial informa até 60% de comissão sobre taxas de spot e futures", "A KuCoin destaca comissões diárias e relações permanentes com afiliados", "O programa menciona sistema multi-tier com comissões de segundo nível", "O FAQ cita criadores com 5.000+ seguidores ou comunidades com 500+ membros", "A página oficial afirma que disponibilidade e termos podem variar por país ou região"],
    sources: [
      { label: "KuCoin Affiliate Program", url: "https://www.kucoin.com/affiliate" }
    ],
    lastChecked: "2026-06-19",
    keywords: ["kucoin programa de afiliados", "kucoin affiliate program", "programas de afiliados cripto"]
  }
];

export type BrandLogoAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const brandLogos: Record<string, BrandLogoAsset> = {
  "pocket-option-affiliate-program": {
    src: "/logos/pocket-option-affiliate-program.png",
    alt: "Logo Pocket Option",
    width: 900,
    height: 600
  },
  "quotex-affiliate-program": {
    src: "/logos/quotex-affiliate-program.png",
    alt: "Logo Quotex",
    width: 180,
    height: 180
  },
  "iq-option-affiliate-program": {
    src: "/logos/iq-option-affiliate-program.png",
    alt: "Logo IQ Option",
    width: 180,
    height: 180
  },
  "olymp-trade-affiliate-program": {
    src: "/logos/olymp-trade-affiliate-program.png",
    alt: "Logo Olymp Trade",
    width: 192,
    height: 192
  },
  "exness-affiliate-program": {
    src: "/logos/exness-affiliate-program.png",
    alt: "Logo Exness",
    width: 48,
    height: 48
  },
  "xm-affiliate-program": {
    src: "/logos/xm-affiliate-program.png",
    alt: "Logo XM",
    width: 180,
    height: 180
  },
  "avatrade-affiliate-program": {
    src: "/logos/avatrade-affiliate-program.png",
    alt: "Logo AvaTrade",
    width: 48,
    height: 48
  },
  "deriv-affiliate-program": {
    src: "/logos/deriv-affiliate-program.png",
    alt: "Logo Deriv",
    width: 32,
    height: 32
  },
  "fbs-affiliate-program": {
    src: "/logos/fbs-affiliate-program.png",
    alt: "Logo FBS",
    width: 48,
    height: 48
  },
  "binance-affiliate-program": {
    src: "/logos/binance-affiliate-program.png",
    alt: "Logo Binance",
    width: 256,
    height: 256
  },
  "okx-affiliate-program": {
    src: "/logos/okx-affiliate-program.png",
    alt: "Logo OKX",
    width: 144,
    height: 144
  }
};

export type RankingPage = {
  slug: string;
  title: string;
  description: string;
  keyword: string;
  secondaryKeywords?: string[];
  category: Program["category"] | "all";
  intro: string;
  audience: string;
};

export const rankings: RankingPage[] = [
  {
    slug: "melhores-programas-afiliados-brokers",
    title: "Melhores programas de afiliados para brokers em 2026",
    description:
      "Compare programas de afiliados para brokers por comissão, reputação, modelo de pagamento, mercados e qualidade do funil.",
    keyword: "melhores programas de afiliados para brokers",
    category: "broker",
    intro:
      "Programas de afiliados para brokers podem pagar bem, mas exigem análise cuidadosa de reputação, regulação, rastreamento e retenção.",
    audience: "Afiliados, compradores de mídia e publicadores que querem monetizar tráfego financeiro."
  },
  {
    slug: "melhores-programas-afiliados-forex",
    title: "Melhores programas de afiliados forex para o Brasil",
    description:
      "Veja programas afiliados forex com CPA, RevShare e modelos híbridos para publicadores brasileiros.",
    keyword: "programas de afiliados forex",
    category: "forex",
    intro:
      "O nicho forex combina alto valor por lead com exigência de confiança, educação e compliance.",
    audience: "Sites de educação financeira, canais de trading e afiliados de performance."
  },
  {
    slug: "melhores-programas-afiliados-trading",
    title: "Melhores programas de afiliados de trading",
    description:
      "Ranking de programas de afiliados de trading com análise de comissões, mercados, materiais e riscos.",
    keyword: "programas de afiliados de trading",
    category: "trading",
    intro:
      "Programas de afiliados de trading atraem afiliados por comissões altas, mas nem toda oferta é adequada para todo público.",
    audience: "Afiliados com tráfego de trading, renda extra, investimentos e apps financeiros."
  },
  {
    slug: "programas-afiliados-cripto-fintech",
    title: "Programas de afiliados cripto e fintech",
    description:
      "Compare ofertas de afiliados em cripto, fintech, pagamentos e produtos financeiros digitais.",
    keyword: "programas de afiliados cripto fintech",
    category: "cripto",
    intro:
      "Cripto e fintech oferecem funis diferentes de brokers, geralmente com ticket menor e maior volume potencial.",
    audience: "Criadores, publicadores e comunidades de tecnologia financeira."
  },
  {
    slug: "programas-afiliados-opcoes-digitais",
    title: "Programas de afiliados para opções digitais e trading de curto prazo",
    description:
      "Compare Pocket Option, Quotex, Olymp Trade e outros programas para afiliados que trabalham com tráfego de trading de curto prazo.",
    keyword: "programas de afiliados opções digitais",
    category: "trading",
    intro:
      "Programas de opções digitais costumam oferecer RevShare alto, mas também exigem cuidado extra com compliance, qualidade do tráfego e comunicação de risco.",
    audience: "compradores de mídia, criadores e comunidades que promovem apps de trading de curto prazo."
  },
  {
    slug: "programas-afiliados-com-subafiliados",
    title: "Programas de afiliados com sub-afiliados e master affiliate",
    description:
      "Veja quais programas oferecem sub-afiliado, master partner ou receita por indicação para quem cria rede de publicadores.",
    keyword: "programas de afiliados com sub afiliados",
    category: "all",
    intro:
      "Sub-afiliado e master affiliate são interessantes para quem não quer apenas comprar tráfego, mas montar uma rede de parceiros, criadores e comunidades.",
    audience: "Afiliados experientes, gestores de comunidades e donos de redes de publicadores."
  },
  {
    slug: "broker-affiliate-programs",
    title: "Melhores programas de afiliados para brokers em mercados lusófonos",
    description:
      "Visão geral para afiliados que miram Brasil e audiências em português.",
    keyword: "programas de afiliados para brokers",
    category: "all",
    intro:
      "Programas de afiliados para brokers podem ser atrativos para afiliados que entendem aquisição de traders, compliance e qualidade de funil.",
    audience: "Afiliados internacionais que pesquisam Brasil e audiências em português."
  },
  {
    slug: "programa-de-afiliados-forex",
    title: "Programa de afiliados forex: como escolher uma oferta para promover no Brasil",
    description:
      "Guia comercial para comparar programas de afiliados forex por CPA, RevShare, geos, pagamentos, ferramentas e riscos antes de enviar tráfego.",
    keyword: "programa de afiliados forex",
    secondaryKeywords: ["forex affiliate program", "programas afiliados forex", "CPA forex afiliados"],
    category: "forex",
    intro:
      "Um programa de afiliados forex pode pagar CPA alto ou receita recorrente, mas o afiliado precisa validar regulação, regras de qualificação e qualidade do trader antes de escalar.",
    audience: "Afiliados de SEO, mídia paga, YouTube e comunidades que querem monetizar tráfego forex."
  },
  {
    slug: "programa-de-afiliados-broker",
    title: "Programa de afiliados broker: o que avaliar antes de promover uma corretora",
    description:
      "Veja como comparar broker affiliate programs, modelos de comissão, compliance, materiais, pagamentos e quando considerar uma marca própria.",
    keyword: "programa de afiliados broker",
    secondaryKeywords: ["broker affiliate program", "programa afiliado corretora", "afiliados broker"],
    category: "all",
    intro:
      "Programas de afiliados para brokers são mais complexos que ofertas digitais comuns: a comissão depende de depósito, atividade, país, produto e regras comerciais.",
    audience: "Afiliados financeiros que querem escolher entre broker, forex, trading, cripto e white label."
  },
  {
    slug: "melhores-programas-afiliados-cpa-forex",
    title: "Melhores programas de afiliados CPA forex",
    description:
      "Compare ofertas CPA em forex e brokers, entenda critérios de validação, pagamentos por região e como calcular CPA líquido.",
    keyword: "programa de afiliados CPA forex",
    secondaryKeywords: ["CPA forex", "forex CPA affiliate", "programas CPA brokers"],
    category: "forex",
    intro:
      "CPA em forex é atraente para recuperar mídia rapidamente, mas o valor anunciado só importa depois de considerar aprovação, depósito mínimo, volume de negociação e reversões.",
    audience: "Compradores de mídia e afiliados que precisam previsibilidade de caixa em campanhas forex."
  },
  {
    slug: "programas-afiliados-revshare-forex",
    title: "Programas de afiliados RevShare forex: quando vale escolher receita recorrente",
    description:
      "Entenda quando RevShare em programas forex pode superar CPA e quais métricas acompanhar antes de aceitar receita recorrente.",
    keyword: "RevShare forex afiliados",
    secondaryKeywords: ["forex RevShare", "programas afiliados revshare broker", "receita recorrente forex"],
    category: "forex",
    intro:
      "RevShare forex só é competitivo quando o broker retém traders, calcula receita de forma transparente e oferece relatórios suficientes para acompanhar coortes.",
    audience: "Afiliados com tráfego educado, comunidades e conteúdo evergreen que buscam valor de longo prazo."
  }
];

export type Guide = {
  slug: string;
  title: string;
  description: string;
  keyword: string;
  sections: string[];
};

export const guides: Guide[] = [
  {
    slug: "como-escolher-programa-afiliados-trading",
    title: "Como escolher um programa de afiliados de trading",
    description:
      "Critérios práticos para avaliar programas de afiliados de trading antes de enviar tráfego.",
    keyword: "como escolher programa de afiliados trading",
    sections: [
      "Avalie reputação, histórico de pagamentos e transparência do painel antes de olhar apenas para a comissão.",
      "Compare CPA, RevShare e híbrido de acordo com seu canal, volume e capacidade de educar o usuário.",
      "Verifique restrições de mercado, promessas proibidas, canais aceitos e políticas para tráfego pago."
    ]
  },
  {
    slug: "cpa-vs-revshare-vs-hybrid",
    title: "CPA vs RevShare vs Híbrido: qual modelo escolher?",
    description:
      "Entenda diferenças entre CPA, RevShare e modelos híbridos em marketing de afiliados financeiros.",
    keyword: "CPA vs RevShare marketing de afiliados",
    sections: [
      "CPA reduz risco de retenção para o afiliado e faz sentido quando o tráfego converte rápido.",
      "RevShare pode superar CPA no longo prazo quando a marca retém traders e o rastreamento é confiável.",
      "Híbrido equilibra caixa imediato com potencial futuro, mas exige leitura cuidadosa dos termos."
    ]
  },
  {
    slug: "como-gerar-trafego-ofertas-trading",
    title: "Como gerar tráfego para ofertas de trading",
    description:
      "Canais, funis e cuidados para promover ofertas de trading com mais qualidade.",
    keyword: "como gerar tráfego para ofertas de trading",
    sections: [
      "SEO e conteúdo educativo são mais lentos, mas criam ativos com vida útil maior.",
      "Mídia paga exige compliance rigoroso e páginas de destino que não prometem ganhos garantidos.",
      "Comunidades e criadores funcionam melhor quando educam antes de vender."
    ]
  },
  {
    slug: "compliance-marketing-afiliados-financeiros",
    title: "Compliance e riscos no marketing de afiliados financeiros",
    description:
      "Boas práticas para reduzir riscos ao promover brokers, forex, trading e produtos financeiros.",
    keyword: "compliance marketing afiliados financeiros",
    sections: [
      "Evite promessas de lucro, urgência artificial e comunicação que minimize riscos.",
      "Use avisos de risco claros e mantenha histórico de fontes, termos e datas de atualização.",
      "Revise políticas de anúncios e regras do programa antes de escalar campanhas."
    ]
  },
  {
    slug: "melhores-fontes-trafego-broker-afiliados",
    title: "Melhores fontes de tráfego para afiliados de brokers",
    description:
      "Compare SEO, PPC, YouTube, Telegram, e-mail e comunidades para afiliados de brokers.",
    keyword: "fontes de tráfego para afiliados de brokers",
    sections: [
      "SEO captura intenção ativa e é ideal para comparativos, análises e guias.",
      "YouTube e criadores funcionam bem para explicar plataformas e reduzir objeções.",
      "E-mail e comunidades aumentam retenção, mas exigem confiança e consistência editorial."
    ]
  },
  {
    slug: "affiliate-program-vs-own-broker-brand",
    title: "Programa de afiliados vs lançar sua própria marca de corretora",
    description:
      "Quando faz sentido deixar de promover ofertas de terceiros e lançar um broker white label (marca branca).",
    keyword: "programa de afiliados vs marca própria de corretora",
    sections: [
      "Afiliados vendem tráfego; donos de marca capturam mais valor do ciclo de vida do cliente.",
      "Uma solução white label (marca branca) reduz complexidade técnica, tempo de lançamento e custos iniciais.",
      "O ponto de virada costuma aparecer quando o afiliado tem canal previsível e entende retenção."
    ]
  },
  {
    slug: "metricas-essenciais-broker-afiliados",
    title: "Métricas essenciais para afiliados de brokers",
    description:
      "FTD, CPA real, EPC, CR, LTV, período de validação, chargeback e ROI: as métricas que importam antes de escalar tráfego financeiro.",
    keyword: "métricas para afiliados de brokers",
    sections: [
      "FTD não é só cadastro: programas normalmente exigem depósito, atividade de trading e validação antifraude antes de pagar comissão.",
      "EPC e ROI precisam ser calculados por fonte, campanha, criativo, país e dispositivo; média geral esconde perda em subsegmentos.",
      "RevShare deve ser analisado com horizonte de LTV, churn, retenção e confiabilidade do rastreamento."
    ]
  },
  {
    slug: "como-negociar-com-affiliate-manager",
    title: "Como negociar com gerentes de afiliados de brokers",
    description:
      "O que mostrar para conseguir CPA melhor, plano híbrido, cap maior, adiantamento ou compensação de tráfego.",
    keyword: "negociar gerente de afiliados broker",
    sections: [
      "Leve dados: FTD por mercado, taxa de ativação, origem do tráfego, histórico de compliance e exemplos de criativos.",
      "Negocie por teste controlado: cap inicial, pagamento por qualidade, período de validação claro e revisão após volume mínimo.",
      "Peça regras por escrito sobre compra de palavras-chave de marca, anúncios em redes sociais, Telegram, influenciadores, anúncios nativos, push e restrições de alegações."
    ]
  },
  {
    slug: "checklist-compliance-afiliados-trading-brasil",
    title: "Checklist de compliance para afiliados de trading no Brasil",
    description:
      "Uma lista prática para reduzir riscos em páginas, anúncios e criativos sobre brokers, forex, cripto e trading.",
    keyword: "compliance afiliados trading Brasil",
    sections: [
      "Use linguagem informativa, avisos de risco visíveis e evite promessas de lucro, renda garantida, sinais infalíveis ou urgência artificial.",
      "Mantenha prints, fontes oficiais, datas de checagem e versões de páginas de destino para auditoria interna.",
      "Separe conteúdo editorial, publicidade e links comerciais com divulgação comercial clara para o leitor."
    ]
  },
  {
    slug: "brand-bidding-programas-afiliados-brokers",
    title: "Brand bidding em programas de afiliados de brokers",
    description:
      "Por que comprar palavras-chave de marca pode gerar bloqueio de conta e como validar regras antes de rodar Google Ads.",
    keyword: "brand bidding para afiliados de brokers",
    sections: [
      "Muitos programas proíbem ou limitam anúncios em palavras-chave de marca, domínios parecidos e domínios com erros de digitação.",
      "Mesmo quando permitido, compra de palavras-chave de marca precisa de rastreamento separado para medir incrementalidade e evitar conflito com o anunciante.",
      "Antes de escalar, peça autorização por escrito e guarde a política de tráfego aceita pelo gerente de afiliados."
    ]
  },
  {
    slug: "glossario-affiliate-marketing-financeiro",
    title: "Glossário de marketing de afiliados financeiros",
    description:
      "Termos como FTD, RevShare, CPA, EPC, CPL, período de validação, chargeback, KYC, IB, master affiliate e sub-afiliado explicados.",
    keyword: "glossário marketing de afiliados financeiros",
    sections: [
      "FTD é primeiro depósito; em brokers, normalmente só vira comissão quando o usuário deposita e cumpre critérios mínimos de atividade.",
      "IB significa Introducing Broker e costuma receber comissão recorrente por volume, spread ou atividade de trading.",
      "Hold é o período de retenção antes do pagamento, usado para validar fraude, chargeback, qualidade do lead e critérios do programa."
    ]
  },
  {
    slug: "quando-trocar-cpa-por-revshare",
    title: "Quando trocar CPA por RevShare?",
    description:
      "Como decidir entre caixa imediato e potencial futuro recorrente em programas de afiliados para brokers e trading.",
    keyword: "quando trocar CPA por RevShare",
    sections: [
      "CPA é melhor quando você está testando criativos, precisa recuperar investimento em mídia rápido ou não confia ainda na retenção do broker.",
      "RevShare pode ser superior quando o público é educado, o broker retém traders e o programa tem rastreamento transparente.",
      "Híbrido pode ser o melhor caminho quando você já provou qualidade, mas ainda quer reduzir risco de caixa."
    ]
  },
  {
    slug: "seo-para-afiliados-forex",
    title: "SEO para afiliados forex: como construir tráfego orgânico com intenção comercial",
    description:
      "Estratégia de conteúdo, clusters, interlinking e páginas de comparação para afiliados forex que querem tráfego orgânico qualificado.",
    keyword: "SEO para afiliados forex",
    sections: [
      "Comece por páginas de intenção comercial: melhores programas, programa de afiliados forex, CPA forex e reviews de marcas.",
      "Construa suporte com guias sobre modelos de comissão, compliance, fontes de tráfego, FTD e negociação com affiliate manager.",
      "Use links internos para levar o leitor de educação para rankings e, depois, para a tese de lançar uma marca própria com white label."
    ]
  },
  {
    slug: "como-negociar-cpa-com-broker",
    title: "Como negociar CPA com um broker",
    description:
      "O que levar para uma negociação de CPA: qualidade de FTD, geos, fonte de tráfego, aprovação, cap, período de validação e compliance.",
    keyword: "como negociar CPA com broker",
    sections: [
      "CPA maior depende de prova de qualidade: FTD válido, trader ativo, baixo chargeback e fonte de tráfego permitida.",
      "Negocie testes com cap, critérios por escrito e revisão após volume mínimo em vez de pedir aumento sem dados.",
      "Compare CPA bruto com CPA líquido depois de reprovações, atrasos, hold e custo real de aquisição."
    ]
  },
  {
    slug: "ftd-trader-ativo-e-qualificacao",
    title: "FTD, trader ativo e qualificação: o que realmente gera comissão",
    description:
      "Entenda a diferença entre cadastro, FTD, trader qualificado, volume mínimo, validação antifraude e pagamento líquido em programas de brokers.",
    keyword: "FTD trader ativo qualificação afiliados",
    sections: [
      "Cadastro não é comissão: a maioria dos programas exige primeiro depósito e critérios adicionais de atividade.",
      "Trader ativo pode depender de volume negociado, número de operações, período de retenção e ausência de fraude.",
      "Afiliados precisam medir cada etapa separadamente para não escalar campanhas que geram leads baratos e comissão baixa."
    ]
  },
  {
    slug: "exness-vs-xm-afiliados",
    title: "Exness vs XM para afiliados: qual programa faz mais sentido?",
    description:
      "Comparativo editorial entre Exness e XM para afiliados forex: comissão, pagamentos, sub-afiliados, reputação, geos e perfil de tráfego.",
    keyword: "Exness vs XM afiliados",
    sections: [
      "Exness tende a ser mais transparente em CPA por região, enquanto XM se destaca por marca, alcance e sub-afiliados.",
      "A escolha depende do seu funil: tráfego de decisão rápida pode preferir CPA claro; educação forex pode aceitar modelos recorrentes.",
      "Antes de escalar, confirme entidade, país aceito, critérios de FTD e tabela de pagamento atualizada com cada programa."
    ]
  },
  {
    slug: "pocket-option-vs-quotex-afiliados",
    title: "Pocket Option vs Quotex para afiliados de trading",
    description:
      "Compare Pocket Option e Quotex por RevShare, CPA, níveis, tráfego permitido, riscos e adequação para afiliados brasileiros.",
    keyword: "Pocket Option vs Quotex afiliados",
    sections: [
      "Pocket Option e Quotex competem por afiliados de opções digitais, mas a estrutura de níveis, bônus e regras de tráfego precisa ser comparada com cuidado.",
      "RevShare alto não substitui análise de retenção, qualidade do usuário e risco de criativos agressivos.",
      "O melhor uso editorial é comparar as duas ofertas e apontar alternativas para afiliados que desejam uma marca própria."
    ]
  },
  {
    slug: "binance-vs-okx-afiliados",
    title: "Binance vs OKX para afiliados: qual exchange cripto faz mais sentido?",
    description:
      "Comparativo editorial entre Binance e OKX para afiliados: aprovação, comissão, sub-afiliados, suporte, restrições e encaixe para audiência brasileira.",
    keyword: "Binance vs OKX afiliados",
    sections: [
      "A primeira diferença está na entrada. A Binance publica critérios mais objetivos para criadores, comunidades e negócios, enquanto a OKX enfatiza criadores e influenciadores com espaço para campanhas e suporte mais personalizados.",
      "Na monetização, as duas marcas destacam até 50% de comissão, mas isso não torna os programas equivalentes. O afiliado precisa confirmar quais produtos contam, se a elegibilidade pode ser revista, como a receita é calculada e quais limitações existem por país ou região.",
      "Para um site brasileiro, a melhor escolha depende do funil. Binance tende a funcionar melhor quando você já tem audiência ou desempenho suficiente para operar com avaliação automatizada; OKX pode ser mais atraente quando a estratégia depende de comunidade, suporte 1:1 e expansão com sub-afiliados."
    ]
  }
];

export type WhiteLabelPage = {
  slug: string;
  title: string;
  description: string;
  keyword: string;
  sections: Array<{ title: string; body: string }>;
  faq: FaqContent[];
  relatedLinks: Array<{ label: string; href: string }>;
};

export const whiteLabelPages: WhiteLabelPage[] = [
  {
    slug: "solucao-white-label-para-broker",
    title: "Solução white label (marca branca) para broker: o que avaliar antes de lançar",
    description:
      "Veja critérios para escolher uma solução corretora white label (marca branca) e quando a marca própria pode ser uma alternativa para afiliados avançados que já compram tráfego.",
    keyword: "solução white label (marca branca) para broker",
    sections: [
      {
        title: "Produto e tecnologia",
        body: "Avalie plataforma de trading, sala web, CRM, painel operacional, mesa de negociação, KYC, antifraude, liquidez, servidores e módulo de afiliados. Para afiliados brasileiros, a pergunta prática é se o fornecedor reduz tempo de lançamento sem esconder dependências críticas como pagamentos, suporte e compliance."
      },
      {
        title: "Operação no Brasil e LATAM",
        body: "Brasil exige atenção a idioma, suporte, métodos locais, comunicação de risco e tratamento de dados. Pix e Boleto ajudam conversão, mas não substituem validação jurídica, regras de onboarding, política de chargeback, KYC e processo claro para reclamações de clientes."
      },
      {
        title: "Unit economics da marca própria",
        body: "Compare a comissão de afiliado com CAC, LTV, retenção, margem operacional e custos de suporte. Uma white label só faz sentido quando o afiliado já consegue gerar FTDs previsíveis e sabe estimar quanto valor deixaria na mesa ao promover terceiros."
      },
      {
        title: "Checklist antes de contratar",
        body: "Peça demonstração do painel, lista de integrações de pagamento, SLA de suporte, escopo de implantação, responsabilidades legais, exemplos de relatórios e critérios de saída. Também confirme o que está incluído no setup e o que vira custo adicional depois do lançamento."
      }
    ],
    faq: [
      {
        question: "White label substitui uma equipe interna completa?",
        answer:
          "Não. A solução reduz carga técnica, mas operação, marketing, suporte, compliance, pagamentos e estratégia continuam sendo responsabilidades importantes do operador."
      },
      {
        question: "Quando uma white label faz sentido para afiliados?",
        answer:
          "Quando o afiliado já gera FTDs de forma previsível, entende CAC/LTV e quer capturar mais valor com uma marca própria em vez de receber apenas CPA ou RevShare."
      }
    ],
    relatedLinks: [
      { label: "Programa vs marca própria", href: "/guias/affiliate-program-vs-own-broker-brand" },
      { label: "Métricas para afiliados", href: "/guias/metricas-essenciais-broker-afiliados" },
      { label: "Programas para brokers", href: "/programas/programa-de-afiliados-broker" }
    ]
  },
  {
    slug: "como-abrir-corretora-online",
    title: "Como abrir uma corretora online com estrutura white label (marca branca)",
    description:
      "Um guia para entender produto, tecnologia, pagamentos, compliance, aquisição e operação de uma corretora online.",
    keyword: "como abrir uma corretora online",
    sections: [
      {
        title: "Comece pelo público e pelo produto",
        body: "Antes de escolher tecnologia, defina se a corretora vai mirar forex/CFDs, opções digitais, cripto, copy trading ou outro produto financeiro. Essa decisão muda risco, comunicação, onboarding, métodos de pagamento e tipo de conteúdo necessário para adquirir clientes no Brasil."
      },
      {
        title: "Infraestrutura operacional",
        body: "Uma corretora precisa de plataforma, CRM, KYC, antifraude, pagamentos, suporte, relatórios, gestão de afiliados e processos para lidar com dúvidas e reclamações. A white label encurta o caminho técnico, mas o operador ainda precisa gerenciar qualidade do tráfego e atendimento."
      },
      {
        title: "Pagamentos locais e conversão",
        body: "Pix e Boleto podem aumentar conversão no Brasil porque reduzem fricção para depósito. Mesmo assim, o operador precisa avaliar taxas, liquidação, estornos, limites, reconciliação e como esses eventos aparecem no painel para calcular LTV e risco."
      },
      {
        title: "Lançamento controlado",
        body: "O caminho mais prudente é lançar com uma audiência limitada, medir cadastro, FTD, ativação, suporte, retenção e chargeback antes de abrir escala. Afiliados que já compram tráfego devem começar com campanhas menores e metas de qualidade, não apenas volume."
      }
    ],
    faq: [
      {
        question: "Preciso de tecnologia própria para abrir corretora online?",
        answer:
          "Não necessariamente. Uma solução white label pode fornecer a base técnica, mas decisões jurídicas, operação, suporte, pagamentos e aquisição continuam exigindo planejamento."
      },
      {
        question: "Qual é o primeiro passo antes de abrir uma corretora?",
        answer:
          "Validar público, canal de aquisição, produto, restrições legais, métodos de pagamento e unit economics. Sem aquisição previsível, a tecnologia sozinha não resolve o negócio."
      }
    ],
    relatedLinks: [
      { label: "Quanto custa lançar", href: "/white-label/quanto-custa-lancar-plataforma-trading" },
      { label: "Compliance Brasil", href: "/guias/checklist-compliance-afiliados-trading-brasil" },
      { label: "Fontes de tráfego", href: "/guias/melhores-fontes-trafego-broker-afiliados" }
    ]
  },
  {
    slug: "quanto-custa-lancar-plataforma-trading",
    title: "Quanto custa lançar uma plataforma de trading?",
    description:
      "Custos e decisões envolvidas ao lançar uma plataforma de trading própria ou com fornecedor white label (marca branca).",
    keyword: "quanto custa lançar plataforma de trading",
    sections: [
      {
        title: "Custos de setup e implantação",
        body: "O custo inicial depende do escopo: plataforma, CRM, pagamentos, design, domínio, integrações, KYC, antifraude e suporte de lançamento. Em white label, parte disso vem empacotada, mas é essencial confirmar o que está incluído no setup e o que será cobrado como customização."
      },
      {
        title: "Custos operacionais contínuos",
        body: "Além do setup, considere suporte ao cliente, processamento de pagamentos, chargebacks, compliance, conteúdo, mídia paga, ferramentas de tracking, equipe comercial e atualização de páginas. Mensalidade baixa não significa custo total baixo se aquisição e suporte forem caros."
      },
      {
        title: "Pix, Boleto e pagamentos",
        body: "Métodos locais podem melhorar depósito inicial no Brasil, mas adicionam regras de liquidação, reconciliação, antifraude e atendimento. O operador precisa saber como depósitos, saques, falhas e estornos aparecem nos relatórios para calcular margem real."
      },
      {
        title: "Como calcular o ponto de equilíbrio",
        body: "Compare CAC, taxa de FTD, retenção, receita por trader, custos de suporte e margem após pagamentos. Se o afiliado já conhece CPA líquido e LTV das campanhas, consegue estimar quando marca própria supera a comissão de terceiros."
      }
    ],
    faq: [
      {
        question: "O custo de uma plataforma de trading é só o setup?",
        answer:
          "Não. Setup é apenas uma parte. O custo real inclui operação, suporte, pagamentos, compliance, aquisição, tracking e atualização contínua."
      },
      {
        question: "Como saber se vale pagar por white label?",
        answer:
          "Compare o investimento com CAC, LTV, FTDs previsíveis e margem esperada. Se você ainda não gera tráfego qualificado, a prioridade deve ser validar aquisição antes de operar marca própria."
      }
    ],
    relatedLinks: [
      { label: "Abrir corretora online", href: "/white-label/como-abrir-corretora-online" },
      { label: "CPA vs RevShare", href: "/guias/cpa-vs-revshare-vs-hybrid" },
      { label: "Programa vs marca própria", href: "/guias/affiliate-program-vs-own-broker-brand" }
    ]
  }
];

export const seoKeywordMap = [
  {
    cluster: "Rankings comerciais",
    intent: "Comparar e escolher programas para monetizar tráfego",
    pages: rankings.map((ranking) => ranking.slug)
  },
  {
    cluster: "Análises de marcas",
    intent: "Validar termos, reputação e potencial de programas específicos",
    pages: programs.map((program) => program.slug)
  },
  {
    cluster: "Educação de afiliados",
    intent: "Aprender modelos, tráfego, compliance e operação",
    pages: guides.map((guide) => guide.slug)
  },
  {
    cluster: "White label B2B",
    intent: "Avaliar lançamento de broker próprio",
    pages: whiteLabelPages.map((page) => page.slug)
  }
];

export const contentRoadmap = [
  "Semana 1: publicar rankings principais e páginas institucionais para indexação inicial.",
  "Semana 2: publicar análises de Pocket Option, Quotex, IQ Option, Exness, XM e AvaTrade.",
  "Semana 3: publicar guias CPA/RevShare, compliance, tráfego e seleção de programas.",
  "Semana 4: publicar white label (marca branca) hub, calculadoras simples e interlinks para a página de próximo nível.",
  "Meses 2-3: expandir análises, criar comparativos marca vs marca e atualizar dados de pagamento."
];

export type ProgramDeepDive = {
  overview: string;
  commissionDeepDive: string;
  bestTrafficSources: string[];
  funnelAdvice: string[];
  negotiationAngles: string[];
  redFlags: string[];
  optimizationChecklist: string[];
};

export const programDeepDives: Record<string, ProgramDeepDive> = {
  "pocket-option-affiliate-program": {
    overview:
      "Pocket Partners é uma oferta voltada para afiliados que já entendem tráfego de trading de curto prazo. O principal atrativo é a progressão clara de RevShare por volume de FTDs, mas o afiliado precisa medir a qualidade do usuário, porque campanhas agressivas tendem a gerar leads que depositam pouco, churn alto e maior risco de reprovação em modelos CPA.",
    commissionDeepDive:
      "O RevShare funciona melhor quando o afiliado consegue educar o trader antes do cadastro e gerar atividade recorrente. Para CPA, o ponto central é negociar por mercado e por valor de FTD, separando fontes como social, search, native e comunidades para não misturar tráfego de qualidade diferente no mesmo acordo.",
    bestTrafficSources: ["YouTube Shorts e vídeos explicativos", "Telegram com educação e alertas conservadores", "SEO para análises e comparativos de marca", "influenciadores pequenos com audiência de renda extra", "anúncios nativos com página de destino educacional"],
    funnelAdvice: ["Use uma página intermediária que explique risco e funcionamento básico antes do clique para a oferta", "Separe campanhas por mercado para identificar onde o FTD vira trader ativo", "Teste criativos de produto, não criativos de promessa de lucro", "Crie remarketing para usuários que clicaram mas não depositaram"],
    negotiationAngles: ["Peça CPA personalizado quando tiver dados de FTD e primeira operação", "Negocie bônus por volume apenas depois de provar qualidade", "Mostre coortes por fonte para defender pagamento maior", "Pergunte se LATAM Bonus se aplica ao Brasil ou apenas a países específicos"],
    redFlags: ["Campanha baseada em promessa de ganho rápido", "Misturar tráfego incentivado com tráfego orgânico", "Não saber quais países aceitam a oferta", "CPA alto sem clareza sobre validação e período de validação"],
    optimizationChecklist: ["Rastrear clique, cadastro, FTD e trader ativo separadamente", "Medir EPC por fonte e país", "Salvar termos do programa antes de escalar", "Criar páginas de comparação com alternativas", "Atualizar comissões e níveis pelo menos mensalmente"]
  },
  "quotex-affiliate-program": {
    overview:
      "Quotex é forte para afiliados que gostam de estruturas simples de explicar: níveis por depósitos, RevShare crescente e participação sobre volume negociado. Para SEO, é uma marca com boa intenção de busca; para compra de mídia, o desafio é manter compliance e não sacrificar qualidade por volume.",
    commissionDeepDive:
      "A combinação RevShare + participação sobre volume negociado pode ser interessante quando o usuário opera com frequência. O afiliado deve comparar o valor real por trader com programas CPA, porque RevShare alto nem sempre vence se a retenção for baixa ou se o usuário fizer poucas operações após o primeiro depósito.",
    bestTrafficSources: ["SEO para 'Quotex programa de afiliados' e variações em português", "YouTube tutoriais com divulgação comercial forte", "Telegram e comunidades de trading iniciante", "anúncios nativos com conteúdo educativo", "tráfego de influenciadores com código promocional quando permitido"],
    funnelAdvice: ["Explique o que é RevShare e participação sobre volume negociado em uma tabela simples", "Use comparativos Quotex vs Pocket Option vs Olymp Trade para capturar usuários em decisão", "Crie páginas de destino por idioma e mercado", "Evite enviar tráfego frio direto para cadastro sem contexto"],
    negotiationAngles: ["Use volume de depósitos para negociar nível superior", "Peça confirmação sobre compensação de gastos com tráfego antes de contar isso no ROI", "Negocie materiais localizados para Brasil", "Peça regras claras para anúncios em redes sociais e Telegram"],
    redFlags: ["Publicar números promocionais sem data de checagem", "Depender só de busca por marca sem conteúdo próprio", "Ignorar o contrato de afiliados", "Tráfego de baixa intenção apenas para inflar depósitos"],
    optimizationChecklist: ["Comparar RevShare efetivo contra CPA de outros brokers", "Medir taxa de depósito por criativo", "Revisar termos de compra de palavras-chave de marca", "Registrar data de checagem dos níveis", "Testar páginas de análise em formato longo"]
  },
  "iq-option-affiliate-program": {
    overview:
      "IQ Option ainda tem valor editorial por reconhecimento de marca e histórico no nicho, mas deve ser tratado com cautela. A migração para Affstore e a disponibilidade por país tornam a checagem operacional mais importante do que simplesmente listar a comissão máxima.",
    commissionDeepDive:
      "O apelo de até 50% RevShare precisa ser analisado junto com disponibilidade de oferta, tipo de produto, país do usuário e regras atuais da plataforma. Para afiliados brasileiros, o melhor uso é como página de análise e comparação, com CTA para validar termos oficiais antes de enviar tráfego.",
    bestTrafficSources: ["SEO de marca e comparativos históricos", "Conteúdo informativo para usuários que já pesquisam IQ Option", "Análises em blogs de trading", "E-mail para audiência que pede alternativas", "Páginas que respondem se a oferta está disponível por país"],
    funnelAdvice: ["Inclua um bloco claro sobre migração para Affstore", "Não assuma disponibilidade no Brasil sem checar o painel", "Compare com programas ativos em trading e forex", "Use a marca para capturar busca, mas ofereça alternativas atualizadas"],
    negotiationAngles: ["Pergunte quais mercados e produtos estão abertos", "Peça confirmação do modelo CPA disponível", "Valide se universal links funcionam para seu público", "Solicite regras para páginas de comparação"],
    redFlags: ["Prometer acesso onde a oferta não está ativa", "Usar dados antigos de comissão", "Ignorar mudança para Affstore", "Não separar entidades/produtos por região"],
    optimizationChecklist: ["Atualizar status do programa com frequência", "Adicionar FAQ por país", "Manter alternativas visíveis", "Capturar e-mails de usuários que buscam marcas indisponíveis", "Checar contrato antes de publicar alegações"]
  },
  "olymp-trade-affiliate-program": {
    overview:
      "Kingfin, o programa da Olymp Trade, é interessante porque oferece múltiplas rotas de monetização: RevShare, CPA, indicação, híbrido e personalizado. Isso permite adaptar o acordo ao tipo de tráfego, mas também exige disciplina para não comparar modelos diferentes de forma superficial.",
    commissionDeepDive:
      "RevShare tende a ser melhor quando há retenção e educação; CPA ajuda em tráfego pago com ciclo curto; Híbrido pode equilibrar risco. A indicação até 7% pode ser útil para quem cria rede, mas os critérios precisam ser confirmados antes de projetar receita recorrente.",
    bestTrafficSources: ["Blogs e análises de trading", "influenciadores com audiência fiel", "compra de mídia com páginas intermediárias", "bots de Telegram e comunidades", "Conteúdo comparativo em português"],
    funnelAdvice: ["Direcione iniciantes para guias antes do cadastro", "Use comparativos de modelos RevShare vs CPA", "Crie página separada para Kingfin/Olymp Trade", "Teste Telegram como canal de nutrição, não só aquisição"],
    negotiationAngles: ["Peça híbrido se tiver tráfego pago com retenção razoável", "Negocie um plano personalizado com histórico de qualidade", "Pergunte limites de saque e métodos por país", "Solicite materiais localizados para Brasil"],
    redFlags: ["Escolher CPA sem entender LTV", "Usar Telegram com promessa agressiva", "Não confirmar limites de pagamento por método", "Ignorar regras de uso de marca"],
    optimizationChecklist: ["Medir desempenho por plano de comissão", "Criar divulgação comercial editorial clara", "Comparar Kingfin com Quotex e Pocket Option", "Registrar pagamento e método usado", "Revisar materiais promocionais aprovados"]
  },
  "exness-affiliate-program": {
    overview:
      "Exness é uma das opções mais fortes para afiliados forex porque a proposta pública de CPA é clara por região e a marca comunica estrutura de rastreamento, criativos e pagamentos diários. É mais adequada para tráfego financeiro educado do que para campanhas genéricas de renda extra.",
    commissionDeepDive:
      "O CPA máximo varia por região e depende de critérios como depósito e volume de negociação. Para LATAM, o teto divulgado é menor que MENA/APAC, então o afiliado precisa calcular ROI local e comparar com IB/RevShare quando a audiência gera volume de trading consistente.",
    bestTrafficSources: ["SEO forex e comparadores de brokers", "YouTube educativo sobre CFDs e risco", "Comunidades privadas de traders", "newsletter de análise de mercado", "Páginas de ferramentas como calculadoras de spread e lotes"],
    funnelAdvice: ["Eduque sobre risco antes do CTA", "Crie comparativos por região e tipo de conta", "Use conteúdo de alta intenção como 'melhores programas de afiliados de brokers forex'", "Separe tráfego iniciante de trader avançado"],
    negotiationAngles: ["Mostre qualidade por FTD e volume de negociação", "Pergunte se IB é melhor para seu público", "Negocie materiais em português", "Peça detalhes do período de validação e critérios de trader qualificado"],
    redFlags: ["Comprar tráfego de curiosidade sem educação", "Prometer lucro com CFDs", "Não entender critérios por região", "Comparar CPA bruto sem considerar aprovação"],
    optimizationChecklist: ["Medir FTD qualificado, não só cadastro", "Calcular CPA líquido após reprovações", "Testar páginas educativas com conteúdo longo", "Comparar afiliado vs IB", "Atualizar tabela regional de CPA"]
  },
  "xm-affiliate-program": {
    overview:
      "XM é uma boa opção para afiliados de conteúdo porque combina marca conhecida, alcance internacional, sub-afiliado e argumentos de produto como copy trading, contas de baixo custo e bônus. A falta de números públicos detalhados exige checagem direta com o programa.",
    commissionDeepDive:
      "O termo 'comissões ilimitadas' é comercialmente atraente, mas o afiliado deve traduzir isso em métricas reais: comissão por lote, RevShare efetivo, pagamento por país e regras para sub-afiliados. Sem esses dados, a comparação com Exness ou AvaPartner fica incompleta.",
    bestTrafficSources: ["Educação forex evergreen", "Análises de contas e condições de trading", "Comparativos de copy trading", "Comunidades de traders iniciantes", "SEO para programas com sub-afiliado"],
    funnelAdvice: ["Explique a diferença entre afiliado e IB", "Use tabelas para produtos XM que ajudam conversão", "Crie páginas para 'XM parceiros' e 'XM programa de afiliados'", "Adicione bloco sobre sub-afiliado para gestores de comunidade"],
    negotiationAngles: ["Peça tabela de comissão por produto", "Confirme países elegíveis e entidades", "Negocie suporte para conteúdo em português", "Pergunte como funciona o extra de 10% em sub-afiliados"],
    redFlags: ["Assumir que 'ilimitado' significa pagamento alto em todos os casos", "Ignorar restrições de entidades", "Promover bônus sem explicar termos", "Não diferenciar trader varejo e profissional"],
    optimizationChecklist: ["Solicitar tabela de comissões atualizada", "Medir conversão por tipo de conteúdo", "Criar comparativos XM vs Exness", "Separar tráfego de educação e comparação", "Atualizar alegações de alcance e parceiros"]
  },
  "avatrade-affiliate-program": {
    overview:
      "AvaPartner é mais adequado para afiliados que querem negociar e não apenas aceitar uma página pública. O programa oferece modelos flexíveis, mas as condições reais dependem do gerente, da fonte de tráfego e do mercado.",
    commissionDeepDive:
      "CPA, CPA dinâmico, RevShare e Híbrido permitem montar um acordo por estágio de maturidade. Para afiliados com tráfego pago, CPA dinâmico pode alinhar pagamento ao FTD; para conteúdo educativo, RevShare ou Híbrido podem capturar valor recorrente.",
    bestTrafficSources: ["Análises forex e CFD", "Conteúdo para traders que buscam marcas reguladas", "Comparativos de comissão CPA vs RevShare", "listas de e-mail financeiras", "Sites de educação com funil longo"],
    funnelAdvice: ["Posicione como opção para tráfego mais qualificado", "Use formulários para segmentar iniciantes e traders ativos", "Crie conteúdo explicando modelos negociáveis", "Compare pagamento público vs acordo personalizado"],
    negotiationAngles: ["Leve histórico de FTD e países", "Pergunte mínimo para transferência bancária", "Negocie híbrido se houver retenção", "Peça gerente dedicado e criativos localizados"],
    redFlags: ["Publicar taxas fixas sem contrato", "Não considerar mínimo de pagamento por método", "Assumir lifetime cookies sem confirmar termos atuais", "Misturar tráfego regulado e não regulado"],
    optimizationChecklist: ["Documentar acordo recebido", "Testar CPA e Híbrido em paralelo", "Medir qualidade por fonte", "Criar página sobre CPA dinâmico", "Revisar FAQ antes de atualizar conteúdo"]
  },
  "deriv-affiliate-program": {
    overview:
      "Deriv é um programa mais sofisticado para afiliados que querem monetizar múltiplos produtos: opções, CFDs, API e master partner. É forte para comunidades e desenvolvedores, mas exige cuidado para explicar bem a estrutura de comissões.",
    commissionDeepDive:
      "O afiliado deve separar opções e CFDs porque pagamento, frequência e métrica de cálculo são diferentes. A oportunidade de Master Partner adiciona uma camada de negócio de rede, mas só faz sentido para quem consegue recrutar parceiros ativos.",
    bestTrafficSources: ["Comunidades técnicas e bots de trading", "Conteúdo sobre Deriv API", "SEO para programas de parceiros para CFDs e opções", "YouTube educativo", "Redes de sub-afiliados"],
    funnelAdvice: ["Crie segmentação por produto: CFDs, opções, API", "Explique os níveis Bronze/Silver/Gold/Platinum", "Use conteúdo técnico para diferenciar de brokers genéricos", "Mostre riscos de alavancagem em blocos visíveis"],
    negotiationAngles: ["Pergunte qual produto gera melhor pagamento por mercado", "Peça suporte para níveis de parceria", "Negocie materiais para comunidades", "Valide Master Partner antes de recrutar subparceiros"],
    redFlags: ["Misturar todos os produtos em uma métrica única", "Promover alta alavancagem sem risco", "Recrutar subparceiros sem processo", "Não entender pagamento diário vs mensal"],
    optimizationChecklist: ["Rastrear receita por produto", "Criar página de destino para desenvolvedores/API", "Separar RevShare e volume negociado", "Medir qualidade dos subparceiros", "Atualizar níveis e bônus trimestralmente"]
  },
  "fbs-affiliate-program": {
    overview:
      "FBS deve ser apresentado como uma oportunidade de parceria e rede, não apenas como mais um CPA. O programa multinível é o diferencial editorial, mas valores específicos de CPA precisam ser confirmados no painel ou com gerente.",
    commissionDeepDive:
      "A lógica multinível é útil para afiliados com comunidade, cursos, grupos ou rede de publicadores. Em vez de depender apenas de traders diretos, o afiliado pode ganhar sobre atividade de clientes de subparceiros, desde que as regras estejam claras.",
    bestTrafficSources: ["Comunidades forex", "Cursos e mentorias com divulgação comercial", "Redes de afiliados menores", "Conteúdo sobre parceria multinível", "SEO para FBS programa de parceiros"],
    funnelAdvice: ["Explique subparceiro com exemplos simples", "Não publique CPA sem fonte atualizada", "Construa funil para recrutar parceiros, não só traders", "Adicione aviso de risco de CFDs"],
    negotiationAngles: ["Peça plano oficial para Brasil", "Confirme comissão por subparceiro", "Pergunte métodos de pagamento", "Solicite materiais de onboarding para rede"],
    redFlags: ["Tratar multinível como renda passiva garantida", "Ignorar aviso de risco de CFDs", "Não validar disponibilidade regional", "Usar alegações de ganhos de parceiros sem fonte"],
    optimizationChecklist: ["Separar leads de trader e leads de parceiro", "Medir atividade de subparceiros", "Criar onboarding por e-mail", "Atualizar aviso de risco", "Confirmar pagamento antes de escalar"]
  },
  "binance-affiliate-program": {
    overview:
      "Binance é relevante para o cluster cripto/fintech porque tem forte reconhecimento de marca e comissão sobre taxas de negociação. Para afiliados brasileiros, o maior cuidado é elegibilidade, regulação e adequação do conteúdo ao perfil cripto.",
    commissionDeepDive:
      "Até 50% de comissão pode parecer alto, mas a aprovação normalmente exige audiência estabelecida e a performance pode ser revisada. O afiliado deve calcular receita por trader ativo, não por cadastro, porque volume de taxas é o motor do pagamento.",
    bestTrafficSources: ["YouTube e criadores cripto", "Comunidades de Telegram/Discord", "SEO para comparação de exchanges", "newsletters de mercado cripto", "Ferramentas e tutoriais de trading"],
    funnelAdvice: ["Eduque sobre risco de criptoativos", "Direcione iniciantes para conteúdo básico antes da exchange", "Crie comparativos Binance vs OKX vs Bybit", "Use eventos e campanhas oficiais quando disponíveis"],
    negotiationAngles: ["Mostre tamanho e engajamento da comunidade", "Peça regras de conteúdo local", "Valide taxa por produto: spot, futuros e margem", "Pergunte critérios de revisão trimestral"],
    redFlags: ["Prometer retorno com cripto", "Ignorar restrições locais", "Assumir aprovação sem audiência", "Misturar indicação comum com programa de afiliados"],
    optimizationChecklist: ["Medir trader ativo e volume", "Separar spot e futuros", "Atualizar requisitos de elegibilidade", "Usar avisos de risco visíveis", "Criar conteúdo de segurança e custódia"]
  },
  "okx-affiliate-program": {
    overview:
      "OKX é uma alternativa cripto interessante por comissão em USDT, campanhas personalizadas e gestão de sub-afiliados. Funciona melhor para afiliados que já têm audiência de trading cripto e querem segmentar campanhas por produto.",
    commissionDeepDive:
      "A comissão de até 50% em USDT deve ser comparada com volume real e retenção. campanhas personalizadas ajudam a criar links por criador, canal ou comunidade, facilitando negociação e otimização.",
    bestTrafficSources: ["Comunidades cripto", "Comparativos de exchanges", "Conteúdo sobre ferramentas de trading", "influenciadores com audiência avançada", "Campanhas por sub-afiliado"],
    funnelAdvice: ["Crie campanhas por canal para medir performance", "Explique risco de produtos avançados", "Compare OKX com Binance e Bybit", "Use conteúdo de produto para traders mais maduros"],
    negotiationAngles: ["Peça campanhas personalizadas por fonte", "Valide gestão de sub-afiliados", "Negocie suporte para criadores", "Confirme países e produtos permitidos"],
    redFlags: ["Tráfego iniciante direto para produtos avançados", "Falta de aviso de risco cripto", "Não validar restrições locais", "Medir só cadastro sem volume de negociação"],
    optimizationChecklist: ["Rastrear volume por campanha", "Separar spot/derivativos", "Atualizar disponibilidade por país", "Criar página de destino por nível de experiência", "Revisar termos de sub-afiliado"]
  },
  "kucoin-affiliate-program": {
    overview:
      "KuCoin é útil para o cluster cripto porque combina comissão pública mais alta, pagamentos diários e estrutura multi-tier. O melhor encaixe é para creators, comunidades e sites que conseguem educar o usuário antes do cadastro e depois medir atividade real em spot e futures.",
    commissionDeepDive:
      "O teto de até 60% só faz sentido quando o afiliado acompanha taxa negociada, trader ativo e retenção. A presença de comissão de segundo nível abre espaço para operações com rede, mas exige governança sobre fontes de tráfego e mensagens usadas por parceiros.",
    bestTrafficSources: ["YouTube e creators cripto", "comunidades em Telegram e Discord", "SEO para reviews e comparativos de exchanges", "sites de ferramentas cripto", "newsletters educativas sobre mercado"],
    funnelAdvice: ["Explique risco e diferença entre spot e futures antes do clique", "Separe links por canal e por tipo de audiência", "Use páginas comparativas com Binance e OKX para capturar decisão comercial", "Meça cadastro, KYC, primeiro trade e volume negociado em vez de olhar só cliques"],
    negotiationAngles: ["Mostre tamanho real da comunidade e engajamento", "Peça confirmação sobre país, entidade contratante e produto elegível", "Negocie apoio para campanhas e incentivos personalizados", "Confirme como a comissão de segundo nível aparece no painel"],
    redFlags: ["Projetar receita para Brasil sem validar país ou entidade", "Mandar iniciantes direto para futures sem camada educacional", "Assumir que comissão de segundo nível dispensa auditoria da rede", "Usar promessa de lucro ou bônus como argumento principal"],
    optimizationChecklist: ["Rastrear spot e futures separadamente", "Salvar a data de checagem dos termos", "Criar UTMs por creator, comunidade e página", "Medir receita por trader ativo e não só por cadastro", "Revalidar disponibilidade por país antes de ampliar escala"]
  }
};

export type GuideDeepDive = {
  intro: string;
  checklist: string[];
  mistakes: string[];
  metrics: string[];
  actionPlan: string[];
};

export const guideDeepDives: Record<string, GuideDeepDive> = {
  "como-escolher-programa-afiliados-trading": {
    intro:
      "Escolher um programa de afiliados de trading não é só comparar a maior comissão. O afiliado precisa entender qualidade do broker, regras de tráfego, aprovação de leads, retenção, métodos de pagamento e risco de ter campanhas bloqueadas por promessas agressivas.",
    checklist: ["Existe página oficial com termos claros?", "O programa aceita seu mercado principal?", "O pagamento depende de FTD, volume ou lucro?", "Há regras explícitas para anúncios pagos e compra de palavras-chave de marca?", "O painel mostra eventos suficientes para otimização?"],
    mistakes: ["Escolher apenas pelo maior RevShare", "Não pedir regras por escrito ao gerente", "Ignorar período de validação, chargeback e validação antifraude", "Mandar tráfego frio direto para oferta financeira"],
    metrics: ["taxa de FTD", "taxa de traders qualificados", "EPC por canal", "taxa de aprovação", "Tempo médio até pagamento"],
    actionPlan: ["Monte uma lista restrita de 3 programas", "Peça termos oficiais e exemplos de pagamento", "Teste com orçamento pequeno por mercado", "Compare CPA líquido e RevShare projetado", "Escale só após validar qualidade"]
  },
  "cpa-vs-revshare-vs-hybrid": {
    intro:
      "CPA, RevShare e Híbrido resolvem problemas diferentes. CPA compra previsibilidade, RevShare compra potencial futuro e Híbrido tenta equilibrar caixa com participação futura. A melhor escolha depende de fluxo de caixa, retenção e confiança no rastreamento.",
    checklist: ["Você precisa recuperar investimento em mídia rápido?", "O broker retém usuários por meses?", "O rastreamento mostra atividade pós-FTD?", "Há histórico de pagamento confiável?", "O programa aceita renegociação após volume?"],
    mistakes: ["Comparar CPA bruto com RevShare sem horizonte de LTV", "Aceitar RevShare sem dados de retenção", "Usar Híbrido sem entender a parte fixa e variável", "Não separar resultados por fonte de tráfego"],
    metrics: ["CPA líquido", "RevShare por coorte", "prazo de retorno", "LTV por trader", "Taxa de chargeback/reversão"],
    actionPlan: ["Comece com CPA em testes pagos", "Colete dados de retenção", "Simule RevShare em 30/60/90 dias", "Negocie Híbrido se qualidade for comprovada", "Revise modelo por mercado"]
  },
  "como-gerar-trafego-ofertas-trading": {
    intro:
      "Tráfego para ofertas de trading precisa combinar intenção, educação e compliance. Os canais mais rápidos nem sempre geram os melhores traders, e os canais mais lentos, como SEO e YouTube, podem criar ativos com vida útil maior.",
    checklist: ["A página de destino explica risco?", "O criativo evita promessa de lucro?", "O canal é permitido pelo programa?", "Você consegue medir FTD por fonte?", "Existe conteúdo de nutrição antes do cadastro?"],
    mistakes: ["Usar criativos agressivos para aumentar CTR", "Não diferenciar iniciante de trader ativo", "Ignorar políticas de Google/Meta/TikTok", "Não criar remarketing educativo"],
    metrics: ["CTR", "Taxa de conversão da página", "custo por FTD", "taxa de ativação de traders", "EPC por criativo"],
    actionPlan: ["Escolha 2 canais principais", "Crie páginas intermediárias educativas", "Teste 5 ângulos de criativo", "Corte campanhas por CPA líquido", "Documente regras de compliance"]
  },
  "compliance-marketing-afiliados-financeiros": {
    intro:
      "Compliance é vantagem competitiva em marketing de afiliados financeiros. Afiliados que não controlam alegações, fontes e divulgações comerciais podem perder contas de anúncio, serem removidos do programa ou criar risco legal para si e para o anunciante.",
    checklist: ["Há divulgação comercial visível?", "A página menciona risco de perda?", "Alegações sobre comissão têm fonte e data?", "O anúncio evita urgência artificial?", "As regras do programa foram salvas?"],
    mistakes: ["Prometer renda garantida", "Usar prints de lucro sem contexto", "Ocultar relação comercial", "Copiar alegações de terceiros sem fonte"],
    metrics: ["Taxa de reprovação de anúncios", "Tempo de aprovação", "Incidentes de compliance", "Reversões por qualidade", "Taxa de bloqueio por plataforma"],
    actionPlan: ["Crie uma checklist interna", "Revise criativos antes de subir", "Salve versões aprovadas", "Use avisos de risco padronizados", "Audite páginas mensalmente"]
  },
  "melhores-fontes-trafego-broker-afiliados": {
    intro:
      "Não existe melhor fonte universal. SEO captura intenção ativa, YouTube constrói confiança, comunidades aumentam retenção e mídia paga dá velocidade. O mix certo depende de orçamento, prazo e maturidade do afiliado.",
    checklist: ["Você precisa de escala rápida ou ativo longo?", "Seu público entende trading?", "O canal permite anúncios financeiros?", "Você consegue criar conteúdo consistente?", "O pagamento suporta o custo de aquisição?"],
    mistakes: ["Copiar fonte de outro afiliado sem entender mercado", "Ignorar retenção", "Não medir por dispositivo", "Escalar antes de validar compliance"],
    metrics: ["EPC por fonte", "taxa de FTD", "Retenção por coorte", "CAC por trader qualificado", "Tempo até ponto de equilíbrio"],
    actionPlan: ["Escolha um canal primário e um secundário", "Crie rastreamento por fonte", "Publique conteúdo de suporte", "Negocie pagamento após prova", "Realoque orçamento por coorte"]
  },
  "affiliate-program-vs-own-broker-brand": {
    intro:
      "O afiliado vende atenção e tráfego; o dono de broker captura mais valor do cliente. A transição para marca própria faz sentido quando aquisição é previsível, o afiliado entende retenção e existe capacidade operacional ou parceiro white label (marca branca).",
    checklist: ["Você gera FTDs de forma previsível?", "Conhece seu CAC e LTV?", "Tem suporte/compliance ou fornecedor?", "Consegue operar pagamentos e KYC?", "Seu público confia em uma marca sua?"],
    mistakes: ["Lançar marca sem canal próprio", "Subestimar suporte e pagamentos", "Ignorar jurídico", "Trocar CPA por operação sem calcular risco"],
    metrics: ["CAC", "LTV", "Prazo de retorno", "Retenção de lucro", "Taxa de reativação"],
    actionPlan: ["Compare receita como afiliado vs marca", "Mapeie custos operacionais", "Fale com fornecedores white label (marca branca)", "Valide demanda com página de destino", "Comece com lançamento controlado"]
  },
  "metricas-essenciais-broker-afiliados": {
    intro:
      "Afiliados de broker que olham apenas para cliques e cadastros escalam no escuro. O dinheiro aparece depois do FTD qualificado, da atividade de trading e da aprovação do programa.",
    checklist: ["Eventos estão separados?", "O rastreamento identifica mercado e fonte?", "Você sabe o período de validação?", "O programa informa reprovações?", "Há coorte por data de cadastro?"],
    mistakes: ["Otimizar para cadastro barato", "Ignorar trader ativo", "Misturar todos os países", "Não calcular pagamento líquido"],
    metrics: ["clique para cadastro", "cadastro para FTD", "FTD para qualificado", "EPC", "receita por trader ativo"],
    actionPlan: ["Configure UTMs", "Crie painel simples", "Analise coortes semanalmente", "Corte fontes com baixa qualificação", "Negocie com dados"]
  },
  "como-negociar-com-affiliate-manager": {
    intro:
      "Gerentes de afiliados respondem melhor a dados do que a promessas. Um afiliado que mostra origem do tráfego, qualidade, compliance e histórico de volume tem mais chance de conseguir pagamento, cap e materiais melhores.",
    checklist: ["Você tem prints ou export do painel?", "Sabe FTD por mercado?", "Consegue provar fonte de tráfego?", "Tem histórico sem fraude?", "Sabe o que quer negociar?"],
    mistakes: ["Pedir pagamento maior sem dados", "Esconder fonte de tráfego", "Não perguntar regras de compliance", "Aceitar termos verbais sem confirmação"],
    metrics: ["FTD volume", "taxa de aprovação", "taxa de chargeback", "atividade do trader", "ROI por mercado"],
    actionPlan: ["Prepare um resumo de uma página", "Peça teste com cap limitado", "Defina condição de revisão", "Confirme regras por e-mail", "Reabra negociação após volume"]
  },
  "checklist-compliance-afiliados-trading-brasil": {
    intro:
      "No Brasil, conteúdo financeiro e de trading precisa ser especialmente cuidadoso. Mesmo quando a oferta é internacional, o afiliado deve evitar comunicação enganosa, promessa de resultado e falta de transparência comercial.",
    checklist: ["Divulgação comercial", "Aviso de risco", "Fonte oficial para comissões", "Sem promessa de lucro", "Sem urgência artificial", "Data de atualização"],
    mistakes: ["Usar 'ganhe dinheiro fácil'", "Ocultar riscos de perda", "Usar depoimentos sem contexto", "Copiar criativos de concorrentes"],
    metrics: ["Reprovação de anúncio", "Reclamações", "Reversões", "Tempo de permanência", "Taxa de conversão pós-aviso de risco"],
    actionPlan: ["Padronize avisos de risco", "Revise todas as páginas comerciais", "Crie arquivo de fontes", "Treine quem cria conteúdo", "Atualize mensalmente"]
  },
  "brand-bidding-programas-afiliados-brokers": {
    intro:
      "Brand bidding pode parecer fácil porque captura intenção quente, mas muitos programas proíbem compra de palavras-chave de marca, domínios parecidos e domínios com erros de digitação. Um erro aqui pode custar a conta inteira.",
    checklist: ["A política permite compra de palavras-chave de marca?", "Há autorização por escrito?", "Você usa palavras-chave negativas?", "A página de destino deixa claro quem é o anunciante?", "O rastreamento separa brand e termos sem marca?"],
    mistakes: ["Comprar marca sem autorização", "Usar domínio parecido", "Criar anúncio que parece oficial", "Misturar campanhas de marca com campanhas genéricas"],
    metrics: ["participação nas impressões", "CPC de marca", "FTD incremental", "taxa de aprovação", "Conflitos reportados"],
    actionPlan: ["Peça política oficial", "Comece com termos sem marca", "Use rastreamento separado", "Evite domínios confusos", "Pause se houver reclamação"]
  },
  "glossario-affiliate-marketing-financeiro": {
    intro:
      "O vocabulário de marketing de afiliados financeiros mistura termos de mídia, produto, risco e operação. Entender os termos evita negociação ruim e leitura errada de painel.",
    checklist: ["Você sabe o que conta como FTD?", "Entende RevShare bruto vs líquido?", "Sabe a diferença entre afiliado e IB?", "Conhece período de validação e chargeback?", "Sabe o que é EPC?"],
    mistakes: ["Confundir cadastro com cliente qualificado", "Achar que RevShare é sempre vitalício", "Ignorar KYC", "Não perguntar como o lucro é calculado"],
    metrics: ["FTD", "CPA", "RevShare", "EPC", "LTV", "CR", "Hold", "Chargeback"],
    actionPlan: ["Crie glossário interno", "Use os termos em relatórios", "Confirme definições com gerente", "Inclua exemplos nas páginas", "Atualize conforme programas mudam"]
  },
  "quando-trocar-cpa-por-revshare": {
    intro:
      "Trocar CPA por RevShare é uma decisão de risco. O afiliado abre mão de caixa imediato em troca de potencial futuro, então precisa confiar na retenção, no rastreamento e na estabilidade do programa.",
    checklist: ["Você tem dados de retenção?", "O broker paga em dia?", "O público continua operando?", "Seu fluxo de caixa suporta espera?", "O contrato explica cálculo de RevShare?"],
    mistakes: ["Trocar cedo demais", "Não simular cenários ruins", "Ignorar churn", "Aceitar RevShare sem acesso a dados"],
    metrics: ["LTV 30/60/90", "Prazo de retorno", "receita por trader", "Churn", "Atraso no pagamento"],
    actionPlan: ["Teste CPA primeiro", "Peça relatório de coortes", "Simule RevShare conservador", "Negocie Híbrido", "Revise após 60 dias"]
  },
  "seo-para-afiliados-forex": {
    intro:
      "SEO para afiliados forex precisa equilibrar intenção comercial e confiança. Páginas como melhores programas, comparativos de marcas e guias de CPA capturam demanda quente, enquanto conteúdos sobre FTD, compliance e tráfego sustentam autoridade temática.",
    checklist: ["Existe página money para cada intenção principal?", "Cada review cita fontes oficiais e data?", "Os guias linkam para rankings e reviews?", "A página responde dúvidas do Brasil/LATAM?", "Há aviso de risco e divulgação comercial?"],
    mistakes: ["Publicar só listas rasas", "Criar conteúdo em inglês para busca brasileira", "Não atualizar comissões", "Ignorar termos de marca e comparativos"],
    metrics: ["impressões por cluster", "CTR orgânico", "posição por money keyword", "cliques para reviews", "conversão para clique externo"],
    actionPlan: ["Mapeie 10 consultas comerciais", "Publique reviews com fontes", "Crie comparativos marca vs marca", "Interligue guias e rankings", "Atualize dados mensalmente"]
  },
  "como-negociar-cpa-com-broker": {
    intro:
      "Negociar CPA com broker é uma conversa sobre qualidade, não apenas volume. O gerente quer saber se o lead deposita, opera, passa antifraude e permanece ativo; o afiliado quer reduzir risco de reprovação e melhorar previsibilidade de caixa.",
    checklist: ["Você sabe FTD por país?", "Consegue mostrar trader ativo?", "Tem histórico sem fraude?", "Separou fonte e criativo?", "Sabe qual CPA líquido precisa para empatar?"],
    mistakes: ["Pedir CPA alto sem dados", "Aceitar cap grande sem critérios claros", "Ignorar hold e reversões", "Misturar tráfego de qualidade diferente"],
    metrics: ["CPA bruto", "CPA líquido", "taxa de aprovação", "FTD para trader ativo", "ROI por mercado"],
    actionPlan: ["Prepare dados por fonte", "Peça teste com cap pequeno", "Defina critérios por escrito", "Revise após volume mínimo", "Negocie híbrido se houver retenção"]
  },
  "ftd-trader-ativo-e-qualificacao": {
    intro:
      "Em programas de brokers, FTD é apenas uma etapa. Muitos acordos só pagam quando o usuário deposita, opera um volume mínimo, passa KYC/antifraude e não gera reversão durante o período de validação.",
    checklist: ["O programa define FTD válido?", "Existe volume mínimo?", "Há hold antes do pagamento?", "Reversões aparecem no painel?", "Você mede cada etapa do funil?"],
    mistakes: ["Otimizar para cadastro barato", "Ignorar qualidade pós-depósito", "Não perguntar período de validação", "Comparar campanhas sem separar país"],
    metrics: ["cadastro para FTD", "FTD para qualificado", "volume mínimo atingido", "taxa de reversão", "pagamento líquido"],
    actionPlan: ["Mapeie eventos do painel", "Crie UTMs por fonte", "Corte tráfego com baixa qualificação", "Negocie feedback de reprovação", "Atualize cálculo de ROI semanalmente"]
  },
  "exness-vs-xm-afiliados": {
    intro:
      "Exness e XM atendem afiliados forex com propostas diferentes. Exness se destaca pela clareza de CPA por região e IB; XM tende a ser forte em marca, alcance e sub-afiliados. A escolha depende do canal, do país e da maturidade do trader.",
    checklist: ["Seu público prefere CPA ou recorrência?", "Brasil/LATAM estão aceitos no acordo?", "Você tem conteúdo educativo?", "Sub-afiliados importam para sua estratégia?", "Há dados suficientes para comparar pagamento líquido?"],
    mistakes: ["Escolher só pelo maior número público", "Ignorar entidade e restrição por país", "Comparar CPA de um com RevShare de outro sem horizonte", "Não atualizar termos oficiais"],
    metrics: ["CPA por região", "pagamento líquido", "taxa de ativação", "receita por trader", "ganho com sub-afiliados"],
    actionPlan: ["Valide termos oficiais", "Teste 2 páginas de destino", "Compare FTD qualificado", "Negocie suporte em português", "Reavalie após 30 dias de dados"]
  },
  "pocket-option-vs-quotex-afiliados": {
    intro:
      "Pocket Option e Quotex competem por afiliados de trading de curto prazo, mas não devem ser avaliados apenas por RevShare máximo. O afiliado precisa comparar níveis, critérios de depósito, tráfego permitido, materiais, risco de compliance e qualidade do usuário.",
    checklist: ["Você entende os níveis de cada programa?", "CPA ou RevShare se encaixa melhor no seu canal?", "O tráfego brasileiro é aceito?", "Criativos e Telegram são permitidos?", "Há plano para reduzir promessa agressiva?"],
    mistakes: ["Promover como renda fácil", "Ignorar contrato de afiliado", "Não separar tráfego por país", "Assumir que RevShare alto gera maior LTV"],
    metrics: ["FTD por fonte", "depósito médio", "atividade pós-FTD", "RevShare efetivo", "reversões"],
    actionPlan: ["Monte comparativo transparente", "Use página educativa antes do CTA", "Teste fontes separadas", "Pergunte regras de mídia", "Compare com alternativa white label se houver escala"]
  },
  "binance-vs-okx-afiliados": {
    intro:
      "Binance e OKX são fortes no cluster cripto, mas o afiliado não deve decidir só pelo teto de comissão. O que importa é o encaixe entre tipo de audiência, elegibilidade, produto promovido, suporte do programa e risco operacional para campanhas em português do Brasil.",
    checklist: ["A fonte oficial explica quem pode entrar no programa?", "Existe clareza sobre os produtos que geram comissão: spot, margin, futures ou campanhas específicas?", "Os termos mudam por país ou região?", "O programa oferece suporte operacional útil para sua estrutura?", "Você consegue medir trader ativo, volume e receita líquida por canal?"],
    mistakes: ["Assumir que até 50% significa payout equivalente nas duas exchanges", "Projetar receita para Brasil sem confirmar país, KYC e produto elegível", "Tratar histórias promocionais como prova de ganho replicável", "Mandar tráfego frio para exchange sem camada educacional sobre risco"],
    metrics: ["cadastro aprovado", "trader ativo", "volume negociado", "receita por link/canal", "tempo até revisão de elegibilidade"],
    actionPlan: ["Mapeie sua audiência principal: creator, comunidade ou mídia própria", "Confirme regras atuais e produtos elegíveis com cada programa", "Crie links separados por canal e por exchange", "Compare receita líquida por trader ativo em uma janela de 30 a 60 dias", "Escale só a exchange que provar melhor combinação entre compliance, suporte e monetização"]
  }
};

export const editorialProfile = {
  author: "Equipe editorial AfiliadosPro Brasil",
  reviewer: "Revisão comercial e compliance editorial",
  lastUpdated: "2026-04-29",
  policyUrl: "/metodologia",
  disclosureUrl: "/divulgacao",
  riskNotice:
    "Trading, forex, CFDs, criptoativos e opções digitais envolvem risco. Este conteúdo é informativo, pode conter links comerciais e não representa recomendação financeira."
};

export type FaqContent = {
  question: string;
  answer: string;
};

export type CloneScriptPage = {
  slug: string;
  brandName: string;
  brandSlug: string;
  title: string;
  description: string;
  keyword: string;
  productModel: string;
  bestFor: string;
  customization: string[];
  legalBoundaries: string[];
  sections: Array<{ title: string; body: string }>;
  faq: FaqContent[];
  relatedLinks: Array<{ label: string; href: string }>;
};

const cloneScriptDisclaimer =
  "O termo clone script é usado como referência de busca para afiliados e operadores que procuram uma solução white label com lógica de produto semelhante. Não recomendamos copiar marca, layout, logotipo, domínio, materiais ou propriedade intelectual de terceiros.";

export const cloneScriptPages: CloneScriptPage[] = [
  {
    slug: "pocket-option-clone-script",
    brandName: "Pocket Option",
    brandSlug: "pocket-option-affiliate-program",
    title: "Clone script Pocket Option: alternativa white label para sua marca",
    description:
      "Entenda como uma solução white label pode criar uma plataforma própria inspirada na lógica de trading de curto prazo, sem copiar marca, design ou propriedade intelectual da Pocket Option.",
    keyword: "clone script Pocket Option",
    productModel: "Trading de curto prazo, funil de FTD e painel de afiliados",
    bestFor: "Afiliados que já geram tráfego para opções digitais e querem testar uma marca própria.",
    customization: [
      "Identidade visual, cores, domínio e nome da sua marca",
      "Fluxo de cadastro, CRM, funil de depósito e notificações",
      "Painel operacional, relatórios, campanhas e módulos de afiliados",
      "Métodos de pagamento, páginas de destino e suporte em português"
    ],
    legalBoundaries: [
      "Não usar logotipo, nome, layout proprietário ou domínio parecido com Pocket Option",
      "Não prometer lucro, renda garantida ou resultado de trading",
      "Não copiar materiais, criativos, textos ou telas de terceiros",
      "Validar regras jurídicas, pagamentos, KYC e comunicação de risco antes do lançamento"
    ],
    sections: [
      {
        title: "O que significa clone script nesse contexto",
        body: `${cloneScriptDisclaimer} A leitura correta é: usar uma infraestrutura white label para lançar uma plataforma própria, com produto, funil e operação configurados para o seu público.`
      },
      {
        title: "O que pode ser personalizado em uma white label",
        body: "Você pode usar branding próprio, paleta de cores, domínio, páginas, campanhas, CRM, integrações, métodos de pagamento e regras comerciais. A vantagem é acelerar o lançamento sem construir toda a tecnologia do zero."
      },
      {
        title: "Quando faz sentido para afiliados",
        body: "A ideia faz mais sentido quando o afiliado já conhece CAC, FTD, qualidade do trader e canais de aquisição. Nesse estágio, uma marca própria pode capturar mais valor do que promover apenas CPA ou RevShare de terceiros."
      }
    ],
    faq: [
      {
        question: "Posso criar uma cópia da Pocket Option?",
        answer:
          "Não. A proposta é lançar uma marca própria em white label, sem copiar nome, logotipo, layout, domínio, materiais ou propriedade intelectual da Pocket Option."
      },
      {
        question: "Posso usar cores e branding próprios?",
        answer:
          "Sim. Em uma solução white label, você pode trabalhar com sua identidade visual, cores, domínio, páginas e comunicação da sua marca."
      }
    ],
    relatedLinks: [
      { label: "Pocket Option afiliados", href: "/reviews/pocket-option-affiliate-program" },
      { label: "Pocket Option vs Quotex", href: "/guias/pocket-option-vs-quotex-afiliados" },
      { label: "Solução white label", href: "/white-label/solucao-white-label-para-broker" }
    ]
  },
  {
    slug: "quotex-clone-script",
    brandName: "Quotex",
    brandSlug: "quotex-affiliate-program",
    title: "Clone script Quotex: solução white label para broker",
    description:
      "Veja como avaliar uma alternativa white label ao modelo de trading de curto prazo, com marca própria e sem copiar a Quotex.",
    keyword: "clone script Quotex",
    productModel: "Trading de curto prazo, RevShare, campanhas e funil de depósitos",
    bestFor: "Compradores de mídia, comunidades e afiliados que já validaram tráfego para trading.",
    customization: [
      "Marca, domínio, cores e páginas comerciais próprias",
      "CRM, relatórios, campanhas, links e segmentação por fonte",
      "Fluxo de onboarding, depósito, suporte e mensagens transacionais",
      "Materiais de aquisição alinhados às regras da sua operação"
    ],
    legalBoundaries: [
      "Não usar marca, logotipo ou interface proprietária da Quotex",
      "Não criar domínio, anúncio ou página que pareça oficial",
      "Não reutilizar contrato, criativos ou materiais de terceiros",
      "Manter avisos de risco e revisão jurídica antes de escalar tráfego"
    ],
    sections: [
      {
        title: "Clone script não é cópia de marca",
        body: `${cloneScriptDisclaimer} Para buscas como clone script Quotex, o caminho seguro é pensar em plataforma white label com recursos semelhantes de funil, painel e gestão comercial, mas identidade totalmente própria.`
      },
      {
        title: "Onde a white label ajuda",
        body: "A white label pode reduzir tempo de implantação de plataforma, CRM, relatórios, campanhas, pagamentos e suporte operacional. Isso permite testar marca, oferta e aquisição sem desenvolver todo o produto internamente."
      },
      {
        title: "Como medir se vale a pena",
        body: "Compare sua receita como afiliado com CAC, LTV, retenção, suporte, chargeback e custos de operação. Se você já gera FTDs previsíveis, a marca própria entra como uma hipótese B2B para capturar mais margem."
      }
    ],
    faq: [
      {
        question: "Clone script Quotex é legal?",
        answer:
          "Depende do que você chama de clone. Copiar marca, layout e materiais não é recomendado. Usar uma solução white label com marca própria e tecnologia licenciada é uma abordagem mais segura."
      },
      {
        question: "A plataforma pode ter visual diferente?",
        answer:
          "Sim. O objetivo é justamente usar branding, cores, domínio e comunicação próprios, sem confundir o usuário com uma marca de terceiros."
      }
    ],
    relatedLinks: [
      { label: "Quotex afiliados", href: "/reviews/quotex-affiliate-program" },
      { label: "Programas opções digitais", href: "/programas/programas-afiliados-opcoes-digitais" },
      { label: "Como abrir corretora", href: "/white-label/como-abrir-corretora-online" }
    ]
  },
  {
    slug: "iq-option-clone-script",
    brandName: "IQ Option",
    brandSlug: "iq-option-affiliate-program",
    title: "Clone script IQ Option: alternativa white label com marca própria",
    description:
      "Critérios para lançar uma plataforma white label inspirada em apps de trading multi-produto, sem copiar a marca IQ Option.",
    keyword: "clone script IQ Option",
    productModel: "Broker multi-produto, app de trading, CRM e funil de retenção",
    bestFor: "Operadores que querem uma experiência de marca própria para público de trading e investimentos.",
    customization: [
      "Naming, identidade visual, telas públicas e domínio próprio",
      "CRM, onboarding, campanhas, relatórios e suporte",
      "Produtos habilitados conforme fornecedor e estratégia comercial",
      "Mensagens de risco, conteúdo educativo e páginas por mercado"
    ],
    legalBoundaries: [
      "Não usar marca, ícones, layout ou identidade visual da IQ Option",
      "Não simular app oficial ou comunicação de terceiros",
      "Não prometer performance financeira ao usuário",
      "Confirmar produto, jurisdição, pagamentos e compliance com especialistas"
    ],
    sections: [
      {
        title: "Uma alternativa white label, não uma cópia",
        body: `${cloneScriptDisclaimer} Para IQ Option clone script, a interpretação mais prudente é criar uma plataforma white label com marca própria e recursos adequados ao seu público.`
      },
      {
        title: "Branding e produto",
        body: "A white label permite adaptar cores, marca, páginas, domínio, CRM e experiência comercial. O produto final deve ter identidade própria e comunicação clara, sem sugerir relação oficial com IQ Option."
      },
      {
        title: "Ponto crítico de operação",
        body: "Quanto mais amplo o produto, maior a necessidade de suporte, documentação, treinamento, controle de risco, rastreamento e processos de compliance para afiliados e campanhas."
      }
    ],
    faq: [
      {
        question: "Posso usar o nome IQ Option na minha plataforma?",
        answer:
          "Não. O nome deve aparecer apenas como referência editorial/SEO quando apropriado. A plataforma precisa operar com marca, domínio e comunicação próprios."
      },
      {
        question: "White label permite customizar cores?",
        answer:
          "Sim. Cores, marca, domínio, páginas e materiais podem ser personalizados para a sua operação, dentro do escopo do fornecedor."
      }
    ],
    relatedLinks: [
      { label: "IQ Option afiliados", href: "/reviews/iq-option-affiliate-program" },
      { label: "Programa afiliado broker", href: "/programas/programa-de-afiliados-broker" },
      { label: "Quanto custa lançar", href: "/white-label/quanto-custa-lancar-plataforma-trading" }
    ]
  },
  {
    slug: "olymp-trade-clone-script",
    brandName: "Olymp Trade",
    brandSlug: "olymp-trade-affiliate-program",
    title: "Clone script Olymp Trade: white label para plataforma de trading",
    description:
      "Como pensar em uma solução white label para plataforma de trading com marca própria, sem copiar Olymp Trade.",
    keyword: "clone script Olymp Trade",
    productModel: "Trading, educação, app e aquisição por afiliados",
    bestFor: "Afiliados com conteúdo educativo e funis de aquisição para traders iniciantes.",
    customization: [
      "Marca, cores, domínio, páginas e materiais educativos próprios",
      "CRM, funil de cadastro, suporte e relatórios por campanha",
      "Módulo de afiliados, páginas de destino e segmentação por país",
      "Conteúdo de risco e onboarding alinhado ao público"
    ],
    legalBoundaries: [
      "Não copiar design, marca, logo ou materiais da Olymp Trade",
      "Não confundir o usuário com uma página oficial",
      "Não usar promessas de lucro ou renda fácil",
      "Revisar disponibilidade de produto, pagamentos e regras locais"
    ],
    sections: [
      {
        title: "Como usar a intenção clone script com segurança",
        body: `${cloneScriptDisclaimer} A intenção comercial pode ser atendida com uma solução white label que tenha identidade visual própria e infraestrutura licenciada.`
      },
      {
        title: "Educação e onboarding",
        body: "Para públicos iniciantes, a experiência precisa explicar risco, produto, cadastro, depósito e suporte. Uma marca própria pode criar conteúdo educativo e campanhas alinhadas ao seu posicionamento."
      },
      {
        title: "Aquisição por afiliados",
        body: "Se você opera rede de afiliados, avalie painel, subIDs, campanhas, postback, relatórios e regras de compliance para evitar tráfego de baixa qualidade."
      }
    ],
    faq: [
      {
        question: "Clone script Olymp Trade significa copiar a Olymp Trade?",
        answer:
          "Não. A abordagem recomendada é uma white label com tecnologia e identidade próprias, sem copiar elementos protegidos de terceiros."
      },
      {
        question: "Posso adaptar a plataforma para meu público?",
        answer:
          "Sim. Branding, páginas, cores, domínio, materiais e funis podem ser adaptados para a estratégia da sua marca."
      }
    ],
    relatedLinks: [
      { label: "Olymp Trade afiliados", href: "/reviews/olymp-trade-affiliate-program" },
      { label: "Fontes de tráfego", href: "/guias/melhores-fontes-trafego-broker-afiliados" },
      { label: "White label broker", href: "/white-label/solucao-white-label-para-broker" }
    ]
  },
  {
    slug: "deriv-clone-script",
    brandName: "Deriv",
    brandSlug: "deriv-affiliate-program",
    title: "Clone script Deriv: alternativa white label multi-produto",
    description:
      "Entenda quando uma solução white label multi-produto pode fazer sentido para operadores e afiliados avançados, sem copiar a Deriv.",
    keyword: "clone script Deriv",
    productModel: "Multi-produto, CFDs, opções, API e rede de parceiros",
    bestFor: "Comunidades, afiliados técnicos e operadores que precisam de estrutura mais avançada.",
    customization: [
      "Marca, domínio, cores, páginas e jornada de usuário próprias",
      "Produtos e integrações conforme fornecedor white label",
      "CRM, relatórios, API, campanhas e suporte operacional",
      "Documentação, conteúdo técnico e gestão de parceiros"
    ],
    legalBoundaries: [
      "Não usar marca, interface, materiais ou documentação proprietária da Deriv",
      "Não sugerir parceria oficial sem autorização",
      "Não promover produtos avançados sem aviso de risco",
      "Validar regras técnicas, jurídicas, KYC, pagamentos e suporte"
    ],
    sections: [
      {
        title: "White label para uma operação mais ampla",
        body: `${cloneScriptDisclaimer} Em buscas por clone script Deriv, o ponto importante é avaliar se você precisa de uma plataforma white label multi-produto, com gestão de parceiros, relatórios e integrações mais robustas.`
      },
      {
        title: "API, comunidade e produto",
        body: "Uma operação com comunidade técnica ou produto avançado precisa de documentação, suporte, segmentação de usuários e clareza sobre risco. A marca própria deve explicar o produto sem copiar comunicação de terceiros."
      },
      {
        title: "Governança antes de escalar",
        body: "Quanto mais avançado o produto, maior a necessidade de governança: termos, suporte, antifraude, gestão de afiliados, pagamentos, risco e auditoria de campanhas."
      }
    ],
    faq: [
      {
        question: "Deriv clone script é indicado para iniciantes?",
        answer:
          "Geralmente não. Uma operação multi-produto exige mais suporte, controle de risco, documentação e gestão operacional."
      },
      {
        question: "Posso lançar uma marca com recursos semelhantes?",
        answer:
          "Você pode lançar uma marca própria usando tecnologia white label e recursos contratados, desde que não copie marca, interface, materiais ou propriedade intelectual de terceiros."
      }
    ],
    relatedLinks: [
      { label: "Deriv afiliados", href: "/reviews/deriv-affiliate-program" },
      { label: "Sub-afiliados", href: "/programas/programas-afiliados-com-subafiliados" },
      { label: "Abrir corretora online", href: "/white-label/como-abrir-corretora-online" }
    ]
  }
];

export type RankingSeoContent = {
  directAnswer: string;
  bestForBadges: Array<{ label: string; program: string; reason: string }>;
  methodology: string[];
  brazilValidation: string[];
  commissionModels: Array<{ model: string; bestWhen: string; risk: string }>;
  bebrokerBridge: string;
  faqs: FaqContent[];
  relatedLinks?: Array<{ label: string; href: string }>;
};

const defaultRankingSeoContent: RankingSeoContent = {
  directAnswer:
    "O melhor programa depende do seu mercado, fonte de tráfego, tolerância a risco e modelo de monetização. Em geral, CPA ajuda a recuperar investimento rápido, RevShare captura valor futuro e híbrido reduz parte do risco.",
  bestForBadges: [
    { label: "Melhor para CPA claro", program: "Exness", reason: "comunica tetos por região e pagamentos diários." },
    { label: "Melhor para RevShare alto", program: "Pocket Option", reason: "tem níveis públicos de RevShare para parceiros ativos." },
    { label: "Melhor para sub-afiliados", program: "XM", reason: "destaca estrutura de sub-afiliados e alcance internacional." }
  ],
  methodology: [
    "Priorizamos programas com páginas oficiais, fontes verificáveis e informações públicas sobre comissão, pagamento ou ferramentas.",
    "Comparamos CPA, RevShare, híbrido e sub-afiliado considerando qualidade do funil, não apenas o maior número anunciado.",
    "Damos peso extra a transparência, suporte para afiliados, materiais localizados, rastreamento e clareza de restrições de tráfego.",
    "Em páginas para Brasil, revisamos disponibilidade por mercado, métodos de pagamento, comunicação de risco e adequação editorial."
  ],
  brazilValidation: [
    "Confirmar se Brasil ou LATAM estão aceitos no acordo atual.",
    "Validar se Google Ads, Meta, TikTok, YouTube, Telegram, native ads e brand bidding são permitidos.",
    "Checar critério exato de FTD, trader qualificado, volume mínimo, hold e reversões.",
    "Usar avisos de risco visíveis e evitar promessa de lucro, renda garantida ou urgência artificial.",
    "Registrar fonte oficial e data de checagem antes de publicar números de comissão."
  ],
  commissionModels: [
    {
      model: "CPA",
      bestWhen: "Você compra mídia, precisa recuperar caixa rápido e consegue gerar FTD qualificado.",
      risk: "CPA bruto pode cair muito depois de reprovação, hold, fraude, chargeback ou volume mínimo."
    },
    {
      model: "RevShare",
      bestWhen: "Você tem conteúdo educativo, comunidade ou público que continua operando por meses.",
      risk: "Depende de retenção, cálculo transparente e acesso a relatórios pós-FTD."
    },
    {
      model: "Híbrido",
      bestWhen: "Você já provou qualidade e quer combinar caixa inicial com upside futuro.",
      risk: "Pode parecer equilibrado, mas exige contrato claro para a parte fixa e variável."
    }
  ],
  bebrokerBridge:
    "Se você já gera FTDs de forma previsível, conhece CAC/LTV e domina aquisição de traders, comparar programas de afiliados é apenas uma etapa. O próximo movimento pode ser testar uma corretora própria com solução white label, capturando mais valor do funil em vez de depender só de CPA ou RevShare de terceiros.",
  faqs: [
    {
      question: "Qual é o melhor programa de afiliados para brokers?",
      answer:
        "Não existe um melhor universal. Para tráfego pago, CPA claro pode ser melhor; para conteúdo e comunidade, RevShare ou híbrido podem superar no longo prazo."
    },
    {
      question: "Programa de afiliados forex paga bem?",
      answer:
        "Pode pagar bem, mas o valor real depende de FTD qualificado, país, volume de trading, aprovação do lead e qualidade da fonte de tráfego."
    },
    {
      question: "Quando uma corretora white label faz sentido para afiliados?",
      answer:
        "Quando o afiliado já tem aquisição previsível, entende retenção e quer construir uma marca própria em vez de promover apenas ofertas de terceiros."
    }
  ],
  relatedLinks: [
    { label: "Como escolher programa de afiliados", href: "/guias/como-escolher-programa-afiliados-trading" },
    { label: "CPA vs RevShare vs Híbrido", href: "/guias/cpa-vs-revshare-vs-hybrid" },
    { label: "Métricas para afiliados", href: "/guias/metricas-essenciais-broker-afiliados" }
  ]
};

export const rankingSeoContent: Record<string, RankingSeoContent> = {
  "melhores-programas-afiliados-forex": {
    ...defaultRankingSeoContent,
    directAnswer:
      "Para afiliados brasileiros, os melhores programas forex tendem a combinar marca confiável, CPA ou IB transparente, pagamentos previsíveis e materiais educativos. Exness, XM e AvaPartner aparecem como opções fortes, mas cada uma exige validação de país, entidade e critérios de qualificação.",
    bestForBadges: [
      { label: "CPA regional claro", program: "Exness", reason: "divulga CPA máximo por regiões e diferencia CPA de IB." },
      { label: "Sub-afiliados", program: "XM", reason: "comunica 10% extra sobre ganhos de sub-afiliados." },
      { label: "Negociação flexível", program: "AvaPartner", reason: "oferece CPA, RevShare, híbrido e Master Affiliate." }
    ],
    relatedLinks: [
      { label: "Programa de afiliados forex", href: "/programas/programa-de-afiliados-forex" },
      { label: "CPA forex", href: "/programas/melhores-programas-afiliados-cpa-forex" },
      { label: "Exness vs XM", href: "/guias/exness-vs-xm-afiliados" }
    ]
  },
  "programa-de-afiliados-forex": {
    ...defaultRankingSeoContent,
    directAnswer:
      "Um programa de afiliados forex é uma parceria em que o afiliado recebe CPA, RevShare, híbrido ou comissão de IB por indicar traders qualificados para uma corretora. A escolha deve priorizar reputação, regras de qualificação, geos aceitos, rastreamento e compliance.",
    bestForBadges: [
      { label: "Para mídia paga", program: "Exness", reason: "CPA por região facilita cálculo inicial de ROI." },
      { label: "Para conteúdo forex", program: "XM", reason: "marca forte e argumentos educacionais ajudam conversão." },
      { label: "Para acordos sob medida", program: "AvaPartner", reason: "modelos flexíveis permitem negociar por fonte e mercado." }
    ],
    relatedLinks: [
      { label: "Como negociar CPA", href: "/guias/como-negociar-cpa-com-broker" },
      { label: "FTD e qualificação", href: "/guias/ftd-trader-ativo-e-qualificacao" },
      { label: "SEO para afiliados forex", href: "/guias/seo-para-afiliados-forex" }
    ]
  },
  "programa-de-afiliados-broker": {
    ...defaultRankingSeoContent,
    directAnswer:
      "Um programa de afiliados broker pode envolver forex, CFDs, opções digitais, cripto ou fintech. O afiliado deve comparar modelo de pagamento, produto promovido, regras de mídia, suporte, reputação e se o funil permite evoluir para uma marca própria.",
    bestForBadges: [
      { label: "Broker forex", program: "Exness", reason: "boa clareza pública sobre CPA e IB." },
      { label: "Broker multi-produto", program: "Deriv", reason: "inclui opções, CFDs, API e Master Partner." },
      { label: "Trading curto prazo", program: "Pocket Option", reason: "níveis de RevShare públicos e foco em performance." }
    ],
    relatedLinks: [
      { label: "Fontes de tráfego", href: "/guias/melhores-fontes-trafego-broker-afiliados" },
      { label: "Programa vs marca própria", href: "/guias/affiliate-program-vs-own-broker-brand" },
      { label: "White label para broker", href: "/white-label/solucao-white-label-para-broker" }
    ]
  },
  "melhores-programas-afiliados-brokers": {
    ...defaultRankingSeoContent,
    directAnswer:
      "Para brokers, o melhor programa é aquele que combina produto confiável, regras claras de tráfego, rastreamento pós-FTD e pagamento compatível com o seu canal. Afiliados brasileiros devem priorizar termos por país, suporte em português e avisos de risco antes de olhar apenas para CPA ou RevShare.",
    bestForBadges: [
      { label: "Forex/CFDs", program: "Exness", reason: "tem CPA por região, IB e materiais para afiliados financeiros." },
      { label: "Marca reconhecida", program: "XM", reason: "combina alcance global com sub-afiliados e conteúdo forex." },
      { label: "Multi-produto", program: "Deriv", reason: "permite explorar opções, CFDs, API e Master Partner." }
    ]
  },
  "melhores-programas-afiliados-trading": {
    ...defaultRankingSeoContent,
    directAnswer:
      "Programas de afiliados de trading podem pagar alto, mas exigem cuidado com promessa de lucro, qualidade do lead e regras de tráfego. Para tráfego de curto prazo, Pocket Option, Quotex e Kingfin são fortes; para forex/CFDs, Exness, XM e AvaPartner tendem a ser mais adequados.",
    bestForBadges: [
      { label: "Opções digitais", program: "Quotex", reason: "estrutura de níveis simples para explicar em comparativos." },
      { label: "RevShare agressivo", program: "Pocket Option", reason: "comunica progressão pública por volume de FTDs." },
      { label: "Plano flexível", program: "Kingfin", reason: "oferece RevShare, CPA, indicação, híbrido e personalizado." }
    ],
    relatedLinks: [
      { label: "Programa de afiliados Pocket Option", href: "/reviews/pocket-option-affiliate-program" },
      { label: "Programa de afiliados Quotex", href: "/reviews/quotex-affiliate-program" },
      { label: "IQ Option afiliados", href: "/reviews/iq-option-affiliate-program" },
      { label: "Kingfin parceiros", href: "/reviews/olymp-trade-affiliate-program" },
      { label: "Deriv afiliados", href: "/reviews/deriv-affiliate-program" },
      { label: "Pocket Option vs Quotex", href: "/guias/pocket-option-vs-quotex-afiliados" },
      { label: "Tráfego para trading", href: "/guias/como-gerar-trafego-ofertas-trading" },
      { label: "Compliance no Brasil", href: "/guias/checklist-compliance-afiliados-trading-brasil" }
    ]
  },
  "programas-afiliados-cripto-fintech": {
    ...defaultRankingSeoContent,
    directAnswer:
      "Programas cripto e fintech funcionam melhor quando o afiliado consegue educar sobre risco, segurança e uso do produto. Binance, OKX e KuCoin podem ser úteis para audiência cripto, mas a disponibilidade local, elegibilidade do afiliado e regras por produto precisam ser validadas antes de criar previsão de receita.",
    bestForBadges: [
      { label: "Marca cripto forte", program: "Binance", reason: "tem reconhecimento alto e comissão sobre taxas de negociação." },
      { label: "Campanhas personalizadas", program: "OKX", reason: "permite segmentar por canal, criador ou comunidade." },
      { label: "Rede e comissão diária", program: "KuCoin", reason: "combina até 60%, pagamentos diários e comissão de segundo nível." }
    ],
    brazilValidation: [
      "Confirmar disponibilidade do programa no Brasil e requisitos de aprovação de afiliado.",
      "Separar conteúdo educativo de recomendação financeira e incluir risco de criptoativos.",
      "Validar quais produtos podem ser promovidos: spot, futuros, margem, copy trading ou campanhas específicas.",
      "Checar regras para influenciadores, comunidades de Telegram/Discord e anúncios pagos.",
      "Medir receita por trader ativo e volume negociado, não apenas por cadastro."
    ],
    relatedLinks: [
      { label: "Binance vs OKX", href: "/guias/binance-vs-okx-afiliados" },
      { label: "Glossário financeiro", href: "/guias/glossario-affiliate-marketing-financeiro" },
      { label: "Métricas essenciais", href: "/guias/metricas-essenciais-broker-afiliados" },
      { label: "Compliance financeiro", href: "/guias/compliance-marketing-afiliados-financeiros" }
    ]
  },
  "programas-afiliados-opcoes-digitais": {
    ...defaultRankingSeoContent,
    directAnswer:
      "Para opções digitais e trading de curto prazo, a comissão anunciada só vale se o tráfego gerar depósitos reais e usuários que continuam ativos. Pocket Option, Quotex e Kingfin são fortes nesse cluster, mas a comunicação precisa ser conservadora, com risco claro e sem promessa de lucro.",
    bestForBadges: [
      { label: "Níveis públicos", program: "Quotex", reason: "facilita comparar RevShare e participação sobre volume." },
      { label: "CPA negociável", program: "Pocket Option", reason: "pode ser ajustado por mercado e qualidade do FTD." },
      { label: "Modelos flexíveis", program: "Kingfin", reason: "combina CPA, RevShare, híbrido e indicação." }
    ],
    brazilValidation: [
      "Confirmar se o programa aceita tráfego brasileiro no momento da campanha.",
      "Evitar criativos sobre renda fácil, sinais infalíveis ou urgência artificial.",
      "Separar páginas educativas de páginas comerciais para reduzir risco de reprovação.",
      "Medir FTD, trader ativo e reversões por país, canal e criativo.",
      "Salvar termos de CPA/RevShare e regras de mídia antes de escalar."
    ],
    relatedLinks: [
      { label: "Programa de afiliados Pocket Option", href: "/reviews/pocket-option-affiliate-program" },
      { label: "Programa de afiliados Quotex", href: "/reviews/quotex-affiliate-program" },
      { label: "Kingfin parceiros", href: "/reviews/olymp-trade-affiliate-program" },
      { label: "Deriv afiliados", href: "/reviews/deriv-affiliate-program" },
      { label: "Pocket Option vs Quotex", href: "/guias/pocket-option-vs-quotex-afiliados" },
      { label: "Como gerar tráfego", href: "/guias/como-gerar-trafego-ofertas-trading" },
      { label: "Checklist compliance Brasil", href: "/guias/checklist-compliance-afiliados-trading-brasil" }
    ]
  },
  "programas-afiliados-com-subafiliados": {
    ...defaultRankingSeoContent,
    directAnswer:
      "Programas com sub-afiliados fazem sentido quando você consegue recrutar criadores, comunidades ou publicadores ativos. O ponto central não é só a porcentagem da rede, mas a qualidade do tracking, regras de atribuição, transparência de relatórios e risco de trazer parceiros que usam tráfego proibido.",
    bestForBadges: [
      { label: "Sub-afiliados forex", program: "XM", reason: "destaca 10% extra sobre ganhos de sub-afiliados." },
      { label: "Master Partner", program: "Deriv", reason: "inclui estrutura para recrutar parceiros em produtos diferentes." },
      { label: "Rede cripto", program: "OKX", reason: "inclui gestão de sub-afiliados e campanhas personalizadas." }
    ],
    brazilValidation: [
      "Confirmar se sub-afiliados brasileiros são aceitos e como serão identificados no painel.",
      "Criar onboarding com regras de compliance, divulgação comercial e fontes permitidas.",
      "Definir se a comissão da rede é vitalícia, temporária ou sujeita a revisão.",
      "Auditar fontes de tráfego de subparceiros para evitar bloqueio da conta principal.",
      "Medir receita direta e indireta separadamente para não inflar ROI."
    ],
    relatedLinks: [
      { label: "Negociar com affiliate manager", href: "/guias/como-negociar-com-affiliate-manager" },
      { label: "Métricas para afiliados", href: "/guias/metricas-essenciais-broker-afiliados" },
      { label: "Programa vs marca própria", href: "/guias/affiliate-program-vs-own-broker-brand" }
    ]
  },
  "broker-affiliate-programs": {
    ...defaultRankingSeoContent,
    directAnswer:
      "Para mercados lusófonos, o afiliado deve procurar programas com páginas e suporte que facilitem comunicação em português, regras claras para Brasil/LATAM e produto adequado ao perfil do público. A melhor escolha muda conforme o funil: SEO educativo, mídia paga, YouTube, comunidades ou rede de sub-afiliados.",
    bestForBadges: [
      { label: "Busca forex", program: "Exness", reason: "tem intenção comercial forte e dados públicos de CPA por região." },
      { label: "Comunidade forex", program: "XM", reason: "sub-afiliados e marca ajudam em audiência educada." },
      { label: "Trading curto prazo", program: "Quotex", reason: "boa adequação para comparativos de opções digitais." }
    ],
    brazilValidation: [
      "Validar idioma dos materiais, suporte do gerente e termos aplicáveis a Brasil/LATAM.",
      "Checar se o produto promovido é forex, CFD, cripto, opções digitais ou fintech, porque o risco muda.",
      "Confirmar regras para SEO, YouTube, Telegram, influenciadores, anúncios pagos e brand bidding.",
      "Incluir divulgação comercial e aviso de risco em páginas com intenção transacional.",
      "Comparar comissão líquida por trader qualificado, não apenas comissão máxima anunciada."
    ],
    relatedLinks: [
      { label: "Programa de afiliados broker", href: "/programas/programa-de-afiliados-broker" },
      { label: "SEO para afiliados forex", href: "/guias/seo-para-afiliados-forex" },
      { label: "White label para broker", href: "/white-label/solucao-white-label-para-broker" }
    ]
  },
  "melhores-programas-afiliados-cpa-forex": {
    ...defaultRankingSeoContent,
    directAnswer:
      "CPA forex é melhor quando você compra tráfego e precisa previsibilidade, mas só deve ser comparado pelo valor líquido depois de aprovações, reversões, volume mínimo e período de validação.",
    bestForBadges: [
      { label: "CPA por região", program: "Exness", reason: "torna a projeção inicial mais objetiva." },
      { label: "CPA negociável", program: "AvaPartner", reason: "permite planos personalizados por fonte e qualidade." },
      { label: "CPA e RevShare", program: "IQ Option", reason: "pode combinar modelos conforme disponibilidade regional." }
    ]
  },
  "programas-afiliados-revshare-forex": {
    ...defaultRankingSeoContent,
    directAnswer:
      "RevShare forex vale quando o público continua operando e o broker tem retenção real. Antes de escolher, valide cálculo da receita, relatórios, churn, prazo de pagamento e possibilidade de migrar para híbrido.",
    bestForBadges: [
      { label: "RevShare/IB", program: "Exness", reason: "IB pode fazer sentido para público trader ativo." },
      { label: "Sub-afiliado", program: "XM", reason: "estrutura recorrente pode ajudar comunidades." },
      { label: "Modelo híbrido", program: "AvaPartner", reason: "permite negociar equilíbrio entre upfront e recorrência." }
    ]
  }
};

export type ReviewSeoEnhancement = {
  moneySection: string;
  funnelExample: string[];
  whiteLabelAlternative: string;
  faq: FaqContent[];
};

export type BrandReviewSeoContent = {
  primaryKeyword: string;
  secondaryKeywords: string[];
  metaTitle: string;
  metaDescription: string;
  h1: string;
  quickAnswer: string;
  integrationSteps: Array<{ title: string; body: string }>;
  commissionRows: Array<{ label: string; value: string; note: string }>;
  faq: FaqContent[];
};

export const brandReviewSeoContent: Record<string, BrandReviewSeoContent> = {
  "pocket-option-affiliate-program": {
    primaryKeyword: "programa de afiliados Pocket Option",
    secondaryKeywords: ["Pocket Partners", "Pocket Option afiliados", "afiliado Pocket Option", "Pocket Option CPA", "Pocket Option RevShare"],
    metaTitle: "Pocket Option programa de afiliados: comissão, CPA e RevShare",
    metaDescription:
      "Análise PT-BR do programa de afiliados Pocket Option: comissões Pocket Partners, CPA, RevShare, sub-afiliados, pagamentos, tráfego e riscos.",
    h1: "Pocket Option programa de afiliados: análise, comissão e pagamentos",
    quickAnswer:
      "O programa de afiliados Pocket Option, também conhecido como Pocket Partners, combina RevShare por níveis, CPA sob negociação e 5% de sub-afiliados. Ele pode ser interessante para afiliados com tráfego de trading de curto prazo, mas exige validação de países aceitos, regras de mídia, qualidade do FTD e comunicação de risco antes de escalar.",
    integrationSteps: [
      {
        title: "Cadastro no Pocket Partners",
        body: "O afiliado deve criar conta na área oficial de parceiros, informar dados comerciais e aguardar liberação do painel antes de publicar campanhas."
      },
      {
        title: "Definição de modelo de comissão",
        body: "RevShare por nível é a referência pública; CPA e bônus dependem de mercado, FTD e negociação com o gerente."
      },
      {
        title: "Links, subIDs e separação por fonte",
        body: "Use links e parâmetros por canal para separar SEO, YouTube, Telegram, social e mídia paga. Isso ajuda a defender CPA melhor quando a qualidade é comprovada."
      },
      {
        title: "Acompanhamento de FTD e trader ativo",
        body: "Não otimize apenas por cadastro. Meça primeiro depósito, atividade real, reversões e pagamento líquido por país."
      },
      {
        title: "Compliance antes de escala",
        body: "Evite promessas de lucro, criativos agressivos e tráfego incentivado. Peça regras por escrito antes de testar anúncios pagos."
      }
    ],
    commissionRows: [
      { label: "Modelo principal", value: "RevShare por níveis e CPA negociável", note: "RevShare público vai de 50% a 80% conforme nível e volume de FTDs." },
      { label: "Sub-afiliados", value: "5% das comissões", note: "Útil para quem recruta criadores ou compradores de mídia menores." },
      { label: "Ponto crítico", value: "Qualidade do FTD", note: "CPA alto perde valor se o lead deposita pouco, não opera ou é reprovado." },
      { label: "Melhor uso", value: "SEO, YouTube, comunidades e funis educativos", note: "Tráfego frio direto tende a gerar baixa retenção e maior risco de compliance." }
    ],
    faq: [
      {
        question: "Como funciona o programa de afiliados Pocket Option?",
        answer:
          "O Pocket Partners remunera afiliados principalmente por RevShare em níveis e pode oferecer CPA personalizado conforme mercado e qualidade dos FTDs. Antes de promover, confirme regras atuais, países aceitos e fontes permitidas."
      },
      {
        question: "Pocket Option paga CPA para afiliados?",
        answer:
          "CPA pode existir sob negociação, mas não deve ser tratado como valor fixo universal. O pagamento depende de mercado, primeiro depósito, qualidade do usuário e acordo com o gerente."
      },
      {
        question: "Pocket Partners vale a pena para afiliados brasileiros?",
        answer:
          "Pode valer para afiliados com audiência de trading e funil educativo. Para Brasil/LATAM, o ponto central é validar disponibilidade, regras de tráfego, métodos de pagamento e risco de comunicação comercial."
      }
    ]
  },
  "quotex-affiliate-program": {
    primaryKeyword: "programa de afiliados Quotex",
    secondaryKeywords: ["Quotex parceiros", "Quotex Affiliate Center", "afiliado Quotex", "Quotex RevShare", "Quotex CPA"],
    metaTitle: "Quotex programa de afiliados: RevShare, níveis e pagamentos",
    metaDescription:
      "Análise PT-BR do programa de afiliados Quotex: RevShare, participação sobre volume, níveis por depósitos, pagamentos semanais, tráfego e compliance.",
    h1: "Quotex programa de afiliados: análise, níveis e pagamentos",
    quickAnswer:
      "O programa de afiliados Quotex é forte para quem busca RevShare com níveis claros e participação sobre volume negociado. A oferta é fácil de explicar em comparativos, mas o afiliado precisa confirmar contrato, tráfego permitido, brand bidding, regras por país e dados atualizados antes de escalar.",
    integrationSteps: [
      {
        title: "Cadastro no Quotex Affiliate Center",
        body: "Crie a conta de parceiro, revise o contrato oficial e confirme se sua origem de tráfego é aceita antes de publicar páginas ou anúncios."
      },
      {
        title: "Escolha de plano e leitura dos níveis",
        body: "A estrutura pública trabalha com RevShare crescente por depósitos e participação sobre volume. Use a tabela oficial como base e registre a data de checagem."
      },
      {
        title: "Links de campanha e códigos",
        body: "Separe campanhas por idioma, país e canal. Para influenciadores, valide se códigos promocionais e materiais específicos são permitidos."
      },
      {
        title: "Relatórios e otimização",
        body: "Compare depósitos, atividade de trading, volume e receita por fonte. Não assuma que maior número de depósitos significa melhor ROI líquido."
      },
      {
        title: "Regras comerciais",
        body: "Confirme restrições para anúncios pagos, redes sociais, Telegram, uso de marca e promessas financeiras antes de aumentar orçamento."
      }
    ],
    commissionRows: [
      { label: "Modelo principal", value: "RevShare de 50% a 80%", note: "Níveis públicos dependem de faixas de depósitos." },
      { label: "Volume negociado", value: "2% a 5%", note: "Participação adicional pode ser relevante quando usuários operam com frequência." },
      { label: "Pagamento", value: "Semanal segundo a página oficial", note: "Confirme método e regras no painel antes de projetar fluxo de caixa." },
      { label: "Ponto crítico", value: "Contrato e fontes permitidas", note: "Leia o acordo oficial, especialmente para anúncios, marca e tráfego incentivado." }
    ],
    faq: [
      {
        question: "Como funciona o programa de afiliados Quotex?",
        answer:
          "O Quotex Affiliate Center remunera afiliados por RevShare em níveis e participação sobre volume negociado. Os níveis dependem de depósitos e devem ser confirmados na página oficial e no contrato."
      },
      {
        question: "Quotex paga afiliados semanalmente?",
        answer:
          "A página oficial menciona pagamentos semanais, mas o afiliado deve confirmar método, mínimo, regras de validação e disponibilidade no painel antes de escalar tráfego."
      },
      {
        question: "Quotex é melhor que Pocket Option para afiliados?",
        answer:
          "Depende do funil. Quotex tem estrutura simples de níveis; Pocket Option destaca RevShare progressivo e CPA negociável. Compare pagamento líquido, fontes permitidas e qualidade dos FTDs."
      }
    ]
  },
  "iq-option-affiliate-program": {
    primaryKeyword: "programa de afiliados IQ Option",
    secondaryKeywords: ["IQ Option afiliados", "IQ Option Affiliate", "Affstore IQ Option", "afiliado IQ Option"],
    metaTitle: "IQ Option programa de afiliados: comissão, Affstore e análise",
    metaDescription:
      "Análise PT-BR do programa de afiliados IQ Option: RevShare, CPA, migração para Affstore, disponibilidade por país, riscos e alternativas.",
    h1: "IQ Option programa de afiliados: análise, comissão e disponibilidade",
    quickAnswer:
      "O programa de afiliados IQ Option ainda atrai busca por marca, mas precisa ser tratado com cuidado por causa da migração para Affstore e variações de disponibilidade por país. Para afiliados brasileiros, a página deve servir como análise atualizada, validação de termos e comparação com alternativas ativas.",
    integrationSteps: [
      {
        title: "Checagem do canal oficial",
        body: "Antes de promover, confirme se a inscrição passa pela IQ Option Affiliate ou Affstore e se a oferta está ativa para seu mercado."
      },
      {
        title: "Validação de país e produto",
        body: "Não assuma disponibilidade para Brasil. Produtos, entidades e regras podem variar por região e precisam ser verificados no painel."
      },
      {
        title: "Links universais e segmentação",
        body: "Se universal links estiverem disponíveis, use segmentação por idioma, país e dispositivo para reduzir fricção no cadastro."
      },
      {
        title: "Comparação com alternativas",
        body: "Use IQ Option para capturar intenção de marca, mas mantenha alternativas atualizadas caso a oferta esteja limitada para o usuário."
      },
      {
        title: "Atualização recorrente",
        body: "Revise comissão, entidade, contrato e status regional com frequência, porque dados antigos podem gerar conteúdo enganoso."
      }
    ],
    commissionRows: [
      { label: "Modelo", value: "CPA, RevShare ou híbrido por região", note: "Disponibilidade depende da oferta ativa e do canal de parceiro." },
      { label: "RevShare citado", value: "Até 50%", note: "Precisa ser validado junto com produto, país e regras atuais." },
      { label: "Ponto crítico", value: "Migração para Affstore", note: "A página deve explicar a transição e evitar instruções desatualizadas." },
      { label: "Melhor uso", value: "SEO de marca e comparação", note: "Boa para usuários que já pesquisam IQ Option e precisam de contexto atualizado." }
    ],
    faq: [
      {
        question: "IQ Option ainda tem programa de afiliados?",
        answer:
          "A marca informa migração para Affstore em canais oficiais. Por isso, o afiliado deve confirmar o canal de inscrição, os países aceitos e a oferta disponível antes de promover."
      },
      {
        question: "IQ Option paga CPA ou RevShare?",
        answer:
          "Pode haver CPA, RevShare ou modelos híbridos conforme região e oferta. Não use números antigos sem validação no programa oficial."
      },
      {
        question: "Vale criar conteúdo sobre IQ Option afiliados?",
        answer:
          "Sim, pela intenção de busca de marca, desde que o conteúdo deixe claro status atual, limitações regionais e alternativas comparáveis."
      }
    ]
  },
  "olymp-trade-affiliate-program": {
    primaryKeyword: "programa de afiliados Olymp Trade",
    secondaryKeywords: ["Kingfin parceiros", "Olymp Trade afiliados", "Kingfin Partners", "afiliado Olymp Trade"],
    metaTitle: "Olymp Trade programa de afiliados: Kingfin, CPA e RevShare",
    metaDescription:
      "Análise PT-BR do programa de afiliados Olymp Trade via Kingfin: RevShare, CPA, indicação, híbrido, pagamentos, tráfego e compliance.",
    h1: "Olymp Trade programa de afiliados: análise da Kingfin Partners",
    quickAnswer:
      "O programa de afiliados da Olymp Trade é apresentado pela Kingfin Partners e combina RevShare, CPA, indicação, híbrido e planos personalizados. É uma opção flexível para afiliados de trading, mas exige confirmação de países aceitos, termos de pagamento, regras de Telegram/social e limites por método.",
    integrationSteps: [
      {
        title: "Cadastro na Kingfin Partners",
        body: "Use o canal oficial da Olymp Trade/Kingfin, informe sua fonte de tráfego e aguarde aprovação antes de usar marca e materiais."
      },
      {
        title: "Escolha do modelo comercial",
        body: "Compare RevShare, CPA, indicação, híbrido e personalizado conforme seu canal. Tráfego pago tende a precisar de previsibilidade; comunidade pode preferir recorrência."
      },
      {
        title: "Materiais, bots e tracking",
        body: "A Kingfin destaca materiais prontos e bots de Telegram. Valide como cada recurso rastreia conversão e quais regras se aplicam."
      },
      {
        title: "Pagamentos e limites",
        body: "Confirme métodos, frequência, limites e moeda antes de projetar ROI ou prometer qualquer prazo para sua equipe."
      },
      {
        title: "Compliance de criativos",
        body: "Evite promessa de lucro, uso inadequado de marca e mensagens agressivas em Telegram ou influenciadores."
      }
    ],
    commissionRows: [
      { label: "Modelos", value: "RevShare, CPA, indicação, híbrido e personalizado", note: "Flexibilidade é o principal diferencial editorial." },
      { label: "RevShare", value: "Até 80% segundo página oficial", note: "Confirme critérios e aplicação por mercado." },
      { label: "CPA", value: "Até US$250 segundo página oficial", note: "Valor real depende de acordo, país e qualidade do lead." },
      { label: "Indicação", value: "Até 7%", note: "Pode ser útil para redes, mas precisa de termos claros." }
    ],
    faq: [
      {
        question: "Kingfin é o programa de afiliados da Olymp Trade?",
        answer:
          "A Olymp Trade apresenta a Kingfin Partners como seu programa de parceria. O afiliado deve usar fontes oficiais e confirmar termos antes de publicar dados de comissão."
      },
      {
        question: "Olymp Trade afiliados paga CPA ou RevShare?",
        answer:
          "A Kingfin comunica RevShare, CPA, indicação, híbrido e planos personalizados. A melhor escolha depende da fonte de tráfego, retenção e negociação."
      },
      {
        question: "Kingfin vale para afiliados brasileiros?",
        answer:
          "Pode ser relevante para quem trabalha com trading e comunidades, mas é essencial validar disponibilidade, regras de mídia, métodos de pagamento e aviso de risco."
      }
    ]
  },
  "deriv-affiliate-program": {
    primaryKeyword: "programa de afiliados Deriv",
    secondaryKeywords: ["Deriv afiliados", "Deriv parceiros", "Deriv affiliate", "Deriv Master Partner", "Deriv API afiliados"],
    metaTitle: "Deriv programa de afiliados: opções, CFDs, API e parceiros",
    metaDescription:
      "Análise PT-BR do programa de afiliados Deriv: opções, CFDs, API, Master Partner, RevShare, volume, pagamentos e melhores fontes de tráfego.",
    h1: "Deriv programa de afiliados: análise para parceiros e comunidades",
    quickAnswer:
      "O programa de afiliados Deriv é mais amplo que uma oferta simples de CPA: envolve opções, CFDs, API e estrutura de Master Partner. Ele pode funcionar bem para comunidades, conteúdo técnico e redes de parceiros, mas o afiliado precisa separar produtos, regras de pagamento e riscos por tipo de usuário.",
    integrationSteps: [
      {
        title: "Definição do produto promovido",
        body: "Separe opções, CFDs, API e parceria de rede. Cada produto tem público, risco, métrica e argumento comercial diferente."
      },
      {
        title: "Cadastro e aprovação de parceiro",
        body: "Preencha o canal oficial, descreva sua audiência e confirme se o modelo de afiliado ou Master Partner se aplica ao seu caso."
      },
      {
        title: "Links por produto e canal",
        body: "Crie rotas separadas para conteúdo técnico, comunidade, YouTube, SEO e subparceiros. Isso reduz mistura de dados e facilita otimização."
      },
      {
        title: "Relatórios por receita e volume",
        body: "Monitore receita por produto, atividade de trading, qualidade de subparceiros e reversões em vez de olhar apenas cadastros."
      },
      {
        title: "Aviso de risco e governança",
        body: "CFDs e opções exigem risco visível. Para Master Partner, crie onboarding de compliance para subparceiros."
      }
    ],
    commissionRows: [
      { label: "Produtos", value: "Opções, CFDs, API e Master Partner", note: "A comparação precisa separar cada frente para não distorcer ROI." },
      { label: "Modelo", value: "Comissão por atividade/produto", note: "Confirme cálculo atual no programa oficial antes de publicar projeções." },
      { label: "Diferencial", value: "API e comunidades técnicas", note: "Pode atrair desenvolvedores, bots e audiência mais avançada." },
      { label: "Ponto crítico", value: "Subparceiros e compliance", note: "Recrutar parceiros exige controle de fontes e mensagens comerciais." }
    ],
    faq: [
      {
        question: "Como funciona o programa de afiliados Deriv?",
        answer:
          "A Deriv oferece oportunidades para parceiros em diferentes produtos, incluindo opções, CFDs, API e estruturas de rede. O afiliado deve confirmar produto, comissão e regras no canal oficial."
      },
      {
        question: "Deriv é bom para comunidades e desenvolvedores?",
        answer:
          "Pode ser, especialmente quando há conteúdo técnico, API, bots ou comunidade de trading. Ainda assim, é necessário separar risco e métricas por produto."
      },
      {
        question: "Deriv Master Partner é igual a sub-afiliado?",
        answer:
          "É uma estrutura voltada a recrutar e gerir parceiros, mas os termos precisam ser validados com a Deriv. Não trate como renda passiva garantida."
      }
    ]
  },
  "kucoin-affiliate-program": {
    primaryKeyword: "programa de afiliados KuCoin",
    secondaryKeywords: ["KuCoin afiliados", "KuCoin affiliate", "KuCoin referral", "KuCoin comissão", "KuCoin second-tier"],
    metaTitle: "KuCoin programa de afiliados: comissão, pagamentos e análise",
    metaDescription:
      "Análise PT-BR do programa de afiliados KuCoin: até 60% de comissão, pagamentos diários, second-tier, elegibilidade, tráfego e cuidados para Brasil.",
    h1: "KuCoin programa de afiliados: análise, comissão e pagamentos",
    quickAnswer:
      "O programa de afiliados KuCoin pode ser forte para creators, comunidades e sites cripto porque combina até 60% de comissão, pagamentos diários e estrutura multi-tier. Para o público brasileiro, o ponto crítico é confirmar país, entidade contratante, produtos elegíveis e regras locais antes de escalar campanhas.",
    integrationSteps: [
      {
        title: "Aplicação e validação da audiência",
        body: "A página oficial informa que criadores, comunidades, sites cripto e organizações podem se candidatar. Antes de aplicar, organize links da sua audiência, alcance e histórico de conteúdo."
      },
      {
        title: "Definição do produto e do funil",
        body: "Separe campanhas para spot e futures porque o perfil de usuário, a comunicação de risco e o potencial de retenção podem mudar bastante."
      },
      {
        title: "Links e incentivos por canal",
        body: "A KuCoin diz que o afiliado pode criar links especiais com incentivos para os convidados. Use isso para distinguir creators, comunidade, SEO e mídia proprietária."
      },
      {
        title: "Medição de KYC, primeiro trade e trader ativo",
        body: "A comissão vem da negociação. Não basta medir cadastro: acompanhe volume, recorrência, aprovação e receita líquida por fonte."
      },
      {
        title: "Checagem de país e compliance",
        body: "A própria página diz que disponibilidade e termos podem variar por país ou região. Confirme a entidade contratante e as regras locais antes de prometer encaixe para Brasil."
      }
    ],
    commissionRows: [
      { label: "Modelo principal", value: "Comissão sobre taxas de spot e futures", note: "A página oficial fala em até 60%, mas o retorno real depende da atividade do usuário." },
      { label: "Pagamento", value: "Diário", note: "Bom para caixa, mas confirme moeda, saque e reconciliação dentro do painel." },
      { label: "Sub-afiliados", value: "Comissões de segundo nível", note: "Útil para operar com rede, desde que haja controle de compliance e atribuição." },
      { label: "Ponto crítico", value: "Disponibilidade por país", note: "A KuCoin avisa que termos e disponibilidade variam por país ou região." }
    ],
    faq: [
      {
        question: "Como funciona o programa de afiliados KuCoin?",
        answer:
          "O afiliado recebe comissão quando usuários convidados negociam spot ou futures na KuCoin. A página oficial também destaca pagamentos diários, links especiais e comissões de segundo nível."
      },
      {
        question: "KuCoin paga quanto para afiliados?",
        answer:
          "A página oficial informa até 60% de comissão sobre taxas de negociação. O valor real depende do produto, da atividade do usuário e dos termos vigentes no seu país ou região."
      },
      {
        question: "KuCoin vale para afiliados brasileiros?",
        answer:
          "Pode valer para audiência cripto qualificada, mas a própria KuCoin avisa que disponibilidade e termos variam por país ou região. Antes de promover, confirme entidade contratante, produtos elegíveis e regras locais."
      }
    ]
  }
};

export const reviewSeoEnhancements: Record<string, ReviewSeoEnhancement> = Object.fromEntries(
  programs.map((program) => [
    program.slug,
    {
      moneySection: `${program.name} monetiza o afiliado principalmente por ${program.payoutModel}. Para avaliar se vale a pena, compare a comissão anunciada com critérios de qualificação, prazo de pagamento, países aceitos e qualidade do relatório pós-FTD.`,
      funnelExample: [
        `Criar uma página editorial explicando ${program.name}, riscos e termos principais.`,
        "Adicionar comparação com 2 ou 3 alternativas para capturar usuários em decisão.",
        "Nutrir o usuário com guia de CPA/RevShare antes do clique final para o programa.",
        "Medir clique, cadastro, FTD, trader qualificado e pagamento líquido separadamente."
      ],
      whiteLabelAlternative:
        "Se sua audiência já gera FTDs previsíveis, a decisão deixa de ser apenas qual programa promover. Nesse estágio, vale comparar a comissão de terceiros com a possibilidade de lançar uma marca própria usando uma solução white label.",
      faq: [
        {
          question: `${program.name} é um bom programa para afiliados no Brasil?`,
          answer:
            "Pode ser, desde que Brasil ou LATAM estejam aceitos nos termos atuais e que a fonte de tráfego respeite as regras de compliance."
        },
        {
          question: `Como ganhar dinheiro com ${program.name} como afiliado?`,
          answer:
            "O afiliado precisa gerar usuários qualificados, acompanhar critérios de FTD/trader ativo e otimizar por pagamento líquido, não apenas por cadastro."
        },
        {
          question: `Quais métricas acompanhar em ${program.name}?`,
          answer:
            "Acompanhe clique, cadastro, FTD, trader qualificado, aprovação, pagamento líquido, reversões e receita por fonte. Em tráfego pago, compare esses dados com CAC e período de validação."
        },
        {
          question: `${program.name} permite tráfego pago, SEO ou comunidades?`,
          answer:
            "As fontes permitidas dependem dos termos atuais do programa. Antes de escalar, confirme regras para SEO, YouTube, Telegram, influenciadores, anúncios pagos e compra de palavras-chave de marca."
        }
      ]
    }
  ])
);

export type GuideSeoEnhancement = {
  expandedSections: Array<{ title: string; body: string }>;
  internalLinks: Array<{ label: string; href: string }>;
  faq?: FaqContent[];
};

const guideInternalLinks: Record<string, Array<{ label: string; href: string }>> = {
  "seo-para-afiliados-forex": [
    { label: "Programa de afiliados forex", href: "/programas/programa-de-afiliados-forex" },
    { label: "CPA forex", href: "/programas/melhores-programas-afiliados-cpa-forex" },
    { label: "Exness vs XM", href: "/guias/exness-vs-xm-afiliados" }
  ],
  "como-negociar-cpa-com-broker": [
    { label: "CPA forex", href: "/programas/melhores-programas-afiliados-cpa-forex" },
    { label: "FTD e qualificação", href: "/guias/ftd-trader-ativo-e-qualificacao" },
    { label: "Métricas essenciais", href: "/guias/metricas-essenciais-broker-afiliados" }
  ],
  "ftd-trader-ativo-e-qualificacao": [
    { label: "Métricas essenciais", href: "/guias/metricas-essenciais-broker-afiliados" },
    { label: "Negociar CPA", href: "/guias/como-negociar-cpa-com-broker" },
    { label: "CPA vs RevShare", href: "/guias/cpa-vs-revshare-vs-hybrid" }
  ],
  "exness-vs-xm-afiliados": [
    { label: "Review Exness", href: "/reviews/exness-affiliate-program" },
    { label: "Review XM", href: "/reviews/xm-affiliate-program" },
    { label: "Programas forex", href: "/programas/melhores-programas-afiliados-forex" }
  ],
  "pocket-option-vs-quotex-afiliados": [
    { label: "Programa de afiliados Pocket Option", href: "/reviews/pocket-option-affiliate-program" },
    { label: "Programa de afiliados Quotex", href: "/reviews/quotex-affiliate-program" },
    { label: "Opções digitais", href: "/programas/programas-afiliados-opcoes-digitais" }
  ],
  "binance-vs-okx-afiliados": [
    { label: "Review Binance", href: "/reviews/binance-affiliate-program" },
    { label: "Review OKX", href: "/reviews/okx-affiliate-program" },
    { label: "Programas cripto e fintech", href: "/programas/programas-afiliados-cripto-fintech" },
    { label: "Métricas essenciais", href: "/guias/metricas-essenciais-broker-afiliados" }
  ]
};

const guideFaqs: Record<string, FaqContent[]> = {
  "seo-para-afiliados-forex": [
    {
      question: "Quais páginas SEO um afiliado forex deve priorizar?",
      answer:
        "Priorize rankings comerciais, reviews de marcas, comparativos entre programas e guias sobre CPA, RevShare, FTD, compliance e fontes de tráfego."
    },
    {
      question: "SEO para afiliados forex funciona no Brasil?",
      answer:
        "Pode funcionar, principalmente em consultas long-tail e comparativas. O conteúdo precisa estar em português do Brasil, com fontes oficiais, atualização e avisos de risco."
    }
  ],
  "como-negociar-cpa-com-broker": [
    {
      question: "Que dados ajudam a negociar CPA melhor?",
      answer:
        "FTD por país, taxa de aprovação, atividade do trader, fonte de tráfego, histórico sem fraude e exemplos de criativos aprovados."
    },
    {
      question: "CPA alto sempre é melhor?",
      answer:
        "Não. CPA alto pode ter critérios rígidos, hold longo, reversões ou volume mínimo. Compare o CPA líquido depois da validação."
    }
  ],
  "ftd-trader-ativo-e-qualificacao": [
    {
      question: "FTD sempre gera comissão?",
      answer:
        "Nem sempre. Muitos programas exigem depósito mínimo, volume de trading, KYC aprovado e ausência de fraude antes de pagar."
    },
    {
      question: "Como melhorar a qualidade do FTD?",
      answer:
        "Use conteúdo educativo, segmente por intenção, filtre tráfego curioso e explique risco antes de enviar o usuário ao programa."
    }
  ],
  "exness-vs-xm-afiliados": [
    {
      question: "Exness ou XM é melhor para afiliados brasileiros?",
      answer:
        "Depende do canal. Exness tende a ser mais objetiva para CPA por região; XM pode ser interessante para conteúdo forex, marca e sub-afiliados. Confirme termos atuais."
    },
    {
      question: "Posso promover os dois programas no mesmo site?",
      answer:
        "Sim, desde que as comparações sejam claras, as fontes estejam atualizadas e você não faça afirmações de disponibilidade sem validação."
    }
  ],
  "pocket-option-vs-quotex-afiliados": [
    {
      question: "Pocket Option ou Quotex paga mais?",
      answer:
        "O pagamento real depende de nível, FTD, retenção, fonte de tráfego e regras atuais. Compare RevShare efetivo, não apenas o percentual máximo."
    },
    {
      question: "Esses programas são adequados para tráfego brasileiro?",
      answer:
        "Somente após validar termos atuais, países aceitos e regras de mídia. O conteúdo deve deixar risco claro e evitar promessa de lucro."
    }
  ],
  "binance-vs-okx-afiliados": [
    {
      question: "Binance ou OKX é melhor para afiliados brasileiros?",
      answer:
        "Depende do seu canal e do produto que você quer promover. Binance publica critérios de elegibilidade mais objetivos; OKX destaca suporte, campanhas e sub-afiliados. Em ambos os casos, confirme país, KYC e produtos elegíveis antes de estimar receita para Brasil."
    },
    {
      question: "As duas exchanges pagam a mesma comissão?",
      answer:
        "Não necessariamente. As duas comunicam teto de até 50%, mas a mecânica real depende do produto, da revisão de elegibilidade, do tipo de audiência e das regras comerciais vigentes."
    }
  ]
};

export const guideSeoEnhancements: Record<string, GuideSeoEnhancement> = Object.fromEntries(
  guides.map((guide) => [
    guide.slug,
    {
      expandedSections: guide.sections.map((section, index) => ({
        title: ["Contexto e intenção", "Como aplicar na prática", "Erros que reduzem ROI"][index] ?? "Próximo passo",
        body: `${section} Para transformar isso em tráfego qualificado, conecte a orientação a uma página de comparação, use exemplos reais de programas e registre fontes oficiais antes de publicar números de comissão.`
      })),
      internalLinks: guideInternalLinks[guide.slug] ?? [
        { label: "Comparar programas forex", href: "/programas/programa-de-afiliados-forex" },
        { label: "Ver programas para brokers", href: "/programas/programa-de-afiliados-broker" },
        { label: "Entender white label", href: "/white-label/solucao-white-label-para-broker" }
      ],
      faq: guideFaqs[guide.slug] ?? [
        {
          question: `Como aplicar ${guide.keyword} em um site de afiliados?`,
          answer:
            "Transforme o tema em uma página prática, conecte com rankings e reviews relevantes, cite fontes oficiais e acompanhe métricas como FTD, pagamento líquido e qualidade do tráfego."
        }
      ]
    }
  ])
);
