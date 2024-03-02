import React from "react";

function page() {
  return (
    <div>
      <link rel="stylesheet" href="https://unpkg.com/neobrutalismcss@latest" />

      <div class="container">
        <div class="navigation">
          <ul>
            <li>
              <a>
                <span class="icon">
                  <ion-icon name="barbell-outline"></ion-icon>
                </span>
                <span class="title">Brand Name here</span>
              </a>
            </li>
            <li>
              <a>
                <span class="icon">
                  <ion-icon name="home"></ion-icon>
                </span>
                <span class="title">Home</span>
              </a>
            </li>
            <li>
              <a>
                <span class="icon">
                  <ion-icon name="people"></ion-icon>
                </span>
                <span class="title">Customers</span>
              </a>
            </li>
            <li>
              <a>
                <span class="icon">
                  <ion-icon name="chatbubble-outline"></ion-icon>
                </span>
                <span class="title">Message</span>
              </a>
            </li>
            <li>
              <a>
                <span class="icon">
                  <ion-icon name="information-circle-outline"></ion-icon>
                </span>
                <span class="title">Help</span>
              </a>
            </li>
            <li>
              <a>
                <span class="icon">
                  <ion-icon name="settings-outline"></ion-icon>
                </span>
                <span class="title">Settings</span>
              </a>
            </li>
            <li>
              <a>
                <span class="icon">
                  <ion-icon name="lock-closed-outline"></ion-icon>
                </span>
                <span class="title">Password</span>
              </a>
            </li>
            <li>
              <a>
                <span class="icon">
                  <ion-icon name="log-out-outline"></ion-icon>
                </span>
                <span class="title">Sign Out</span>
              </a>
            </li>
          </ul>
        </div>
        {/* <!--  main --> */}
        <div class="sidebar">
          <div class="topbar">
            <div class="toggle">
              <ion-icon name="menu-outline"></ion-icon>
            </div>
            {/* <!--      search --> */}
            <div class="search">
              <label>
                <input type="text" placeholder="Search here" />
                <ion-icon name="search-sharp"></ion-icon>
              </label>
            </div>
            {/* <!--      userImg --> */}
            <div class="user">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=943&q=80&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>
          </div>

          <main>
            {/* <!-- Hero Section --> */}
            <section class="section bg-dark has-bg-image">
              <div class="div-container hero-content">
                <p class="hero-subtitle">
                  <strong class="strong">Good Morning Champ!</strong>
                </p>
                <h1 class="hero-title">Time to seize the day 🌞</h1>
                <p class="section-text">
                  Exercise not only changes your body but it changes your mind
                  and your attitude.
                </p>
              </div>
              <div class="flex justify-evenly space-x-6">
                <button href="#" class="nb-button blue rounded">
                  Get Started
                </button>
              </div>
            </section>

            {/* <!-- About Section --> */}
            <section>
              <div class="personal-bests-container">
                <div class="box box-one">
                  <img
                    src="https://svgsilh.com/svg/3199472.svg"
                    alt="running image"
                  />
                  <p>Fastest 5K Run: 22min</p>
                  <button class="flex justify-evenly space-x-6 nb-button default rounded">
                    Learn More
                  </button>
                </div>
                <div class="box box-two">
                  <img
                    src="https://svgsilh.com/svg/297155.svg"
                    alt="cycling image"
                  />
                  <p>Longest Distance Cycling: 4 miles</p>
                  <button class="flex justify-evenly space-x-6 nb-button default rounded">
                    Learn More
                  </button>
                </div>
                <div class="box box-three">
                  <img
                    src="https://svgsilh.com/svg/154505.svg"
                    alt="skating image"
                  />
                  <p>Longest Roller-Skating: 2 hours</p>
                  <button class="flex justify-evenly space-x-6 nb-button default rounded">
                    Learn More
                  </button>
                </div>
              </div>
            </section>
            {/* <!-- Classes Section --> */}
            <section
              class="section class has-bg-image"
              aria-label="class"
              style="background-image: linear-gradient(to right,rgb(255,242,155),rgb(179,125,255));"
            >
              <div class="div-container">
                <p class="section-subtitle">Weekly Schedule Classes</p>
                <h2 class="section-title">Fitness Classes for Every Goal </h2>
                <ul class="class-list has-scrollbar">
                  <li class="scrollbar-item">
                    <div class="card class-card">
                      <a href="https://example.com">
                        <div class="card-thumbnail">
                          <img
                            src="https://img.freepik.com/free-photo/woman-helping-man-gym_23-2149627070.jpg?w=1380&t=st=1700379214~exp=1700379814~hmac=8ccf72cd2dd8130931e4cba88d4123ce0fbb10ad701ee820ba72fc40f938280e"
                            alt="Explore NeoBrutalismCSS"
                            class="card-thumbnail"
                          />
                        </div>
                        <div class="card-content">
                          <div class="text-small">Time, 6:00AM</div>
                          <p>
                            <strong>Explore Running Classes</strong>
                          </p>
                          <p>
                            Unveil the future of NeoBrutalism with our
                            groundbreaking approach that will transform your
                            life.
                          </p>
                          <p>
                            <strong>Learn More -&gt;</strong>
                          </p>
                        </div>
                      </a>
                    </div>
                  </li>
                  <li class="scrollbar-item">
                    <div class="card">
                      <a href="https://example.com">
                        <div class="card-thumbnail">
                          <img
                            src="https://img.freepik.com/free-photo/woman-helping-man-gym_23-2149627070.jpg?w=1380&t=st=1700379214~exp=1700379814~hmac=8ccf72cd2dd8130931e4cba88d4123ce0fbb10ad701ee820ba72fc40f938280e"
                            loading="lazy"
                            alt="Explore NeoBrutalismCSS"
                            class="card-thumbnail"
                          />
                        </div>
                        <div class="card-content">
                          <div class="text-small">Time, 7:00AM</div>
                          <p>
                            <strong>Explore Swimming Classes</strong>
                          </p>
                          <p>
                            Unveil the future of NeoBrutalism with our
                            groundbreaking approach that will transform your
                            life.
                          </p>
                          <p>
                            <strong>Learn More -&gt;</strong>
                          </p>
                        </div>
                      </a>
                    </div>
                  </li>
                  <li class="scrollbar-item">
                    <div class="card">
                      <a href="https://example.com">
                        <div class="card-thumbnail">
                          <img
                            src="https://img.freepik.com/free-photo/woman-helping-man-gym_23-2149627070.jpg?w=1380&t=st=1700379214~exp=1700379814~hmac=8ccf72cd2dd8130931e4cba88d4123ce0fbb10ad701ee820ba72fc40f938280e"
                            height="50%"
                            loading="lazy"
                            alt="Explore NeoBrutalismCSS"
                            class="card-thumbnail"
                          />
                        </div>
                        <div class="card-content">
                          <div class="text-small">Time, 6:30AM</div>
                          <p>
                            <strong>Explore Cycling Classes</strong>
                          </p>
                          <p>
                            Unveil the future of NeoBrutalism with our
                            groundbreaking approach that will transform your
                            life.
                          </p>
                          <p>
                            <strong>Learn More -&gt;</strong>
                          </p>
                        </div>
                      </a>
                    </div>
                  </li>
                  <li class="scrollbar-item">
                    <div class="card">
                      <a href="https://example.com">
                        <div class="card-thumbnail">
                          <img
                            src="https://img.freepik.com/free-photo/woman-helping-man-gym_23-2149627070.jpg?w=1380&t=st=1700379214~exp=1700379814~hmac=8ccf72cd2dd8130931e4cba88d4123ce0fbb10ad701ee820ba72fc40f938280e"
                            loading="lazy"
                            alt="Explore NeoBrutalismCSS"
                            class="card-thumbnail"
                          />
                        </div>
                        <div class="card-content">
                          <div class="text-small">Time, 6:00AM</div>
                          <p>
                            <strong>Explore Yoga Classes</strong>
                          </p>
                          <p>
                            Unveil the future of NeoBrutalism with our
                            groundbreaking approach that will transform your
                            life.
                          </p>
                          <p>
                            <strong>Learn More -&gt;</strong>
                          </p>
                        </div>
                      </a>
                    </div>
                  </li>
                  <li class="scrollbar-item">
                    <div class="card">
                      <a href="https://example.com">
                        <div class="card-thumbnail">
                          <img
                            src="https://img.freepik.com/free-photo/woman-helping-man-gym_23-2149627070.jpg?w=1380&t=st=1700379214~exp=1700379814~hmac=8ccf72cd2dd8130931e4cba88d4123ce0fbb10ad701ee820ba72fc40f938280e"
                            loading="lazy"
                            alt="Explore NeoBrutalismCSS"
                            class="card-thumbnail"
                          />
                        </div>
                        <div class="card-content">
                          <div class="text-small">Time, 8:00AM</div>
                          <p>
                            <strong>Explore Weight Training </strong>
                          </p>
                          <p>
                            Unveil the future of NeoBrutalism with our
                            groundbreaking approach that will transform your
                            life.
                          </p>
                          <p>
                            <strong>Learn More -&gt;</strong>
                          </p>
                        </div>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
            {/* <!--      Activity section --> */}
            <section>
              <div class="activityBox">
                <div class="challenges">
                  <h2>Challenges</h2>
                  <ul>
                    <li>🏃‍♂️ 30-Day Running Streak</li>
                    <li>🏋 1000 Pushups in a Month</li>
                    <li>🏊‍♀️ Swim 20km in a Month</li>
                  </ul>
                </div>
                <div class="activity-feed">
                  <h2>Friends Activity</h2>
                  <table>
                    <tr>
                      <td width="60px">
                        <div class="imgBx">
                          <img src="https://images.pexels.com/photos/3642482/pexels-photo-3642482.jpeg?auto=compress&cs=tinysrgb&w=100&h=50&dpr=2" />
                        </div>
                      </td>
                      <td>
                        <h4>Jane just set a new record in cycling:30 miles!</h4>
                      </td>
                    </tr>
                    <tr>
                      <td width="60px">
                        <div class="imgBx">
                          <img src="https://images.pexels.com/photos/18913148/pexels-photo-18913148/free-photo-of-man-standing-against-the-setting-sun.jpeg?auto=compress&cs=tinysrgb&w=100&h=50&dpr=2" />
                        </div>
                      </td>
                      <td>
                        <h4>
                          Mike completed the 30-Day Running Streak Challenge!
                        </h4>
                      </td>
                    </tr>
                    <tr>
                      <td width="60px">
                        <div class="imgBx">
                          <img src="https://images.pexels.com/photos/3771112/pexels-photo-3771112.jpeg?auto=compress&cs=tinysrgb&w=100&h=50&dpr=2" />
                        </div>
                      </td>
                      <td>
                        <h4>
                          Anna shared a new workout: 'Hill Sprints Interval'.
                        </h4>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </section>
          </main>

          {/* <!-- ION-ICON Link --> */}
          <script
            type="module"
            src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
          ></script>
          <script
            nomodule
            src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
          ></script>
          {/* <!-- partial --> */}
          <script type="module" src="./script.js"></script>
        </div>
      </div>
    </div>
  );
}

export default page;
