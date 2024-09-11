import Feed from "@components/Feed";

const Home = () => {
  return (
    <>
      <section className="w-full flex-center flex-col">
        <h1 className="text-4xl font-bold">Welcome to ContentCurator</h1>
        <p className="text-lg">Read.</p>
      </section>

      <Feed />
    </>
  );
};

export default Home;
