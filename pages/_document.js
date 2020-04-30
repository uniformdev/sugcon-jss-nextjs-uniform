import Document, { Html, Head, Main, NextScript } from 'next/document';
import { CustomHead } from '../src/lib/CustomHead.tsx';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <CustomHead>
          <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
          <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        </CustomHead>
        <body className="leading-normal tracking-normal text-white gradient">
          <Main />
          <NextScript />
        </body>
        <script
          dangerouslySetInnerHTML={{
            __html: `
        const loadDynamicScript = (src, id, callback) => {
  const existingScript = document.getElementById('#' + id);
  if (!existingScript) {
    const script = document.createElement('script');
    script.src = src; // URL for the third-party library being loaded.
    script.id = id; // e.g., googleMaps or stripe
    script.async = false;
    document.body.appendChild(script);
    script.onload = () => {
      if (callback) callback();
    };
  }
  if (existingScript && callback) callback();
};
const onDomContentLoaded = (func) => {
  console.log('here');
  if (typeof window !== 'undefined') {
      window.addEventListener('load', (event) => {
      func();
    });
  }
};
        onDomContentLoaded(() => {
            loadDynamicScript('https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js', 'webfont', () => {
 WebFont.load({
  google: {
    families: ['Montserrat:300,700:latin', 'Roboto:700:latin']
  }
});
            });
            });`,
          }}
        ></script>
      </Html>
    );
  }
}

export default MyDocument;
