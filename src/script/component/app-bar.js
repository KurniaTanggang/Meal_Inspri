class AppBar extends HTMLElement {
 
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
  
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            :host {
                display: block;
                width: 100%;
                background-color: #C3BA85;
                color: white;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            }
            h1 {
                padding: 16px;
                padding-bottom: 0px;
            }
            p {
                padding: 16px;
                padding-top: 0px;
            }
        </style>
        <h1>Meal Inspiration</h1>
        <p>Want to eat pizza today? Or...</p>`;
    }
 }
  
 customElements.define("app-bar", AppBar);