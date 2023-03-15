import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Layout Ideas and Solutions</title>
        <link rel="stylesheet" href="/style.css" />
      </Head>
      <div>
        <ul>
          <li>
            <a href="/messaging">Messaging, Mobile Friendly</a>
          </li>
        </ul>
      </div>
    </>
  );
}
