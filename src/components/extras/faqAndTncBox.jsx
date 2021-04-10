import React from "react";

const FaqAndTncCol = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto flex items-center md:flex-row flex-col">
        <div class="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
          <div x-data="dialog()">
            <button class="btn btn-light" x-spread="trigger">
              TnC
            </button>
            <div class="dialog" x-spread="dialog" x-cloak>
              <div class="dialog-content">
                <div class="dialog-header">TnC</div>
                <div class="dialog-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam eius fugiat illum repudiandae commodi inventore
                  magnam unde vero cupiditate molestiae? Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Laboriosam eius fugiat
                  illum repudiandae commodi inventore magnam unde vero
                  cupiditate molestiae? Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Laboriosam eius fugiat illum repudiandae
                  commodi inventore magnam unde vero cupiditate molestiae? Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
                  eius fugiat illum repudiandae commodi inventore magnam unde
                  vero cupiditate molestiae? Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Laboriosam eius fugiat illum
                  repudiandae commodi inventore magnam unde vero cupiditate
                  molestiae? Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Laboriosam eius fugiat illum repudiandae commodi
                  inventore magnam unde vero cupiditate molestiae? Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Laboriosam eius
                  fugiat illum repudiandae commodi inventore magnam unde vero
                  cupiditate molestiae? Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Laboriosam eius fugiat illum repudiandae
                  commodi inventore magnam unde vero cupiditate molestiae? Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
                  eius fugiat illum repudiandae commodi inventore magnam unde
                  vero cupiditate molestiae? Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Laboriosam eius fugiat illum
                  repudiandae commodi inventore magnam unde vero cupiditate
                  molestiae? Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Laboriosam eius fugiat illum repudiandae commodi
                  inventore magnam unde vero cupiditate molestiae? Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Laboriosam eius
                  fugiat illum repudiandae commodi inventore magnam unde vero
                  cupiditate molestiae? Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Laboriosam eius fugiat illum repudiandae
                  commodi inventore magnam unde vero cupiditate molestiae? Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
                  eius fugiat illum repudiandae commodi inventore magnam unde
                  vero cupiditate molestiae? Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Laboriosam eius fugiat illum
                  repudiandae commodi inventore magnam unde vero cupiditate
                  molestiae? Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Laboriosam eius fugiat illum repudiandae commodi
                  inventore magnam unde vero cupiditate molestiae? Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Laboriosam eius
                  fugiat illum repudiandae
                </div>
              </div>
            </div>
          </div>

          <div x-data="drawer()">
            <button class="btn btn-light" x-spread="trigger">
              FAQs
            </button>
            <div class="dialog dialog-right" x-spread="drawer" x-cloak>
              <div class="drawer-content">
                <div class="dialog-header">FAQS</div>
                <div class="dialog-body">
                  Description
                  <br />
                  <br />
                  <div class="divide-y divide-gray-200">
                    <div x-data="collapse()">
                      <div x-spread="trigger">
                        <div
                          class="p-3 flex justify-between items-center"
                          role="button"
                          aria-controls="basicAccordion1"
                          aria-expanded="false"
                        >
                          Question 1
                          <svg
                            class="transition transform h-4 w-4 flex-none"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                        </div>
                      </div>
                      <div
                        x-spread="collapse"
                        x-cloak
                        class="px-3 pb-3"
                        id="basicAccordion1"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </div>
                    </div>

                    <div x-data="collapse()">
                      <div x-spread="trigger">
                        <div
                          class="p-3 flex justify-between items-center"
                          role="button"
                          aria-controls="basicAccordion1"
                          aria-expanded="false"
                        >
                          Question 2
                          <svg
                            class="transition transform h-4 w-4 flex-none"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                        </div>
                      </div>
                      <div
                        x-spread="collapse"
                        x-cloak
                        class="px-3 pb-3"
                        id="basicAccordion1"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </div>
                    </div>
                    <div x-data="collapse()">
                      <div x-spread="trigger">
                        <div
                          class="p-3 flex justify-between items-center"
                          role="button"
                          aria-controls="basicAccordion1"
                          aria-expanded="false"
                        >
                          Question 3
                          <svg
                            class="transition transform h-4 w-4 flex-none"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                        </div>
                      </div>
                      <div
                        x-spread="collapse"
                        x-cloak
                        class="px-3 pb-3"
                        id="basicAccordion1"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </div>
                    </div>
                  </div>
                </div>

                <div class="dialog-footer">
                  <button
                    type="button"
                    class="btn btn-light"
                    x-spread="trigger"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqAndTncCol;
