
const Sections = document.querySelectorAll ("section")
const navList = document.getElementById ("navbar__list")

function testingDist(secCheck) {
    const box = secCheck.getBoundingClientRect();
    return (
        box.top >= 0 &&
        box.top <= (window.innerHeight)-400
        // rectangular.left >= 0 &&
        // rectangular.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        // rectangular.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
    //  Sections.forEach(item => {       (another solution)
        for (let item of Sections) {
        const list = document.createElement("li");
        const link = document.createElement("a");
        const myData_nav = item.getAttribute("data-nav");
        // myLink.textContent = myData_nav
        let sectionid = item.getAttribute('id');
        const Textnode = document.createTextNode (myData_nav);
        link.appendChild(Textnode);
        list.appendChild(link);
        navList.appendChild(list);
        link.classList.add ("menu__link");
        link.setAttribute('href', `#${sectionid}`);
        link.addEventListener ("click", scrollIntoView );
        }
       
        function scrollIntoView (event) {                // This function is for performance
            let action = document.querySelector (event.target.hash)
                event.preventDefault ()
                action.scrollIntoView ({
                    behavior: "smooth"
                })    
            }
            
            
            function scrolling() {
                let li_element = document.querySelectorAll('.menu__link');
                for (let i = 0; i < Sections.length; i++) {
                    if (testingDist(Sections[i])) {
                        li_element[i].classList.add("link__active");
                        Sections[i].classList.add("your-active-class");
                    } else {
                        li_element[i].classList.remove("link__active");
                        Sections[i].classList.remove("your-active-class");
            
                    }
                }
            }
            document.addEventListener('scroll', scrolling);