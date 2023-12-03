import NextHead from "next/head";

const Head = () => {
  return (
    <>
      <NextHead>
        <link
          rel="preload"
          href="/images/main-background.jpg"
          as="image"
          media="(min-width: 768px)" // Optionally, add a media query for responsiveness
        />

        <link
            rel="preload"
            href="/fonts/Gibson/Gibson-Regular.ttf"
            as="font"
            type="font/truetype"
            crossOrigin="anonymous"
        />

        {/* Preload for Bold */}
        <link
          rel="preload"
          href="/fonts/Gibson/Gibson-Bold.ttf"
          as="font"
          type="font/truetype"
          crossOrigin="anonymous"
        />

        {/* Preload for Light */}
        <link
          rel="preload"
          href="/fonts/Gibson/Gibson-Light.ttf"
          as="font"
          type="font/truetype"
          crossOrigin="anonymous"
        />

        {/* Preload for Italic */}
        <link
          rel="preload"
          href="/fonts/Gibson/Gibson-Italic.ttf"
          as="font"
          type="font/truetype"
          crossOrigin="anonymous"
        />

        {/* Preload for Bold Italic */}
        <link
          rel="preload"
          href="/fonts/Gibson/Gibson-BoldItalic.ttf"
          as="font"
          type="font/truetype"
          crossOrigin="anonymous"
        />

        {/* Preload for Semi-Bold */}
        <link
          rel="preload"
          href="/fonts/Gibson/Gibson-SemiBold.ttf"
          as="font"
          type="font/truetype"
          crossOrigin="anonymous"
        />
      </NextHead>
    </>
  );
}

export default Head;
