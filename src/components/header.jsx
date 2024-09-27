export default function Header() {
  return (
    <header class="text-gray-600 fill-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div class="lg:w-2/5 inline-flex lg:justify-start ml-5 lg:ml-0">
          <button class="inline-flex items-center focus:outline-none hover:bg-indigo-200 rounded text-base py-1 px-1 mt-4 md:mt-0">
            <a
              href="https://github.com/Swastik2442/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-500"
            >
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
          </button>
        </div>
        <div class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50.000000 50.000000"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-10 h-10 text-white p-2 bg-blue-400 rounded-full"
          >
            <g
              transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
              fill="whitesmoke"
              stroke="none"
            >
              <path d="M125 450 c-23 -9 -39 -26 -48 -52 -5 -15 -3 -15 26 2 27 17 51 20 165 20 125 0 132 1 132 20 0 19 -6 20 -127 19 -71 0 -137 -4 -148 -9z" />
              <path
                d="M120 387 c-53 -27 -64 -113 -19 -153 17 -16 42 -20 141 -24 103 -4
              122 -8 134 -24 20 -28 17 -63 -6 -86 -18 -18 -33 -20 -160 -20 -133 0 -140 -1
              -140 -20 0 -19 7 -20 146 -20 l146 0 34 34 c47 47 47 95 0 142 l-34 34 -109 0
              c-94 0 -112 3 -126 18 -22 24 -21 55 1 75 15 14 41 17 145 17 120 0 127 1 127
              20 0 19 -7 20 -127 20 -83 0 -137 -5 -153 -13z"
              />
              <path d="M130 305 c0 -28 27 -35 126 -35 91 0 105 -2 138 -25 43 -29 47 -17 7 27 l-29 33 -121 5 c-81 3 -121 2 -121 -5z" />
              <path d="M213 143 c-135 -3 -143 -5 -143 -23 0 -19 7 -20 134 -20 109 0 138 3 150 16 17 16 22 36 9 32 -5 -1 -72 -4 -150 -5z" />
            </g>
          </svg>
          <span class="ml-3 text-xl">Swastik Kulshreshtha</span>
        </div>
        <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <button
            class="inline-flex items-center border-0 py-1 px-1 focus:outline-none rounded text-base mt-4 md:mt-0"
            onClick={() => window.location.reload(false)}
          >
            <img src="data:image/png;base64,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" alt="React Icon" />
          </button>
        </div>
      </div>
    </header>
  );
}
