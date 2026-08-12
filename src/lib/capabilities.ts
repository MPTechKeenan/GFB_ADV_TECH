export type Capability = {
  id: string;
  title: string;
  summary: string;
  details: string[];
};

/** Four primary capability areas featured on the homepage. */
export const homeCapabilities = [
  {
    title: "Enterprise Data Architecture",
    summary:
      "Enterprise data models, information exchanges, data standards, and integration strategy for complex system landscapes.",
  },
  {
    title: "Data Engineering & Analytics",
    summary:
      "Data pipelines, transformation, integration, and reporting that support mission analysis and decision-making.",
  },
  {
    title: "Data Governance & Quality",
    summary:
      "Governance frameworks, business rules, metadata, master data, and quality controls that make data trustworthy.",
  },
  {
    title: "AI & Automation",
    summary:
      "AI-assisted document and policy analysis, requirements extraction, and LLM-enabled workflows with human oversight.",
  },
] as const;

export const capabilities: Capability[] = [
  {
    id: "enterprise-data-architecture",
    title: "Enterprise Data Architecture",
    summary:
      "Structured approaches to enterprise data models, information exchanges, and integration strategy across complex environments.",
    details: [
      "Enterprise and solution data architecture development",
      "Information exchange design and standards alignment",
      "Data integration strategy and roadmap planning",
      "Architecture documentation for mission and engineering teams",
    ],
  },
  {
    id: "data-engineering",
    title: "Data Engineering",
    summary:
      "Reliable pipelines and platforms that move, transform, and prepare data for analytics and operational use.",
    details: [
      "Batch and streaming data pipeline design and implementation",
      "ETL/ELT workflows and orchestration",
      "Data platform engineering and operational support",
      "Performance tuning and pipeline reliability improvements",
    ],
  },
  {
    id: "data-integration",
    title: "Data Integration",
    summary:
      "Connecting disparate systems, formats, and sources into coherent, mission-relevant data flows.",
    details: [
      "System-to-system and API-based integration patterns",
      "Legacy and modern platform connectivity",
      "Schema mapping and transformation logic",
      "Integration testing and operational handoff support",
    ],
  },
  {
    id: "data-governance",
    title: "Data Governance",
    summary:
      "Frameworks and practices that define ownership, standards, and accountability for enterprise data.",
    details: [
      "Governance operating models and role definitions",
      "Policy and standards development support",
      "Data stewardship workflows and escalation paths",
      "Governance tooling and process alignment",
    ],
  },
  {
    id: "data-quality",
    title: "Data Quality",
    summary:
      "Controls and monitoring that improve trust in data used for decisions, reporting, and mission operations.",
    details: [
      "Data quality rule definition and implementation",
      "Profiling, monitoring, and exception handling",
      "Reconciliation and validation workflows",
      "Quality metrics and reporting for stakeholders",
    ],
  },
  {
    id: "master-data-management",
    title: "Master Data Management",
    summary:
      "Consistent golden records and reference data across systems that depend on shared entities.",
    details: [
      "Master data domain identification and modeling",
      "Match, merge, and survivorship rule design",
      "Reference data management approaches",
      "MDM workflow and integration support",
    ],
  },
  {
    id: "data-modeling",
    title: "Data Modeling",
    summary:
      "Logical and physical models that reflect mission concepts, systems, and reporting needs.",
    details: [
      "Conceptual, logical, and physical model development",
      "Entity relationship and dimensional modeling",
      "Model standards and naming conventions",
      "Model documentation for engineering and analytics teams",
    ],
  },
  {
    id: "business-intelligence-analytics",
    title: "Business Intelligence & Analytics",
    summary:
      "Reporting and analytics solutions that turn governed data into actionable insight.",
    details: [
      "Dashboard and report design for mission stakeholders",
      "Metrics definition and KPI frameworks",
      "Analytics layer development and optimization",
      "Self-service reporting enablement where appropriate",
    ],
  },
  {
    id: "ai-llm-solutions",
    title: "AI / LLM Solutions",
    summary:
      "Practical AI and large language model workflows applied to document-heavy federal processes.",
    details: [
      "AI-assisted document and policy analysis workflows",
      "Requirements and business rule extraction support",
      "LLM-enabled automation with human-in-the-loop controls",
      "Use-case assessment and responsible implementation guidance",
    ],
  },
  {
    id: "requirements-business-rules",
    title: "Requirements & Business Rule Extraction",
    summary:
      "Structured extraction of requirements and rules from policies, regulations, and source documents.",
    details: [
      "Policy and document ingestion workflows",
      "Requirements traceability support",
      "Business rule cataloging and validation",
      "Structured outputs for engineering and compliance teams",
    ],
  },
  {
    id: "federal-dod-modernization",
    title: "Federal / DoD Data Modernization",
    summary:
      "Data modernization support aligned to federal and defense mission priorities and constraints.",
    details: [
      "Legacy-to-modern data migration planning",
      "Mission data environment assessments",
      "Modernization roadmap and phased delivery support",
      "Alignment with federal data and architecture practices",
    ],
  },
  {
    id: "technical-advisory",
    title: "Technical Advisory Services",
    summary:
      "Independent technical guidance for leaders navigating complex data and technology decisions.",
    details: [
      "Architecture and platform advisory",
      "Technical assessments and option analysis",
      "Implementation planning and delivery support",
      "Stakeholder workshops and decision documentation",
    ],
  },
];
