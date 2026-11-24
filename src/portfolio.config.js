// ─────────────────────────────────────────────────────────────
//  ALL PORTFOLIO CONTENT LIVES HERE.
//  Edit this file to update the site — no need to touch components.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Amisha Nagiya",
  firstName: "Amisha",
  initials: "AN",
  role: "Data Analyst · Retail & E-commerce Analytics",
  // Put her photo in /public (e.g. /public/amisha.jpg) and set the path here.
  // Leave as null to show the initials avatar.
  photo: "./amisha.jpg",
  resume: "./Amisha_Nagiya_Resume.pdf",
  location: "Bangalore, India",
  availability: "Open to opportunities",
  experienceBadge: { value: "2+ yrs", label: "Analytics experience" },
  headline: {
    before: "Turning",
    highlight: "data",
    middle: "into decisions",
    italic: "that move revenue",
  },
  intro:
    "Hi, I'm Amisha Nagiya — a retail and e-commerce analytics professional. I turn SKU-level sales, pricing and inventory data into replenishment, pricing and commercial decisions using Excel, SQL, Python and BI tools.",
};

export const socials = {
  email: "amishanagiya@gmail.com",
  phone: "+91 9165435716",
  linkedin: "https://www.linkedin.com/in/amisha-nagiya-a22a311b1/",
  github: "https://github.com/amisha604",
  maven: "https://mavenanalytics.io/profile/Amisha-Nagiya/201402439",
};

// Headline numbers shown in the impact strip
export const impactStats = [
  { value: "60%", label: "Fewer stockouts", detail: "via SKU & size-level replenishment planning" },
  { value: "30%", label: "Revenue growth", detail: "from insight-led commercial actions" },
  { value: "90%", label: "Less manual reporting", detail: "with automated KPI dashboards" },
  { value: "₹3–5L", label: "Recovered per claim cycle", detail: "through payout reconciliation workflows" },
];

export const heroSkills = [
  "Advanced Excel", "SQL", "Python", "Power BI", "Tableau", "Looker Studio",
  "Power Query", "DAX", "Pandas", "Scikit-learn", "Unicommerce (OMS)", "Machine Learning",
];

export const about = {
  paragraphs: [
    "I'm a data analyst with 2 years of experience across merchandising performance, business analytics, pricing optimization, profitability and operations — currently working with HRX Men's and Women's Sportswear across Myntra and Flipkart.",
    "My work sits right where data meets the business: reading SKU and size-level performance to plan assortment and replenishment, structuring discounts and marketplace rebates to protect margins, and building reconciliation workflows that catch revenue leakage before it adds up.",
    "I enjoy automating the repetitive so teams can focus on decisions — from Python and Power Query pipelines to Power BI and Looker Studio dashboards that people actually use.",
  ],
  quote:
    "I don't just report the numbers — I partner with the business to act on them, from the co-founder's desk to the warehouse floor.",
  highlights: [
    { icon: "TrendingUp", title: "Commercial Acumen", description: "Pricing, contribution margin, discount and rebate analysis that protects profitability." },
    { icon: "Boxes", title: "Inventory & Assortment", description: "SKU and size-level planning that keeps repeat styles in stock and spots new winners." },
    { icon: "Zap", title: "Automation", description: "Python, Power Query and BI dashboards that cut manual reporting effort by 90%." },
    { icon: "Users", title: "Stakeholder Partner", description: "Working across marketplace, warehouse, finance, merchandising and vendor teams." },
  ],
  softSkills: [
    "Business Problem Solving", "Analytical & Critical Thinking", "Stakeholder Management",
    "Cross-functional Collaboration", "Data-driven Decision Making", "Commercial Acumen",
    "Communication", "Attention to Detail",
  ],
};

export const experience = [
  {
    period: "Jan 2025 – Present",
    role: "Data Analyst & MIS Executive",
    company: "Fabrik8 Lifestyle LLP",
    location: "Bangalore, India",
    current: true,
    summary:
      "Partner with the Co-founder on commercial and merchandising decisions for HRX Men's and Women's Sportswear across Myntra and Flipkart.",
    points: [
      "Use SKU-level sales, pricing and profitability analysis to identify growth opportunities.",
      "Drive assortment and inventory planning through product and size-level performance analysis — maintaining availability of repeat styles and spotting fresh styles with repeat-sale potential.",
      "Optimize pricing and profitability via contribution margin analysis, discount structuring, marketplace rebate evaluation, product bundling and targeted PLA strategies.",
      "Translated sales and inventory insights into business actions, contributing to 60% fewer stockouts and 30% revenue growth.",
      "Automated KPI reports and dashboards (Python, Power BI, Excel, Power Query, Looker Studio), reducing manual effort by 90% and improving reporting efficiency by 80%.",
      "Built marketplace payment and reconciliation workflows that surface payout discrepancies, enabling ₹3–5 lakh in recurring pending-payment recoveries per claim cycle.",
      "Collaborate with marketplace, Unicommerce (OMS), warehouse, merchandising, finance and vendor teams; use AI tools for catalogue imagery and workflow automation.",
    ],
    technologies: ["Python", "Power BI", "Excel", "Power Query", "Looker Studio", "SQL", "Unicommerce"],
  },
  {
    period: "Mar 2024 – Jul 2024",
    role: "Data Analyst Intern",
    company: "DataPlay",
    location: "Remote",
    summary: "Analysed engagement, attendance and sales data to guide course and promotion decisions.",
    points: [
      "Analysed student engagement and attendance trends, supporting course redesign initiatives that contributed to a 20% increase in enrollment.",
      "Used SQL to analyse sales trends and target promotions, contributing to a 15% increase in monthly sales and 10% revenue growth.",
      "Built Excel dashboards that improved data visibility and supported a 40% improvement in team productivity.",
    ],
    technologies: ["SQL", "Excel", "Dashboards", "Trend Analysis"],
  },
  {
    period: "Dec 2021 – Feb 2022",
    role: "IT Intern",
    company: "OneHash Technologies",
    location: "Indore, India",
    summary: "Data-informed content, lead generation and customer support improvements.",
    points: [
      "Optimized content strategy using LinkedIn and Twitter engagement insights — 70% follower growth and 95% increase in reach.",
      "Supported lead generation through data-informed content, webinars and client engagement.",
      "Created standardized help-desk documentation from recurring queries, cutting resolution time by 25%.",
    ],
    technologies: ["Social Analytics", "Content Strategy", "Documentation"],
  },
];

export const projects = [
  {
    title: "Amazon Sales Data Analysis",
    context: "Unified Mentor · Virtual Internship · Feb–Mar 2024",
    icon: "BarChart3",
    image: "./amazon-dashboard.png",
    description:
      "Evaluated Amazon sales data spanning 2010–2017 to identify product and regional performance trends, uncover key revenue drivers and build an interactive Tableau dashboard.",
    result: "$137M revenue across 76 countries analysed → interactive Tableau dashboard",
    tags: ["Python", "Pandas", "Seaborn", "Tableau", "ETL", "EDA"],
    github: "https://github.com/amisha604/Amazon-Sales-Data-Analysis",
    live: null,
    details: {
      problem:
        "Sales management is central to staying competitive — improving distribution to cut costs and grow profit. The brief: run ETL on an Amazon sales dataset, find sales trends month-wise, year-wise and year-month-wise, identify key metrics and the relationships between attributes, and present the findings.",
      dataset:
        "Orders across 7 regions, 76 countries, 12 item types, 2 sales channels (online/offline) and 4 order priorities from 2010 to 2017 — with units sold, unit price/cost, total revenue, cost and profit for each order.",
      steps: [
        { title: "Extract & load", text: "Loaded the raw CSV into Pandas and profiled it — data types, summary statistics and categorical breakdowns." },
        { title: "Transform & clean", text: "Converted order and ship dates to datetime, checked for nulls and duplicates, and engineered new fields: Month, Year and Shipping Days (ship date − order date)." },
        { title: "Exploratory analysis", text: "Used Matplotlib and Seaborn to chart units, revenue and profit month-wise, year-wise and year-month-wise, plus shipping time by item and region." },
        { title: "Drill-downs", text: "Grouped revenue and profit by item type × year, country, region, sales channel and order priority to find what drives performance." },
        { title: "Tableau dashboard", text: "Built sheets and a single interactive dashboard: revenue & profit trend, year-wise profit by item, country map, sales channel × priority, region split and item details." },
        { title: "Report & recommendations", text: "Summarised highlights in a presentation with top/bottom performers and a set of strategy recommendations." },
      ],
      metrics: [
        { value: "$137.3M", label: "Total revenue" },
        { value: "$44.2M", label: "Total profit" },
        { value: "76", label: "Countries" },
        { value: "23 days", label: "Avg. delivery time" },
      ],
      findings: [
        "Cosmetics, Office Supplies and Household were the top revenue generators; Cosmetics was also the most profitable item.",
        "Sub-Saharan Africa, Europe and Asia led on both revenue and profit; Djibouti, Myanmar and Pakistan were the top countries.",
        "2012 was the peak year for revenue and profit, after 2011 had been the lowest — profit then declined gradually until 2015.",
        "July saw the most units sold overall, and June 2013 was the single highest-revenue month.",
        "Most items sold more online, but Household items sold almost entirely offline — a clear channel gap.",
        "Asia had the longest average shipping times (28–29 days).",
      ],
      useCases: [
        "Deciding which product categories and regions to prioritise for inventory and marketing spend",
        "Channel strategy — spotting items that under-perform online vs offline",
        "Planning stock and promotions around seasonal peaks (June–July)",
        "Tracking delivery performance by region to improve logistics",
        "A reusable template for any multi-region retail sales review",
      ],
      learnings:
        "End-to-end ETL in Python, turning raw transactional data into time-series and category insights, and communicating them through a single Tableau dashboard and an executive-style report.",
    },
  },
  {
    title: "Master Data Rewards Analysis",
    context: "Fintech startup · Excel data model",
    icon: "ShieldCheck",
    image: null,
    description:
      "Built a dynamic dashboard on a Power Pivot data model to monitor narrations and rewards. Caught a critical error where rewards were credited three times and got the excess credits revoked.",
    result: "₹1,50,000 in potential losses averted",
    tags: ["Excel", "Power Pivot", "Power Query", "Pivot Tables", "Pivot Charts"],
    github: null,
    live: null,
    details: {
      problem:
        "A fintech startup credits rewards to users against transactions. With rewards flowing in at volume, the team needed one place to monitor transaction narrations and the rewards issued — and to make sure every reward was credited correctly.",
      dataset:
        "Master transaction data with narrations, user identifiers and reward credit records for the startup's rewards programme.",
      steps: [
        { title: "Data preparation", text: "Imported and cleaned the master data in Power Query so narrations and reward records were consistent and ready to model." },
        { title: "Data modelling", text: "Built a Power Pivot data model linking transactions to the rewards credited against them." },
        { title: "Dynamic dashboard", text: "Created pivot tables and pivot charts so the team could track narrations and rewards and slice them as needed." },
        { title: "Anomaly check", text: "Used the model to reconcile rewards against transactions — which surfaced cases where the same reward had been credited three times." },
        { title: "Action", text: "Flagged the error promptly so the excess credits could be revoked, restoring accuracy and consistency in the data." },
      ],
      metrics: [
        { value: "₹1.5L", label: "Potential loss averted" },
        { value: "3×", label: "Duplicate credits caught" },
      ],
      findings: [
        "A critical error was crediting rewards three times for the same entry.",
        "Catching it early let the team revoke the excess credits before losses grew — averting ₹1,50,000.",
        "The dashboard gave ongoing visibility, so similar issues can be spotted quickly.",
      ],
      useCases: [
        "Rewards, cashback and loyalty programme monitoring",
        "Detecting duplicate payouts or credits in finance operations",
        "Reconciling transaction narrations against issued benefits",
        "A lightweight, no-code audit dashboard for operations teams",
      ],
      learnings:
        "How data modelling in Excel (Power Query + Power Pivot) can double as a control system — the same dashboard used for reporting also protects the business from revenue leakage.",
      note: "Confidential client work — code and data are not public.",
    },
  },
  {
    title: "Email/SMS Spam Classifier",
    context: "End-to-end machine learning project",
    icon: "MailWarning",
    image: null,
    description:
      "Trained and compared 10+ classification models with NLTK and Scikit-learn — Multinomial Naive Bayes won on accuracy and precision. Deployed as a Streamlit web app on Render for real-time spam predictions.",
    result: "Live web app with real-time predictions",
    tags: ["Python", "NLTK", "Scikit-learn", "TF-IDF", "Streamlit", "Render"],
    github: "https://github.com/amisha604/Email-SMS-Spam-Detection-Machine-Learning-Classification-Project",
    live: "https://email-sms-spam-detection-machine-bq47.onrender.com",
    details: {
      problem:
        "Spam messages waste time and carry fraud risk. The goal: build a system that reliably classifies incoming SMS and email messages as Spam or Not Spam using NLP and machine learning — and make it usable by anyone through a web app.",
      dataset:
        "A labelled set of messages — the raw message text and a target label (1 = Spam, 0 = Not Spam).",
      steps: [
        { title: "Data cleaning", text: "Dropped unnecessary columns, handled missing values, removed duplicates and label-encoded the target." },
        { title: "Exploratory analysis", text: "Studied the spam vs not-spam distribution, average message length per class and checked for multicollinearity." },
        { title: "Text preprocessing", text: "Lower-cased text, tokenised with NLTK, removed special characters, stop words and punctuation, and applied Porter stemming (e.g. “running” → “run”)." },
        { title: "Vectorisation", text: "Converted the cleaned text into numeric features with a TF-IDF vectorizer." },
        { title: "Model comparison", text: "Trained and compared Logistic Regression, SVM, Random Forest, Naive Bayes variants, KNN, AdaBoost, Bagging, Extra Trees, Gradient Boosting and XGBoost." },
        { title: "Model selection", text: "Chose Multinomial Naive Bayes as the best performer on accuracy and precision — precision matters most so genuine messages aren't flagged as spam." },
        { title: "Packaging", text: "Saved the trained model and vectorizer with Pickle (model.pkl, vectorizer.pkl) so the app never needs retraining." },
        { title: "Web app & deployment", text: "Built a Streamlit app in PyCharm that applies the same preprocessing, vectorises the input and predicts instantly; pushed to GitHub and deployed on Render." },
      ],
      metrics: [
        { value: "10+", label: "Models compared" },
        { value: "MNB", label: "Best model (accuracy & precision)" },
        { value: "Real-time", label: "Predictions in the web app" },
      ],
      findings: [
        "Multinomial Naive Bayes outperformed tree-based and boosting models on precision — ideal for text classification with TF-IDF features.",
        "Consistent preprocessing between training and the live app was essential for correct predictions.",
        "Deployment challenge: the app failed on Render with a missing NLTK ‘stopwords’ resource — solved by downloading the required NLTK data at startup.",
      ],
      useCases: [
        "Filtering spam and phishing SMS for telecom or messaging apps",
        "Pre-screening customer support inboxes",
        "Flagging promotional vs transactional messages in fintech/banking alerts",
        "A teaching example of an end-to-end NLP pipeline — from raw text to a deployed app",
      ],
      learnings:
        "The full ML lifecycle: cleaning, NLP preprocessing, model benchmarking, serialisation, building a UI and debugging a real deployment.",
    },
  },
];

export const skillGroups = [
  { icon: "Sheet", title: "Excel", items: ["Advanced Excel", "Power Query", "Power Pivot", "Pivot Tables", "Dashboards", "VLOOKUP / XLOOKUP", "Macros"] },
  { icon: "Database", title: "SQL", items: ["Joins", "Aggregations", "CTEs", "Subqueries", "Window Functions"] },
  { icon: "Code2", title: "Python", items: ["Pandas", "NumPy", "Data Wrangling", "EDA", "Automation", "Scikit-learn"] },
  { icon: "PieChart", title: "BI & Visualization", items: ["Power BI (Power Query, DAX)", "Tableau", "Looker Studio"] },
  { icon: "Brain", title: "Analytics", items: ["Statistical Analysis", "Data Visualization", "Machine Learning"] },
  { icon: "ShoppingBag", title: "E-commerce Domain", items: ["Myntra & Flipkart marketplaces", "Unicommerce (OMS)", "Pricing & Rebates", "PLA Strategy", "Payout Reconciliation"] },
];

export const education = [
  {
    period: "Sep 2022 – Sep 2023",
    title: "Post Graduate Program — Data Analytics & Machine Learning",
    institution: "Imarticus Learning, Bangalore",
    icon: "Award",
  },
  {
    period: "Aug 2019 – Jul 2023",
    title: "B.Tech — Computer Science & Engineering",
    institution: "Institute of Engineering and Science, IPS Academy, Indore",
    icon: "GraduationCap",
  },
];

// ── Contact links (web links work everywhere, incl. sandboxed previews) ──
const digits = socials.phone.replace(/\D/g, "");
export const contactLinks = {
  gmail: (subject = "Hello Amisha", body = "") =>
    `https://mail.google.com/mail/?view=cm&fs=1&to=${socials.email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
  mailto: (subject = "Hello Amisha", body = "") =>
    `mailto:${socials.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
  whatsapp: `https://wa.me/${digits}?text=${encodeURIComponent("Hi Amisha, I came across your portfolio and would like to connect.")}`,
  tel: `tel:+${digits}`,
};

// Absolute URL of the CV so it opens correctly from any host
export const resumeUrl = () => {
  try { return new URL(profile.resume, window.location.href).href; } catch { return profile.resume; }
};
