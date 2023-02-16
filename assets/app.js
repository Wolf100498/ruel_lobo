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
    'tools': 'HTML,CSS,JavaScript',
    'img': 'assets/images/projects/ark.jpg',
    'url': 'https://wolf100498.github.io/ark_motorcycle_rentals/index.html',
    'desc': "Ark Motorcycle Rentals is my first team project in Kodego Bootcamp. This ecommerce frontend website uses HTML, CSS, and Bootstrap to achieve a better user experience and responsive design. We also use Lucidchart for planning, and Github for version control to boost our productivity. This project also gives me more experience to lead a team to build a frontend ecommerce website."
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