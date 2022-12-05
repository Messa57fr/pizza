import Head from "next/head";
import Layout from "../../components/Layout";
import Hero from "../../components/Hero";
import css from "../../styles/Home.module.css";
import Services from "../../components/Services";
import Menu from "../../components/Menu";
import { client } from "../../lib/client";
import Link from "next/link";

export default function Home({pizzas}) {
  console.log(pizzas)
  return (
    <Layout>
      <div className={css.container}>
        <Head>
          <title>My Pizza</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/Logo.png" />
        </Head>
        {/* body */}
        <main>
          <Hero/>
          <Services/>
          <Menu pizzas={pizzas}/>
        </main>
      </div>
    </Layout>
  )
}

export const getServerSideProps = async()=> {
  const query = '*[_type == "pizza"]';
  const pizzas = await client.fetch(query);
  return {
    props : {
      pizzas
    }
  }
}
