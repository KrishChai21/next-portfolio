import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Image from "next/image";
import heroImg from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { useState } from "react";

function HomePage() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Dimitri Marco Portfolio</title>
        <meta name="description" content="Web designer and developer" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 dark:text-white">
        <section>
          {/* Navbar */}
          <nav className="py-10 mb-12 flex justify-between items-center">
            <h1 className="text-xl">dev.io</h1>
            <ul className="flex items-center space-x-4">
              <li>
                <BsFillMoonStarsFill
                  className="text-xl cursor-pointer"
                  onClick={() => {
                    setDarkMode((prevVal) => !prevVal);
                  }}
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 text-white rounded-md"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          {/* Hero & Info section */}
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Dimitri Marco
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">
              Developer and designer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 max-w-md mx-auto md:text-xl dark:text-white">
              Freelancer providing services for programming and design. Join me
              down below and let&#39;s get cracking!
            </p>
          </div>
          {/* Icons */}
          <div className="text-5xl flex justify-center space-x-8 text-gray-600">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          {/* Image */}
          {/* To get a perfect circle, add width and heights and ensure they are equal */}
          <div className="relative overflow-hidden bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 md:w-96 md:h-96 mx-auto m-12">
            {/* A boolean that causes the image to fill the parent element instead of setting width and height.
          The parent element must assign position: "relative", position: "fixed", or position: "absolute" style. */}
            <Image src={heroImg} layout="fill" objectFit="cover" />
          </div>
        </section>
        {/* End of Hero section */}

        {/* Services section */}
        <section>
          {/* Services content */}
          <div>
            <h3 className="text-3xl py-1">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Since the beginning of my journey as a freelance designer and
              developer, I&#39;ve done remote work for{" "}
              <span className="text-teal-500">agencies</span>, consulted for{" "}
              <span className="text-teal-500">startups</span> and collaborated
              with talented people to create digital products for both business
              and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              I offer a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          {/* Services Card List */}
          <div className="md:flex gap-10">
            <div className="text-center shadow-lg dark:bg-sky-900 p-10 rounded-xl my-10">
              <Image
                className="mx-auto"
                src={design}
                width={100}
                height={100}
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs for your needs following core design
                theory.
              </p>
              <h4 className="py-4 text-teal-600">Design tools use:</h4>
              <p className="text-gray-800 py-1 dark:text-white">Photoshop</p>
              <p className="text-gray-800 py-1 dark:text-white">Illustrator</p>
              <p className="text-gray-800 py-1 dark:text-white">Figma</p>
            </div>
            <div className="text-center shadow-lg p-10 dark:bg-sky-900 rounded-xl my-10">
              <Image className="mx-auto" src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Clean Code</h3>
              <p className="py-2">
                Writing clean, maintainable and scalable code for your next
                project.
              </p>
              <h4 className="py-4 text-teal-600">
                Technologies I&#39;ve worked with:
              </h4>
              <p className="text-gray-800 py-1 dark:text-white">HTML5, CSS3</p>
              <p className="text-gray-800 py-1 dark:text-white">
                JavaScript, React.JS
              </p>
              <p className="text-gray-800 py-1 dark:text-white">MySQL</p>
            </div>
            <div className="text-center shadow-lg dark:bg-sky-900 p-10 rounded-xl my-10">
              <Image
                className="mx-auto"
                src={consulting}
                width={100}
                height={100}
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Marketing and strategy
              </h3>
              <p className="py-2">
                10x growth in reach through social media campaigns devised
              </p>
              <h4 className="py-4 text-teal-600">Tech and soft skills:</h4>
              <p className="text-gray-800 py-1 dark:text-white">
                Google Analytics
              </p>
              <p className="text-gray-800 py-1 dark:text-white">SEO</p>
              <p className="text-gray-800 py-1 dark:text-white">
                Communication
              </p>
            </div>
          </div>
        </section>
        {/* End of services section */}

        <section>
          <div>
            <h3 className="text-3xl py-1">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              I&#39;ve worked on numerous projects as a freelance developer both
              for startups and small agencies to Fortune 500 companies. Take a
              look below at a showcase of some of my best work!
            </p>
          </div>

          {/* Project images */}
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                src={web1}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web2}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web3}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web4}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web5}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web6}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
