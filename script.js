  class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <nav class="navbar fixed-bottom navbar-expand navbar-light bg-light">
      <div class="navbar-nav d-flex justify-content-between w-100">
          <a class="nav-item nav-link active" href="#">
            <img src="./img/user-icon.png">
          </a>
          <a class="nav-item nav-link" href="./index.html">  <img height="50px"  src="./img/home.png">
          </a>
          <a class="nav-item nav-link" href="./shop.html">  <img width="50px" src="./img/coins.png">
          </a>
          <a class="nav-item nav-link disabled" href="#">  <img src="./img/user-icon.png">
          </a>
        </div>
    </nav>
      `;
    }
  }
  class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `    
        <footer>            
          {*footer code goes here *}         
        </footer>     
      `;
    }
  }

customElements.define('main-header', Header);
customElements.define('main-footer', Footer);