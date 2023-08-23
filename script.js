function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}

AOS.init({
	duration: 1000
});

//Project's Tabs

const tabs = document.querySelectorAll(".tab-btn");
const all_contents = document.querySelectorAll('.contents');

tabs.forEach((tab, index)=>{
    tab.addEventListener('click', (e)=> {
        tabs.forEach(tab=>{tab.classList.remove('active')});
        tab.classList.add('active');

        let glider = document.querySelector('.glider');
        glider.style.width = e.target.offsetWidth + "px";
        glider.style.left = e.target.offsetLeft + "px";

        all_contents.forEach(contents=>{contents.classList.remove('active')})
        all_contents[index].classList.add("active");
    })
})

// scroll top btn
let scrollTop = document.querySelector('.scroll-top-btn');

window.addEventListener('scroll', function () {
	if (window.pageYOffset > 70) {
		scrollTop.classList.add('active');
	} else {
		scrollTop.classList.remove('active');
	}
});

window.addEventListener('load', ()=>{
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('pre-load');
})

const accordion = document.querySelectorAll('.contentBox');

accordion.forEach((acc, index)=>{
    acc.addEventListener('click', (e)=> {
        accordion.forEach(acc=>{acc.classList.remove('active')});
        acc.classList.add('active'); 
    })
})


//Lightbox for gallery

const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('.light-b',);
images.forEach(image =>{
    image.addEventListener('click', e => {
        lightbox.classList.add('active')
        const img = document.createElement('img')
        img.src = image.src
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(img)
    })
})

lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
})


//Messenger
<!-- Messenger Chat Plugin Code -->
      var chatbox = document.getElementById('fb-customer-chat');
      chatbox.setAttribute("page_id", "115662376721603");
      chatbox.setAttribute("attribution", "biz_inbox");

    <!-- Your SDK code -->
      window.fbAsyncInit = function() {
        FB.init({
          xfbml            : true,
          version          : 'v17.0'
        });
      };

      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));

