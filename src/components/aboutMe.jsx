import photo_hero from '../assets/hero.jpg';

export default function AboutMe() {
  return (
    <section id="me" class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl font-medium text-gray-900">
            Swastik Kulshreshtha
          </h1>
          <div class="h-1 w-20 mb-4 bg-bluish-51 rounded"></div>
          <p class="mb-8 leading-relaxed">
            Hello someone from the Internet 👋🏼
            <br />I am Swastik. I'm a college student and have a bit of
            experience in coding stuff. Aside of Coding, I also like doing stuff
            from listening songs to playing video games and hang out with my
            friends.
          </p>
          <div class="flex justify-center">
            <a
              title="If you know me IRL, you would probably have my Number '_'"
              href="#contact"
            >
              <button class="inline-flex text-white bg-red-400 border-0 py-2 px-6 focus:outline-none hover:bg-red-500 rounded text-lg">
                Contact Me
              </button>
            </a>
            <a
              title="DM me on Discord"
              href="https://discord.com/channels/@me/600286650509295616/"
              target="_blank"
              rel="noreferrer"
            >
              <button class="ml-4 inline-flex text-white bg-bluish-51 border-0 py-2 px-6 focus:outline-none hover:bg-bluish-50 rounded text-lg">
                Discord
              </button>
            </a>
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src={photo_hero}
          />
        </div>
      </div>
    </section>
  );
}
