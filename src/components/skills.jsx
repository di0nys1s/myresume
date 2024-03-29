import React from "react";

const Skills = () => {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="skills"
    >
      <div className="w-100">
        <h2 className="mb-5">Skills</h2>

        <div className="subheading mb-3">Programming Languages &amp; Tools</div>
        <ul className="list-inline dev-icons">
          <li className="list-inline-item">
            <i className="fab fa-html5"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-css3-alt"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-js"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-aws"></i>
          </li>
          <li className="list-inline-item">
            <svg
              width="30pt"
              height="30pt"
              style={{ position: "relative", bottom: "5px" }}
              viewBox="0 0 256 256"
              version="1.1"
              preserveAspectRatio="xMidYMid"
            >
              <g>
                <polygon
                  fill="#868E96"
                  transform="translate(128.000000, 128.000000) scale(1, -1) translate(-128.000000, -128.000000) "
                  points="0 128 0 0 128 0 256 0 256 128 256 256 128 256 0 256"
                />
                <path
                  d="M146.658132,223.436863 L146.739401,212.953054 L130.079084,212.953054 L113.418767,212.953054 L113.418767,165.613371 L113.418767,118.273689 L101.63464,118.273689 L89.8505126,118.273689 L89.8505126,165.613371 L89.8505126,212.953054 L73.1901951,212.953054 L56.5298776,212.953054 L56.5298776,223.233689 C56.5298776,228.922577 56.6517824,233.676863 56.8143221,233.798768 C56.9362269,233.961308 77.2130522,234.042577 101.797179,234.001943 L146.536227,233.880038 L146.658132,223.436863 Z"
                  fill="#FFFFFF"
                  transform="translate(101.634640, 176.142993) rotate(-180.000000) translate(-101.634640, -176.142993) "
                />
                <path
                  d="M206.566631,234.272145 C213.068219,232.646748 218.025679,229.761668 222.57679,225.048018 C224.933616,222.528653 228.428219,217.936907 228.712663,216.839764 C228.793933,216.514684 217.659965,209.037859 210.914568,204.852462 C210.670758,204.689922 209.69552,205.74643 208.598377,207.371827 C205.306949,212.166748 201.852981,214.239129 196.570441,214.604843 C188.809171,215.133097 183.811076,211.069605 183.851711,204.283573 C183.851711,202.292462 184.136155,201.114049 184.948854,199.488653 C186.65552,195.953414 189.825044,193.840399 199.7806,189.533097 C218.106949,181.649922 225.949489,176.448653 230.825679,169.053097 C236.270758,160.804208 237.489806,147.638494 233.792028,137.845478 C229.728536,127.199129 219.651076,119.966113 205.469489,117.568653 C201.080917,116.796589 190.678377,116.918494 185.964727,117.771827 C175.684092,119.600399 165.931711,124.679764 159.917743,131.343891 C157.560917,133.944526 152.969171,140.730557 153.253616,141.218176 C153.37552,141.380716 154.432028,142.030875 155.610441,142.721668 C156.748219,143.371827 161.05552,145.850557 165.119012,148.207383 L172.473933,152.474049 L174.01806,150.198494 C176.171711,146.907065 180.885362,142.396589 183.729806,140.893097 C191.897425,136.585795 203.112663,137.195319 208.639012,142.15278 C210.995838,144.30643 211.971076,146.541351 211.971076,149.83278 C211.971076,152.799129 211.605362,154.099446 210.061235,156.334367 C208.070123,159.178811 204.006631,161.576272 192.466314,166.574367 C179.259965,172.263256 173.571076,175.798494 168.369806,181.406113 C165.362822,184.656907 162.518377,189.858176 161.339965,194.206113 C160.364727,197.822621 160.120917,206.884208 160.892981,210.541351 C163.61552,223.300716 173.245996,232.199764 187.143139,234.841034 C191.653616,235.694367 202.137425,235.369287 206.566631,234.272145 Z"
                  fill="#FFFFFF"
                  transform="translate(194.578507, 176.190240) scale(1, -1) translate(-194.578507, -176.190240) "
                />
              </g>
            </svg>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-vuejs"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-react"></i>
          </li>
          <li className="list-inline-item">
            <svg
              height="30pt"
              viewBox=".5 -.2 1023 1024.1"
              width="30pt"
              fill="#868E96"
              style={{ position: "relative", bottom: "5px" }}
            >
              <path d="m478.5.6c-2.2.2-9.2.9-15.5 1.4-145.3 13.1-281.4 91.5-367.6 212-48 67-78.7 143-90.3 223.5-4.1 28.1-4.6 36.4-4.6 74.5s.5 46.4 4.6 74.5c27.8 192.1 164.5 353.5 349.9 413.3 33.2 10.7 68.2 18 108 22.4 15.5 1.7 82.5 1.7 98 0 68.7-7.6 126.9-24.6 184.3-53.9 8.8-4.5 10.5-5.7 9.3-6.7-.8-.6-38.3-50.9-83.3-111.7l-81.8-110.5-102.5-151.7c-56.4-83.4-102.8-151.6-103.2-151.6-.4-.1-.8 67.3-1 149.6-.3 144.1-.4 149.9-2.2 153.3-2.6 4.9-4.6 6.9-8.8 9.1-3.2 1.6-6 1.9-21.1 1.9h-17.3l-4.6-2.9c-3-1.9-5.2-4.4-6.7-7.3l-2.1-4.5.2-200.5.3-200.6 3.1-3.9c1.6-2.1 5-4.8 7.4-6.1 4.1-2 5.7-2.2 23-2.2 20.4 0 23.8.8 29.1 6.6 1.5 1.6 57 85.2 123.4 185.9s157.2 238.2 201.8 305.7l81 122.7 4.1-2.7c36.3-23.6 74.7-57.2 105.1-92.2 64.7-74.3 106.4-164.9 120.4-261.5 4.1-28.1 4.6-36.4 4.6-74.5s-.5-46.4-4.6-74.5c-27.8-192.1-164.5-353.5-349.9-413.3-32.7-10.6-67.5-17.9-106.5-22.3-9.6-1-75.7-2.1-84-1.3zm209.4 309.4c4.8 2.4 8.7 7 10.1 11.8.8 2.6 1 58.2.8 183.5l-.3 179.8-31.7-48.6-31.8-48.6v-130.7c0-84.5.4-132 1-134.3 1.6-5.6 5.1-10 9.9-12.6 4.1-2.1 5.6-2.3 21.3-2.3 14.8 0 17.4.2 20.7 2z" />
              <path d="m784.3 945.1c-3.5 2.2-4.6 3.7-1.5 2 2.2-1.3 5.8-4 5.2-4.1-.3 0-2 1-3.7 2.1zm-6.9 4.5c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-7.6 4c-3.8 2-3.6 2.8.2.9 1.7-.9 3-1.8 3-2 0-.7-.1-.6-3.2 1.1z" />
            </svg>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-node"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-node-js"></i>
          </li>
          <li className="list-inline-item">
            <i className="fas fa-database"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-github"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-microsoft"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-android"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-java"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-npm"></i>
          </li>
        </ul>

        <div className="subheading mb-3">Key Skills</div>
        <ul className="fa-ul mb-0">
          <li>
            <i className="fa-li fa fa-check"></i>
            Highly proficient in HTML5, CSS and Sass, JavaScript, Typescript and
            ES6+
          </li>
          <li>
            <i className="fa-li fa fa-check"></i>
            Adept in using JavaScript libraries and frameworks including React,
            React Native, Vue, Node
          </li>
          <li>
            <i className="fa-li fa fa-check"></i>
            Proficient in creating applications using Next
          </li>
          <li>
            <i className="fa-li fa fa-check"></i>
            Experience in creating UI components with Storybook
          </li>
          <li>
            <i className="fa-li fa fa-check"></i>
            Highly proficient designing and working with REST and GraphQL
          </li>
          <li>
            <i className="fa-li fa fa-check"></i>
            Experience in unit testing using React Testing Library, Jest, Chai
            and Mocha
          </li>
          <li>
            <i className="fa-li fa fa-check"></i>
            Keen understanding of responsive design principles
          </li>
          <li>
            <i className="fa-li fa fa-check"></i>
            Keen understanding of responsive design principles
          </li>
          <li>
            <i className="fa-li fa fa-check"></i>
            Well versed testing and debugging using developer tools
          </li>
          <li>
            <i className="fa-li fa fa-check"></i>
            Proficient working with relational and non-relational database
            structures
          </li>
          <li>
            <i className="fa-li fa fa-check"></i>
            Keen knowledge of site SEO, accessibility standards and optimisation
          </li>
          <li>
            <i className="fa-li fa fa-check"></i>
            Highly experienced working in Agile teams
          </li>
          <li>
            <i className="fa-li fa fa-check"></i>
            Professional experience in developing UI test scripts using Selenium
            and Puppeteer
          </li>
          <li>
            <i className="fa-li fa fa-check"></i>
            Experience working with WordPress, Oxygen and Shopify
          </li>
          <li>
            <i className="fa-li fa fa-check"></i>
            Proficient creating document management websites using Microsoft
            SharePoint
          </li>
          <li>
            <i className="fa-li fa fa-check"></i>
            Keen understanding of OOP using Java and C#
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
