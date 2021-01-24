const jsonDataArray = [
  {
    id: 1,
    company: "Photosnap",
    logo: "./images/photosnap.svg",
    new: true,
    featured: true,
    position: "Senior Frontend Developer",
    role: "Frontend",
    level: "Senior",
    postedAt: "1d ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["HTML", "CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 2,
    company: "Manage",
    logo: "./images/manage.svg",
    new: true,
    featured: true,
    position: "Fullstack Developer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1d ago",
    contract: "Part Time",
    location: "Remote",
    languages: ["Python"],
    tools: ["React"],
  },
  {
    id: 3,
    company: "Account",
    logo: "./images/account.svg",
    new: true,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2d ago",
    contract: "Part Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
  {
    id: 4,
    company: "MyHome",
    logo: "./images/myhome.svg",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "5d ago",
    contract: "Contract",
    location: "USA Only",
    languages: ["CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 5,
    company: "Loop Studios",
    logo: "./images/loop-studios.svg",
    new: false,
    featured: false,
    position: "Software Engineer",
    role: "FullStack",
    level: "Midweight",
    postedAt: "1w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["Ruby", "Sass"],
  },
  {
    id: 6,
    company: "FaceIt",
    logo: "./images/faceit.svg",
    new: false,
    featured: false,
    position: "Junior Backend Developer",
    role: "Backend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "UK Only",
    languages: ["Ruby"],
    tools: ["RoR"],
  },
  {
    id: 7,
    company: "Shortly",
    logo: "./images/shortly.svg",
    new: false,
    featured: false,
    position: "Junior Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["HTML", "JavaScript"],
    tools: ["Sass"],
  },
  {
    id: 8,
    company: "Insure",
    logo: "./images/insure.svg",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["Vue", "Sass"],
  },
  {
    id: 9,
    company: "Eyecam Co.",
    logo: "./images/eyecam-co.svg",
    new: false,
    featured: false,
    position: "Full Stack Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "3w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript", "Python"],
    tools: ["Django"],
  },
  {
    id: 10,
    company: "The Air Filter Company",
    logo: "./images/the-air-filter-company.svg",
    new: false,
    featured: false,
    position: "Front-end Dev",
    role: "Frontend",
    level: "Junior",
    postedAt: "1mo ago",
    contract: "Part Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
];

// Grabbing Elements

const containerEl = document.getElementById("container");

const searchBarEl = document.getElementById("searchBar");

let array = jsonDataArray;

// CreateHtml Elements Function

let filterTags = [];

function createHTMLTags(person) {
  const jobListCont = document.createElement("div");
  jobListCont.classList.add("jobListCont");
  const sideBar = document.createElement("div");
  sideBar.classList.add("sideBar");
  jobListCont.appendChild(sideBar);
  const jobLeftCont = document.createElement("div");
  jobLeftCont.classList.add("jobLeftCont");
  jobListCont.appendChild(jobLeftCont);
  const imgCont = document.createElement("div");
  imgCont.classList.add("imgCont");
  const imgEl = document.createElement("img");
  imgEl.src = person.logo;
  imgCont.appendChild(imgEl);
  jobLeftCont.appendChild(imgCont);
  const infoCont = document.createElement("div");
  infoCont.classList.add("infoCont");
  jobLeftCont.appendChild(infoCont);
  //   info Top Cont
  const infoContTop = document.createElement("div");
  infoContTop.classList.add("infoContTop");
  infoCont.appendChild(infoContTop);
  const companyPara = document.createElement("p");
  companyPara.innerHTML = person.company;
  infoContTop.appendChild(companyPara);
  const newFeaturedCont = document.createElement("div");
  newFeaturedCont.classList.add("new-FeatureCont");
  infoContTop.appendChild(newFeaturedCont);
  if (person.new) {
    const newPara = document.createElement("p");
    newPara.classList.add("new");
    newPara.innerHTML = "NEW!";
    newFeaturedCont.appendChild(newPara);
  }
  if (person.featured) {
    const featuredPara = document.createElement("p");
    featuredPara.classList.add("featured");
    featuredPara.innerHTML = "FEATURED";
    newFeaturedCont.appendChild(featuredPara);
    sideBar.classList.add("active");
  }
  const positionEl = document.createElement("h2");
  positionEl.innerHTML = person.position;
  infoCont.appendChild(positionEl);

  const ulEl = document.createElement("ul");
  const liDay = document.createElement("li");
  liDay.innerHTML = person.postedAt;
  ulEl.appendChild(liDay);

  const dot1 = document.createElement("li");
  dot1.classList.add("dot");
  ulEl.appendChild(dot1);

  const contractEl = document.createElement("li");
  ulEl.appendChild(contractEl);
  contractEl.innerHTML = person.contract;

  const dot2 = document.createElement("li");
  dot2.classList.add("dot");
  ulEl.appendChild(dot2);

  const locationEl = document.createElement("li");
  locationEl.innerHTML = person.location;
  ulEl.appendChild(locationEl);

  infoCont.appendChild(ulEl);

  const line = document.createElement("div");
  line.classList.add("line");
  jobListCont.appendChild(line);

  const jobRightCont = document.createElement("div");
  jobRightCont.classList.add("jobRightCont");

  const buttonTags = [
    ...person.languages,
    person.role,
    person.level,
    ...person.tools,
  ];

  buttonTags.forEach((item) => {
    const button = document.createElement("button");
    button.innerHTML = item;
    jobRightCont.appendChild(button);

    button.addEventListener("click", (e) => {
      containerEl.innerHTML = "";
      const targetText = e.target.innerHTML;
      filterTags.push(targetText);
      filterTags = [...new Set(filterTags)];
      searchBarActive();
      setJobList(filterTags);
    });
  });

  jobListCont.appendChild(jobRightCont);
  containerEl.appendChild(jobListCont);
}

function setJobList(filter) {
  if (!filter || !filter.length) {
    containerEl.innerHTML = "";
    return jsonDataArray.forEach((item) => {
      return createHTMLTags(item);
    });
  } else if (filter) {
    filter.forEach((word) => {
      containerEl.innerHTML = "";
      setTabs(filter);
      return searchJobs(word).forEach((item) => {
        return [...new Set(createHTMLTags(item))];
      });
    });
  }
}
function setTabs(tab) {
  searchBarEl.innerHTML = "";
  return tab.forEach((item) => {
    createTabs(item);
  });
}

setJobList();

function createTabs(item) {
  const tabEl = document.createElement("div");

  tabEl.classList.add("tabs");
  const para = document.createElement("p");
  para.innerHTML = item;

  tabEl.appendChild(para);

  const button = document.createElement("button");

  const cancelEl = document.createElement("div");
  cancelEl.classList.add("cancel");
  button.appendChild(cancelEl);
  tabEl.appendChild(button);

  button.addEventListener("click", (e) => {
    let text = e.target.closest(".tabs").querySelector("p").textContent;
    array = jsonDataArray;
    tabEl.remove();
    searchBarActive();
    return setJobList(ccc(text));
  });
  return [searchBarEl.appendChild(tabEl), searchBarActive()];
}

function ccc(text) {
  filterTags = filterTags.filter((item) => {
    if (item != text) {
      return item;
    }
  });
  return [...filterTags];
}

function searchJobs(word) {
  array = array.filter((item) => {
    if (
      item.languages.includes(word) ||
      item.role === word ||
      item.level === word ||
      item.tools.includes(word)
    ) {
      return item;
    }
  });
  return array;
}

function resetTabs() {
  filterTags = [];
  setJobList();
  searchBarEl.innerHTML = "";
  searchBarActive();
}

const clearEl = document.getElementById("clear");

clearEl.addEventListener("click", resetTabs);

const searchCont = document.getElementById("searchCont");

function searchBarActive() {
  if (searchBarEl.childElementCount) {
    return (searchCont.style.display = "flex");
  }
  return (searchCont.style.display = "none");
}

searchBarActive();
