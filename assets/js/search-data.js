// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-software",
          title: "software",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather.html";
            },},{id: "news-uploaded-our-neurosymbolic-literature-review-paper-to-arxiv-special-thanks-to-jonathan-feldstein-paulius-dilkas-and-vaishak-belle-sparkles",
          title: 'Uploaded our neurosymbolic literature review paper to arXiv. Special thanks to Jonathan Feldstein,...',
          description: "",
          section: "News",},{id: "news-the-webpage-of-our-1st-workshop-on-new-ideas-for-large-scale-neurosymbolic-learning-systems-ls-nsl-is-out-sparkles-we-look-forward-to-receiving-your-paper",
          title: 'The webpage of our 1st Workshop on New Ideas for Large-Scale Neurosymbolic Learning...',
          description: "",
          section: "News",},{id: "news-very-honored-to-join-huawei-labs-as-a-technical-expert-sparkles",
          title: 'Very honored to join Huawei Labs as a Technical Expert :sparkles:',
          description: "",
          section: "News",},{id: "news-uploaded-a-new-version-of-our-rule-mining-technique-spectrum-to-arxiv-special-thanks-to-jonathan-feldstein-and-dominic-phillips-sparkles",
          title: 'Uploaded a new version of our rule mining technique, SPECTRUM, to arXiv. Special...',
          description: "",
          section: "News",},{id: "news-very-honored-to-receive-an-invitation-to-present-my-research-at-the-ivado-montreal-workshopon-neuro-symbolic-ai-may-5-7-and-discuss-the-latest-advances-in-the-field-with-yoshua-bengio-luc-de-raedt-francesca-rossi-gilles-pesant-and-many-others-sparkles",
          title: 'Very honored to receive an invitation to present my research at the IVADO...',
          description: "",
          section: "News",},{id: "news-visiting-the-huawei-labs-in-edinburgh-to-give-a-technical-talk-and-meet-my-colleagues-sparkles",
          title: 'Visiting the Huawei Labs in Edinburgh to give a technical talk and meet...',
          description: "",
          section: "News",},{id: "projects-prism",
          title: 'PRISM',
          description: "Rule Mining Using Structural Motifs",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_project.html";
            },},{id: "projects-so-qa",
          title: 'SO-QA',
          description: "Query Answering Over Knowledge Graphs Using Second-Order Theories",
          section: "Projects",handler: () => {
              window.location.href = "/projects/11_project.html";
            },},{id: "projects-pdq",
          title: 'PDQ',
          description: "Proof-Driven Querying",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project.html";
            },},{id: "projects-chasebench",
          title: 'ChaseBench',
          description: "Benchmarking The Chase",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project.html";
            },},{id: "projects-chasegoal",
          title: 'ChaseGoal',
          description: "Query Answering Over Knowledge Graphs Using First-Order Theories",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project.html";
            },},{id: "projects-vproblog",
          title: 'vProbLog',
          description: "Probabilistic Reasoning Under the Possible World Semantics",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project.html";
            },},{id: "projects-neurolog",
          title: 'NeuroLog',
          description: "Compositional Neurosymbolic Integration",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project.html";
            },},{id: "projects-trigger-graphs",
          title: 'Trigger Graphs',
          description: "Reasoning Over Billions of Triples Under Datalog",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project.html";
            },},{id: "projects-lineage-trigger-graphs",
          title: 'Lineage Trigger Graphs',
          description: "Probabilistic Reasoning Under the Possible World Semantics",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project.html";
            },},{id: "projects-ngp",
          title: 'NGP',
          description: "Scene Graph Generation Using Background Knolwedge",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project.html";
            },},{id: "projects-concordia",
          title: 'Concordia',
          description: "Teacher-Student Neurosymbolic Learning",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
