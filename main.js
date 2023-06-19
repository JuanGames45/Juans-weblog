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
        <head>
            <link rel="icon" type="image/x-con" href="https://www.juangames.com/media/images/favicon.png">
        </head>
        <header>

            <title>Juan Games Blog</title>
            <img src="https://www.juangames.com/media/images/construction.webp" class="banner">
            <img src="https://www.juangames.com/media/images/backgrounds/banner.png" height="672" width="1920" class="banner">
            
                
            <div class="menu">
                <ul class="menu-buttons">
                    <li class="imglink"><a href="https://www.juangames.com/index.html"><img src="https://www.juangames.com/media/images/buttons/home-button.png" width="90px" height="60px"></a></li>
                    <a href="https://www.juangames.com/blog.html"><li class="imglink"><img src="https://www.juangames.com/media/images/buttons/blog-button.png"></li></a>
                    <a href="https://www.juangames.com/art.html"><li class="imglink"><img src="https://www.juangames.com/media/images/buttons/art-button.png"></li></a>
                    <li class="imglink"><a href="https://www.juangames.com/about.html"><img src="https://www.juangames.com/media/images/buttons/about-button.png"></a></li>

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
            <h3 id="recent">My social media:</h3>
            <br>
            <a href="https://juangames45.newgrounds.com" target="_blank"><img src="https://www.juangames.com/media/images/buttons/ng-button.gif" width="176" heigh="62" class="imglink" id="sidebutton"></a>
            <br>
            <a href="https://twitter.com/JuanGames45" target="_blank"><img src="https://www.juangames.com/media/images/buttons/twitter-button.gif" width="176" heigh="62" class="imglink" id="sidebutton"></a>
            <br>
            <a href="" target="_blank"><img src="https://www.juangames.com/media/images/buttons/button-background.png" width="176" heigh="62" class="imglink" id="sidebutton"></a>
        </div>
        <p id="img_comment">(only one button left haha)</p>
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
            <!-- hitwebcounter Code START -->
            <a href="https://www.hitwebcounter.com" target="_blank">
            <img src="https://hitwebcounter.com/counter/counter.php?page=8386870&style=0001&nbdigits=5&type=ip&initCount=0" title="Free Counter" Alt="web counter"   border="0" /></a>
            </div>    
            <br>
            <br>
            <br>
            <div id="td3">
            <br><br><br><br><br><br>
            <p id="td3">© 2022-2023 Juan Games</p>
            <a href="https://pages.github.com/" target="_blank"><img src="https://www.juangames.com/media/images/buttons/powered-by-github.png" width="119" height="40" class="imglink"></a>
            
            </div>
        </div id="le-footer">

         </footer>`
        
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
