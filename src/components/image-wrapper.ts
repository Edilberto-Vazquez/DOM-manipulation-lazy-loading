class ImageWrapper extends HTMLElement {
  // create the properties
  protected _src: string;
  protected _observer: MutationObserver;

  // constructor with the properties
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._observer = new MutationObserver((mutations) =>
      this.onDomChanged(mutations)
    );
    this._src = "";
  }

  // getters and setter for the properties
  public get src(): string {
    return this._src;
  }

  public set src(value: string) {
    this._src = value;
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
    // dataset.src is the property, data-src is the attribute
    templete.innerHTML = `
      <div class="image-wrapper">
        <img class="image-wrapper__image" alt="fox image">
      </div>
      ${this.getStyles()}
    `;
    return templete;
  }

  // method to append the template to the shadowRoot
  protected render() {
    this.shadowRoot?.append(this.getTemplete().content.cloneNode(true));
  }

  public onDomChanged(mutations: MutationRecord[]): void {
    if (!this.shadowRoot) {
      return;
    }
  }

  // method to connect the element to the DOM
  public connectedCallback(): void {
    this.render();
  }

  static get observedAttributes(): string[] {
    return ["src"];
  }

  public attributeChangedCallback(
    name: string,
    oldValue: any,
    newValue: any
  ): void {
    if (name === "src") {
      this.src = newValue;
      const img = this.shadowRoot?.querySelector("img");
      img && (img.src = this.src);
    }
  }

  public disconnectedCallback(): void {
    this._observer.disconnect();
  }
}

customElements.define("image-wrapper", ImageWrapper);

export default ImageWrapper;
