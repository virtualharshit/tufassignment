import React, { useState, useEffect } from "react";
import Banner from "./assets/banner.png";

import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import axios from "axios";

const Home = () => {
  const [info, setinfo] = useState(null);

  useEffect(() => {
    axios
      .get(`/api/banner/1`)
      .then(({ data }) => {
        console.log(data);
        if (data.status) {
          setinfo(data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div id="site-wrapper">
      <div id="site">
        <div className="flex flex-col min-h-screen">
          <header className="relative w-full mx-auto bg-white px-8">
            <div className="max-w-screen-xl mx-auto">
              <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10 w-full">
                <div className="md:w-0 md:flex-1">
                  <a className="flex items-center" href="/">
                    <img
                      alt="Starter Site"
                      loading="lazy"
                      width="230"
                      height="300"
                      decoding="async"
                      data-nimg="1"
                      className="h-14 sm:h-20 w-auto"
                      style={{ color: "transparent" }}
                      srcset="
                      https://cdn.aglty.io/blog-starter-2021-template/logos/travel-blog-logo.png?q=60&amp;w=230&amp;format=auto 1x,
                      https://cdn.aglty.io/blog-starter-2021-template/logos/travel-blog-logo.png?q=60&amp;w=230&amp;format=auto 2x
                    "
                      src="https://cdn.aglty.io/blog-starter-2021-template/logos/travel-blog-logo.png?q=60&amp;w=230&amp;format=auto"
                    />
                    <p className="font-bold text-xl text-secondary-500 ml-3 mt-2">
                      Harshit Assignment
                    </p>
                  </a>
                </div>
                <div className="-mr-2 -my-2 md:hidden">
                  <button
                    aria-label="Toggle Menu"
                    type="button"
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                  >
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      ></path>
                    </svg>
                  </button>
                </div>
                <nav className="hidden md:flex space-x-10">
                  <a
                    className="text-base leading-6 font-medium text-secondary-500 hover:text-primary-500 border-transparent border-b-2 hover:border-primary-500 hover:border-b-primary hover:border-b-2 focus:outline-none focus:text-primary-500 transition duration-300"
                    href="#home"
                  >
                    Home
                  </a>
                  <a
                    className="text-base leading-6 font-medium text-secondary-500 hover:text-primary-500 border-transparent border-b-2 hover:border-primary-500 hover:border-b-primary hover:border-b-2 focus:outline-none focus:text-primary-500 transition duration-300"
                    href="#blog"
                  >
                    Blog
                  </a>
                  <a
                    className="text-base leading-6 font-medium text-secondary-500 hover:text-primary-500 border-transparent border-b-2 hover:border-primary-500 hover:border-b-primary hover:border-b-2 focus:outline-none focus:text-primary-500 transition duration-300"
                    href="#about"
                  >
                    About
                  </a>
                </nav>
              </div>
            </div>
            <div
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-20"
              style={{ display: "none" }}
            >
              <div className="rounded-lg shadow-lg">
                <div className="rounded-lg shadow-xs bg-white divide-y-2 divide-gray-50">
                  <div className="pt-5 pb-6 px-5 space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <a className="flex items-center" href="/">
                          <img
                            alt="Starter Site"
                            loading="lazy"
                            width="230"
                            height="300"
                            decoding="async"
                            data-nimg="1"
                            className="h-14 sm:h-20 w-auto"
                            style={{ color: "transparent" }}
                            srcset="
                            https://cdn.aglty.io/blog-starter-2021-template/logos/travel-blog-logo.png?q=60&amp;w=230&amp;format=auto 1x,
                            https://cdn.aglty.io/blog-starter-2021-template/logos/travel-blog-logo.png?q=60&amp;w=230&amp;format=auto 2x
                          "
                            src="https://cdn.aglty.io/blog-starter-2021-template/logos/travel-blog-logo.png?q=60&amp;w=230&amp;format=auto"
                          />
                          <p className="font-bold text-xl text-secondary-500 ml-3 mt-2">
                            My Starter Site
                          </p>
                        </a>
                      </div>
                      <div className="">
                        <button
                          aria-label="Toggle Menu"
                          type="button"
                          className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-300"
                        >
                          <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M6 18L18 6M6 6l12 12"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div>
                      <nav className="grid gap-y-8">
                        <a
                          className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition duration-300"
                          href="/"
                        >
                          <svg
                            className="flex-shrink-0 h-6 w-6 text-primary-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                            ></path>
                          </svg>
                          <div className="text-base leading-6 font-medium text-gray-900">
                            Home
                          </div>
                        </a>
                        <a
                          className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition duration-300"
                          href="/blog"
                        >
                          <svg
                            className="flex-shrink-0 h-6 w-6 text-primary-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                            ></path>
                          </svg>
                          <div className="text-base leading-6 font-medium text-gray-900">
                            Blog
                          </div>
                        </a>
                        <a
                          className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition duration-300"
                          href="/about"
                        >
                          <svg
                            className="flex-shrink-0 h-6 w-6 text-primary-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                            ></path>
                          </svg>
                          <div className="text-base leading-6 font-medium text-gray-900">
                            About
                          </div>
                        </a>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {info && info.status && new Date() < new Date(info.endtime) && (
            <a
              id="home"
              href={info.link}
              className=" w-full flex justify-center items-center relative"
            >
              <img src={Banner} alt="" className="min-h-[50vh] object-cover" />
              <div className="absolute top-0 left-0 h-full w-full flex flex-col md:gap-6 justify-center items-center">
                <div className="text-black font-bold text-xl md:text-4xl ">
                  {info?.description}
                </div>
                <div className="text-black font-bold text-lg md:text-4xl scale-75 md:scale-100">
                  <FlipClockCountdown
                    to={new Date(info?.endtime).getTime()}
                    labelStyle={{
                      textTransform: "uppercase",
                      fontWeight: "bold",
                    }}
                  >
                    <div>The countdown is complete</div>
                  </FlipClockCountdown>
                </div>
              </div>
            </a>
          )}

          <main className="flex-grow">
            <div data-agility-page="2">
              <div>
                <div
                  className="relative px-8"
                  data-agility-component="106"
                  id="blog"
                >
                  <div className="flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center">
                    <div
                      className="md:w-6/12 flex-shrink-0 relative"
                      data-agility-field="image"
                    >
                      <a className="relative" href="/blog">
                        <picture>
                          <img
                            loading="eager"
                            src="https://cdn.aglty.io/blog-starter-2021-template/posts/gaddafi-rusli-2ueUnL4CkV8-unsplash 1.jpg?format=auto&amp;w=600"
                            alt="Overhead photo of an Island"
                            className="rounded-lg object-cover object-center"
                          />
                        </picture>
                      </a>
                    </div>
                    <div className="md:w-6/12 mt-16 md:mt-0 md:mr-12 lg:mr-16 md:order-first">
                      <div className="g:py-8 text-center md:text-left">
                        <div
                          data-agility-field="tagline"
                          className="font-bold text-primary-500 text-sm text-center md:text-left uppercase py-1"
                        >
                          Wander The World
                        </div>
                        <h2
                          data-agility-field="title"
                          className="font-display text-4xl font-black text-secondary-500 md:text-3xl lg:text-5xl tracking-wide text-center mt-4 lg:leading-tight md:text-left"
                        >
                          From short breaks to long adventures
                        </h2>
                        <p
                          data-agility-field="content"
                          className="mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-200"
                        >
                          Travel blog featuring travel tips, guides, and
                          photography from around the world. Whether you need
                          guidance for your first trip, or you're a seasoned
                          traveler looking for destination inspiration, you've
                          come to the right place!
                        </p>
                        <a
                          data-agility-field="primaryButton"
                          title="Read our blog"
                          target="_self"
                          className="inline-block mt-8 md:mt-8 px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-primary-500 hover:bg-primary-700 focus:outline-none focus:border-primary-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                          href="/blog"
                        >
                          Read our blog
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="relative px-8"
                  data-agility-component="122"
                  id="about"
                >
                  <div className="flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center">
                    <div
                      className="md:w-6/12 flex-shrink-0 relative"
                      data-agility-field="image"
                    >
                      <a className="relative" href="/about">
                        <picture>
                          <img
                            loading="lazy"
                            src="https://cdn.aglty.io/blog-starter-2021-template/posts/travel-photography_20210331143648_0.jpg?format=auto&amp;w=600"
                            alt="Camera with map"
                            className="rounded-lg object-cover object-center"
                          />
                        </picture>
                      </a>
                    </div>
                    <div className="md:w-6/12 mt-16 md:mt-0 md:ml-12 lg:ml-16 md:order-last">
                      <div className="g:py-8 text-center md:text-left">
                        <div
                          data-agility-field="tagline"
                          className="font-bold text-primary-500 text-sm text-center md:text-left uppercase py-1"
                        >
                          About Us
                        </div>
                        <h2
                          data-agility-field="title"
                          className="font-display text-4xl font-black text-secondary-500 md:text-3xl lg:text-5xl tracking-wide text-center mt-4 lg:leading-tight md:text-left"
                        >
                          Adventurers and Storytellers
                        </h2>
                        <p
                          data-agility-field="content"
                          className="mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-200"
                        >
                          Through our award-winning blog, we love to provide
                          travelers with guidance and inspiration and connect
                          them to meaningful experiences as they travel the
                          world with curiosity!
                        </p>
                        <a
                          data-agility-field="primaryButton"
                          title="Learn about us"
                          target="_self"
                          className="inline-block mt-8 md:mt-8 px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-primary-500 hover:bg-primary-700 focus:outline-none focus:border-primary-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                          href="/about"
                        >
                          Learn about us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <footer className="relative px-8 py-6 md:py-4 mt-8 bg-gray-100">
            <div className="max-w-screen-xl mx-auto md:flex md:items-center">
              <div className="text-center mb-4 md:mb-0 md:text-left flex-shrink-0 relative"></div>
              <div className="flex-grow mb-4 md:mb-0">
                <p className="text-center md:text-left text-gray-600 text-xs md:ml-8 md:max-w-3xl">
                  <span className="pr-2">
                    Created by Harshit For Project Submission
                  </span>
                  <a
                    href="https://github.com/virtualharshit/tufassignment"
                    title="View on GitHub"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-600 mr-2 border-b border-gray-600"
                  >
                    GitHub
                  </a>
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Home;
