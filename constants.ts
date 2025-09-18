import React from 'react';
import { Proposal } from './types';
import {
  ProcessMapIcon, ChecklistIcon, DashboardIcon, KioskIcon, WebAppIcon, WebsiteIcon,
  PackageIcon, CalendarIcon, TrainingIcon, CampaignIcon, PolicyIcon, AiIcon,
  ShieldCheckIcon, SparklesIcon, TrendingUpIcon, TargetIcon, UsersIcon,
  SalesDashboardIcon, FinancialDashboardIcon, FlowChartIcon, SealIcon, EyeIcon,
  SmileyIcon, StarIcon, GearsIcon, ChatBubbleIcon, BrokenChainIcon, CashIcon,
  MagnetIcon, SproutIcon, DiamondIcon, HeartIcon, TagIcon, RocketIcon, LightbulbIcon,
  CleaningIcon, CheckinIcon, DirectBookingIcon, ExperienceIcon, RevenueIcon,
  PainPointIcon, AwardIcon, ThumbsUpIcon, ShieldDollarIcon, ClockIcon, TrendingDownIcon, RepeatIcon,
  CpuChipIcon, DataVisualizationIcon
} from './components/icons';

export const PROPOSALS: Proposal[] = [
  {
    id: 1,
    icon: CleaningIcon,
    title: "Optimización de Limpieza y Mantenimiento con Control Digital",
    impactClaim: "–70% quejas en 3 meses",
    executiveSummary: {
      mainGoal: "Garantizar la excelencia operativa y la máxima satisfacción del huésped.",
      heroStat: { value: "-70%", label: "Reducción de quejas" },
      points: [
        { title: "Desafío", text: "Gestión manual y reactiva de limpieza que genera inconsistencias y quejas recurrentes.", icon: PainPointIcon },
        { title: "Solución", text: "Implementación de una plataforma digital para estandarizar procesos, automatizar checklists y monitorear incidencias en tiempo real.", icon: LightbulbIcon },
        { title: "Resultado", text: "Operación impecable, reducción drástica de quejas y una mejora sustancial en la reputación online del hotel.", icon: AwardIcon }
      ]
    },
    objective: [
      { text: "Transformar la gestión de Housekeeping y Mantenimiento para asegurar un estándar de calidad superior.", icon: ShieldCheckIcon },
      { text: "Optimizar la eficiencia del personal y proporcionar a la gerencia una visibilidad total y en tiempo real de las operaciones.", icon: TrendingUpIcon }
    ],
    investment: {
      total: "$25,000 - $40,000 MXN",
      usd: "$1,389 - $2,222 USD"
    },
    keyComponents: [
      { title: "Mapeo y Estandarización de Procesos", investment: "$8,000 MXN ($444 USD)", value: React.createElement(React.Fragment, null, "Documentación clara de responsabilidades y frecuencias para ", React.createElement("strong", { className: "font-bold text-copper-metallic" }, "eliminar confusiones"), " y asegurar la ", React.createElement("strong", { className: "font-bold text-copper-metallic" }, "uniformidad en el servicio"), "."), icon: ProcessMapIcon },
      { title: "Digitalización de Controles Operativos", investment: "$10,000 MXN ($556 USD)", value: React.createElement(React.Fragment, null, "Implementación de checklists automáticos y ", React.createElement("strong", { className: "font-bold text-copper-metallic" }, "alertas en tiempo real"), ", garantizando la ", React.createElement("strong", { className: "font-bold text-copper-metallic" }, "supervisión constante"), " y un estándar de ", React.createElement("strong", { className: "font-bold text-copper-metallic" }, "calidad homogéneo"), "."), icon: ChecklistIcon },
      { title: "Tablero de Gestión de Incidencias en Power BI", investment: "$7,000 - $12,000 MXN ($389 - $667 USD)", value: React.createElement(React.Fragment, null, "Herramienta visual para dar ", React.createElement("strong", { className: "font-bold text-copper-metallic" }, "seguimiento inmediato"), " a incidencias y facilitar la toma de ", React.createElement("strong", { className: "font-bold text-copper-metallic" }, "decisiones rápidas y proactivas"), "."), icon: DashboardIcon }
    ],
    strategicBenefits: [
      { text: "Claridad Operacional: Cada miembro del equipo sabrá exactamente sus tareas, mejorando la coordinación.", icon: FlowChartIcon },
      { text: "Calidad Consistente: La digitalización asegura un estándar de calidad uniforme en todas las habitaciones y áreas.", icon: SealIcon },
      { text: "Transparencia y Reacción Rápida: Visibilidad en tiempo real de las incidencias para actuar de forma rápida y eficiente.", icon: EyeIcon },
      { text: "Reducción Drástica de Quejas: Disminución del 70% en quejas, impactando la reputación y reseñas del hotel.", icon: SmileyIcon }
    ],
    kpis: [
      { metric: "MTTR (Mean Time To Resolution)", description: "Tiempo promedio de resolución de incidencias.", icon: ClockIcon },
      { metric: "% de Suites con Checklist Completado", description: "Indicador de la diligencia y consistencia operativa.", icon: ChecklistIcon },
      { metric: "Calificación de Limpieza en Reseñas", description: "Impacto directo en plataformas como Booking o Google.", icon: StarIcon }
    ],
    beforeAfter: {
      before: {
        title: "Antes: Operación Reactiva",
        points: ["Procesos manuales y poco claros", "Calidad inconsistente entre áreas", "Reacción lenta a incidencias", "Quejas frecuentes de huéspedes"]
      },
      after: {
        title: "Después: Gestión Proactiva Digital",
        points: ["Procesos estandarizados y digitales", "Calidad homogénea garantizada", "Visibilidad y acción en tiempo real", "Satisfacción del huésped elevada"]
      }
    }
  },
  {
    id: 2,
    icon: CheckinIcon,
    title: "Digitalización del Check-in y Experiencia de Huésped",
    impactClaim: "–40% tiempo de espera en recepción",
    executiveSummary: {
        mainGoal: "Revolucionar la experiencia de llegada y la comunicación con el huésped.",
        heroStat: { value: "-40%", label: "Tiempo de espera en recepción" },
        points: [
          { title: "Desafío", text: "Procesos de check-in lentos, filas en recepción y comunicación fragmentada que frustran al huésped desde el primer momento.", icon: PainPointIcon },
          { title: "Solución", text: "Kioscos de auto check-in y un portal digital unificado para que los huéspedes gestionen todas sus solicitudes desde su móvil.", icon: LightbulbIcon },
          { title: "Resultado", text: "Una bienvenida moderna, eficiente y una estancia sin fricciones que eleva la satisfacción y genera mejores reseñas.", icon: AwardIcon }
        ]
    },
    objective: [
        { text: "Transformar la experiencia del huésped desde su llegada hasta su salida.", icon: SparklesIcon },
        { text: "Optimizar la eficiencia operativa del personal y mejorar la satisfacción del cliente a través de soluciones digitales.", icon: UsersIcon }
    ],
    investment: {
      total: "$25,000 - $40,000 MXN",
      usd: "$1,389 - $2,222 USD"
    },
    keyComponents: [
      { title: "Implementación de Kioscos o Tablets para Check-in/Out", investment: "$10,000 MXN ($556 USD)", value: React.createElement(React.Fragment, null, "Dispositivos para que los huéspedes se ", React.createElement("strong", { className: "font-bold text-copper-metallic" }, "registren y salgan de forma autónoma"), ", reduciendo el tiempo de espera en un ", React.createElement("strong", { className: "font-bold text-copper-metallic" }, "40%"), "."), icon: KioskIcon },
      { title: "Desarrollo de un Portal Digital del Huésped (Web/App)", investment: "$8,000 MXN ($444 USD)", value: React.createElement(React.Fragment, null, React.createElement("strong", { className: "font-bold text-copper-metallic" }, "Canal único"), " para que los huéspedes gestionen solicitudes y accedan a servicios, ", React.createElement("strong", { className: "font-bold text-copper-metallic" }, "centralizando la comunicación"), "."), icon: WebAppIcon },
      { title: "Tablero de Feedback del Huésped en Power BI", investment: "$5,000 - $10,000 MXN ($278 - $556 USD)", value: React.createElement(React.Fragment, null, "Tablero visual que muestra la ", React.createElement("strong", { className: "font-bold text-copper-metallic" }, "satisfacción en tiempo real"), " para identificar áreas de mejora y ", React.createElement("strong", { className: "font-bold text-copper-metallic" }, "actuar de inmediato"), "."), icon: DashboardIcon }
    ],
    strategicBenefits: [
      { text: "Experiencia del Huésped Superior: Menos espera en recepción y comunicación simplificada.", icon: StarIcon },
      { text: "Eficiencia del Personal: El staff se dedica a la atención personalizada, no a procesos manuales.", icon: GearsIcon },
      { text: "Mejora en la Reputación Online: La agilidad del servicio se traduce en mejores calificaciones y reseñas.", icon: ShieldCheckIcon },
      { text: "Feedback Proactivo: Capacidad de actuar sobre la retroalimentación en tiempo real para la mejora continua.", icon: ChatBubbleIcon }
    ],
    kpis: [
      { metric: "Tiempo Promedio de Check-in", description: "Medición en minutos para completar la llegada.", icon: ClockIcon },
      { metric: "% de Solicitudes Atendidas < 15 Minutos", description: "Velocidad de respuesta del staff.", icon: TrendingUpIcon },
      { metric: "Calificación Promedio de Servicio", description: "Promedio específico sobre la atención en Booking/TripAdvisor.", icon: ThumbsUpIcon }
    ],
    beforeAfter: {
        before: {
          title: "Antes: Proceso Tradicional",
          points: ["Filas y esperas en recepción", "Comunicación fragmentada", "Feedback reactivo post-estancia", "Personal ocupado en tareas repetitivas"]
        },
        after: {
          title: "Después: Experiencia Digital Fluida",
          points: ["Check-in autónomo y rápido", "Portal centralizado para servicios", "Feedback en tiempo real para acción inmediata", "Personal enfocado en el valor al huésped"]
        }
    }
  },
  {
    id: 3,
    icon: DirectBookingIcon,
    title: "Potenciación Comercial y Aumento de Reservas Directas",
    impactClaim: "+15% reservas directas en 12 meses",
    executiveSummary: {
        mainGoal: "Maximizar la rentabilidad y el control sobre sus canales de venta.",
        heroStat: { value: "+15%", label: "Reservas directas" },
        points: [
          { title: "Desafío", text: "Alta dependencia en OTAs que reduce márgenes de ganancia y limita la relación directa y la lealtad del cliente.", icon: PainPointIcon },
          { title: "Solución", text: "Un sitio web potente con motor de reservas optimizado y paquetes de valor exclusivos para atraer al cliente directo.", icon: LightbulbIcon },
          { title: "Resultado", text: "Mayor rentabilidad por ahorro en comisiones, independencia comercial y una base de clientes leales y recurrentes.", icon: AwardIcon }
        ]
    },
    objective: [
        { text: "Rediseñar y optimizar la estrategia comercial para generar un flujo constante de reservas directas.", icon: TargetIcon },
        { text: "Construir relaciones más sólidas con segmentos de mercado clave.", icon: UsersIcon },
        { text: "Incrementar la rentabilidad y el control sobre sus ingresos.", icon: TrendingUpIcon }
    ],
    investment: {
      total: "$30,000 - $50,000 MXN",
      usd: "$1,667 - $2,778 USD"
    },
    keyComponents: [
      { title: "Rediseño Web Estratégico con Motor de Reservas y SEO Local", investment: "$15,000 MXN ($833 USD)", value: React.createElement(React.Fragment, null, "Sitio web de última generación, optimizado para SEO local, que ", React.createElement("strong", { className: "font-bold text-copper-metallic" }, "captará clientes directamente"), " y ", React.createElement("strong", { className: "font-bold text-copper-metallic" }, "reducirá la dependencia de las OTAs"), "."), icon: WebsiteIcon },
      { title: "Desarrollo de Paquetes de Estancia por Segmento", investment: "$10,000 MXN ($556 USD)", value: React.createElement(React.Fragment, null, "Diseño de ", React.createElement("strong", { className: "font-bold text-copper-metallic" }, "propuestas de valor claras y atractivas"), " para mercados específicos (corporativos, turismo médico, nómadas digitales)."), icon: PackageIcon },
      { title: "Implementación de Tableros de Ventas Estratégicos", investment: "$5,000 - $10,000 MXN ($278 - $556 USD)", value: React.createElement(React.Fragment, null, "Tablero de control que mostrará ", React.createElement("strong", { className: "font-bold text-copper-metallic" }, "en tiempo real"), " la ocupación por canal (OTA vs directo), brindando ", React.createElement("strong", { className: "font-bold text-copper-metallic" }, "inteligencia de negocio"), "."), icon: SalesDashboardIcon }
    ],
    strategicBenefits: [
      { text: "Independencia de OTAs: Reducción de la dependencia en un 15%, resultando en menores comisiones.", icon: BrokenChainIcon },
      { text: "Ingresos Predecibles y Estables: Creación de convenios directos para una base de ingresos más sólida.", icon: CashIcon },
      { text: "Mayor Visibilidad y Atractivo: Una web optimizada mejorará su posición en búsquedas y atraerá más tráfico orgánico.", icon: MagnetIcon },
      { text: "Crecimiento Sostenible: La captación directa de clientes impulsa un crecimiento más rentable a largo plazo.", icon: SproutIcon }
    ],
    kpis: [
      { metric: "% de Reservas Directas vs OTA", description: "Proporción de clientes que reservan directamente.", icon: TrendingUpIcon },
      { metric: "Ingresos por Segmento", description: "Contribución de cada mercado clave a sus ingresos totales.", icon: SalesDashboardIcon },
      { metric: "CAC (Customer Acquisition Cost)", description: "Costo de adquisición de un cliente.", icon: TrendingDownIcon }
    ],
     beforeAfter: {
        before: {
          title: "Antes: Dependencia de Terceros",
          points: ["Altas comisiones a OTAs", "Poco control sobre el cliente final", "Competencia directa en plataformas", "Márgenes de ganancia reducidos"]
        },
        after: {
          title: "Después: Canal Directo Fortalecido",
          points: ["Ahorro en comisiones", "Relación directa y lealtad del cliente", "Marca con posicionamiento propio", "Rentabilidad maximizada"]
        }
    }
  },
  {
    id: 4,
    icon: ExperienceIcon,
    title: "Posicionamiento con Experiencias Diferenciadas 'Vive lo Europeo'",
    impactClaim: "Conviértase en un referente cultural",
    executiveSummary: {
        mainGoal: "Convertir el hotel de un simple alojamiento a un destino cultural memorable.",
        heroStat: { value: "Top 1", label: "Referente cultural en la zona" },
        points: [
          { title: "Desafío", text: "Competencia basada en precio en un mercado saturado de ofertas de alojamiento estándar y sin diferenciación.", icon: PainPointIcon },
          { title: "Solución", text: "Creación de un calendario de experiencias culturales 'Vive lo Europeo' únicas y exclusivas para huéspedes y visitantes.", icon: LightbulbIcon },
          { title: "Resultado", text: "Posicionamiento de marca premium, justificación de tarifas más altas y atracción de un público de alto valor.", icon: AwardIcon }
        ]
    },
    objective: [
        { text: "Posicionar el hotel como un destino que va más allá de un simple alojamiento.", icon: TargetIcon },
        { text: "Ofrecer vivencias inmersivas que conecten con la cultura europea.", icon: SparklesIcon },
        { text: "Atraer a un segmento de mercado dispuesto a pagar más por una experiencia diferenciada.", icon: UsersIcon }
    ],
    investment: {
      total: "$30,000 - $50,000 MXN",
      usd: "$1,667 - $2,778 USD"
    },
    keyComponents: [
      { title: "Diseño Estratégico de Calendario de Experiencias", investment: "$10,000 MXN ($556 USD)", value: React.createElement(React.Fragment, null, "Investigación y desarrollo de ", React.createElement("strong", { className: "font-bold text-copper-metallic" }, "12 experiencias temáticas mensuales"), " para una ", React.createElement("strong", { className: "font-bold text-copper-metallic" }, "oferta variada y novedosa"), "."), icon: CalendarIcon },
      { title: "Capacitación del Staff para una Experiencia Auténtica", investment: "$10,000 MXN ($556 USD)", value: React.createElement(React.Fragment, null, "Desarrollo de un ", React.createElement("strong", { className: "font-bold text-copper-metallic" }, "manual de storytelling"), " y capacitación para que el personal ", React.createElement("strong", { className: "font-bold text-copper-metallic" }, "transmita el valor"), " de las experiencias."), icon: TrainingIcon },
      { title: "Campañas Digitales Enfocadas en Arte y Cultura", investment: "$5,000 - $10,000 MXN ($278 - $556 USD)", value: React.createElement(React.Fragment, null, "Creación y gestión de campañas digitales dirigidas a un ", React.createElement("strong", { className: "font-bold text-copper-metallic" }, "público específico interesado en arte, cultura y experiencias únicas"), "."), icon: CampaignIcon }
    ],
    strategicBenefits: [
      { text: "Posicionamiento Premium: Su hotel se convertirá en un referente cultural, permitiendo justificar un precio premium.", icon: DiamondIcon },
      { text: "Diferenciación Sostenible: Una oferta de experiencias únicas es difícil de replicar, otorgando una ventaja competitiva.", icon: SparklesIcon },
      { text: "Lealtad del Huésped: Aumento potencial en la tasa de repetición de visitas y mayor satisfacción general.", icon: HeartIcon },
      { text: "Refuerzo de Marca: Las experiencias culturales enriquecen la narrativa del hotel, creando una marca atractiva.", icon: TagIcon }
    ],
    kpis: [
      { metric: "Tasa de Repetición de Visitas", description: "Incremento en huéspedes recurrentes atraídos por las experiencias.", icon: RepeatIcon },
      { metric: "Gasto Promedio en Experiencias", description: "Ingresos adicionales generados por las actividades culturales.", icon: CashIcon },
      { metric: "Menciones en Medios y Redes", description: "Cobertura mediática y engagement social como referente cultural.", icon: ChatBubbleIcon }
    ],
    beforeAfter: {
        before: {
          title: "Antes: Hotel como Alojamiento",
          points: ["Competencia basada en precio", "Oferta de servicios estándar", "Marca funcional, no aspiracional", "Lealtad de cliente limitada"]
        },
        after: {
          title: "Después: Hotel como Destino",
          points: ["Diferenciación por valor y experiencia", "Oferta única y memorable", "Marca aspiracional y cultural", "Comunidad de huéspedes leales"]
        }
    }
  },
  {
    id: 5,
    icon: RevenueIcon,
    title: "Revenue Management y Optimización Financiera con IA",
    impactClaim: "+20-25% en ingresos en 12 meses",
    executiveSummary: {
        mainGoal: "Implementar una gestión financiera inteligente para maximizar la rentabilidad en cada reserva.",
        heroStat: { value: "+25%", label: "Aumento de ingresos" },
        points: [
          { title: "Desafío", text: "Estrategias de precios estáticas que pierden oportunidades en picos de demanda y sacrifican ingresos en temporadas bajas.", icon: PainPointIcon },
          { title: "Solución", text: "Un sistema de Revenue Management con IA que analiza datos históricos y de mercado para ajustar precios dinámicamente.", icon: LightbulbIcon },
          { title: "Resultado", text: "Optimización de ingresos en cada reserva, mayor RevPAR y una ventaja competitiva sostenible basada en datos.", icon: AwardIcon }
        ]
    },
    objective: [
        { text: "Desarrollar una estrategia de Revenue Management robusta y basada en datos.", icon: TargetIcon },
        { text: "Optimizar ingresos, controlar costos y asegurar un crecimiento financiero sostenido y competitivo.", icon: TrendingUpIcon }
    ],
    investment: {
      total: "$35,000 - $55,000 MXN",
      usd: "$1,944 - $3,056 USD"
    },
    keyComponents: [
      { title: "Definición de Políticas de Revenue Management Inteligentes", investment: "$15,000 MXN ($833 USD)", value: React.createElement(React.Fragment, null, "Establecimiento de ", React.createElement("strong", { className: "font-bold text-copper-metallic" }, "reglas claras y dinámicas de precios"), " que se ", React.createElement("strong", { className: "font-bold text-copper-metallic" }, "ajustarán automáticamente"), " según la temporada, la demanda y el segmento."), icon: PolicyIcon },
      { title: "Implementación de Tableros Financieros en Power BI", investment: "$10,000 MXN ($556 USD)", value: React.createElement(React.Fragment, null, "Creación de ", React.createElement("strong", { className: "font-bold text-copper-metallic" }, "tableros visuales en tiempo real"), " con indicadores clave como ADR y RevPAR para ", React.createElement("strong", { className: "font-bold text-copper-metallic" }, "decisiones informadas"), "."), icon: DataVisualizationIcon },
      { title: "Diseño de Esquemas de RM con Inteligencia Artificial", investment: "$10,000 - $15,000 MXN ($556 - $833 USD)", value: React.createElement(React.Fragment, null, "Desarrollo de ", React.createElement("strong", { className: "font-bold text-copper-metallic" }, "modelos predictivos con IA"), " que analizarán la demanda futura y ayudarán a ", React.createElement("strong", { className: "font-bold text-copper-metallic" }, "ajustar los precios automáticamente"), "."), icon: CpuChipIcon }
    ],
    strategicBenefits: [
      { text: "Aumento Sustancial de Ingresos: Incremento del 20-25% en ingresos totales en 12 meses.", icon: RocketIcon },
      { text: "Estrategia de Precios Ágil: Tarifas dinámicas que se adaptan al mercado para maximizar el potencial de ingresos.", icon: TagIcon },
      { text: "Nuevas Fuentes de Ingresos: Plan estructurado para monetizar servicios adicionales de forma estable.", icon: LightbulbIcon },
      { text: "Control Financiero Robusto: Decisiones basadas en datos, no en intuiciones, mejorando el control de márgenes.", icon: CashIcon }
    ],
    kpis: [
      { metric: "ADR (Average Daily Rate)", description: "Tarifa promedio por habitación ocupada.", icon: TrendingUpIcon },
      { metric: "RevPAR (Revenue per Available Room)", description: "Ingreso promedio total por habitación disponible.", icon: RevenueIcon },
      { metric: "% de Ingresos por Servicios Complementarios", description: "Contribución de extras a los ingresos totales.", icon: SproutIcon },
      { metric: "Margen Operativo Neto", description: "Beneficio real después de cubrir todos los costos operativos.", icon: ShieldDollarIcon }
    ],
    beforeAfter: {
        before: {
          title: "Antes: Precios Estáticos",
          points: ["Tarifas fijas, poca flexibilidad", "Pérdida de oportunidad en alta demanda", "Decisiones basadas en intuición", "Potencial de ingresos no explotado"]
        },
        after: {
          title: "Después: Precios Dinámicos con IA",
          points: ["Precios optimizados en tiempo real", "Maximización de ingresos por demanda", "Decisiones basadas en datos y predicciones", "Ventaja competitiva y rentabilidad"]
        }
    }
  }
];
