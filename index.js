var home_section = document.getElementById("a-home");
var about_section = document.getElementById("a-about");
var skills_section = document.getElementById("a-skills");
var experience_section = document.getElementById("a-experience");
var education_section = document.getElementById("a-education");
var portfolio_section = document.getElementById("a-portfolio");
var contact_section = document.getElementById("a-contact");
var cur = 0;
var education = 1640;
var about = 100;
var skills = 670;
var experience = 990;
var portfolio = 2550;
var contact = 5000;

function scrollby(target_value)
{

    let sctI = setInterval(()=>{window.scrollBy(0,50)
        if(cur >= target_value)
        {
            clearInterval(sctI);
            cur = 0;
            return;
        }
        else
        {
            cur += 50;
        }
    },50)
   
}



education_section.addEventListener("click",(event)=>{
   event.preventDefault();
   scrollby(education);
})
about_section.addEventListener("click",(event)=>
{
    event.preventDefault();
    scrollby(about)
})
skills_section.addEventListener("click",(event)=>
{
    event.preventDefault();
   
    scrollby(skills)

})

experience_section.addEventListener("click",(event)=>
{
    event.preventDefault();
  //  var experience_coordinates = experience_section.getBoundingClientRect();
    scrollby(experience)
})
portfolio_section.addEventListener("click",(event)=>
{
    event.preventDefault();
    scrollby(portfolio)
})

contact_section.addEventListener("click",(event)=>
{
    event.preventDefault();
    scrollby(contact)
})


// ------------------------------------------------------------






var allbars = document.querySelectorAll('.skill-progress > div');
 console.log(allbars)
var skillscontainer = document.getElementById('skills-container');

function intialisebars()
{
     for(let bar of allbars)
    {
       bar.style.width = 0 + "%";
    }
}

window.addEventListener('scroll',checkScroll)

function fillbars()
{
    for(let bar of allbars)
    {
      var width = bar.getAttribute('data-bar-width');
      var curwidth=0;
      var interval = setInterval(()=>
      {
            if(curwidth>=width)
            {
                 clearInterval(interval);return;
            }
            bar.style.width = curwidth + '%';
            curwidth++;
      },60)

      //bar.style.width=ele +'%';
    }
}

intialisebars();
var experiencecoords = document.getElementById('experience').getBoundingClientRect();

var animationdone = false;
function checkScroll()
{
    var coordinates = skillscontainer.getBoundingClientRect();
    if(animationdone!=true && coordinates.top < window.innerHeight)
    {

        fillbars();
        animationdone = true;
    }
    else if(coordinates.top>window.innerHeight)
    {
        animationdone = false;
        intialisebars();
    }
}