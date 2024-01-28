import AttractiveShockingFact from "./components/AttractiveShockingFact/AttractiveShockingFact";
import MainComponent from "./components/MaiComponent/MainComponent";
import PodcastPromotion from "./components/PodcastPromotion/PodcastPromotion";
import { background, img, microphone, podcasBackground } from "./images";

function App() {
  const data = {
    firstThumbnail: {
      fontFamily: "'Raleway', sans-serif",
      primaryColor: "#000",
      secondaryColor: "#fff",
      title: ["Top 6", "Shocking", "Moments"],
      tagline: "Caught on Camera",
      img: img,

      backgroundColor: "#FBD446",
    },
    secondThumbnail: {
      fontFamily: "'Antonio', sans-serif",
      headingFontFamily: "'Anton',sans-serif",
      primaryColor: "#000",
      secondaryColor: "#fff",
      icon: microphone,
      name: "Liceria's <br/> Podcast",
      title: "A Positive <br/> Peroson",
      tagline: "<span>Presented By</span> Estelle Darcy",
      contentBg: "#E8D69F",
      backgroundColor: "#FBD446",
      backgroundImg: podcasBackground,
    },
    thirdThumbnail: {
      fontFamily: "'Poppins', sans-serif",
      primaryColor: "#5E17EB",
      secondaryColor: "#fff",
      titleBg: "#FFDE59",
      titleColor: "#000",
      title: ["10 Steps", "For starting", "A Business"],
      img: img,
      backgroundColor: "#CB6CE6",
      noBorder: true,
    },
    fourthThumbnail: {
      fontFamily: "'Poppins', sans-serif",
      primaryColor: "#F6651C ",
      secondaryColor: "#fff",
      titleBg: "#000",
      title: ["10 Steps", "For starting", "A Business"],
      img: img,
      backgroundColor: "#FFB986",
    },
  };
  return (
    <div>
      <PodcastPromotion {...data.secondThumbnail} />
      <AttractiveShockingFact {...data.firstThumbnail} />
      <AttractiveShockingFact {...data.thirdThumbnail} />
      <AttractiveShockingFact {...data.fourthThumbnail} />
    </div>
  );
}

export default App;
