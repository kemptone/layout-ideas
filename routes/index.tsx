import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Layout Ideas and Solutions</title>
      </Head>
      <div>
        <ul>
          <li>Messaging, Mobile Friendly</li>
        </ul>
      </div>
    </>
  );
}
