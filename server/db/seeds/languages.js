
exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('languageInfoTBL')
      .del()
      .then(function () {
        // Inserts seed entries
        return knex('languageInfoTBL').insert([
          {
            id: 1,
            language_name: 'About Me',
            language_info: `My name is Jordan Lowe, I'm a Software Developer based in Auckland,
            New Zealand.
            
            I'm a proud graduate of Dev Academy, with a passion for devising
            innovative software solutions that resonate. My time at Dev Academy,
            filled with intensive pair programming, diverse team projects, and
            in-depth independent study, has enriched my technical expertise and
            cemented my enthusiasm for coding. My core strengths lie in JavaScript,
            TypeScript, and React, and I'm continually refining these skills,
            while concurrently exploring the fascinating realm of Python.
            
            My years in the bustling hospitality industry have taught me the
            importance of collaboration, clear communication, and creative
            problem-solving, valuable competencies I'm eager to transfer into
            the tech sphere. As I transition into my software development career,
            I'm keen to apply these transferable skills to make significant
            contributions in a vibrant team setting. Be it fine-tuning an API or
            crafting user-friendly interfaces, I'm excited to embrace the
            challenges and opportunities that lie ahead!`
          },
          {
            id: 2,
            language_name: 'Typescipt/Javascript',
            language_info: `JavaScript and TypeScript were the cornerstone of my learning at Dev Academy, providing a sturdy foundation for all my coding endeavors. I've extensively used JavaScript and TypeScript in a variety of projects, from front-end development to back-end server-side scripting. I've been able to create dynamic and interactive web applications by leveraging JavaScript's versatile and powerful features, such as its event-driven programming model and asynchronous operations. TypeScript's static typing feature has greatly enhanced my ability to write safer and more understandable code, improving software maintainability. By defining types explicitly, TypeScript has fostered my ability to spot errors early in the development cycle and to work more proficiently in large codebases.`,
          },
          {
            id: 3,
            language_name: 'React',
            language_info: `My proficiency in React extends to creating sophisticated and reactive user interfaces. By harnessing React's component-based architecture, I've been able to build code that is reusable, modular, and easy to maintain. I have developed an understanding of React's unidirectional data flow and the use of hooks, allowing me to create complex, dynamic web applications with seamless user experiences. I've also utilized Context API and Redux for state management to efficiently handle data propagation and re-rendering in large applications.`,
          },
          {
            id: 4,
            language_name: 'HTML/CSS',
            language_info: `With a solid foundation in HTML/CSS, I can efficiently structure web pages and design visually compelling user interfaces. My knowledge includes using semantic HTML for better readability and SEO, understanding CSS box model, flexbox, and grid for responsive layouts. I've effectively used CSS pre-processors like SCSS to write more maintainable and scalable stylesheets. Moreover, I'm comfortable using Bootstrap and Tailwind CSS for rapid UI development.`,
          },
          {
            id: 5,
            language_name: 'SQL',
            language_info: `My proficiency in SQL involves a thorough understanding of designing, implementing, and managing databases. I am well-versed in principles like normalization, indexing, and transaction management. I've written complex queries for data manipulation and retrieval, dealing with a myriad of scenarios from simple CRUD operations to complex joins and sub-queries. My understanding of relational database management systems, such as SQLite and PostgreSQL, enables me to work efficiently with structured data.`,
          },
          {
            id: 6,
            language_name: 'React Queries & Redux',
            language_info: `I've effectively used React Query to fetch, cache, and update data in my React applications, leading to better user experiences due to its automatic background updates and stale data fetching. Redux, on the other hand, has helped me manage complex state in larger applications. I've appreciated the predictability of Redux's state container, utilizing actions and reducers to control state transitions and facilitate debugging processes.`,
          },
          {
            id: 7,
            language_name: 'Github',
            language_info: `I have substantial experience using GitHub as a collaborative tool for version control. I'm comfortable with a range of functions, from initiating repositories to resolving complex merge conflicts. I have used GitHub's features like issues and projects for task management and planning, and pull requests for code review and integration. My understanding of Git workflows and best practices has been vital in fostering team productivity and maintaining high-quality codebases.`,
          },
          {
            id: 8,
            language_name: 'Vitest & Jest',
            language_info: `I have hands-on experience with Vitest and Jest, enabling me to create robust test suites for my React applications and JavaScript code. Adhering to Test-Driven Development (TDD) has fostered my focus on writing robust, reliable code. I begin by defining test cases upfront and then proceed to write code that passes these tests. This approach ensures that my code is working as intended and helps to prevent bugs from making their way into production.`,
          },
          {
            id: 9,
            language_name: 'Python',
            language_info: `While I am still in the early stages of learning Python, I am deeply captivated by its simplicity, versatility, and wide-ranging use cases. Its intuitive, readable syntax has been a delight to work with, and I am enthusiastic about exploring it further. I aim to harness Python's capabilities for data analysis, machine learning, web development, and beyond, while continuing to deepen my knowledge and expertise in the language. Python represents my commitment to continuous learning and versatility as a software developer.`,
          },
        ])
      })
  }
  