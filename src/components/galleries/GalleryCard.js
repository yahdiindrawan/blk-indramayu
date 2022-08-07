import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-7.svg";
import Galleri1 from "images/galleries/galleri-1.jpeg"
import Galleri2 from "images/galleries/galleri-2.jpeg"
import Galleri3 from "images/galleries/galleri-3.jpeg"
import Galleri4 from "images/galleries/galleri-4.jpeg"
import Galleri5 from "images/galleries/galleri-5.jpeg"
import Galleri6 from "images/galleries/galleri-6.jpeg"
import Galleri7 from "images/galleries/galleri-7.jpeg"
import Galleri8 from "images/galleries/galleri-8.jpeg"
import Galleri9 from "images/galleries/galleri-9.jpeg"
import Galleri10 from "images/galleries/galleri-10.jpeg"
import Galleri11 from "images/galleries/galleri-11.jpeg"
import Galleri12 from "images/galleries/galleri-12.jpeg"

const HeaderRow = tw.div`flex justify-center items-center flex-col xl:flex-row`;
const Header = tw(SectionHeading)``;

const TabContent = tw(motion.div)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
const Card = tw(motion.a)`bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0`;
const CardImageContainer = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-56 xl:h-64 bg-center bg-cover relative rounded-t`}
`;
// const CardRatingContainer = tw.div`leading-none absolute inline-flex bg-gray-100 bottom-0 left-0 ml-4 mb-4 rounded-full px-5 py-2 items-end`;
// const CardRating = styled.div`
//   ${tw`mr-1 text-sm font-bold flex items-end`}
//   svg {
//     ${tw`w-4 h-4 fill-current text-orange-400 mr-1`}
//   }
// `;


const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;

export default ({
  heading = "Checkout the Menu",
  tabs = {
    Semua: [
      {
        imageSrc: Galleri1,
        title: "Teknik Las",
        category: "Dibuka",
        url: "#"
      },
      {
        imageSrc: Galleri2,
        title: "Teknik Otomotif",
        category: "Segera",
        url: "#"
      },
      {
        imageSrc: Galleri3,
        title: "Desain Grafis",
        category: "Ditutup",
        url: "#"
      },
      {
        imageSrc: Galleri4,
        title: "Garmen Apparel",
        category: "Ditutup",
        url: "#"
      },
      {
        imageSrc: Galleri5,
        title: "Practical Office",
        category: "Ditutup",
        url: "#"
      },
      {
        imageSrc: Galleri6,
        title: "Perawatan AC",
        category: "Ditutup",
        url: "#"
      },
      {
        imageSrc: Galleri7,
        title: "Caretaker - Baby Sitter",
        category: "Dibuka",
        url: "#"
      },
      {
        imageSrc: Galleri8,
        title: "Tata Rias",
        category: "Dibuka",
        url: "#"
      },
      {
        imageSrc: Galleri9,
        title: "Bahasa Asing",
        category: "Segera",
        url: "#"
      },
      {
        imageSrc: Galleri10,
        title: "Safety / K3 Umum",
        category: "Dibuka",
        url: "#"
      },
      {
        imageSrc: Galleri11,
        title: "Operator Forklift",
        category: "Ditutup",
        url: "#"
      },
      {
        imageSrc: Galleri12,
        title: "Scaffolder",
        category: "Segera",
        url: "#"
      }
    ],
    Dibuka: getRandomCards('Dibuka'),
    Segera: getRandomCards('Segera'),
    Ditutup: getRandomCards('Ditutup'),
  }
}) => {
  /*
   * To customize the tabs, pass in data using the `tabs` prop. It should be an object which contains the name of the tab
   * as the key and value of the key will be its content (as an array of objects).
   * To see what attributes are configurable of each object inside this array see the example above for "Starters".
   */
  const tabsKeys = Object.keys(tabs);
  const [activeTab] = useState(tabsKeys[0]);

  return (
    <Container id="galeri">
      <ContentWithPaddingXl>
        <HeaderRow>
          <Header>{heading}</Header>
        </HeaderRow>

        {tabsKeys.map((tabKey, index) => (
          <TabContent
            key={index}
            variants={{
              current: {
                opacity: 1,
                scale:1,
                display: "flex",
              },
              hidden: {
                opacity: 0,
                scale:0.8,
                display: "none",
              }
            }}
            transition={{ duration: 0.4 }}
            initial={activeTab === tabKey ? "current" : "hidden"}
            animate={activeTab === tabKey ? "current" : "hidden"}
          >
            {tabs[tabKey].map((card, index) => (
              <CardContainer key={index}>
                <Card className="group" href={card.url} initial="rest" whileHover="hover" animate="rest">
                  <CardImageContainer imageSrc={card.imageSrc}>
                  </CardImageContainer>
                </Card>
              </CardContainer>
            ))}
          </TabContent>
        ))}
      </ContentWithPaddingXl>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};

/* This function is only there for demo purposes. It populates placeholder cards */
const getRandomCards = (category) => {
  const cards = [
    {
      imageSrc: Galleri1,
      title: "Teknik Las",
      category: "Dibuka",
      url: "#"
    },
    {
      imageSrc: Galleri2,
      title: "Teknik Otomotif",
      category: "Segera",
      url: "#"
    },
    {
      imageSrc: Galleri3,
      title: "Desain Grafis",
      category: "Ditutup",
      url: "#"
    },
    {
      imageSrc: Galleri4,
      title: "Garmen Apparel",
      category: "Ditutup",
      url: "#"
    },
    {
      imageSrc: Galleri5,
      title: "Practical Office",
      category: "Ditutup",
      url: "#"
    },
    {
      imageSrc: Galleri6,
      title: "Perawatan AC",
      category: "Ditutup",
      url: "#"
    },
    {
      imageSrc: Galleri7,
      title: "Caretaker - Baby Sitter",
      category: "Dibuka",
      url: "#"
    },
    {
      imageSrc: Galleri8,
      title: "Tata Rias",
      category: "Dibuka",
      url: "#"
    },
    {
      imageSrc: Galleri9,
      title: "Bahasa Asing",
      category: "Segera",
      url: "#"
    },
    {
      imageSrc: Galleri10,
      title: "Safety / K3 Umum",
      category: "Dibuka",
      url: "#"
    },
    {
      imageSrc: Galleri11,
      title: "Operator Forklift",
      category: "Ditutup",
      url: "#"
    },
    {
      imageSrc: Galleri12,
      title: "Scaffolder",
      category: "Segera",
      url: "#"
    }
  ]

  // Filter array
  return cards.filter((card) => card.category === category);
};
