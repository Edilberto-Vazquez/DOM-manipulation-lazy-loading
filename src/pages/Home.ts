import getData from "../utils/getData";
import AddImageButton from "../components/add-image-button";
import ImageWrapper from "../components/image-wrapper";
import registerImage from "../utils/lazy-loading";

const random = (max: number, min: number) =>
  Math.floor(Math.random() * (max - min) + min);

const handleClick = async () => {
  const image = new ImageWrapper();
  image.src = `https://randomfox.ca/images/${random(1, 122)}.jpg`;
  document.querySelector("#app")?.append(image);
  await registerImage(image);
};

const Home = async () => {
  const app = document.querySelector("#app");
  const addButton = new AddImageButton(handleClick);
  app?.append(addButton);
};

export default Home;
