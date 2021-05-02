class UrlShortener {
  constructor(element) {
    this.fromEl =
      element instanceof Element ? element : document.querySelector(element);
    this.urlLists = document.querySelector(".shortenListCont .urlLists");
    this.localStorageKey = `Saved_urls`;
    this.savedUrl = this.getSavedUrl();
    this.fromEl.addEventListener("submit", this.getShortUrl.bind(this));
    this.getLocalSavedUrl();
  }

  getShortUrl(e) {
    e.preventDefault();
    this.inputEl = this.fromEl.querySelector("#urlInput");
    const inputUrlValue = this.inputEl.value;
    const errorMsgEl = this.fromEl.querySelector("#errorMsg");

    if (inputUrlValue) {
      const isValidUrl = this.urlValidation(inputUrlValue);

      if (isValidUrl) {
        this.fromEl.classList.remove("error");
        this.fromEl.classList.add("loading");
        this.setShortUrl(inputUrlValue);
      } else {
        this.fromEl.classList.add("error");
        errorMsgEl.innerHTML = `Please enter a valid URL`;
        return;
      }
    } else {
      this.fromEl.classList.add("error");
      errorMsgEl.innerHTML = `Please add a link`;
      return;
    }
  }

  async fetchShortUrl(url) {
    const shrtcoUrl = `https://api.shrtco.de/v2/shorten?url=${url}`;
    const fetchShrtco = await fetch(shrtcoUrl);
    const data = await fetchShrtco.json();
    return data.result;
  }

  async setShortUrl(url) {
    const fetchdata = await this.fetchShortUrl(url);
    fetchdata.id = this.getRandomUrlId();

    await this.fromEl.classList.remove("loading");
    this.inputEl.value = null;

    const data = {
      id: this.getRandomUrlId(),
      original_link: fetchdata.original_link,
      short_link: fetchdata.short_link,
    };

    this.createUrlEl(data);
    this.saveUrlToLocal(data);
  }

  urlValidation(url) {
    const regex = /[(https?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
    return regex.test(url);
  }

  getSavedUrl() {
    return localStorage.getItem(this.localStorageKey)
      ? JSON.parse(localStorage.getItem(this.localStorageKey))
      : [];
  }

  saveUrlToLocal(data) {
    this.savedUrl.push(data);
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.savedUrl));
  }

  getLocalSavedUrl() {
    if (this.savedUrl.length)
      this.savedUrl.forEach((url) => this.createUrlEl(url));
    else return;
  }

  createUrlEl(data) {
    const listEl = document.createElement("li");
    listEl.className = `urlList`;
    listEl.id = data.id;
    const userUrlCont = document.createElement("div");
    userUrlCont.classList.add("userUrl");
    const userUrl = document.createElement("p");
    userUrl.innerHTML = data.original_link;
    userUrlCont.appendChild(userUrl);
    listEl.appendChild(userUrlCont);

    // ListRight

    const listRightEl = document.createElement("div");
    listRightEl.classList.add("listRight");

    const shortUrl = document.createElement("p");
    shortUrl.innerHTML = data.short_link;
    const copyBtn = document.createElement("button");
    copyBtn.id = `copyBtn`;
    copyBtn.innerHTML = `Copy`;

    listRightEl.appendChild(shortUrl);
    listRightEl.appendChild(copyBtn);
    listEl.appendChild(listRightEl);
    this.urlLists.prepend(listEl);

    copyBtn.addEventListener("click", (e) => {
      copyBtn.innerHTML = `Copied!`;
      copyBtn.style.backgroundColor = `hsl(257, 27%, 26%)`;
      copyBtn.classList.add("copied");
      window.navigator.clipboard.writeText(data.short_link);
      setTimeout(() => {
        copyBtn.classList.remove("copied");
        copyBtn.innerHTML = `Copy`;
        copyBtn.style.backgroundColor = `hsl(180, 66%, 49%)`;
      }, 3000);
    });
  }

  getRandomUrlId() {
    return Math.floor(Math.random() * 98765432)
      .toString(16)
      .slice(0, 6);
  }
}
const formEl = document.getElementById("form");
const urlShort = new UrlShortener(formEl);

const navContEl = document.getElementById("navCont");
const hamburgarEl = document.getElementById("hamburgar");

hamburgarEl.addEventListener("click", (e) => {
  navContEl.classList.toggle("nav-active");
});

window.addEventListener("click", (e) => {
  if (!e.target.closest(".links") && !e.target.closest(".hamburgar")) {
    navContEl.classList.remove("nav-active");
  }
});

window.addEventListener("scroll", (e) => {
  if (window.scrollY > window.innerHeight) {
    navContEl.classList.remove("nav-active");
  }
});
