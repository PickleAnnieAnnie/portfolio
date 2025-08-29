import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  edunet,
  bigData,
  sasProject,
  fhir,
  highDimData,
  termpw,
  payloadmaster,
  threejs,
  mhft,
  sketcher,
  sas,
  dot,
  deepLearning,
  infs
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "C++", icon: cpp },
  { title: "Python", icon: python },
  { title: "Java Framework", icon: java },
  { title: "SQL", icon: java },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experience_data = [
  {
  company: "Acme FinTech",
  role: "Senior Java Backend Engineer",
  period: "2022 — Present",
  location: "Brisbane, AU",
  highlights: [
  "Designed event-driven microservices with Spring Boot & Kafka.",
  "Scaled REST APIs to 10k RPS with zero-downtime deploys (Jenkins).",
  "Led security hardening (OAuth2/JWT, OWASP top 10)."
  ]
  },
  {
  company: "Hong Kong Housing Authority and Housing Department",
  role: "System Analyst and Analyst Programmer",
  period: "2020 — 2023",
  location: "Hong Kong",
  highlights: [
  "Built batch/stream pipelines; improved cost 28% via tuning.",
  "Implemented CI/CD using Bitbucket Pipelines & Helm charts.",
  "Mentored 3 juniors; introduced coding standards & codeowners."
  ]
  },
  {
  company: "Global Retail Tech",
  role: "Analyst Programmer",
  period: "2021 — 2023",
  location: "Hong Kong",
  highlights: [
  "Delivered order service with Struts → Spring Boot migration.",
  "Cut P95 latency from 480ms → 140ms (profiling & caching).",
  "Owned on-call; reduced incidents with SLOs & runbooks."
  ]
  }
  ];

export const experiences = [
  {
    title: "Data Science Industry Capstone Project",
    company_name: "SAS Australia ",
    icon: sas,
    iconBg: "#161329",
    date: "2024 - 2025 (1 year)",
    location: "Brisbane, AU",
    points: [
      "Created and evaluated home loan origination models using advanced analytic tools and banking data, improved the accuracy to 91% and efficiency of the loan approval process in the Australian housing market.",
      "Conducted an in-depth investigation using a real-world dataset of 50,00 records to analyse the impact of regulatory and economic factors on home loan origination and affordability.",
      "Successfully delivered a high-impact capstone project, awarded a final grade of 7 (High Distinction), reflecting strong research, technical, and analytical capabilities.",
    ],
  },
  {
    title: "System Analyst & Analyst Programmer",
    company_name: "Housing Authority of the Hong Kong Special Administrative Region",
    icon: dot,
    iconBg: "#161329",
    date: "2020 — 2023 (3 years)",
    location: "Hong Kong",
    points: [
      "Assisted in project management for a government department system implementation, ensuring smooth coordination and on-time delivery.",
      "Developed and migrated a cloud-based application using Java Spring, React, Oracle, and Apache Web Server, replacing legacy systems and improving performance.",
      "Configured, managed, and secured application software and third-party environments, implementing secure interfaces that strengthened data protection.",
      "Gained expertise in Java, SQL, Spring Boot, and CI/CD pipelines, improving development efficiency and system reliability.",
      "Applied system analysis, database design, data migration, and integration skills to enable seamless interoperability and smooth data transitions.",
    ],
  },
  {
    title: "Analyst Programmer (Consultant)",
    company_name: "NCSI Hong Kong Limited ",
    icon: dot,
    iconBg: "#161329",
    date: "2016 — 2020 (4 years)",
    location: "Hong Kong",
    points: [
      "Assisted in project development for a government department system implementation, ensuring smooth coordination and on-time delivery.",
      "Maintained and updated the application using Java Framework, JSF, Oracle upon user requirements, improving business performance.",
      "Gained expertise in Java, SQL , Shell scripts, development pipelines.",
    ],
  },
];

export const projects = [
  {
    name: "Predictive Analytics for Home Loan Approval using Machine Learning in SAS Viya",
    description:
      "Building and evaluating a Home Loan Risk Model with SAS Viya and Data Visualization , and build the model to predict the risk of a home loan application",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Machine Learning", color: "green-text-gradient" },
      { name: "SAS Viya", color: "yellow-text-gradient" },
    ],
    image: sasProject,
    source_code_link: "",
  },
  {
    name: "Spatial Data Analytics for Loan Assessment",
    description:
      "Analyzed 419K+ historical loan records with environmental, climate, demographic, and conflict data to assess borrower risk in regions lacking credit scores, like Afghanistan and Bolivia. Leveraged spatial-temporal indexing and visualization to make large-scale geospatial data actionable for investors and policymakers. This approach enables smarter loan decisions in high-risk and data-scarce areas.",
    tags: [
      { name: "PostgreSQL", color: "blue-text-gradient" },
      { name: "Reactjs", color: "green-text-gradient" },
      { name: "Google Maps API", color: "pink-text-gradient" },
      { name: "High Dimensional Data Analysis", color: "yellow-text-gradient" },
      { name: "Data Visualization", color: "yellow-text-gradient" },
    ],
    image: highDimData,
    source_code_link: "",
  },
  {
    name: "Big Data Analytics for Facebook Ad Targeting: Python & PySpark Project",
    description:
      "Developed a big data analytics solution using Python and PySpark to analyze Facebook advertising campaigns and target audiences for the Australian election. Implemented scalable data pipelines, aggregation, and audience segmentation to extract actionable insights",
    tags: [
      { name: "PySpark", color: "blue-text-gradient" },
      { name: "Python", color: "green-text-gradient" },
      { name: "Big Data", color: "yellow-text-gradient" },
    ],
    image: bigData,
    source_code_link: "",
  },
  {
    name: "Deep Learning Model for Metal Condition Classification",
    description:
      "Developed a deep learning model to classify the condition of metals using sensor and image data. The project focuses on accurate detection of metal defects and degradation, leveraging convolutional neural networks (CNNs)  and Gramcam for high-performance classification",
    tags: [
      { name: "Deep Learning", color: "blue-text-gradient" },
      { name: "SqueezeNet", color: "yellow-text-gradient" },
      { name: "ShuffleNet", color: "yellow-text-gradient" },
      { name: "ResNet", color: "yellow-text-gradient" },
      { name: "GramCam", color: "yellow-text-gradient" },
    ],
    image: deepLearning,
    source_code_link:
      "",
  },
  {
    name: "FHIR Visualization Tool – Unified Healthcare Data Interface",
    description:
      "Developed a dynamic visualization tool for FHIR healthcare data, enabling seamless rendering of text, images, PDFs, and complex nested resources in a single, user-friendly interface. Built as part of the  Digital Health Software Project at the University of Queensland",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Reactjs", color: "green-text-gradient" },
      { name: "FHIR", color: "pink-text-gradient" },
    ],
    image: fhir,
    source_code_link: "",
  },
  {
    name: "Information Retrieval Project (Research)",
    description:
      "Report and Compare BM25 with ACEN / DPR / TLDE2 method's eﬀectiveness and eﬃciency ",
    tags: [
      { name: "Information Retrieval", color: "blue-text-gradient" },
      { name: "Python", color: "green-text-gradient" },
    ],
    image: infs,
    source_code_link: "",
  },
  
];
