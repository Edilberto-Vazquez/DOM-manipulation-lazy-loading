const isIntersecting = (entry: any) => {
  return entry.isIntersecting;
};

const loadImage = (entry: any) => {
  const node = entry.target;
  node.setAttribute("src", node.src);
  observer.unobserve(node);
};

const observer = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(loadImage);
});

const registerImage = (imagen: any) => {
  observer.observe(imagen);
};

export default registerImage;
