const isIntersecting = (entry: any) => {
  return entry.isIntersecting;
};

const accion = (entry: any) => {
  console.log("Hello");
  const node = entry.target;
  observer.unobserve(node);
};

const observer = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(accion);
});

const registerImage = (imagen: any) => {
  observer.observe(imagen);
};

export default registerImage;
