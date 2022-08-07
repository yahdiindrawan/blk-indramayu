import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import HeroImage from "images/hero.jpeg"
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import Features from "components/features/ThreeColSimple.js";
import TabGrid from "components/cards/TabCardGrid.js";
import Blog from "components/blogs/ThreeColSimpleWithImage.js";
import FAQ from "components/faqs/SingleCol.js";
import GalleryCard from "components/galleries/GalleryCard.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import Footer from "components/footers/MiniCenteredFooter";

export default () => {
  const HighlightedText = tw.span`bg-primary-500 text-xl md:text-3xl text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const imageCss = tw`rounded-4xl`;
  return (
    <AnimationRevealPage>
      <Hero
        heading={<>Keahlianku, Masa Depanku <HighlightedText>INDRAMAYU BERMARTABAT</HighlightedText></>}
        description="UPTD Balai Latihan Kerja Kabupaten Indramayu merupakan lembaga yang menyelenggarakan kegiatan pandidikan dan pelatihan untuk meningkatkan keterampilan dan keahlian tenaga kerja sesuai dengan kebutuhan pasar kerja dalam dan luar negeri."
        imageSrc={HeroImage}
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Program"
        primaryButtonUrl="#program"
        watchVideoButtonText="Tutorial Pendaftaran"
        watchVideoYoutubeUrl="https://www.youtube.com/embed/26M_6GS9gcQ"
      />
      <Features />
      {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
      <TabGrid
        heading={
          <>
            Daftar Program
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
      <GalleryCard
        heading={
          <>
            Galeri
          </>
        }
      />
      <Footer />
    </AnimationRevealPage>
  );
}
