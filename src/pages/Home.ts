import getData from "../utils/getData";
import AddImageButton from "../components/add-image-button";
import ImageWrapper from "../components/image-wrapper";

const handleClick = async (event: any) => {
  const image = new ImageWrapper(await getData("https://randomfox.ca/floof/"));
  document.querySelector("#app")?.append(image);
};

const Home = async () => {
  const app = document.querySelector("#app");
  const addButton = new AddImageButton(handleClick);
  app?.append(addButton);
  // const image1 = new ImageWrapper(await getData("https://randomfox.ca/floof/"));
  // const image2 = new ImageWrapper(await getData("https://randomfox.ca/floof/"));
};

export default Home;
