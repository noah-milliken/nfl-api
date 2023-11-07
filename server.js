const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8000;

app.use(cors());

const nflTeams = [
  {
    team: "Arizona Cardinals",
    mascot: "Big Red",
    mascotImageUrl: "https://example.com/path/to/big-red-mascot-image.jpg",
    colors: ["#97233F", "#000000", "#FFB612"],
    city: "Arizona",
    abbreviation: "ARI",
  },
  {
    team: "Atlanta Falcons",
    mascot: "Freddie Falcon",
    mascotImageUrl:
      "https://example.com/path/to/freddie-falcon-mascot-image.jpg",
    colors: ["#A71930", "#000000", "#A5ACAF"],
    city: "Atlanta",
    abbreviation: "ATL",
  },
  {
    team: "Baltimore Ravens",
    mascot: "Poe",
    mascotImageUrl: "https://example.com/path/to/poe-mascot-image.jpg",
    colors: ["#241773", "#000000", "#9E7C0C"],
    city: "Baltimore",
    abbreviation: "BAL",
  },
  {
    team: "Buffalo Bills",
    mascot: "Billy Buffalo",
    mascotImageUrl:
      "https://example.com/path/to/billy-buffalo-mascot-image.jpg",
    colors: ["#00338D", "#C60C30", "#FFFFFF"],
    city: "Buffalo",
    abbreviation: "BUF",
  },
  {
    team: "Carolina Panthers",
    mascot: "Sir Purr",
    mascotImageUrl: "https://example.com/path/to/sir-purr-mascot-image.jpg",
    colors: ["#0085CA", "#101820", "#A5ACAF"],
    city: "Charlotte",
    abbreviation: "CAR",
  },
  {
    team: "Chicago Bears",
    mascot: "Staley Da Bear",
    mascotImageUrl:
      "https://example.com/path/to/staley-da-bear-mascot-image.jpg",
    colors: ["#0B162A", "#C83803", "#A5ACAF"],
    city: "Chicago",
    abbreviation: "CHI",
  },
  {
    team: "Cincinnati Bengals",
    mascot: "Who Dey",
    mascotImageUrl: "https://example.com/path/to/who-dey-mascot-image.jpg",
    colors: ["#FB4F14", "#000000", "#FFFFFF"],
    city: "Cincinnati",
    abbreviation: "CIN",
  },
  {
    team: "Cleveland Browns",
    mascot: "Chomps",
    mascotImageUrl: "https://example.com/path/to/chomps-mascot-image.jpg",
    colors: ["#311D00", "#FF3C00", "#000000"],
    city: "Cleveland",
    abbreviation: "CLE",
  },
  {
    team: "Dallas Cowboys",
    mascot: "Rowdy",
    mascotImageUrl: "https://example.com/path/to/rowdy-mascot-image.jpg",
    colors: ["#003594", "#041E42", "#869397"],
    city: "Dallas",
    abbreviation: "DAL",
  },
  {
    team: "Denver Broncos",
    mascot: "Miles",
    mascotImageUrl: "https://example.com/path/to/miles-mascot-image.jpg",
    colors: ["#002244", "#FB4F14", "#FFC325"],
    city: "Denver",
    abbreviation: "DEN",
  },
  {
    team: "Detroit Lions",
    mascot: "Roary",
    mascotImageUrl: "https://example.com/path/to/roary-mascot-image.jpg",
    colors: ["#0076B6", "#B0B7BC", "#000000"],
    city: "Detroit",
    abbreviation: "DET",
  },
  {
    team: "Green Bay Packers",
    mascot: "No official mascot",
    mascotImageUrl: "",
    colors: ["#203731", "#FFB612", "#000000"],
    city: "Green Bay",
    abbreviation: "GB",
  },
  {
    team: "Houston Texans",
    mascot: "Toro",
    mascotImageUrl: "https://example.com/path/to/toro-mascot-image.jpg",
    colors: ["#03202F", "#A71930", "#FFFFFF"],
    city: "Houston",
    abbreviation: "HOU",
  },
  {
    team: "Indianapolis Colts",
    mascot: "Blue",
    mascotImageUrl: "https://example.com/path/to/blue-mascot-image.jpg",
    colors: ["#002C5F", "#A2AAAD", "#FFFFFF"],
    city: "Indianapolis",
    abbreviation: "IND",
  },
  {
    team: "Jacksonville Jaguars",
    mascot: "Jaxson de Ville",
    mascotImageUrl:
      "https://example.com/path/to/jaxson-de-ville-mascot-image.jpg",
    colors: ["#006778", "#D7A22A", "#101820"],
    city: "Jacksonville",
    abbreviation: "JAX",
  },
  {
    team: "Kansas City Chiefs",
    mascot: "K.C. Wolf",
    mascotImageUrl: "https://example.com/path/to/kc-wolf-mascot-image.jpg",
    colors: ["#E31837", "#FFB612", "#000000"],
    city: "Kansas City",
    abbreviation: "KC",
  },
  {
    team: "Las Vegas Raiders",
    mascot: "No official mascot",
    mascotImageUrl: "",
    colors: ["#000000", "#A5ACAF", "#C4C9CC"],
    city: "Las Vegas",
    abbreviation: "LV",
  },
  {
    team: "Los Angeles Chargers",
    mascot: "Boltman",
    mascotImageUrl: "https://example.com/path/to/boltman-mascot-image.jpg",
    colors: ["#0080C6", "#FFC20E", "#002244"],
    city: "Los Angeles",
    abbreviation: "LAC",
  },
  {
    team: "Los Angeles Rams",
    mascot: "Rampage",
    mascotImageUrl: "https://example.com/path/to/rampage-mascot-image.jpg",
    colors: ["#002244", "#866D4B", "#FFFFFF"],
    city: "Los Angeles",
    abbreviation: "LAR",
  },
  {
    team: "Miami Dolphins",
    mascot: "T.D.",
    mascotImageUrl: "https://example.com/path/to/td-mascot-image.jpg",
    colors: ["#008E97", "#F58220", "#005778"],
    city: "Miami",
    abbreviation: "MIA",
  },
  {
    team: "Minnesota Vikings",
    mascot: "Viktor the Viking",
    mascotImageUrl: "https://example.com/path/to/viktor-mascot-image.jpg",
    colors: ["#4F2683", "#FFC62F", "#000000"],
    city: "Minnesota",
    abbreviation: "MIN",
  },
  {
    team: "New England Patriots",
    mascot: "Pat Patriot",
    mascotImageUrl: "https://example.com/path/to/pat-patriot-mascot-image.jpg",
    colors: ["#002244", "#C8102E", "#B0B7BC"],
    city: "New England",
    abbreviation: "NE",
  },
  {
    team: "New Orleans Saints",
    mascot: "Gumbo",
    mascotImageUrl: "https://example.com/path/to/gumbo-mascot-image.jpg",
    colors: ["#D3BC8D", "#000000", "#FFFFFF"],
    city: "New Orleans",
    abbreviation: "NO",
  },
  {
    team: "New York Giants",
    mascot: "No official mascot",
    mascotImageUrl: "",
    colors: ["#0B2265", "#A71930", "#A5ACAF"],
    city: "New York",
    abbreviation: "NYG",
  },
  {
    team: "New York Jets",
    mascot: "No official mascot",
    mascotImageUrl: "",
    colors: ["#125740", "#FFFFFF", "#000000"],
    city: "New York",
    abbreviation: "NYJ",
  },
  {
    team: "Philadelphia Eagles",
    mascot: "Swoop",
    mascotImageUrl: "https://example.com/path/to/swoop-mascot-image.jpg",
    colors: ["#004C54", "#A5ACAF", "#000000"],
    city: "Philadelphia",
    abbreviation: "PHI",
  },
  {
    team: "Pittsburgh Steelers",
    mascot: "Steely McBeam",
    mascotImageUrl:
      "https://example.com/path/to/steely-mcbeam-mascot-image.jpg",
    colors: ["#FFB612", "#101820", "#000000"],
    city: "Pittsburgh",
    abbreviation: "PIT",
  },
  {
    team: "San Francisco 49ers",
    mascot: "Sourdough Sam",
    mascotImageUrl:
      "https://example.com/path/to/sourdough-sam-mascot-image.jpg",
    colors: ["#AA0000", "#B3995D", "#000000"],
    city: "San Francisco",
    abbreviation: "SF",
  },
  {
    team: "Seattle Seahawks",
    mascot: "Blitz",
    mascotImageUrl: "https://example.com/path/to/blitz-mascot-image.jpg",
    colors: ["#002244", "#69BE28", "#A5ACAF"],
    city: "Seattle",
    abbreviation: "SEA",
  },
  {
    team: "Tampa Bay Buccaneers",
    mascot: "Captain Fear",
    mascotImageUrl: "https://example.com/path/to/captain-fear-mascot-image.jpg",
    colors: ["#D50A0A", "#34302B", "#000000"],
    city: "Tampa Bay",
    abbreviation: "TB",
  },
  {
    team: "Tennessee Titans",
    mascot: "T-Rac",
    mascotImageUrl: "https://example.com/path/to/t-rac-mascot-image.jpg",
    colors: ["#0C2340", "#418FDE", "#A5ACAF"],
    city: "Tennessee",
    abbreviation: "TEN",
  },
  {
    team: "Washington Football Team",
    mascot: "No official mascot",
    mascotImageUrl: "",
    colors: ["#773141", "#FFB612", "#000000"],
    city: "Washington, D.C.",
    abbreviation: "WAS",
  },
];

app.get("/", (request, response) => {
  console.log("hit default");
  response.sendFile(__dirname + "/index.html");
});

app.get("/api/teams/:teamname", (request, response) => {
  const requestedTeam = request.params.teamname.toLowerCase();
  console.log(requestedTeam);
  const foundTeam = nflTeams.find((team) => {
    console.log(team.team.toLowerCase());
    return team.team.toLowerCase() === requestedTeam;
  });
  console.log("found", foundTeam);
  if (foundTeam) {
    response.json(foundTeam);
  } else {
    response.json({ error: "Please check your spelling" });
  }
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
