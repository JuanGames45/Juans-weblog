//Modificar aquí modificará todo el sitio web
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
        <header>

            <title>Juan Games Blog</title>
            <img src="https://www.juangames.com/media/images/construction.webp" class="banner">
            <img src="https://www.juangames.com/media/images/backgrounds/banner.png" height="672" width="1920" class="banner">
            <link rel="icon" type="image/x-con" href="https://www.juangames.com/media/images/favicon.png">
            <link rel="stylesheet" type="text/css" href="https://www.juangames.com/styles/main.css">
                
            <div class="menu">
                <ul class="menu-buttons">
                    <a href="https://www.juangames.com/index.html"><li class="menu-button">Home</li></a>
                    <a href="https://www.juangames.com/blog.html"><li class="menu-button">Blog</li></a>
                    <a href="https://www.juangames.com/art.html"><li class="menu-button">Art</li></a>
                    <a href="https://www.juangames.com/about.html"><li class="menu-button">About</li></a>
                </ul>
    
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
            
        <div>
            <h3>Search on this blog</h3>
            <input placeholder="Search">
        </div>
        <br>
        <div>
            <a href="mailto:Contact@juangames.com"><img src="https://www.juangames.com/media/images/buttons/email-icon.gif" width="120" heigh="40"></a>
        </div>
        </div id="sidebar">`
        
    }
}
customElements.define('my-sidebar', MySidebar)

//Plantilla Footer
class MyFooter extends HTMLElement {
    connectedCallback () {
        this.innerHTML = `
        <footer>
          
        <div id="le-footer">
            <!--Botones aquí -->
            <div id="td1">
                <img src="https://www.juangames.com/media/images/buttons/notepad2.gif" width="120" height="40" id="footer">
                <img src="https://www.juangames.com/media/images/buttons/any_browser.gif" width="120" height="40">
                <img src="https://www.juangames.com/media/images/buttons/besteyes.gif" width="120" height="40">
                <br>
                <img src="https://www.juangames.com/media/images/buttons/bl64.gif" width="119" height="40">
                <a href="mailto:contact@juangames.com"><img src="https://www.juangames.com/media/images/buttons/email-icon.gif" width="119" height="40" class="imglink"></a>
                <img src="https://www.juangames.com/media/images/buttons/blinchik.gif" width="119" height="40">

            </div>

            <!--Webcounter y rss aquí-->
            <div id="td2">
                <p>Placeholder for this fucker</p>
            </div>    
            <br>
            <br>
            <br>
            <div id="td3">
            <br><br><br><br><br><br>
            <p id="td3">© 2022-2023 Juan Games</p>
            <a href="https://pages.github.com/"><img src="https://www.juangames.com/media/images/buttons/powered-by-github.png" width="119" height="40" class="imglink"></a>
            
            </div>
        </div id="le-footer">

         </footer>`
        
    }
}
customElements.define('my-footer', MyFooter)

//Plantilla cabecera posts
class MyHeader2 extends HTMLElement {
    connectedCallback () {
        this.innerHTML = `
        <header>

            <title>Juan Games Blog</title>                
            <img src="../../media/images/construction.webp" class="banner">
            <img src="../../media/images/backgrounds/banner.png" height="672" width="1920" class="banner">
            <link rel="icon" type="image/x-con" href="../../media/images/favicon.png">
            <link rel="stylesheet" type="text/css" href="styles/main.css">

            <div class="menu">
                <ul class="menu-buttons">
                    <a href="../../index.html"><li class="menu-button">Home</li></a>
                    <a href="../../blog.html"><li class="menu-button">Blog</li></a>
                    <a href="../../art.html"><li class="menu-button">Art</li></a>
                    <a href="../../about.html"><li class="menu-button">About</li></a>
                </ul>
    
            </div>  
                            
            </header>`
        
    }
}
customElements.define('my-header2', MyHeader2)

//Plantilla barra lateral posts
class MySidebar2 extends HTMLElement {
    connectedCallback () {
        this.innerHTML = `
        <div id="sidebar">
            
        <div>
            <h3>Search on this blog</h3>
            <input placeholder="Search">
        </div>
        <br>
        <div>
            <a href="mailto:Contact@juangames.com"><img src="../../media/images/buttons/email-icon.gif" width="120" heigh="40"></a>
        </div>
        </div id="sidebar">`
        
    }
}
customElements.define('my-sidebar2', MySidebar2)

//Plantilla Footer posts
class MyFooter2 extends HTMLElement {
    connectedCallback () {
        this.innerHTML = `
        <footer>
          
        <div id="le-footer">
            <!--Botones aquí -->
            <div id="td1">
                <img src="../../media/images/buttons/notepad2.gif" width="120" height="40" id="footer">
                <img src="../../media/images/buttons/any_browser.gif" width="120" height="40">
                <img src="../../media/images/buttons/besteyes.gif" width="120" height="40">
                <br>
                <img src="../../media/images/buttons/bl64.gif" width="119" height="40">
                <a href="mailto:contact@juangames.com"><img src="../../media/images/buttons/email-icon.gif" width="119" height="40" class="imglink"></a>
                <img src="../../media/images/buttons/blinchik.gif" width="119" height="40">

            </div>

            <!--Webcounter y rss aquí-->
            <div id="td2">
                <p>Placeholder for this fucker</p>
            </div>    
            <br>
            <br>
            <br>
            <div id="td3">
            <br><br><br><br><br><br>
            <p id="td3">© 2022-2023 Juan Games</p>
            <a href="https://pages.github.com/"><img src="../../media/images/buttons/powered-by-github.png" width="119" height="40" class="imglink"></a>
            
            </div>
        </div id="le-footer">

         </footer>`
        
    }
}
customElements.define('my-footer2', MyFooter2)

class ReadMore extends HTMLElement {
    connectedCallback () {
        this.innerHTML = `
        <button class="button">Read More>></button>`
        
    }
}
customElements.define('read-more', ReadMore)
