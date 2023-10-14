import FAQScreen from "../src/screens/FAQScreen";

export default FAQScreen;

/**
 * SST - Static Site Generation
 * SSR - Server Side Rendering
 * ISC - Incremental Static Generation
 *
 * getStaticProps()
 *  - Os dados serão carregado apenas no momento de geração do build, com o build gerado ele não vai mais cair nessa função.
 *
 * getServerSideProps()
 *  - Vai funcionar basicamente como um useEffect, rodando a cada acesso que você recebe.
 *
 * modo DEV
 *  - No modo dev os 2 vão rodar a cada acesso que recebe.
 *
 */

export async function getStaticProps() {
  console.log("Em modo DEV, sempre roda! A cada acesso");
  console.log("Roda SOMENTE em build time");
  const FAQ_API_URL =
    "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";
  const faq = await fetch(FAQ_API_URL)
    .then((respostaDoServidor) => {
      return respostaDoServidor.json();
    })
    .then((resposta) => {
      return resposta;
    });

  return {
    props: {
      qualquercoisa: "que eu passar aqui",
      faq,
    },
  };
}
