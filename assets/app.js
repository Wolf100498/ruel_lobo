const main = document.querySelector(".main");

// function for preloader
window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector("[data-preloader]").classList.add("hide");
  }, 1200);
});

// function that pulls the navigation backdown 
main.addEventListener("scroll", function () {
  document
    .querySelector("[data-navbar]")
    .classList[main.scrollTop > 400 ? "add" : "remove"]("scrolled");
});

// toggling hamburger menu
document.querySelector("[data-menu]").addEventListener("click", () => {
  navMobile.classList.toggle("active");
});

// will remove the sidebar if you scroll in hero section
const navMobile = document.querySelector("#nav-mobile");
  main.addEventListener("scroll", () => {
    navMobile.classList.remove("active");
  });

// for onclick redirect that wont work in html
const goto = (url) =>{
  window.location.href = 'http://' + url;
};

// variables for miniprojects
const miniProjects = document.querySelector('#mini-projects');
const myMiniProj = [
  {
    'name': 'A.R.K Motorcycle Rentals',
    'tools': 'HTML,CSS,Bootstrap,JavaScript',
    'img': 'assets/images/projects/ark.jpg',
    'url': 'https://wolf100498.github.io/ark_motorcycle_rentals/index.html',
    'desc': "Ark Motorcycle Rentals is my first team project in Kodego Bootcamp. This ecommerce frontend website uses HTML, CSS, and Bootstrap to achieve a better user experience and responsive design. We also use Lucidchart for planning, and Github for version control to boost our productivity. This project also gives me more experience to lead a team to build a frontend ecommerce website."
  },
  {
    'name': 'Rock Paper Scissors',
    'tools': 'HTML,CSS,JavaScript',
    'img': 'assets/images/projects/rps.jpg',
    'url': 'https://wolf100498.github.io/rock_paper_scissors',
    'desc': "One fun mini project that I made is this rock paper scissors, this project enhances my DOM Manipulation skill. In this game Player will play against AI in best of 10 game, player will just click his or her throw and the result will be given in screen. Player also may check the game history, which contains the number of set, the players throw in that set and the result who wins that set. If player doesnt want to continue the game, the reset button is available, which will set all things in the game back to its default state. This project really makes me proud of my DOM Manipulation and JavaScript skills."
  },
  {
    'name': 'Pixel_Conversion',
    'tools': 'HTML,SCSS,JavaScript',
    'img': 'assets/images/projects/pixel_conversion1.jpg',
    'url': 'https://wolf100498.github.io/pixel_conversion/',
    'desc': "This project helps me in css a lot. As a person who loves CSS, conversion from pixel to rem or em or ch etc. is always what I do to create an accurate size designs. Specially when I create responsive web designs. I create this simple pixel conversion with HTML, SCSS, Bootstrap and JavaScript, I love exploring new things specially things that related to frontend, thats why I try SCSS."
  },
  {
    'name': 'Web Developer Portfolio',
    'tools': 'HTML,CSS,Bootstrap',
    'img': 'assets/images/projects/webdev_thumbnail.jpg',
    'url': 'https://wolf100498.github.io/webdev_portfolio/',
    'desc': "Web developer static website that is build using HTML, CSS, and Bootstrap only. I build this website when Im still new to web development. This project exercises my skills in web design and because of this project I fell in love with CSS and frontend development."
  },
  {
    'name': 'My Favorite Animes',
    'tools': 'HTML,CSS,Bootstrap,JavaScript',
    'img': 'assets/images/projects/my_fav_animes_thumbnail.jpg',
    'url': 'https://wolf100498.github.io/my_favorite_animes/',
    'desc': "I love watching anime since I am in grade school, now that I build websites, I make sure to have a website that contains all my favorite animes to watch. This website is built using HTML, CSS, Bootstrap and Javascript. I also tried to make this website responsive. Over all I love this website because im combining my passion for web development and love for animes."
  },
];


// displaying mini projects
const miniProjectsLoop = () => {
  return (miniProjects.innerHTML = myMiniProj.map((item, i) => {
    return `
    <div class="mini-project" key="${i}" onclick="showModal('${item.name}', '${item.desc}', '${item.tools}', '${item.img}', '${item.url}')">
      <h4 class="project-title">${item.name}</h4>
      <ul class="mini-project-tools">
      ${item.tools.split(',').map((tool) => {
        return `<li>${tool}</li>`
      }).join('')}
      </ul>
    </div>`
  }).join(''));
};
miniProjectsLoop();

// displaying modal while putting values to it
const modal = document.querySelector('.modal-backdrop');
const modalBackdrop = document.querySelector('#mini-project-modal');
const showModal = (name, desc, tools, img, url) => {
  document.querySelector('#mini-name').textContent = name;
  document.querySelector('#mini-desc').textContent = desc;
  document.querySelector('#mini-tools').innerHTML = tools.split(',').map((tool) => {
    return `<li>${tool}</li>`
  }).join('');
  document.querySelector('#mini-url').setAttribute('href',url);
  document.querySelector('#mini-img').setAttribute('src',img);
  modal.classList.add('show');
  modalBackdrop.classList.add('show');
}

// modal backdrop if click will undisplay the modal
modal.addEventListener('click', (e) => {
  if(e.target == e.currentTarget){
    modal.classList.remove('show');
    modalBackdrop.classList.remove('show');
  }
});

document.querySelector('#close-modal').addEventListener('click', () => {
  modal.classList.remove('show');
  modalBackdrop.classList.remove('show');
});