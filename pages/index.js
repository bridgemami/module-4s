import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import { getSortedList } from '../lib/data';
// import PersonSWChar from "../components/list"
import styles from '../styles/Home.module.css'
import CharacterList from "../components/list"

export async function getStaticProps() {
  const allData = await getSortedList();
  // const notStarWars= await getSortedList(false);
  return {
    props: {
       allData: allData,
    }
  }
}
export default function Home({ allData }) {
  return (
      <Layout home>
            <h1 className="text-center mb-4">A The Post List</h1>
          <div className="list-group">
         {allData.map(({id, title} ) => 
         <div key={id}>
         <p>The post id is {id}</p>
         <p>The title is {title.rendered}.</p>
         </div>
  )
         }
        </div>    
      </Layout>
  );
}
// {sw.map( ({id, author}) => <CharacterLink key={"pl"+id} tag={tag} id={id} author={author} /> )}
