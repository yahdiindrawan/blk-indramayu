import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import Features from "components/features/ThreeColSimple.js";
import TabGrid from "components/cards/TabCardGrid.js";
import Blog from "components/blogs/ThreeColSimpleWithImage.js";
import FAQ from "components/faqs/SingleCol.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import Footer from "components/footers/MiniCenteredFooter";

export default () => {
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const imageCss = tw`rounded-4xl`;
  return (
    <AnimationRevealPage>
      <Hero
        heading={<>Keahlianku <HighlightedText>Masa Depanku</HighlightedText></>}
        description="UPTD Balai Latihan Kerja Kabupaten Indramayu merupakan lembaga yang menyelenggarakan kegiatan pandidikan dan pelatihan untuk meningkatkan keterampilan dan keahlian tenaga kerja sesuai dengan kebutuhan pasar kerja dalam dan luar negeri."
        imageSrc="https://blkindramayu.com/wp-content/uploads/2021/01/59c4a17d-9093-41f1-b61d-70a7b13dfa6d.jpg"
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Pelatihan"
        primaryButtonUrl="#pelatihan"
        watchVideoButtonText="Tutorial Pendaftaran"
        watchVideoYoutubeUrl="https://www.youtube.com/embed/tfDjlAI69GI"
      />
      <Features />
      {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
      <TabGrid
        heading={
          <>
            Daftar Pelatihan
          </>
        }
      />
      <Blog
        heading="Pengumuman"
      />
      <FAQ
        heading={<>Frequently Asked Questions</>}
      />
      <Testimonial
        subheading=""
        heading={<>Testimoni</>}
      />
      <Footer />
    </AnimationRevealPage>
  );
}
