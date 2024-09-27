import photo_chop from '../assets/chop.jpg';
import photo_r8 from '../assets/r8.jpg';
import photo_garden from '../assets/garden.jpg';
import photo_iceland from '../assets/iceland.jpg';
import photo_muscle from '../assets/muscle.jpg';
import photo_spark from '../assets/spark.jpg';

export default function Gallery() {
  return (
    <section id="gallery" class="text-gray-600 body-font">
      <div class="container px-5 py-20 mx-auto flex flex-wrap">
        <div class="flex flex-wrap w-full mb-20">
          <div class="lg:w-1/4 w-full mb-6 lg:mb-0">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Gallery ¯\_(ツ)_/¯
            </h1>
            <div class="h-1 w-20 bg-bluish-51 rounded"></div>
          </div>
          <p class="lg:w-3/4 w-full leading-relaxed text-gray-500">
            I am not very fond of taking pictures :)
            <br />
            But anyways, here are some of my best clicks. Check out my Instagram
            Accounts for more of them.
          </p>
        </div>
        <div class="flex flex-wrap md:-m-2 -m-1">
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-1/2 linktoig">
              <img
                class="w-full object-cover h-full object-center block gallery-effect"
                src={photo_garden}
                alt="Gallery"
                height="500"
                width="300"
                style={{ width: "100%" }}
              />
              <a
                class="link_ig"
                href="https://www.instagram.com/p/Ce-PyfLFlKdTtPQAKL4HNg1JCEPF-X3cEkDF8o0/"
              >
                @k.wastik
              </a>
            </div>
            <div class="md:p-2 p-1 w-1/2 linktoig">
              <img
                class="w-full object-cover h-full object-center block gallery-effect"
                src={photo_spark}
                alt="Gallery"
                height="500"
                width="300"
              />
              <a
                class="link_ig"
                href="https://www.instagram.com/p/CJ3zd9mnnj-/"
              >
                @loki_2442
              </a>
            </div>
            <div class="md:p-2 p-1 w-full linktoig">
              <img
                class="w-full h-full object-cover object-center block gallery-effect"
                src={photo_r8}
                alt="Gallery"
                height="600"
                width="360"
              />
              <a
                class="link_ig"
                href="https://www.instagram.com/p/Ci0StV-v24K/"
              >
                @loki_2442
              </a>
            </div>
          </div>
          <div class="flex flex-wrap w-1/2 linktoig">
            <div class="md:p-2 p-1 w-full">
              <img
                class="w-full h-full object-cover object-center block gallery-effect"
                src={photo_muscle}
                alt="Gallery"
                height="600"
                width="360"
              />
              <a
                class="link_ig"
                href="https://www.instagram.com/p/CLClK_hn8_X/"
              >
                @loki_2442
              </a>
            </div>
            <div class="md:p-2 p-1 w-1/2 linktoig">
              <img
                class="w-full object-cover h-full object-center block gallery-effect"
                src={photo_iceland}
                alt="Gallery"
                height="500"
                width="300"
              />
              <a
                class="link_ig"
                href="https://www.instagram.com/p/CLjfQt2nmfU/"
              >
                @loki_2442
              </a>
            </div>
            <div class="md:p-2 p-1 w-1/2 linktoig">
              <img
                class="w-full object-cover h-full object-center block gallery-effect"
                src={photo_chop}
                alt="Gallery"
                height="500"
                width="300"
              />
              <a
                class="link_ig"
                href="https://www.instagram.com/p/CXkcUDRPGC_/"
              >
                @loki_2442
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
