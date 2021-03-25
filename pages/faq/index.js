import React from 'react';
import FAQScreen from '../../src/components/screen/FAQScreen';

// eslint-disable-next-line react/prop-types
export default function FAQPage({ faqCategories }) {
  // React.useEffect(() => {
  //   const faqCategories = fetch('https://instalura-api.vercel.app/api/content/faq')
  //     .then((respostaDoServer) => respostaDoServer.json())
  //     .then((respostaConvertida) => respostaConvertida.data)
  //     .then((respo) => {
  //       console.log('faCategories', respo);
  //     });
  // });

  return (
    <FAQScreen faqCategories={faqCategories} />
  );
}

export async function getStaticProps() {
  const faqCategories = await fetch('https://instalura-api.vercel.app/api/content/faq')
    .then((respostaDoServer) => respostaDoServer.json())
    .then((respostaConvertida) => respostaConvertida.data);

  return {
    props: {
      faqCategories,
    }, // will be passed to the page component as props
  };
}
