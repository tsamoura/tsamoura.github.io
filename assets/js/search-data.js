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
          section: "News",},{id: "news-the-webpage-of-our-1st-workshop-on-new-ideas-for-large-scale-neurosymbolic-learning-systems-ls-nsl-is-out-sparkles-we-look-forward-to-receiving-your-papers",
          title: 'The webpage of our 1st Workshop on New Ideas for Large-Scale Neurosymbolic Learning...',
          description: "",
          section: "News",},{id: "news-thrilled-to-join-huawei-labs-and-lead-a-team-on-ondevice-systems-sparkles",
          title: 'Thrilled to join Huawei Labs and lead a team on ondevice systems :sparkles:...',
          description: "",
          section: "News",},{id: "news-uploaded-a-new-version-of-our-rule-mining-technique-spectrum-to-arxiv-special-thanks-to-jonathan-feldstein-and-dominic-phillips-sparkles",
          title: 'Uploaded a new version of our rule mining technique, SPECTRUM, to arXiv. Special...',
          description: "",
          section: "News",},{id: "news-very-honored-to-receive-an-invitation-from-gilles-pesant-from-école-polytechnique-de-montréal-to-present-my-research-at-the-ivado-montreal-workshop-on-neuro-symbolic-ai-may-5-7-and-discuss-the-latest-advances-in-the-field-with-yoshua-bengio-luc-de-raedt-francesca-rossi-and-many-other-leaders-in-ai-sparkles",
          title: 'Very honored to receive an invitation from Gilles Pesant from École Polytechnique de...',
          description: "",
          section: "News",},{id: "news-visiting-huawei-labs-in-edinburgh-to-give-a-technical-talk-and-meet-my-colleagues-sparkles",
          title: 'Visiting Huawei Labs in Edinburgh to give a technical talk and meet my...',
          description: "",
          section: "News",},{id: "news-very-excited-to-receive-an-invitation-to-give-a-keynote-at-the-8th-workshop-on-tractable-probabilistic-modeling-that-will-be-collocated-with-uai-2025-special-thanks-to-all-the-organizers-sparkles",
          title: 'Very excited to receive an invitation to give a keynote at the 8th...',
          description: "",
          section: "News",},{id: "news-i-will-serve-as-a-chair-for-the-industrial-track-of-the-52nd-international-conference-on-very-large-data-bases-vldb-2026-one-of-the-most-eminent-venues-for-database-research-special-thanks-to-angela-bonifati-and-mirek-riedewald-for-the-invitation-sparkles",
          title: 'I will serve as a Chair for the Industrial Track of the 52nd...',
          description: "",
          section: "News",},{id: "news-very-honored-to-give-a-course-on-neurosymbolic-learning-at-the-2025-european-summer-school-in-logic-language-and-information-esslli-one-of-the-biggest-annual-scientific-events-in-europe-the-course-material-is-online-sparkles",
          title: 'Very honored to give a course on neurosymbolic learning at the 2025 European...',
          description: "",
          section: "News",},{id: "news-two-papers-accepted-at-neurips-2025-special-thanks-to-jaron-maene-for-our-work-on-the-relationship-between-embeddings-and-probabilistic-equivalence-and-to-dan-roth-and-kaifu-wang-for-our-work-on-neurosymbolic-learning-sparkles",
          title: 'Two papers accepted at NeurIPS 2025. Special thanks to Jaron Maene for our...',
          description: "",
          section: "News",},{id: "news-uploaded-our-paper-on-neurosymbolic-symbol-grounding-to-arxiv-special-thanks-to-emanuele-marconato-samuele-bortolotti-emile-van-krieken-paolo-morettin-elena-umili-antonio-vergari-andrea-passerini-and-stefano-teso-sparkles",
          title: 'Uploaded our paper on neurosymbolic symbol grounding to arXiv. Special thanks to Emanuele...',
          description: "",
          section: "News",},{id: "news-thrilled-to-be-selected-as-a-top-reviewer-at-neurips-2025-sparkles",
          title: 'Thrilled to be selected as a Top Reviewer at NeurIPS 2025 :sparkles:',
          description: "",
          section: "News",},{id: "news-excited-to-become-a-guest-editor-of-the-special-issue-neurosymbolic-ai-first-order-logic-and-beyond-of-the-journal-of-neurosymbolic-artificial-intelligence-we-look-forward-to-receiving-your-papers-sparkles",
          title: 'Excited to become a guest editor of the special issue Neurosymbolic AI: First-Order...',
          description: "",
          section: "News",},{id: "news-our-neurosymbolic-ai-workskop-unifiying-concept-representation-learning-will-be-co-held-with-iclr-2026-special-thanks-to-amit-dhurandhar-amir-hossein-karimi-sara-magliacane-stefano-teso-and-zhe-zeng-sparkles",
          title: 'Our neurosymbolic AI workskop Unifiying Concept Representation Learning will be co-held with ICLR...',
          description: "",
          section: "News",},{id: "news-honored-to-receive-an-invitation-by-the-leverhulme-trust-to-become-a-reviewer-for-grant-application-proposals-sparkles",
          title: 'Honored to receive an invitation by the Leverhulme Trust to become a reviewer...',
          description: "",
          section: "News",},{id: "news-excited-to-be-invited-by-the-ucl-ai-center-to-give-a-talk-on-neurosymbolic-learning-on-february-20-2026-sparkles",
          title: 'Excited to be invited by the UCL AI Center to give a talk...',
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
            },},{id: "projects-python-reasoning-api",
          title: 'Python Reasoning API',
          description: "API for Accessing (Lineage) Trigger Graphs from Python",
          section: "Projects",handler: () => {
              window.location.href = "/projects/12_project.html";
            },},{id: "projects-pdq",
          title: 'PDQ',
          description: "Querying Distributed Data Sources Under Access and Database Constraints",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project.html";
            },},{id: "projects-chasebench",
          title: 'ChaseBench',
          description: "Benchmarking Reasoning Engines and Theorem Provers",
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
          description: "Scene Graph Generation Using Background Knowledge",
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
