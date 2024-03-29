let tabsContainer = document.querySelector("#tabs");

let tabTogglers = tabsContainer.querySelectorAll("a");
console.log(tabTogglers);

tabTogglers.forEach(function (toggler) {
  toggler.addEventListener("click", function (e) {
    e.preventDefault();

    let tabName = this.getAttribute("href");

    let tabContents = document.querySelector("#tab-contents");

    for (let i = 0; i < tabContents.children.length; i++) {
      tabTogglers[i].parentElement.classList.remove(
        "border-[#971E39]",
        "border-b",
        "-mb-px",
        "opacity-100"
      );
      tabContents.children[i].classList.remove("hidden");
      if ("#" + tabContents.children[i].id === tabName) {
        continue;
      }
      tabContents.children[i].classList.add("hidden");
    }
    e.target.parentElement.classList.add(
      "border-[#971E39]",
      "border-b-4",
      "-mb-px",
      "opacity-20"
    );
  });
});

document.getElementById("default-tab").click();

//Smooth Scroll Effect

function smoothScroll(target, duration) {
    var target = document.querySelector(target)
    //Element position relative to the top of the screen
    var targetPosition = target.getBoundingClientRect().top
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition

    var startTime = null;

    function animation(currentTime) {
        if(startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration)
        window.scrollTo(0, run);
        if(timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease (t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2 * t * t + b;
        t--;
        return -c/2 * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);

}


//Selectors
var contact = document.querySelector('#contact');
var skills = document.querySelector('#skills');
var works = document.querySelector('#works');
var about = document.querySelector('#about');



//Event Handlers

contact.addEventListener('click', function(){
    smoothScroll('.contact-section', 1000);
})

skills.addEventListener('click', function(){
    smoothScroll('.skill-section', 1000);
})

works.addEventListener('click', function(){
    smoothScroll('.work-section', 1000);
})

about.addEventListener('click', function(){
    smoothScroll('.about-section', 1000);
})




//Hamburger Menu Animation

const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})

