/* Content model — sourced from résumé. Plain global, no module. */
window.PORTFOLIO = {
  name: "Muhammad Muhaimin Memon",
  initials: "MM",
  role: "Software & AI/ML Engineer",
  location: "Toronto, ON",
  email: "muhaiminmemon@gmail.com",
  phone: "+1 (647) 608-5061",
  github: "muhaiminmemon",
  linkedin: "muhaiminmemon",
  tagline: "Software & machine-learning engineer.",
  subtag:
    "Third-year Computer Science student at the University of Toronto. I focus on machine learning and MLOps: training and evaluating models, then shipping and monitoring them in production. Most recently at Nokia R&D and Autodesk.",

  // headline index — plain facts, not a sales pitch
  stats: [
    { k: "PRIMARY FOCUS", v: "AI·ML", note: "& full-stack" },
    { k: "ALSO WORK IN", v: "INFRA", note: "cloud · k8s" },
    { k: "BASED IN", v: "YYZ", note: "Toronto, Canada" },
    { k: "ENGINEERING ROLES", v: "04", note: "Nokia · Autodesk +" },
  ],

  ticker: [
    "PYTHON", "LANGGRAPH", "KUBERNETES", "PYTORCH", "GO", "FASTAPI",
    "REDIS", "REACT", "TYPESCRIPT", "DOCKER", "RAG", "CHROMADB",
    "MCP", "AWS", "AZURE", "NEXT.JS",
  ],

  about: {
    school: "University of Toronto",
    degree: "Honours BSc, Computer Science & Management",
    spec: "Software Engineering · Machine Learning Specialization",
    grad: "Expected April 2027",
    citizen: "Canadian citizen",
    blurb:
      "My work spans classical ML and LLM systems, from training and evaluating models to the MLOps that gets them to production reliably: deployment pipelines, monitoring, and evaluation.",
  },

  experience: [
    {
      no: "01",
      role: "Machine Learning Operations Engineer",
      org: "Autodesk",
      loc: "Toronto, ON",
      date: "May 2026 – Aug 2026",
      status: "",
      points: [
        "Building MLOps pipelines and infrastructure to deploy and monitor ML models and LLM-based agents in production.",
      ],
      stack: ["MLOps", "LLM agents", "Monitoring"],
    },
    {
      no: "02",
      role: "Full-Stack Cloud & Machine Learning Engineer",
      org: "Nokia Research & Development",
      loc: "Ottawa, ON",
      date: "Jan 2026 – Apr 2026",
      status: "",
      points: [
        "Architected and shipped a LangGraph multi-agent system for Nokia 5G troubleshooting, cutting query resolution from 2–3 min to 30–40s via ChromaDB, Redis & Kubernetes over MCP.",
        "Built a two-tier Redis semantic cache with cosine-similarity lookup, reducing LLM inference costs by ~60%.",
        "Engineered a Crossplane edge-deployment system with custom Kubernetes operators in Go, cutting provisioning from 2 hrs to under 5 min (~95%).",
        "Built a fault-tolerant Python Kafka sync service between hub & edge clusters sustaining 40+ msgs/sec with header-based deduplication.",
      ],
      stack: ["LangGraph", "Go", "Kubernetes", "Redis", "Kafka", "Crossplane"],
    },
    {
      no: "03",
      role: "Machine Learning Engineer",
      org: "Outamation",
      loc: "Remote",
      date: "May 2025 – Jul 2025",
      status: "",
      points: [
        "Designed a computer-vision pipeline pairing PyMuPDF OCR with custom NLP models to extract structured data from unstructured documents, achieving an F1 of 0.95.",
        "Built a RAG retrieval system with LlamaIndex that improved search accuracy 40% over keyword search.",
        "Benchmarked GPT-4, Llama-3 & Mistral-7B with embedding similarity and response scoring to pick the production model.",
      ],
      stack: ["PyMuPDF", "NLP", "LlamaIndex", "RAG"],
    },
    {
      no: "04",
      role: "Software Engineer",
      org: "DataAnnotation.tech",
      loc: "Toronto, ON",
      date: "Sep 2024 – Dec 2024",
      status: "",
      points: [
        "Developed Python tooling to process and validate AI/ML training datasets, cutting manual processing time 30%.",
        "Fine-tuned transformer LLMs via prompt engineering and hyperparameter optimization for sentiment & classification.",
      ],
      stack: ["Python", "LLM fine-tuning"],
    },
    {
      no: "05",
      role: "IAM Engineer",
      org: "Symcor",
      loc: "Mississauga, ON",
      date: "Jan 2024 – Aug 2024",
      status: "",
      points: [
        "Built a PowerShell + Microsoft Graph tool to create and analyze 400+ Azure access reviews, cutting manual audit effort 90%.",
        "Maintained Python ETL pipelines ingesting 120+ feeds across Azure, GitLab & Active Directory, flagging ~500 inconsistencies.",
      ],
      stack: ["PowerShell", "Graph API", "Azure", "ETL"],
    },
  ],

  projects: [
    {
      name: "Tessera",
      type: "Open-source library",
      tagline: "Synthetic datasets that replace human annotation.",
      desc:
        "Converts a task description into a validated fine-tuning dataset across 4 NLP task types: classification, extraction, instruction-following, and RAG/QA.",
      metrics: [
        { v: "300×", k: "cheaper than crowd-sourced" },
        { v: "97.1%", k: "of real-data F1 (Banking77)" },
        { v: "98%", k: "hallucination refusal acc." },
      ],
      detail:
        "Tessera-trained Llama-3.2-3B reaches 97.1% of real-data F1 on Banking77 for $0.40 vs. $125 crowd-sourced. Shipped with CI/CD, thread-safe parallel generation, and multi-provider routing (OpenAI, Anthropic, Together, Groq).",
      stack: ["Python", "OpenAI API", "ChromaDB", "sentence-transformers", "Pydantic", "Unsloth"],
      link: "https://github.com/muhaiminmemon",
      linkLabel: "GitHub",
    },
    {
      name: "Wisp",
      type: "AI Chrome extension",
      tagline: "Blocks distractions in real time, by understanding intent.",
      desc:
        "Analyzes browsing activity against tasks pulled from your Google Calendar and blocks what doesn't match, with 90%+ accuracy.",
      metrics: [
        { v: "90%+", k: "block accuracy" },
        { v: "10k+", k: "API requests / day" },
        { v: "OAuth", k: "Google sign-in" },
      ],
      detail:
        "Scalable Node/Express REST API handling 10,000+ requests/day, deployed via Docker on Azure. React/Tailwind dashboard for real-time task progress and analytics.",
      stack: ["React", "Node.js", "Express", "Supabase", "GPT API", "Google Calendar", "Docker", "Azure"],
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7329637123983138818/",
      linkLabel: "Demo",
    },
  ],

  skills: [
    { group: "Languages", items: ["Python", "JavaScript / TypeScript", "Java", "C / C++", "Go", "SQL", "PowerShell", "HTML / CSS"] },
    { group: "AI / ML", items: ["LangGraph", "LangChain", "MCP", "PyTorch", "Hugging Face", "Ollama", "ChromaDB", "OpenAI", "Anthropic"] },
    { group: "Backend", items: ["FastAPI", "Node.js / Express", "React", "Next.js", "PostgreSQL", "Supabase"] },
    { group: "DevOps / Cloud", items: ["Docker", "Kubernetes", "OpenShift", "Helm", "AWS", "Azure", "Git"] },
  ],
};
