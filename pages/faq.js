import Head from "next/head";
import Link from "next/link";

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

export async function getServerSideProps() {
  const FAQ_API_URL =
    "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";

  const faq = await fetch(FAQ_API_URL)
    .then((res) => {
      return res.json();
    })
    .then((res) => res);

  return {
    props: {
      faq,
    },
  };
}

export default function FAQPage({ faq }) {
  // const [faq, setFaq] = useState([]);

  // useEffect(() => {}, []);

  return (
    <>
      <Head>
        <title>FAQ - Alura Cases Campanha</title>
      </Head>

      <div>
        <h1>Alura Caess - Página de perguntas</h1>
        <Link href="/" passHref>
          Ir para HOME
        </Link>

        <ul>
          {faq.map(({ answer, question }) => (
            <li key={question}>
              <article>
                <h2>{question}</h2>
                <p>{answer}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
