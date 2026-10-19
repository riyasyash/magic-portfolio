import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Riyas",
  lastName: "P",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Staff Software Engineer II",
  avatar: "/images/DP.png",
  email: "riyasyash@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi", "Malayalam", "Tamil", "Kannada", "French"], // optional: Leave the array empty if you don't want to display languages
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/riyasyash",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/riyasyash/",
  },
  {
    name: "Medium",
    icon: "book",
    link: "https://medium.com/@riyasyash",
  },
  {
    name: "Instagram",
    icon: "gallery",
    link: "https://www.instagram.com/between_terminals",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/riyasyash",
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Engineer at heart, innovator by habit.</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Cost Management Agent</strong></>,
    href: "/work/cost-management-agent",
  },
  subline: (
    <>
      I'm Riyas, a Staff Software Engineer II at <a href="https://www.harness.io/">Harness.io</a>, I write code, design systems, and think like a product owner. <br/>I love building things that solve real-world problems with AI and make a meaningful difference.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/riyasyash",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
         I enjoy building things that are thoughtful, reliable, and genuinely useful.
Whether it’s improving developer experience, scaling systems, or simplifying product workflows — I care deeply about the why behind every line of code.
I’m not just writing backend logic or frontend views — I’m helping shape products with empathy and clarity.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Harness.io",
        roles: [
          {
            role: "Staff Software Engineer II",
            timeframe: "2026 May - Present",
            achievements: [
              <>
                Spearheaded the new swimlane dedicated to AI Cost Optimization.  
              </>,
              <>
                Launched "User Budgets," a product under the Cloud and AI Cost Management module to manage AI consumption.  
              </>,
              <>
                Implemented a system to block users from AI providers upon budget breaches, enhancing cost control.
              </>
            ],
            images: [],
          },
          {
            role: "Staff Software Engineer",
            timeframe: "2024 May - 2026 Apr",
            achievements: [
              <>Led the Cluster Orchestrator swimlane from both the Engineering and Product fronts, delivering multiple features to make Kubernetes autoscaling smarter, cost-efficient, and user-friendly.
              </>,
              <>
                Improved Spot orchestration handling and seamless node replacement to enhance reliability.
              </>,
              <>
              Built support for leveraging underutilized reserved capacity during cluster scaling to maximize cost efficiency.
              </>,
              <>Integrated first-class user experiences directly into the Cluster Orchestrator UI for simplified visibility and control..</>,
              <>Implemented Vertical Pod Autoscaling (VPA) for intelligent workload resizing based on live resource utilization.</>,
              <>Designed and shipped Bin Packing algorithms for optimal workload placement and reduced compute waste.</>,
              <>Partnered closely with beta customers to identify pain points and shape production-grade solutions.</>,
              <>Established a weekly cadence with customer champions to drive adoption and gather actionable feedback.</>,
              <>Collaborated with Product and UX teams to design standout features that improved adoption across large-scale Kubernetes users.</>,
              <>Mentored junior engineers across varied experience levels through design sessions, code reviews, and architectural guidance.</>
            ],
            images: [],
          },
          {
            role: "Senior Software Engineer II",
            timeframe: "2022 Aug - 2024 Apr",
            achievements: [
              <>Kubernetes AutoStopping Feature: Introduced Inline Dependencies, drastically reducing configuration overhead and rule counts while maintaining cost savings. Developed innovative solutions for improved service routing and enhanced the stability of the AutoStopping Controller by addressing edge cases.
              </>,
              <>
                AWS AutoStopping Feature: Improved spot interruption handling and managed API throttling errors, resolving significant challenges for larger customers. Implemented support for multiple custom domains in port configurations, showcasing expertise in AWS ALBs.
              </>,
              <>
              Developer Experience: Revamped the build and test pipeline, achieving nearly 90% test coverage and reducing test run times by 17 minutes. Took ownership of maintaining and optimizing build and test pipelines, ensuring up-to-date security and efficiency.
              </>,
              <>These initiatives have collectively enhanced system performance, stability, and developer productivity, contributing to the overall success and efficiency of our operations.</>
            ],
            images: [],
          },
          {
            role: "Senior Software Engineer",
            timeframe: "2021 Nov - 2022 Aug",
            achievements: [
              <>Implemented next generation cloud AutoStopping. Built AutoStopping Kubernetes operator. Added support for Kubernetes AutoStopping. Integrated Lightwing components to Harness’s CCM UI. Added pipelines for building and deploying the Lightwing services to Kubernetes. Helping customers with setup and onboarding.
              </>,
              <>
                Collaborated across backend, infra, and product teams to deliver reliable, customer-facing functionality.
              </>,
            ],
            images: [],
          },
          {
            role: "Software Engineer",
            timeframe: "2020 Nov - 2021 Nov",
            achievements: [
              <>
                Lightwing got acquired by Harness and we are continuing to integrate the Lightwing tech with Harness CCM to build the industry leading next generation cloud cost optimisation solution.
              </>,

              <>
                Extensively working on Go and React for the daily tasks. The core team remains the same and contributions to design and architecture is better than ever. Working everyday on cloud providers like AWS, Azure and GCP
              </>
            ],
            images: [],
          },
        ],
      },
      {
        company: "Lightwing.io",
        timeframe: "2020 July - 2022 Nov",
        role: "Founding Engineer",
        achievements: [
          <>
            Designed AutoStopping solution for AWS EC2 and DigitalOcean Droplets saving customers more than 70% of Non-production cloud cost
          </>,
          <>
           Being the founding engineer in an early stage startup in the cloud cost optimization space was exciting and challenging. I have the opportunity to interact with the end users to understand their varied usecases and problems to build and shape a product which makes enormous impacts on their cloud usage.
          </>,
        ],
        images: [],
      },
      {
        company: "Sahaj.ai",
        timeframe: "2016 May - 2020 July",
        role: "Solution Consultant (FullStack Engineer)",
        achievements: [
          <>
          Re-architected a legacy monolith into a modular, Python-based microservices backend powering a dynamic publication workflow engine. Enabled document versioning, asset management, and runtime composition of microservice pipelines tailored to publishing requirements — all fresh out of college.          </>,
          <>
Built a B2B analytics platform delivering customizable sales and hiring enablement dashboards, with multi-tiered access based on user subscription. Designed robust filtering, search, and OAuth integration to securely expose data via client-facing apps.</>,
<>Developed a Jupyter-powered platform for data science teams to build, test, and deploy analytical solutions. Enabled users to write code in any Jupyter-supported language, package their work as Docker images, and deploy directly from notebooks.</>,
<>Engineered a consumer-facing app that collects real-time vehicle telemetry and translates it into actionable insights and usage reports. Personalized feedback based on driving patterns and vehicle models to enhance user experience and safety.</>
],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Calicut",
        description: <>Bachelor of Technology in Computer Science and Engineering</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Languages & Frameworks",
        description: <>Golang, Python, React, Ruby, Shell, Java, Next.js</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-02.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "Cloud & DevOps",
        description: <>Kubernetes, AWS, GCP, Azure, Terraform, Helm, Docker, Nginx, Ansible</>,
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
      {
        title: "Kubernetes Ecosystem",
        description: <>Karpenter, Custom Controllers, Operator Framework, Ingress and Gateways</>,
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
      {
        title: "Databases, Caching & Queues",
        description: <>PostgreSQL, MySQL, Redis, SQLite, RabbitMQ, AsynQ, Faktory, Kafka</>,
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
      {
        title: "Logging & Monitoring",
        description: <>OpenTelemetry, Prometheus, Grafana, Loki</>,
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
      {
        title: "AI Landscape",
        description: <>MCP, Multi Agent Systems, LiteLLM, Fine-tuning, AI Evals</>,
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Build, Break, Reflect",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Engineering That Shipped`,
  description: `Here’s a look at the systems, products, and platforms I’ve helped build`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const achievements = {
  path: "/achievements",
  label: "Achievements",
  title: `Things that I am Proud Of`,
  description: `Here’s are the small things in life that I am proud of`,
  items: [
    {
      title: "40+ Lakh Lines of Code",
      description: "Contributed more than 40 lakh lines of code in the Lightwing (Harness CCM) project before AI era.",
      icon: "github",
    },
    {
      title: "Patent Awarded",
      description: "Received a patent for the AutoStopping solution built from scratch.",
      icon: "document",
    },
    {
      title: "Arctic Code Vault Contributor",
      description: "Source code preserved in the GitHub Arctic Code Vault for future generations.",
      icon: "github",
    },
    {
      title: "Startup Acquired",
      description: "Lightwing.io, where I was a founding engineer, was acquired by Harness.io.",
      icon: "rocket",
    },
  ],
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, home, about, blog, work, gallery, achievements };
