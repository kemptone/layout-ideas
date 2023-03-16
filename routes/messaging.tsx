import { Head } from "$fresh/runtime.ts";

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
        <link rel="stylesheet" href="/header.css" />
        <link rel="stylesheet" href="/footer.css" />
        <link rel="stylesheet" href="/messaging.css" />
        <script src="/messaging.js"></script>
      </Head>
      <div id="myapp">
        <header>
          <span id="logo" />
        </header>
        <main>
          <div className="messaging-outer">
            <div className="messaging-left">
              <div className="top">
                <h1>Messages</h1>
              </div>
              <div className="middle">
                {messagings.map((value, index, arr) => {
                  return (
                    <div
                      key={index}
                    >
                      {value.name}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="messaging-right">
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
                <textarea />
              </div>
            </div>
          </div>
        </main>
        <footer>
          This is the footer
        </footer>
      </div>
    </>
  );
}
