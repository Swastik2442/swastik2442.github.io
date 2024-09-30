export default function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50.000000 50.000000"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-blue-400 rounded-full"
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
          <span className="ml-3 text-xl">Swastik Kulshreshtha</span>
        </div>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2022-{new Date().getFullYear()} Swastik Kulshreshtha —
          <a href="https://twitter.com/Swastik2442" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">
            @Swastik2442
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a href="https://github.com/Swastik2442" target="_blank" rel="noopener noreferrer" className="ml-3 text-gray-500">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
}
