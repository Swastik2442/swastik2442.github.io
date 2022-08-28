// Copyright 2022 Swastik Kulshreshtha <@Swastik2442>

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//     http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import './App.css';

function App() {
  return (
    <div className="App">
      <section id="me" class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl font-medium text-gray-900">
              Swastik Kulshreshtha
            </h1>
            <div class="h-1 w-20 mb-4 bg-bluish-51 rounded"></div>
            <p class="mb-8 leading-relaxed">
              Hello someone from the Internet 👋🏼<br />
              I am Swastik. I'm a college student and have a bit of experience in coding stuff. Aside of Coding, I also like doing stuff from listening songs to playing video games and hang out with my friends on Discord.
            </p>
            <div class="flex justify-center">
              <a title="DM me on Discord" href="https://discord.com/channels/@me/600286650509295616/" target="_blank" rel="noreferrer">
                <button class="inline-flex text-white bg-red-400 border-0 py-2 px-6 focus:outline-none hover:bg-red-500 rounded text-lg">Discord</button>
              </a>
              <a title="If you know me IRL, you would probably have my Number '_'" href="https://youtu.be/dQw4w9WgXcQ" target="_blank" rel="noreferrer">
                <button class="ml-4 inline-flex text-white bg-bluish-51 border-0 py-2 px-6 focus:outline-none hover:bg-bluish-50 rounded text-lg">Phone Number</button>
              </a>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img class="object-cover object-center rounded" alt="hero" src="https://source.unsplash.com/720x600/?nature" />
          </div>
        </div>
      </section>

      <section id="gallery" class="text-gray-600 body-font">
        <div class="container px-5 py-20 mx-auto flex flex-wrap">
          <div class="flex flex-wrap w-full mb-20">
            <div class="lg:w-1/4 w-full mb-6 lg:mb-0">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Gallery ¯\_(ツ)_/¯</h1>
              <div class="h-1 w-20 bg-bluish-51 rounded"></div>
            </div>
            <p class="lg:w-3/4 w-full leading-relaxed text-gray-500">I am not very fond of taking pictures, being the infamous introvert kid from the class :)<br />But anyways, here are some of my best clicks. Check out my Instagram Accounts for more of them.</p>
          </div>
          <div class="flex flex-wrap md:-m-2 -m-1">
            <div class="flex flex-wrap w-1/2">
              <div class="md:p-2 p-1 w-1/2">
                <img class="w-full object-cover h-full object-center block" src="https://dummyimage.com/500x300" alt="Gallery Image" height="500" width="300" />
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <img class="w-full object-cover h-full object-center block" src="https://dummyimage.com/500x300" alt="Gallery Image" height="500" width="300" />
              </div>
              <div class="md:p-2 p-1 w-full">
                <img class="w-full h-full object-cover object-center block" src="https://dummyimage.com/600x360" alt="Gallery Image" height="600" width="360" />
              </div>
            </div>
            <div class="flex flex-wrap w-1/2">
              <div class="md:p-2 p-1 w-full">
                <img class="w-full h-full object-cover object-center block" src="https://dummyimage.com/600x360" alt="Gallery Image" height="600" width="360" />
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <img class="w-full object-cover h-full object-center block" src="https://dummyimage.com/500x300" alt="Gallery Image" height="500" width="300" />
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <img class="w-full object-cover h-full object-center block" src="https://dummyimage.com/500x300" alt="Gallery Image" height="500" width="300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="code" class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20">
            <div class="lg:w-2/5 w-full mb-6 lg:mb-0">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Some of my Projects</h1>
              <div class="h-1 w-20 bg-bluish-51 rounded"></div>
            </div>
            <p class="lg:w-3/5 w-full leading-relaxed text-gray-500">I have tried to keep the most ambitious projects that I think are, but you can check out probably more of them on my <a class="hover-underline-animation" href="https://github.com/Swastik2442?tab=repositories">GitHub Profile</a>. Ah also, most of them are Private :P</p>
          </div>
          <div class="flex flex-wrap -m-4">
            <a href="https://github.com/Swastik2442/InsCalc" class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-100 p-6 rounded-lg">
                <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_960_720.jpg" alt="content" height="400" width="720" />
                <h3 class="tracking-widest text-bluish-51 text-xs font-medium title-font">C++</h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">InsCalc</h2>
                <p class="leading-relaxed text-base">An Insurance Calculator which can generate Reports in many formats, after getting the required information.</p>
              </div>
            </a>
            <a href="https://github.com/Swastik2442/intellisense-mathjax" class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-100 p-6 rounded-lg">
                <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://images.pexels.com/photos/3729557/pexels-photo-3729557.jpeg" alt="content" height="400" width="720" />
                <h3 class="tracking-widest text-bluish-51 text-xs font-medium title-font">TypeScript</h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">IntelliSense for MathJax</h2>
                <p class="leading-relaxed text-base">An extension for Visual Studio Code which provides IntelliSense for MathJax or similar TeX languages.</p>
              </div>
            </a>
            <a href="https://github.com/Swastik2442/FB-to-Discord" class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-100 p-6 rounded-lg">
                <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://cdn.pixabay.com/photo/2015/10/21/08/22/media-998990_960_720.jpg" alt="content" height="400" width="720" />
                <h3 class="tracking-widest text-bluish-51 text-xs font-medium title-font">Python</h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">FB-to-Discord</h2>
                <p class="leading-relaxed text-base">A tool that can be used to extract Facebook Posts and send them to Discord using Webhooks.</p>
              </div>
            </a>
            <a href="https://github.com/Swastik2442/Custom-DiscordRPC" class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-100 p-6 rounded-lg">
                <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://images.unsplash.com/photo-1660721046155-f1e3143dd752" alt="content" height="400" width="720" />
                <h3 class="tracking-widest text-bluish-51 text-xs font-medium title-font">Python</h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Custom-DiscordRPC</h2>
                <p class="leading-relaxed text-base">A tool for providing Custom Rich Presence in Discord.</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section id="contact" class="text-gray-600 body-font relative">
        <div class="absolute inset-0 bg-gray-300">
          <iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.38257095634!2d75.65047322475726!3d26.885447913745516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1661077487355!5m2!1sen!2sin" style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}></iframe>
        </div>
        <div class="container px-5 py-20 mx-auto flex text-center">
          <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Contact Me</h2>
            <p class="leading-relaxed mb-5 text-gray-600">Jaipur, Rajasthan, India</p>
            <div class="relative mb-4 text-center">
              <span class="inline-flex text-center m-0">
                <a class="px-2" href="https://www.facebook.com/Swastik2442">
                  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="text-gray-500 py-2" height={50} width={50}><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                </a>
                <a class="px-2" href="https://instagram.com/k.wastik">
                  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="text-gray-500 py-2" height={50} width={50}><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" /></svg>
                </a>
                <a class="px-2" href="https://t.me/Swastik2442">
                  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="text-gray-500 py-2" height={50} width={50}><title>Telegram</title><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" /></svg>
                </a>
              </span>
              <br></br>
              <span class="inline-flex text-center m-0">
                <a class="px-2" href="https://stackoverflow.com/users/15153539/">
                  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="text-gray-500 py-2" height={50} width={50}><title>Stack Overflow</title><path d="M15.725 0l-1.72 1.277 6.39 8.588 1.716-1.277L15.725 0zm-3.94 3.418l-1.369 1.644 8.225 6.85 1.369-1.644-8.225-6.85zm-3.15 4.465l-.905 1.94 9.702 4.517.904-1.94-9.701-4.517zm-1.85 4.86l-.44 2.093 10.473 2.201.44-2.092-10.473-2.203zM1.89 15.47V24h19.19v-8.53h-2.133v6.397H4.021v-6.396H1.89zm4.265 2.133v2.13h10.66v-2.13H6.154Z" /></svg>
                </a>
                <a class="px-2" href="https://linkedin.com/in/Swastik2442">
                  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="text-gray-500 py-2" height={50} width={50}><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </a>
                <a class="px-2" href="https://auth.geeksforgeeks.org/user/swastik2442">
                  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="text-gray-500 py-2" height={50} width={50}><title>GeeksforGeeks</title><path d="M21.45 14.315c-.143.28-.334.532-.565.745a3.691 3.691 0 0 1-1.104.695 4.51 4.51 0 0 1-3.116-.016 3.79 3.79 0 0 1-2.135-2.078 3.571 3.571 0 0 1-.13-.353h7.418a4.26 4.26 0 0 1-.368 1.008zm-11.99-.654a3.793 3.793 0 0 1-2.134 2.078 4.51 4.51 0 0 1-3.117.016 3.7 3.7 0 0 1-1.104-.695 2.652 2.652 0 0 1-.564-.745 4.221 4.221 0 0 1-.368-1.006H9.59c-.038.12-.08.238-.13.352zm14.501-1.758a3.849 3.849 0 0 0-.082-.475l-9.634-.008a3.932 3.932 0 0 1 1.143-2.348c.363-.35.79-.625 1.26-.809a3.97 3.97 0 0 1 4.484.957l1.521-1.49a5.7 5.7 0 0 0-1.922-1.357 6.283 6.283 0 0 0-2.544-.49 6.35 6.35 0 0 0-2.405.457 6.007 6.007 0 0 0-1.963 1.276 6.142 6.142 0 0 0-1.325 1.94 5.862 5.862 0 0 0-.466 1.864h-.063a5.857 5.857 0 0 0-.467-1.865 6.13 6.13 0 0 0-1.325-1.939A6 6 0 0 0 8.21 6.34a6.698 6.698 0 0 0-4.949.031A5.708 5.708 0 0 0 1.34 7.73l1.52 1.49a4.166 4.166 0 0 1 4.484-.958c.47.184.898.46 1.26.81.368.36.66.792.859 1.268.146.344.242.708.285 1.08l-9.635.008A4.714 4.714 0 0 0 0 12.457a6.493 6.493 0 0 0 .345 2.127 4.927 4.927 0 0 0 1.08 1.783c.528.56 1.17 1 1.88 1.293a6.454 6.454 0 0 0 2.504.457c.824.005 1.64-.15 2.404-.457a5.986 5.986 0 0 0 1.964-1.277 6.116 6.116 0 0 0 1.686-3.076h.273a6.13 6.13 0 0 0 1.686 3.077 5.99 5.99 0 0 0 1.964 1.276 6.345 6.345 0 0 0 2.405.457 6.45 6.45 0 0 0 2.502-.457 5.42 5.42 0 0 0 1.882-1.293 4.928 4.928 0 0 0 1.08-1.783A6.52 6.52 0 0 0 24 12.457a4.757 4.757 0 0 0-.039-.554z" /></svg>
                </a>
              </span>
              <br></br>
              <span class="inline-flex text-center m-0">
                <a class="px-2" href="https://www.youtube.com/channel/UCdlSJ8wN4l8Yok1TiQzMx6A">
                  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="text-gray-500 py-2" height={50} width={50}><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                </a>
                <a class="px-2" href="https://dev.to/swastik">
                  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="text-gray-500 py-2" height={50} width={50}><title>dev.to</title><path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z" /></svg>
                </a>
              </span>
              <p class="text-center">
                <p class="text-gray-900 text-lg font-medium">Email</p>
                <a class="hover-underline-animation italic leading-relaxed text-gray-600" href="mailto:kul.swas321tik@gmail.com">kul.swas321tik@gmail.com</a>
              </p>
            </div>
            <a class="text-white bg-bluish-51 border-0 py-2 px-6 focus:outline-none hover:bg-bluish-51 rounded text-lg text-center" href="https://loki2442.github.io">
              <button>Other Internet Stuff</button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
