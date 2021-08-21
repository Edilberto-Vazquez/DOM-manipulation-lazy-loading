import getData from "../utils/getData";
import AddImageButton from "../components/add-image-button";
import ImageWrapper from "../components/image-wrapper";
import registerImage from "../utils/lazy-loading";

const handleClick = async (event: any) => {
  const image = new ImageWrapper(await getData("https://randomfox.ca/floof/"));
  document.querySelector("#app")?.append(image);
  registerImage(image);
};

const Home = async () => {
  const app = document.querySelector("#app");
  const addButton = new AddImageButton(handleClick);
  app?.append(addButton);
};

export default Home;
