import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Riyas",
  lastName: "P",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Staff Software Engineer",
  avatar: "/images/author.jpg",
  email: "riyasyash@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi", "Malayalam", "Tamil", "Kannada", "French"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
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
    link: "https://www.instagram.com/riyasyash.lens/",
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
    title: <>Recent project: <strong className="ml-4">Cluster Orchestrator</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Riyas, a Staff Software Engineer at <a href="https://www.harness.io/">Harness.io</a>, I write code, design systems, and think like a product owner. <br/>I love building things that solve real-world problems and make a meaningful difference.
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
        timeframe: "2020 Nov- Present",
        role: "Staff Software Engineer",
        achievements: [
          <>
            Developed Kubernetes Cluster Orchestrator from scratch for bridging gaps in existing node autoscaling solutions like Karpenter and Cluster Autoscaler. Customers can now make use of more spot machines in the cluster and save a bomb
          </>,
          <>
            Developed Kuberenetes AutoStopping Solution from scratch for scaling down Kubernetes workloads when they are not in use, saving more than 70% of Non production cloud cost.
          </>,
          <>
            Mentored engineers across backend, infra, and product teams, fostering a hands-on engineering culture.
          </>
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "Lightwing.io",
        timeframe: "2020 July - 2022 Nov",
        role: "Founding Engineer",
        achievements: [
          <>
            Designed AutoStopping solution for AWS ec2 and DigitalOcean Droplets saving them more than 70% of Non Production Cloud Cost
          </>,
          <>
           Being one of the Founding Engineers in an early stage startup in the cloud cost optimization space is exciting and challenging. I have the opportunity to interact with the end users to understand their varied usecases and problems to build and shape a product which makes enormous impacts on their cloud usage.
          </>,
        ],
        images: [],
      },
      {
        company: "Sahaj Software",
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
        description: <>Computer Science and Engineering</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Languages & Frameworks",
        description: <>Golang, Python, TypeScript, Java, Ruby, Shell, React, Next.js, Flutter</>,
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
        description: <>Karpenter, Custom Controllers, Operator Framework, Kyverno</>,
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
        title: "Logging & Mintoring",
        description: <>OpenTelemetry, Prometheus, Grafana, Loki, Thanos</>,
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
  images: [
    {
      src: "/images/achievements/lw-github.png",
      alt: "More than 40 Lakhs lines of code contributed in Lightwing (Harness CCM) Project",
      orientation: "horizontal",
    },
    {
      src: "/images/achievements/autostopping-patent.png",
      alt: "Received Patent for the AutoStopping Solution that we build from scratch",
      orientation: "horizontal",
    },
    {
      src: "/images/achievements/arctic-vault.png",
      alt: "Arctic Code Vault Contributor",
      orientation: "vertical",
    },
  ]
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

export { person, social, newsletter, home, about, blog, work, gallery, achievements };
