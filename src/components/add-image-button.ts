class AddImageButton extends HTMLButtonElement {
  // create the properties
  protected handleClick: (event: any) => any;

  // constructor with the properties
  constructor(handleClick: (event: any) => any) {
    super();
    this.handleClick = handleClick.bind(this);
  }

  // method to generate the styles
  protected getStyles(): string {
    return `
    <style>
      .add-image-button {
          width: 120px;
          height: 40px;
          font-size: 1.8rem;
          background: rgb(79, 169, 211);
          border: none;
          border-radius: 5px;
          color: white;
      }
      .add-image-button:active {
          border: 2px solid rgb(111, 118, 119);
      }
    </style>
    `;
  }

  // method to generate the template
  protected getTemplete(): HTMLTemplateElement {
    const templete = document.createElement("template");
    templete.innerHTML = `Add image ${this.getStyles()}`;
    return templete;
  }

  // method to append the template to the shadowRoot
  protected render() {
    this.className = "add-image-button";
    this.appendChild(this.getTemplete().content.cloneNode(true));
    this.addEventListener("click", this.handleClick);
  }

  // method to connect the element to the DOM
  public connectedCallback(): void {
    this.render();
  }

  public disconnectedCallback(): void {
    this.removeEventListener("click", this.handleClick);
  }
}

customElements.define("add-image-button", AddImageButton, {
  extends: "button",
});

export default AddImageButton;
