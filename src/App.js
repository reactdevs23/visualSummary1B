import { useState } from "react";

import MainComponent from "./components/MainComponent/MainComponent";
import HeadingIcon from "./images/HeadingIcon";
import Technology from "./images/Technology";
import Moral from "./images/Moral";
import Vision from "./images/Vision";
import Replication from "./images/Replication";
import Questioning from "./images/Questioning";
import Faulty from "./images/Faulty";
import Personal from "./images/Personal";
import Energy from "./images/Energy";
import Big from "./images/Big";
import Idea from "./images/Idea";
import Validation from "./images/Validation";
import Action from "./images/Action";
import Learning from "./images/Learning";
import Focus from "./images/Focus";
import Perception from "./images/Perception";
import Empowerment from "./images/Empowerment";
import Mistakes from "./images/Mistakes";
import Unconventional from "./images/Unconventional";
import Cultural from "./images/Cultural";
import Resource from "./images/Resource";
import Agile from "./images/Agile";
import Limitation from "./images/Limitation";
import Oportunities from "./images/Oportunities";
import Narrow from "./images/Narrow";
import Invisible from "./images/Invisible";
import Physics from "./images/Physics";
import Expanding from "./images/Expanding";

function App() {
  const [allData, setAllData] = useState({
    fontFamily: "'Inter', sans-serif",
    titleFontFamily: "'Ovo', serif",
    mainBg: "#fff",
    lineColor: "#000",
    topHeader: {
      subHeading: "VISUAL SUMMARY",
      subHeadingColor: "#EE46BC",
      heading: "Beliefs on Progress & Innovation",
      headingColor: "#000",
    },
    header: {
      heading: "Some Things I Believe in",
      headingColor: "#000",
      subHeading: "Nat Friedman",
      subHeadingColor: "#000",
      border: "3px solid #000",
      boxShadow: "1.5px 3px 0px 0px #000",
      background: "#fff",
      headingIcon: <HeadingIcon color="#000" />,
    },
    data: [
      [
        {
          titleContainer: {
            title: "Reshaping the Universe",
            titleColor: "#000",
            border: "3px solid #000",
            background: "#B4F0FF",
            boxShadow: "1.5px 3px 0px 0px #000",
          },
          info: [
            {
              icon: <Technology color="#000" bg="#FEEE95" />,
              text: "Technology as a Tool",
              textColor: "#000",
            },
            {
              icon: <Moral color="#000" bg="#FEEE95" />,
              text: "Technology as a Tool",
              textColor: "#000",
            },
            {
              icon: <Vision color="#000" bg="#FEEE95" />,
              text: "Technology as a Tool",
              textColor: "#000",
            },
          ],
          border: "3px solid #000",
          background: "#fff",
        },
        {
          titleContainer: {
            title: "Reshaping the Universe",
            titleColor: "#000",
            border: "3px solid #000",
            background: "#B4F0FF",
            boxShadow: "1.5px 3px 0px 0px #000",
          },
          info: [
            {
              icon: <Replication color="#000" bg="#FEEE95" />,
              text: "Technology as a Tool",
              textColor: "#000",
            },
            {
              icon: <Questioning color="#000" bg="#FEEE95" />,
              text: "Technology as a Tool",
              textColor: "#000",
            },
            {
              icon: <Faulty color="#000" bg="#FEEE95" />,
              text: "Technology as a Tool",
              textColor: "#000",
            },
          ],
          border: "3px solid #000",
          background: "#fff",
        },
      ],
      [
        {
          titleContainer: {
            title: "Reshaping the Universe",
            titleColor: "#000",
            border: "3px solid #000",
            background: "#B4F0FF",
            boxShadow: "1.5px 3px 0px 0px #000",
          },
          info: [
            {
              icon: <Personal color="#000" bg="#F9DBAF" />,
              text: "Technology as a Tool",
              textColor: "#000",
            },
            {
              icon: <Energy color="#000" bg="#F9DBAF" />,
              text: "Technology as a Tool",
              textColor: "#000",
            },
            {
              icon: <Big color="#000" bg="#F9DBAF" />,
              text: "Technology as a Tool",
              textColor: "#000",
            },
          ],
          border: "3px solid #000",
          background: "#fff",
        },
        {
          titleContainer: {
            title: "Reshaping the Universe",
            titleColor: "#000",
            border: "3px solid #000",
            background: "#B4F0FF",
            boxShadow: "1.5px 3px 0px 0px #000",
          },
          info: [
            {
              icon: <Idea color="#000" bg="#F9DBAF" />,
              text: "Technology as a Tool",
              textColor: "#000",
            },
            {
              icon: <Validation color="#000" bg="#F9DBAF" />,
              text: "Technology as a Tool",
              textColor: "#000",
            },
            {
              icon: <Action color="#000" bg="#F9DBAF" />,
              text: "Technology as a Tool",
              textColor: "#000",
            },
          ],
          border: "3px solid #000",
          background: "#fff",
        },
        {
          titleContainer: {
            title: "Reshaping the Universe",
            titleColor: "#000",
            border: "3px solid #000",
            background: "#B4F0FF",
            boxShadow: "1.5px 3px 0px 0px #000",
          },
          info: [
            {
              icon: <Learning color="#000" bg="#FCE7F6" />,
              text: "Technology as a Tool",
              textColor: "#000",
            },
            {
              icon: <Focus color="#000" bg="#FCE7F6" />,
              text: "Technology as a Tool",
              textColor: "#000",
            },
            {
              icon: <Perception color="#000" bg="#FCE7F6" />,
              text: "Technology as a Tool",
              textColor: "#000",
            },
          ],
          border: "3px solid #000",
          background: "#fff",
        },
      ],
      [
        {
          titleContainer: {
            title: "Reshaping the Universe",
            titleColor: "#000",
            border: "3px solid #000",
            background: "#B4F0FF",
            boxShadow: "1.5px 3px 0px 0px #000",
          },
          info: [
            {
              icon: <Empowerment color="#000" bg="#FCE7F6" />,
              text: "Technology as a Tool",
              textColor: "#000",
            },
            {
              icon: <Mistakes color="#000" bg="#FCE7F6" />,
              text: "Technology as a Tool",
              textColor: "#000",
            },
            {
              icon: <Unconventional color="#000" bg="#FCE7F6" />,
              text: "Technology as a Tool",
              textColor: "#000",
            },
          ],
          border: "3px solid #000",
          background: "#fff",
        },
        {
          titleContainer: {
            title: "Reshaping the Universe",
            titleColor: "#000",
            border: "3px solid #000",
            background: "#B4F0FF",
            boxShadow: "1.5px 3px 0px 0px #000",
          },
          info: [
            {
              icon: <Cultural color="#000" bg="#FCE7F6" />,
              text: "Technology as a Tool",
              textColor: "#000",
            },
            {
              icon: <Resource color="#000" bg="#FCE7F6" />,
              text: "Technology as a Tool",
              textColor: "#000",
            },
            {
              icon: <Agile color="#000" bg="#FCE7F6" />,
              text: "Technology as a Tool",
              textColor: "#000",
            },
          ],
          border: "3px solid #000",
          background: "#fff",
        },
      ],

      [
        {
          titleContainer: {
            title: "Reshaping the Universe",
            titleColor: "#000",
            border: "3px solid #000",
            background: "#B4F0FF",
            boxShadow: "1.5px 3px 0px 0px #000",
          },
          info: [
            {
              icon: <Limitation color="#000" bg="#ECE9FE" />,
              text: "Technology as a Tool",
              textColor: "#000",
            },
            {
              icon: <Oportunities color="#000" bg="#ECE9FE" />,
              text: "Technology as a Tool",
              textColor: "#000",
            },
            {
              icon: <Narrow color="#000" bg="#ECE9FE" />,
              text: "Technology as a Tool",
              textColor: "#000",
            },
          ],
          border: "3px solid #000",
          background: "#fff",
        },
        {
          titleContainer: {
            title: "Reshaping the Universe",
            titleColor: "#000",
            border: "3px solid #000",
            background: "#B4F0FF",
            boxShadow: "1.5px 3px 0px 0px #000",
          },
          info: [
            {
              icon: <Invisible color="#000" bg="#ECE9FE" />,
              text: "Technology as a Tool",
              textColor: "#000",
            },
            {
              icon: <Physics color="#000" bg="#ECE9FE" />,
              text: "Technology as a Tool",
              textColor: "#000",
            },
            {
              icon: <Expanding color="#000" bg="#ECE9FE" />,
              text: "Technology as a Tool",
              textColor: "#000",
            },
          ],
          border: "3px solid #000",
          background: "#fff",
        },
      ],
    ],
  });

  return (
    <>
      <div
        style={{
          "--mainBg": allData.mainBg,
          "--fontFamily": allData.titleFontFamily,

          fontFamily: allData.fontFamily,
        }}
      >
        <MainComponent {...allData} />
      </div>
    </>
  );
}

export default App;
