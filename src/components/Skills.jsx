import React, { memo } from "react";

const Skills = memo(() => {

    const skills = [
        {
            key:1,
            logo:"c.png",
            alternate:"c",
            text:"C"
        },
        {
            key:2,
            logo:"c-.png",
            alternate:"c++",
            text:"C++"
        },
        {
            key:3,
            logo:"java.png",
            alternate:"java",
            text:"Java"
        },
        {
            key:4,
            logo:"python.png",
            alternate:"python",
            text:"Python"
        },
        {
            key:5,
            logo:"html-5.png",
            alternate:"html",
            text:"HTML"
        },
        {
            key:6,
            logo:"css-3.png",
            alternate:"css",
            text:"CSS"
        },
        {
            key:7,
            logo:"js.png",
            alternate:"js",
            text:"Java Script"
        },
        {
            key:8,
            logo:"bootstrap.png",
            alternate:"bootstrap",
            text:"Bootstrap"
        },
        {
            key:9,
            logo:"react.png",
            alternate:"react",
            text:"React"
        },
        {
            key:10,
            logo:"node.png",
            alternate:"node",
            text:"Node.js"
        },
        {
            key:11,
            logo:"express.png",
            alternate:"express",
            text:"Express.js"
        },
        {
            key:12,
            logo:"mongodb.png",
            alternate:"mongodb",
            text:"MongoDB"
        },
        {
            key:13,
            logo:"vscode.png",
            alternate:"vscode",
            text:"VS Code"
        },
        {
            key: 14,
            logo:"chatgpt.png",
            alternate:"chatgpt",
            text:"Chat-GPT"
        },
        {
            key: 15,
            logo:"github2.png",
            alternate:"github",
            text:"Git-Hub"
        }
    ];

    return (
        <section>
            <h1 id="skills" className="mt-5 pt-5"></h1>
            <h2 className="text-center m-5 skills-title fs-1" data-aos="fade-left">My Skills</h2>
            <div className="container">
                <div className="row text-center">
                    {skills.map((info)=>{
                        return (
                            <div className="col-6 col-md-4 my-3" key={info.key} data-aos="fade-up">
                                <img className="skills-icon" src={info.logo} alt={info.alternate} />
                                <h6 className="text-white">{info.text}</h6>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
});

export default Skills;
