var links = document.querySelectorAll(".link");
for(link of links){
  link.addEventListener("click", function(e){
    for(inlink of links){
      inlink.classList.remove("active");
    }
    e.target.classList.add("active");
  });
}
//Plantilla cabecera
class MyHeader extends HTMLElement {
    connectedCallback () {
        this.innerHTML = `
        
    <head>
   <link rel="stylesheet" type="text/css" href="https://www.juangames.com/style/Main.css">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Juan Games Blog</title>
    <link rel="icon" type="image/x-con" href="https://www.juangames.com/media/images/favicon.png">

    </head>

        <header>
        
            <img src="https://www.juangames.com/media/images/construction.webp" class="banner">
            <img src="https://www.juangames.com/media/images/backgrounds/banner.png" class="banner">
            <div class="desktopmenu">
                
                <a href="https://www.juangames.com/index"><button class="menuitem" id="homebutton">Home</button></a>
                <a href="https://www.juangames.com/blog.html"><button class="menuitem">Blog</button></a>
                <button class="menuitem">Art</button></a>
                <div class="dropdown">
                <a href="https://www.juangames.com/about.html"><button class="dropbtn" id="about"></button></a>
                <div class="dropdown-content">
                    <a class="dropitm" href="https://www.juangames.com/about/the-site.html">The site</a>
                    <a class="dropitm" href="https://www.juangames.com/about/myself.html">Myself</a>
                    <a class="dropitm" id="comm" href="https://www.juangames.com/about/comm-info">Commissions</a>
                </div>
                </div>
            
            </div>
            <div class="mobilemenu">
                
            <a href="https://www.juangames.com/index"><button class="mbmenuitem" id="homebutton">Home</button></a>
            <a href="https://www.juangames.com/blog"><button class="mbmenuitem">Blog</button></a>
            <a href="https://www.juangames.com/art"><button class="mbmenuitem">Art</button></a>
            <a href="https://www.juangames.com/about"><button class="mbmenuitem" id="About">About</button></a>
                
            </div>
        </header>`
        
    }
}
customElements.define('my-header', MyHeader)

//Plantilla barra lateral
class MySidebar extends HTMLElement {
    connectedCallback () {
        this.innerHTML = `
        <div id="sidebar">
        <div class="sidebar">

            <p>Go ahead and leave me.
                I think I prefer to stay inside.
                Maybe you'll find someone else
                To help you.
                Maybe Black Mesa...
                THAT WAS A JOKE, HA HA, FAT CHANCE.
                
                Anyway this cake is great
                It's so delicious and moist
                
                Look at me still talking when there's science to do
                When I look out there
                It makes me GLaD I'm not you.
                
                I've experiments to run
                There is research to be done
                On the people who are
                Still alive.
                
                And believe me I am still alive
                I'm doing science and I'm still alive
                I feel FANTASTIC and I'm still alive
                While you're dying I'll be still alive
                And when you're dead I will be still alive
                Still alive
                Still alive. </p>

            

        </div>`
        
    }
}
customElements.define('my-sidebar', MySidebar)

//Plantilla Footer
class MyFooter extends HTMLElement {
    connectedCallback () {
        this.innerHTML = `
        <div class="footerwrapper">
        <footer>
            

            <p>🄯 Juan Games 2024.</p>
            

        </footer>
        </div>`
        
    }
}
customElements.define('my-footer', MyFooter)

class ReadMore extends HTMLElement {
    connectedCallback () {
        this.innerHTML = `
    
        <button class="button">Read More>></button>`
        
    }
}
customElements.define('read-more', ReadMore)

// Nutshell configuration
Nutshell.setOptions({
    startOnLoad: true, // Start Nutshell on load? (default: true)
    lang: 'en', // Language (default: 'en', which is English)
    dontEmbedHeadings: true, // If 'true', removes the "embed this as a nutshell" option on headings
});
