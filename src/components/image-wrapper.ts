class ImageWrapper extends HTMLElement {
  // create the properties
  protected _image: string;

  // constructor with the properties
  constructor(image: string) {
    super();
    this.attachShadow({ mode: "open" });
    this._image = image;
  }

  // getters and setter for the properties
  public get image(): string {
    return this._image;
  }

  public set image(value: string) {
    this._image = value;
  }

  // method to generate the styles
  protected getStyles(): string {
    return `
    <style>
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
      :host {
        width: 100%;
        height: auto;
        display: grid;
      }
    </style>
    `;
  }

  // method to generate the template
  protected getTemplete(): HTMLTemplateElement {
    const templete = document.createElement("template");
    templete.innerHTML = `
      <div class="image-wrapper">
        <img class="image-wrapper__image" src=${this.image} alt="fox image">
      </div>
      ${this.getStyles()}
    `;
    return templete;
  }

  // method to append the template to the shadowRoot
  protected render() {
    this.shadowRoot?.append(this.getTemplete().content.cloneNode(true));
  }

  // method to connect the element to the DOM
  public connectedCallback(): void {
    this.render();
  }
}

customElements.define("image-wrapper", ImageWrapper);

export default ImageWrapper;
