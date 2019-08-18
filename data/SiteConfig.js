const config = {
  siteTitle: "Claudia Valdivieso",
  siteTitleShort: "Claudia Valdivieso",
  siteTitleAlt: "Claudia Valdivieso",
  siteLogo: "/logos/lavaldi.jpg",
  siteUrl: "https://www.lavaldi.com",
  repo: "https://github.com/lavaldi/lavaldi.github.com",
  dateFromFormat: "YYYY-MM-DD",
  dateFormat: "MMMM Do, YYYY",
  siteDescription: "Claudia Valdivieso, christian, wife and front end.",
  siteRss: "/rss.xml",
  googleAnalyticsID: "UA-99146766-1",
  postDefaultCategoryID: "code",
  userName: "Claudia",
  userEmail: "claumavaldivieso@gmail.com",
  userTwitter: "lavaldi_",
  menuLinks: [
    {
      name: "Me",
      link: "/me/"
    },
    {
      name: "Articles",
      link: "/blog/"
    },
    {
      name: "Contact",
      link: "/contact/"
    }
  ],
  themeColor: "#EB374B", // Used for setting manifest and progress theme colors.
  backgroundColor: "#ffffff"
};

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
