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
        <link rel="stylesheet" href="/style.css?fa" />
        <link rel="stylesheet" href="/header.css?23" />
        <link rel="stylesheet" href="/footer.css?23" />
        <link rel="stylesheet" href="/messaging.css?234" />
        <script src="/messaging.js?3234"></script>
      </Head>
      <div id="myapp">
        <header>
          <div className="inner">
            <span id="logo" />
          </div>
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
              <div className="top iphone-fixed-height">
                <button type="submit">〈</button>
                <h1>
                  Channel header
                </h1>
              </div>
              <div className="middle">
                {messagings.map((value, index, arr) => {
                  return (
                    <div key={index}>
                      {String(index)} - {value.name}
                    </div>
                  );
                })}
                <div id="fardo">hello</div>
              </div>
              <div className="bottom">
                <form>
                  <textarea name="messagetext" colSpan={3} cols={3} />
                  <button type="submit">S</button>
                </form>
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
