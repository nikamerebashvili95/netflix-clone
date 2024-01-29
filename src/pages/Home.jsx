import { FaqsContainer } from "../containers/FaqsContainer";
import { FooterContainer } from "../containers/FooterContainer";
import { JumbotronContainer } from "../containers/JumbotronContainer";

const Home = () => {
  return (
    <>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
};

export default Home;
