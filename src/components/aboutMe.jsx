export default function AboutMe() {
  return (
    <section id="me" className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl font-medium text-gray-900">
            Swastik Kulshreshtha
          </h1>
          <div className="h-1 w-20 mb-4 bg-bluish-51 rounded"></div>
          <p className="mb-8 leading-relaxed">
            Hello someone from the Internet 👋🏼
            <br />I am Swastik. I'm a college student and have a bit of
            experience in coding stuff. Apart from Programming, I also like doing things
            from listening songs to playing video games or maybe hang out with my friends.
          </p>
          <div className="flex justify-center">
            <a
              title="If you know me IRL, you would probably have my Number '_'"
              href="#contact"
            >
              <button className="inline-flex text-white bg-red-400 border-0 py-2 px-6 focus:outline-none hover:bg-red-500 rounded text-lg">
                Contact Me
              </button>
            </a>
            <a
              title="DM me on Discord"
              href="https://discord.com/channels/@me/600286650509295616/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="ml-4 inline-flex text-white bg-bluish-51 border-0 py-2 px-6 focus:outline-none hover:bg-bluish-50 rounded text-lg">
                Discord
              </button>
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb"
          />
        </div>
      </div>
    </section>
  );
}
