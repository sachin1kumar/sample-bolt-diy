import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import {
  BriefcaseIcon,
  EnvelopeIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline';

function App() {
  return (
    <div className="bg-primary text-text-primary font-sans dark:bg-gray-900 dark:text-gray-300">
      <header className="bg-secondary bg-opacity-20 backdrop-blur-lg sticky top-0 z-50 shadow-md dark:bg-gray-800 dark:bg-opacity-30 dark:border-b dark:border-border-color">
        <div className="container mx-auto py-6 px-4 flex items-center justify-between">
          <Link to="about" smooth={true} duration={500} className="text-2xl font-semibold text-accent hover:text-text-primary dark:hover:text-off-white cursor-pointer">Sachin Kumar</Link>
          <nav>
            <ul className="flex space-x-8">
              <li><Link to="about" smooth={true} duration={500} className="hover:text-text-primary dark:hover:text-off-white cursor-pointer">About</Link></li>
              <li><Link to="skills" smooth={true} duration={500} className="hover:text-text-primary dark:hover:text-off-white cursor-pointer">Skills</Link></li>
              <li><Link to="projects" smooth={true} duration={500} className="hover:text-text-primary dark:hover:text-off-white cursor-pointer">Experience</Link></li>
              <li><Link to="contact" smooth={true} duration={500} className="hover:text-text-primary dark:hover:text-off-white cursor-pointer">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto py-20 px-4">
        <section id="about" className="mb-24">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl font-semibold text-accent mb-12"
          >
            About Me
          </motion.h2>
          <div className="flex items-center">
            <motion.img
              src="/profile.jpg"
              alt="Profile"
              className="rounded-full w-56 h-56 mr-16 shadow-xl"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="text-xl text-text-secondary leading-relaxed dark:text-gray-400"
            >
              I am an experienced software developer with 11 years in backend development. I’ve demonstrated
              deep expertise in using my problem solving skills to build and nurture global products and yield stellar
              results for all stakeholders.
              <br /><br />
              “Sachin and me has worked together. He really sounds good in software development and problem
              solving and he was always there to take responsibility of his work with passion.” ~ Chirag Sharma,
              Tech Lead at Gojek.
            </motion.p>
          </div>
        </section>

        <section id="skills" className="mb-24">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-semibold text-accent mb-12"
          >
            Skills
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <motion.div
              className="bg-secondary bg-opacity-30 rounded-lg shadow-md p-8 hover:shadow-xl transition duration-300 dark:bg-gray-800 dark:bg-opacity-30 dark:border dark:border-border-color"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-accent mb-6">Technical Skills</h3>
              <ul className="list-disc list-inside text-text-secondary dark:text-gray-400">
                <li>Data Structures and Algorithms, JAVA 8,11 and 17 and OOPS</li>
                <li>Backend: REST API, gRPC, Spring boot framework with Microservices Architecture using
                  Maven, Spring Boot Security, Spring Cloud, JWT, LDAP, PostgreSQL, MongoDB, AWS,
                  OpenShift, Docker, JMS using RabbitMQ and kafka, backstage, DataDog, Argo CD, and Java
                  Unit testing with Spring Boot and Mockito, etc.</li>
                <li>Design Patterns: Pub/Sub, Singleton, Builder, Factory, Chain of responsibility, Observer and
                  MVC, etc.</li>
                <li>Source control with GIT</li>
                <li>SonarQube, clean code, CI/CD, pair programming, TDD, and code review</li>
                <li>Agile methodology and JIRA</li>
                <li>Familiar with: Machine Learning, C++, JSP/Servlet and HTML, CSS and jQuery</li>
              </ul>
            </motion.div>
          </div>
        </section>

        <section id="projects" className="mb-24">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-semibold text-accent mb-12"
          >
            Experience
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-12">
            <motion.div
              className="bg-secondary bg-opacity-30 rounded-lg shadow-md p-8 hover:shadow-xl transition duration-300 dark:bg-gray-800 dark:bg-opacity-30 dark:border dark:border-border-color"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-accent mb-6">Principal Software Engineer</h3>
              <h4 className="text-xl font-semibold text-accent mb-4">BRIGHTLY, A SIEMENS COMPANY NOIDA, INDIA</h4>
              <h5 className="text-lg font-semibold text-accent mb-2">Jan 2024 to Present</h5>
              <ul className="list-disc list-inside text-text-secondary dark:text-gray-400">
                <li>Collaborate on the development of an inventory management product designed to oversee
                  suppliers, manufacturers, and stock stored in inventory systems.</li>
                <li>Contribute to the design and implementation of the product using microservices architecture,
                  ensuring seamless service interactions via Kafka for event-driven communication.</li>
                <li>Play a key role in technical tasks including module coding based on detailed design
                  specifications, debugging, test-driven development (TDD), and code reviews to maintain high-
                  quality deliverables.</li>
                <li>Responsible for Low-Level Design (LLD) of components, working closely with the Architect to
                  assess and mitigate impacts on High-Level Design (HLD).</li>
                <li>Proactively identify and implement code optimizations and improvements to enhance system
                  performance and maintainability.</li>
              </ul>
            </motion.div>
            <motion.div
              className="bg-secondary bg-opacity-30 rounded-lg shadow-md p-8 hover:shadow-xl transition duration-300 dark:bg-gray-800 dark:bg-opacity-30 dark:border dark:border-border-color"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <h3 className="text-2xl font-semibold text-accent mb-6">Senior Software Engineer</h3>
              <h4 className="text-xl font-semibold text-accent mb-4">DEUTSCHE TELEKOM DIGITAL LABS GURGOAN, INDIA</h4>
              <h5 className="text-lg font-semibold text-accent mb-2">Sep 2022 to Dec 2023</h5>
              <ul className="list-disc list-inside text-text-secondary dark:text-gray-400">
                <li>Worked on a Croatian central communication hub product. Developed and designed the
                  microservices architecture where services were being used to send user notifications using
                  different communication transports. It was a unified communication interface for all
                  applications(one point to integrate with all channels like smsc, push and email).</li>
                <li>The entire product was designed in a microservices architecture where services and components
                  were interacting using kafka.</li>
                <li>Handled various technical aspects like coding of modules using the given design specifications,
                  debugging, test-driven development and code review.</li>
              </ul>
            </motion.div>
            <motion.div
              className="bg-secondary bg-opacity-30 rounded-lg shadow-md p-8 hover:shadow-xl transition duration-300 dark:bg-gray-800 dark:bg-opacity-30 dark:border dark:border-border-color"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <h3 className="text-2xl font-semibold text-accent mb-6">Staff Engineer, Technology</h3>
              <h4 className="text-xl font-semibold text-accent mb-4">NAGARRO GURGOAN, INDIA</h4>
              <h5 className="text-lg font-semibold text-accent mb-2">Mar 2018 to Sep 2022</h5>
              <ul className="list-disc list-inside text-text-secondary dark:text-gray-400">
                <li>From Jan 2022 to Sep 2022:
                  Worked on a Saudi Arabian banking product. Developed and designed the microservices
                  architecture where banking services were interacting using Feign Client.
                  Handled various technical aspects like coding of modules using the given design specifications,
                  debugging and test-driven development.</li>
                <li>From Mar 2018 to Dec 2021:
                  Worked on a Sweden based Electronic Access Product. The entire product was designed in a
                  microservices architecture where services and components were interacting using Rabbit MQ.
                  The components were bundled as docker images and deployed over AWS.
                  My role was to analyse the requirement coming from different stakeholders and teams for
                  improvements in existing services, components and further discuss with Architect if new services
                  were to be developed.</li>
              </ul>
            </motion.div>
            <motion.div
              className="bg-secondary bg-opacity-30 rounded-lg shadow-md p-8 hover:shadow-xl transition duration-300 dark:bg-gray-800 dark:bg-opacity-30 dark:border dark:border-border-color"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <h3 className="text-2xl font-semibold text-accent mb-6">Software Programmer</h3>
              <h4 className="text-xl font-semibold text-accent mb-4">INDIAMART INTERMESH LTD. NOIDA, INDIA</h4>
              <h5 className="text-lg font-semibold text-accent mb-2">Dec 2015 to Mar 2018</h5>
              <ul className="list-disc list-inside text-text-secondary dark:text-gray-400">
                <li>Worked on the development of microservices for India’s largest B2B e-commerce firm.</li>
                <li>Worked as part of a team to develop the REST APIs for the Android platform &amp; collaborated with
                  cross-functional teams to define, design &amp; launch few features.</li>
                <li>Partnered with QA Engineers &amp; internal developers to maintain best practices.</li>
              </ul>
            </motion.div>
            <motion.div
              className="bg-secondary bg-opacity-30 rounded-lg shadow-md p-8 hover:shadow-xl transition duration-300 dark:bg-gray-800 dark:bg-opacity-30 dark:border dark:border-border-color"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <h3 className="text-2xl font-semibold text-accent mb-6">Junior Android Developer</h3>
              <h4 className="text-xl font-semibold text-accent mb-4">SOFTELIXIR INFOTECH PVT. LTD. NEW DELHI, INDIA</h4>
              <h5 className="text-lg font-semibold text-accent mb-2">Nov 2014 to Dec 2015</h5>
              <ul className="list-disc list-inside text-text-secondary dark:text-gray-400">
                <li>Worked on android applications such as Delhi Metro Rail App, Baby School – Educational App,
                  Calculator SE and Attendance Tracker App.</li>
                <li>Worked on developing the REST APIs for android applications.</li>
              </ul>
            </motion.div>
            <motion.div
              className="bg-secondary bg-opacity-30 rounded-lg shadow-md p-8 hover:shadow-xl transition duration-300 dark:bg-gray-800 dark:bg-opacity-30 dark:border dark:border-border-color"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <h3 className="text-2xl font-semibold text-accent mb-6">Trainee Software Engineer</h3>
              <h4 className="text-xl font-semibold text-accent mb-4">GLOBALLOGIC NOIDA, INDIA</h4>
              <h5 className="text-lg font-semibold text-accent mb-2">Mar 2014 to Sept 2014</h5>
              <ul className="list-disc list-inside text-text-secondary dark:text-gray-400">
                <li>Worked on contractual basis.</li>
                <li>Worked on JIRA customization and deployment, got exposure to web technologies.</li>
              </ul>
            </motion.div>
          </div>
        </section>

        <section id="contact">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-semibold text-accent mb-12"
          >
            Contact
          </motion.h2>
          <div className="flex flex-col md:flex-row gap-8">
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <EnvelopeIcon className="h-7 w-7 mr-4 text-text-secondary dark:text-gray-400" />
              <p className="text-lg text-text-secondary dark:text-gray-400">sachin .backend.dev @gmail.com</p>
            </motion.div>
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <BriefcaseIcon className="h-7 w-7 mr-4 text-text-secondary dark:text-gray-400" />
              <p className="text-lg text-text-secondary dark:text-gray-400">linkedin.com/in/yourprofile</p>
            </motion.div>
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <AcademicCapIcon className="h-7 w-7 mr-4 text-text-secondary dark:text-gray-400" />
              <p className="text-lg text-text-secondary dark:text-gray-400">github.com/yourusername</p>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-secondary bg-opacity-20 py-12 text-center dark:bg-gray-800 dark:bg-opacity-30 dark:border-t dark:border-border-color">
        <p className="text-text-secondary dark:text-gray-400">© {new Date().getFullYear()} Sachin Kumar</p>
      </footer>
    </div>
  );
}

export default App;
