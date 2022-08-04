import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/svg-decorator-blob-3.svg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;
const Column = tw.div`mt-24 lg:w-1/3`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Card = tw.div`lg:mx-4 xl:mx-8 max-w-sm lg:max-w-xs`;
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center h-80 lg:h-64 rounded`
]);
const Category = tw.div`mt-4 text-secondary-100 font-bold text-sm`;
const Title = tw.h4`mt-2 leading-relaxed font-bold text-lg`;
const Link = tw.a`inline-block mt-2 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`-z-10 absolute bottom-0 right-0 w-48 h-48 transform translate-x-40 -translate-y-8 opacity-25`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`-z-10 absolute top-0 left-0 w-48 h-48 transform -translate-x-32 translate-y-full opacity-25`;

export default () => {
  const blogPosts = [
    {
      imageSrc:
        "https://cdn1-production-images-kly.akamaized.net/CucCXuw6A-aJ2AjauQMrpHTbcoE=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3145078/original/078983400_1591357520-WhatsApp_Image_2020-06-03_at_14.16.56.jpeg",
      category: "Lowongan Pekerjaan",
      title: "Dibuka Lowongan Kerja PT. Pertamina",
      url: "https://timerse.com"
    },
    {
      imageSrc:
        "https://suarabanyumas.com/wp-content/uploads/2020/02/pelatihan-kerja-dok-pwk.jpg",
      category: "Pelatihan",
      title: "Pendaftaran Pelatihan Tahap 4 di BLK Indramayu",
      url: "https://reddit.com"
    },
    {
      imageSrc:
        "https://blorakab.go.id/resource/doc/post/190502103905blk_penutupan.JPG",
      category: "Pelatihan",
      title: "Penutupan Pelatihan Tahap 3 di BLK Indramayu",
      url: "#"
    }
  ];
  return (
    <Container id="pengumuman">
      <Content>
        <HeadingInfoContainer>
          <HeadingTitle>Pengumuman</HeadingTitle>
          {/* <HeadingDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis.</HeadingDescription> */}
        </HeadingInfoContainer>
        <ThreeColumn>
          {blogPosts.map((post, index) => (
            <Column key={index}>
              <Card>
                <Image imageSrc={post.imageSrc} />
                <Category>{post.category}</Category>
                <Title>{post.title}</Title>
                {/* <Link href={post.url}>Read Post</Link> */}
              </Card>
            </Column>
          ))}
        </ThreeColumn>
      </Content>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
