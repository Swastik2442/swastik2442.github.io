const projectsList1 = [
  {
    title: "InsCalc",
    description: "An Insurance Calculator which can generate Reports in many formats, after getting the required information.",
    image: "https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_960_720.jpg",
    link: "https://github.com/Swastik2442/InsCalc",
    tech: "C++",
  },
  {
    title: "IntelliSense for MathJax",
    description: "An extension for Visual Studio Code which provides IntelliSense for MathJax or similar TeX languages.",
    image: "https://images.pexels.com/photos/3729557/pexels-photo-3729557.jpeg",
    link: "https://github.com/Swastik2442/intellisense-mathjax",
    tech: "TypeScript",
  },
  {
    title: "ChatApp",
    description: "A Chat Application which updates in Real-Time, made using Node.js & Socket.io",
    image: "https://images.pexels.com/photos/230554/pexels-photo-230554.jpeg",
    link: "https://github.com/Swastik2442/ChatApp",
    tech: "JavaScript",
  },
  {
    title: "ChatApp",
    description: "A Chat Application which updates in Real-Time, made using PHP & jQuery",
    image: "https://images.pexels.com/photos/230554/pexels-photo-230554.jpeg",
    link: "https://github.com/Swastik2442/ChatApp-PHP",
    tech: "PHP",
  }
];

const projectsList2 = [
  {
    title: "CSDiscord",
    description: "A mod for Cities Skylines to support Discord Rich Presence. Although it slows down the game, but the fun is there :P",
    image: "https://cdn.pixabay.com/photo/2014/01/30/18/26/skyline-255116_960_720.jpg",
    link: "https://github.com/Swastik2442/CSDiscord",
    tech: "C#",
  },
  {
    title: "Games",
    description: "Small-time Games made for fun. Made using pygame (Python) & p5 (JavaScript) libraries.",
    image: "https://images.unsplash.com/photo-1595744043037-68de3376ed59",
    link: "https://github.com/Swastik2442/Games",
    tech: "Python / JavaScript",
  },
  {
    title: "FB-to-Discord",
    description: "A tool that can be used to extract Facebook Posts and send them to Discord using Webhooks.",
    image: "https://cdn.pixabay.com/photo/2015/10/21/08/22/media-998990_960_720.jpg",
    link: "https://github.com/Swastik2442/FB-to-Discord",
    tech: "Python",
  },
  {
    title: "Custom-DiscordRPC",
    description: "A tool for providing Custom Rich Presence in Discord.",
    image: "https://images.unsplash.com/photo-1660721046155-f1e3143dd752",
    link: "https://github.com/Swastik2442/Custom-DiscordRPC",
    tech: "Python",
  }
];

export default function Projects() {
  return (
    <section id="code" class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap w-full mb-20">
          <div class="lg:w-2/5 w-full mb-6 lg:mb-0">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Some of my Projects
            </h1>
            <div class="h-1 w-20 bg-bluish-51 rounded"></div>
          </div>
          <p class="lg:w-3/5 w-full leading-relaxed text-gray-500">
            I have tried to keep the most ambitious projects that I think are,
            but you can check out probably more of them on my{" "}
            <a
              class="hover-underline-animation"
              href="https://github.com/Swastik2442?tab=repositories"
            >
              GitHub Profile
            </a>
            . Ah also, most of them are Private :P
          </p>
        </div>
        <div class="flex flex-wrap -m-4">
          {projectsList1.map((project) => (
            <a
              href={project.link}
              class="xl:w-1/4 md:w-1/2 p-4"
            >
              <div class="bg-gray-100 p-6 rounded-lg">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src={project.image}
                  alt="content"
                  height="400"
                  width="720"
                />
                <h3 class="tracking-widest text-bluish-51 text-xs font-medium title-font">
                  {project.tech}
                </h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  {project.title}
                </h2>
                <p class="leading-relaxed text-base">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
        <div class="flex flex-wrap -m-4">
        {projectsList2.map((project) => (
            <a
              href={project.link}
              class="xl:w-1/4 md:w-1/2 p-4"
            >
              <div class="bg-gray-100 p-6 rounded-lg">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src={project.image}
                  alt="content"
                  height="400"
                  width="720"
                />
                <h3 class="tracking-widest text-bluish-51 text-xs font-medium title-font">
                  {project.tech}
                </h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  {project.title}
                </h2>
                <p class="leading-relaxed text-base">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
        <p class="p-2 text-gray-400 text-right">
          § Images Copyright to their respectful owners
        </p>
      </div>
    </section>
  );
}
