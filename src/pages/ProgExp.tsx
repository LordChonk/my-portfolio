import React from "react";

const ProgExp: React.FC = () => {
  return (
    <div className="prog-exp-section">
      <h1>Programming Experience</h1>
      <div className="prog-intro">
        <p>
          Here is a summary of my coding experience. All code written by me
          that is relevant can be found on my{" "}
          <a href="https://github.com/LordChonk" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>{" "}
          page.
        </p>
      </div>

      <div className="langs">
        <p>
          I have experience with mostly <strong>Java</strong>, followed by{" "}
          <strong>C</strong> and <strong>Elixir</strong>. Although I have also
          worked with <strong>C#</strong>, <strong>Python</strong>, <strong>HTML</strong>{" "}
          (and <strong>CSS</strong> as a complement), <strong>MIPS Assembly</strong>, and{" "}
          <strong>SQL</strong>. I have not written lengthy code for some of these, however
          I have worked with them in some courses at KTH where I had to debug, or simply
          understand how a piece of code works in order to complete the assignment. Due to
          the fact that those pieces of code were not written by me, I did not save them
          or upload them to my GitHub page. Some repositories include instructions (not
          written by me), as well as some reports I have written as part of the assignment.
          I have elected to include these as they may further show understanding and give
          more clarification on the function and purpose of the code.
        </p>

        <br />

        <h1>Primary Topics Covered in Each Language</h1>
        <br />
        <p>
          During my time at KTH I had the pleasure of working with several different
          languages. Some of these, primarily HTML and CSS, I worked more with after KTH
          through curiosity, and to get this portfolio up and running &#128521;
        </p>

        <h2>Java</h2>
        <p>
          I covered several topics in Java during my time at KTH. <strong>Algorithms and
            data structures</strong> such as linked lists, binary trees, and search algorithms
          to name a few, as well as studying the time complexities of these. Additionally, I
          used Java to work with <strong>Networks and Communication</strong> which included
          writing code for TCP and HTTP servers. I also worked with concurrent HTTP servers
          using continuous threads as part of this course. Furthermore, I studied some{" "}
          <strong>Computer security</strong> which involved writing code for encrypting,
          decrypting, and finding hidden data. The course also covered password cracking as
          well as using stream ciphers to encrypt and decrypt arbitrary plaintext.
        </p>
        <br />

        <h2>C</h2>
        <p>
          My first experience with C was primarily related to <strong>I/O and hardware
            engineering</strong>. This included working with I/O on Uno32 boards and using the
          MCB32 toolchain. Later on in my studies, I used C to work with <strong>operating
            systems</strong> on linux. Work in this course covered the structure of a process,
          how they are created, threads, and scheduling.
        </p>
        <br />

        <h2>Elixir</h2>
        <p>
          My experience with Elixir is primarily with <strong>functional</strong> and{" "}
          <strong>concurrent programming</strong>. Work in this course prompted the use of
          recursion, pattern-matching, and using various data structures to complete
          programming tasks.
        </p>
        <br />

        <h2>C#</h2>
        <p>
          My experience with C# comes from writing various scripts for a game I was involved
          in making as part of a course at KTH. These scripts include collision-based damage
          models and character movement, along with some input/output functions. All of these
          scripts are used in a Unity project.
        </p>
        <br />

        <h2>Python</h2>
        <p>
          Most of the code written in Python was for the degree project, where Python scripts
          were used for the purpose of <strong>blocking and redirecting https requests</strong>,
          as well as <strong>serving embedded .html pages</strong>. The Python scripts written
          are not in my personal repository, as these were written with my friend who worked
          with me on the degree project. These codes can be found in this{" "}
          <a
            href="https://github.com/The-Chop-Shop/CarHack2024"
            target="_blank"
            rel="noopener noreferrer"
          >
            repository
          </a>
          . Some more experience with Python came from using Python scripts, written by others,
          as part of some coursework.
        </p>
        <br />

        <h2>HTML and CSS</h2>
        <p>
          I have worked with HTML in the context of the degree project, where the custom pages
          we served to the EV's browser were written in HTML and embedded in Python scripts.
          Additionally, I made this portfolio using HTML as well as CSS for formatting.
        </p>
        <br />

        <h2>SQL</h2>
        <p>
          During my time at KTH I took a Data storage paradigms course which involved{" "}
          <strong>creating and manipulating a database</strong> for a music school. Additionally,
          I took an ethical hacking course in preparation for the degree project where one of
          the topics covered was <strong>SQL Injection</strong>.
        </p>
        <br />

        <h2>MIPS Assembly</h2>
        <p>
          My experience with MIPS Assembly is mostly related to processor design and building
          a single-cycle processor which can run a MIPS Assembly instruction. I also have
          experience in translating machine code to a MIPS Assembly instruction and vice versa.
        </p>
        <br />
      </div>
    </div>
  );
}

export default ProgExp;
