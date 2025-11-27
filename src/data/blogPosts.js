export const blogPosts = [
  {
    id: 1,
    title: "Logic Apps – Creating Log Analytics based Alerts and Monitoring",
    excerpt:
      "This blog documents how to create/configure Log Analytics based Alert and Monitoring solutions",
    category: "Azure Monitor",
    date: "August 18, 2023",
    slug: "logicapps-creating-loganalytics-based-alerts-and-monitoring",
    image: new URL('../assets/images/blogs/imgi_40.png', import.meta.url).href,
    content: `
      <h3>Client Overview</h3>
      <p>This walkthrough shows how to create Log Analytics-based alerts and monitoring for Logic Apps to proactively detect failures and performance issues.</p>
      <h3>Background</h3>
      <p>Many teams rely on Logic Apps for integration workflows but lack robust monitoring and alerting to detect failed runs or degraded performance. This guide demonstrates a repeatable approach using Log Analytics.</p>
      <h3>Steps</h3>
      <ol>
        <li>Create a Log Analytics workspace and link your Logic App diagnostics.</li>
        <li>Query diagnostic logs to identify failed runs and latency.</li>
        <li>Create alerts based on Kusto queries and configure action groups.</li>
      </ol>
      <h3>Results</h3>
      <p>Teams gain visibility into workflow health and rapid notification of issues.</p>
    `,
  },
  {
    id: 2,
    title:
      "Bring your own DB (BYOD) with respect to D365 and Export to Data-Lake",
    excerpt:
      "How to export D365 data to a data lake and manage BYOD scenarios when you enable.",
    category: "Azure Data",
    date: "November 18, 2023",
    slug: "bring-your-own-db-byod-d365-export-to-data-lake",
    image: new URL('../assets/images/blogs/imgi_40.png', import.meta.url).href,
    content: `
      <h3>Client Overview</h3>
      <p>Guidance for exporting Dynamics 365 data to a data lake and handling Bring Your Own Database (BYOD) scenarios.</p>
      <h3>Background</h3>
      <p>Organizations need reliable, auditable exports of D365 data for analytics and archival. BYOD patterns help decouple reporting from transactional systems.</p>
      <h3>Approach</h3>
      <p>Use export tools and incremental export patterns to stream data into a structured data lake with partitioning and schema evolution.</p>
    `,
  },
  {
    id: 3,
    title: "Azure Synapse Pipelines Monitoring and Alerting",
    excerpt:
      "Below are the detailed steps to Configure Log Analytics with Azure Synapse Pipelines as Log.",
    category: "Azure Analytics",
    date: "November 18, 2025",
    slug: "azure-synapse-pipelines-monitoring-alerting",
    image: new URL('../assets/images/blogs/imgi_28.png', import.meta.url).href,
    content: `
      <h3>Overview</h3>
      <p>How to wire Azure Synapse Pipelines into Log Analytics to monitor job runs, detect failures and alert responsible teams.</p>
      <h3>Implementation</h3>
      <ul>
        <li>Enable diagnostic settings for Synapse to send logs to Log Analytics.</li>
        <li>Create queries to surface failed activities and long-running pipelines.</li>
        <li>Configure alerts and action groups.</li>
      </ul>
    `,
  },
  {
    id: 4,
    title: "BizTalk What's Next – Migrate vs Upgrade vs Redesign",
    excerpt:
      "Microsoft BizTalk Server is an organizational middleware product that allows different software systems to",
    category: "BizTalk Migration",
    date: "November 22, 2023",
    slug: "biztalk-whats-next-migrate-upgrade-redesign",
    image: new URL('../assets/images/blogs/imgi_40.png', import.meta.url).href,
    content: `
      <h3>Executive Summary</h3>
      <p>This article compares migration, upgrade, and redesign strategies for BizTalk-based solutions and helps teams choose the right path.</p>
      <h3>Considerations</h3>
      <p>Evaluate technical debt, integrations, message volumes and business requirements before selecting a strategy.</p>
    `,
  },
  {
    id: 5,
    title:
      "Snowflake vs Databricks vs Fabric: How to Choose the Best Data Warehouse",
    excerpt:
      "In today's data-driven world, organizations rely on scalable and efficient data warehouses to power analytics",
    category: "CASE STUDIES",
    date: "August 26, 2025",
    slug: "snowflake-vs-databricks-vs-fabric-best-data-warehouse",
    image: new URL('../assets/images/blogs/imgi_22.png', import.meta.url).href,
    content: "",
  },
  {
    id: 6,
    title: "HR Feedback and Collaboration Platform (Recruitment made EASY)",
    excerpt:
      "Client Overview Background Our client needed an innovative HR application that would serve as a",
    category: "CASE STUDIES",
    date: "December 28, 2023",
    slug: "hr-feedback-collaboration-platform-recruitment-made-easy",
    image: new URL('../assets/images/blogs/imgi_26.png', import.meta.url).href,
    content: "",
  },
  {
    id: 7,
    title:
      "Encryption and Decryption of Parquet Files for Large-Scale Data Operations",
    excerpt:
      "Client Overview Background In the era of big data, one of our clients faced a",
    category: "CASE STUDIES",
    date: "December 27, 2023",
    slug: "encryption-decryption-parquet-files-large-scale-data-operations",
    image: new URL('../assets/images/blogs/imgi_28_ParquetEncryptionDecryption.png', import.meta.url).href,
    content: "",
  },
  {
    id: 8,
    title: "Seamless BizTalk 2016 Upgrade and Enhancement",
    excerpt:
      "Client Overview Background Customer is a leading finance provider and taxi company in South Africa",
    category: "CASE STUDIES",
    date: "December 27, 2023",
    slug: "seamless-biztalk-2016-upgrade-enhancement",
    image: new URL('../assets/images/blogs/imgi_40.png', import.meta.url).href,
    content: "",
  },
  {
    id: 9,
    title: "Creating a Millet-Based Healthy Food Chain App",
    excerpt:
      "Client Overview Company Overview IntMavens is a leading technology consulting firm specializing in integration solutions.",
    category: "CASE STUDIES",
    date: "December 27, 2023",
    slug: "creating-millet-based-healthy-food-chain-app",
    image: new URL('../assets/images/blogs/imgi_40.png', import.meta.url).href,
    content: "",
  },
  {
    id: 10,
    title: "Azure Synapse Pipeline's Proactive Monitoring and Alerting",
    excerpt:
      "Client Overview Background Customer is a leading provider of on-site, industrial steel mill services for steelmakers",
    category: "CASE STUDIES",
    date: "December 27, 2023",
    slug: "azure-synapse-pipeline-proactive-monitoring-alerting",
    image: new URL('../assets/images/blogs/imgi_40.png', import.meta.url).href,
    content: "",
  },
  {
    id: 11,
    title: "Azure Cost Optimization with 30% monthly Azure cost reduction",
    excerpt:
      "Client Overview Background Customer is a leading provider of on-site, industrial steel mill services for",
    category: "CASE STUDIES",
    date: "December 26, 2023",
    slug: "azure-cost-optimization-30-percent-monthly-reduction",
    image: new URL('../assets/images/blogs/imgi_40.png', import.meta.url).href,
    content: "",
  },
];
