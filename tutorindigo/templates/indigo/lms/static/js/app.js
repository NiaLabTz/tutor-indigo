const SplitText = (elem, options = { split: "word" }) => {
  const splitByLetter = options?.split === "letter";

  gsap.registerPlugin(ScrollTrigger);

  const generateDiv = (word) => {
    const div = document.createElement("div");
    div.setAttribute("style", "position: relative; display: inline-block;");
    div.innerText = word;
    return div;
  };

  const innerText = elem.innerText;
  const words = innerText.split(" ");
  elem.innerText = "";

  const list = words.map(generateDiv);

  while (list.length) {
    const div = list.shift();
    if (splitByLetter) {
      const word = div.innerText;
      const letters = word.split("");
      const letterList = letters.map(generateDiv);
      while (letterList.length) {
        const letter = letterList.shift();
        elem.appendChild(letter);
      }
    } else {
      elem.appendChild(div);
    }
    elem.appendChild(document.createTextNode(" "));
  }
};

document.addEventListener("DOMContentLoaded", function () {
  lucide.createIcons();
  console.log("Icons loaded");
  
  if (document.querySelector(".hero-title")) {
    const heroTitle = document.querySelector(".hero-title");
    const heroTitle2 = document.querySelector(".hero-title-2");
    const heroSubContainer = document.querySelector(".sub-header-container");
    const heroParagraph = document.querySelector(".heroPara");
    const heroCta = document.querySelector(".hero-cta-container");
    
    heroTitle.style.opacity = 1;
    heroTitle2.style.opacity = 1;

    SplitText(heroTitle, { split: "letter" });
    SplitText(heroTitle2, { split: "letter" });

    gsap.fromTo(
      heroTitle.querySelectorAll("div"),
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, stagger: 0.05, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      heroTitle2.querySelectorAll("div"),
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 1,
        ease: "power3.out",
        delay: 0.5,
      }
    );


    heroSubContainer.style.opacity = 1;
    gsap.fromTo(
      heroSubContainer,
      { opacity: 0, scale: 0 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      heroParagraph,
      {opacity: 0, y: 50},
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        delay: 1,
      }
    )

    gsap.fromTo(
      heroCta,
      { opacity: 0, scale: 0 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: 1,
        ease: "power3.out",
      }
    );

    //End if
  }

  if (document.querySelector(".courses-listing-item")) {
    const courseItems = document.querySelectorAll(".courses-listing-item");

    courseItems.forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }


});
