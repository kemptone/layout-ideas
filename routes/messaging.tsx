import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

// https://s3-us-west-1.amazonaws.com/download.talentsky.com/c/qa/HdnmxFZjRT69T_phS3Rh8w/1529688979518_0_46x46.jpg 1x,https://s3-us-west-1.amazonaws.com/download.talentsky.com/c/qa/HdnmxFZjRT69T_phS3Rh8w/1529688979518_0_70x70.jpg 2x,https://s3-us-west-1.amazonaws.com/download.talentsky.com/c/qa/HdnmxFZjRT69T_phS3Rh8w/1529688979518_0_113x113.jpg 3x,https://s3-us-west-1.amazonaws.com/download.talentsky.com/c/qa/HdnmxFZjRT69T_phS3Rh8w/1529688979518_0_180x180.jpg 4x,https://s3-us-west-1.amazonaws.com/download.talentsky.com/c/qa/HdnmxFZjRT69T_phS3Rh8w/1529688979518_0_360x360.jpg 5x

type TMessage = {
  name: string;
  message: string;
  date: Date;
  image: string;
};

type TUser = {
  name: string;
};

const DumbMessage: TMessage = {
  name: "A Test User",
  message: "This is a demo message that does something",
  date: new Date(),
  image:
    "https://s3-us-west-1.amazonaws.com/download.talentsky.com/c/qa/HdnmxFZjRT69T_phS3Rh8w/1529688979518_0_360x360.jpg",
};

const messagings: TMessage[] = [];

for (let x = 0; x < 145; x++) {
  messagings.push(DumbMessage);
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Messaging</title>
        <link rel="stylesheet" href="/style.css" />
        <link rel="stylesheet" href="/messaging.css" />
        <script src="/messaging.js"></script>
      </Head>
      <div id="messaging">
        <div className="messaging">
          <div className="top">
            <h1>This is the header</h1>
          </div>
          <div className="middle">
            {messagings.map((value, index, arr) => {
              return (
                <div key={index}>
                  {value.name}
                </div>
              );
            })}
            <div id="fardo">hello</div>
          </div>
          <div className="bottom">
            <textarea></textarea>
          </div>
        </div>
      </div>
    </>
  );
}
