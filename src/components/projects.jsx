const projectsList1 = [
  {
    title: "Theo",
    description: "A Simple Image Gallery that can let users upload and save their images on the web.",
    image: "https://cdn.pixabay.com/photo/2022/06/19/12/09/frame-7271744_960_720.png",
    link: "https://theo-opal.vercel.app/",
    tech: "TypeScript, Next.js",
  },
  {
    title: "Police Feedback System",
    description: "A Feedback Submission System for the Rajasthan Police, made during a Hackathon.",
    image: "https://images.pexels.com/photos/230554/pexels-photo-230554.jpeg",
    link: "https://github.com/Swastik2442/RJPOLICE_HACK_157_Binary_Brigade_1",
    tech: "Python, Django",
  },
  {
    title: "Graph Project 4",
    description: "An Algorithm Visualization Software which shows the workings of Dijkstra's Algorithm, along with BFS and DFS.",
    image: "https://cdn.pixabay.com/photo/2021/03/11/12/58/laptop-6087062_1280.png",
    link: "https://github.com/Swastik2442/graphProject4",
    tech: "C, raylib",
  },
  {
    title: "clubHub",
    description: "A Club Hub and Event Calendar where Users can see clubs and events organised by them.",
    image: "https://cdn.pixabay.com/photo/2016/11/29/06/16/apple-1867752_960_720.jpg",
    link: "https://club-hub.vercel.app/",
    tech: "Python, Django",
  },
];

const projectsList2 = [
  {
    title: "MovieRecommender",
    description: "A Movie Recommender System that uses some Statistical Methods to recommend movies based on User's Ratings.",
    image: "https://cdn.pixabay.com/photo/2014/01/30/18/26/skyline-255116_960_720.jpg",
    link: "https://www.dukelearntoprogram.com/capstone/recommender.php?id=1mWasMwtzCqoeb",
    tech: "Java",
  },
  {
    title: "RFM Analysis of Online Retail",
    description: "Using Machine Learning algorithms to analyse Online Retail using the RFM Model.",
    image: "https://images.pexels.com/photos/5980898/pexels-photo-5980898.jpeg",
    link: "https://github.com/Swastik2442/RFM_OnlineRetail",
    tech: "Python",
  },
  {
    title: "Zero Hunger",
    description: "Data Analysis of the data from UN's Sustainable Development Goal 2: Zero Hunger progress in most affected regions.",
    image: "https://cdn.pixabay.com/photo/2024/06/10/11/04/ai-generated-8820489_1280.png",
    link: "https://github.com/Swastik2442/cda_sdg2",
    tech: "Python",
  },
  {
    title: "IntelliSense for MathJax",
    description: "An extension for Visual Studio Code which provides IntelliSense for MathJax or similar TeX languages.",
    image: "https://images.pexels.com/photos/3729557/pexels-photo-3729557.jpeg",
    link: "https://github.com/Swastik2442/intellisense-mathjax",
    tech: "TypeScript",
  },
];

export default function Projects() {
  return (
    <section id="code" className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-2/5 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Some of my Projects
            </h1>
            <div className="h-1 w-20 bg-bluish-51 rounded"></div>
          </div>
          <p className="lg:w-3/5 w-full leading-relaxed text-gray-500">
            I have tried to keep the most ambitious projects that I think I have made,
            but you can also check out more of them on my{" "}
            <a
              className="hover-underline-animation"
              href="https://github.com/Swastik2442?tab=repositories"
            >
              GitHub Profile
            </a>
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projectsList1.map((project, index) => (
            <a key={index} href={project.link} className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={project.image}
                  alt="content"
                  height="400"
                  width="720"
                />
                <h3 className="tracking-widest text-bluish-51 text-xs font-medium title-font">
                  {project.tech}
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  {project.title}
                </h2>
                <p className="leading-relaxed text-base">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
        <div className="flex flex-wrap -m-4">
        {projectsList2.map((project, index) => (
            <a key={index} href={project.link} className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={project.image}
                  alt="content"
                  height="400"
                  width="720"
                />
                <h3 className="tracking-widest text-bluish-51 text-xs font-medium title-font">
                  {project.tech}
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  {project.title}
                </h2>
                <p className="leading-relaxed text-base">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
        <p className="p-2 text-gray-400 text-right">
          § Images Copyright to their respectful owners
        </p>
      </div>
    </section>
  );
}
