import React from 'react'

function Skills() {

    const skills = [
        {
            key:1,
            logo:"src/assets/c.png",
            alternate:"c",
            text:"C"
        },
        {
            key:2,
            logo:"src/assets/c-.png",
            alternate:"c++",
            text:"C++"
        },
        {
            key:3,
            logo:"src/assets/java.png",
            alternate:"java",
            text:"Java"
        },
        {
            key:4,
            logo:"src/assets/python.png",
            alternate:"python",
            text:"Python"
        },
        {
            key:5,
            logo:"src/assets/html-5.png",
            alternate:"html",
            text:"HTML"
        },
        {
            key:6,
            logo:"src/assets/css-3.png",
            alternate:"css",
            text:"CSS"
        },
        {
            key:7,
            logo:"src/assets/js.png",
            alternate:"js",
            text:"Java Script"
        },
        {
            key:8,
            logo:"src/assets/bootstrap.png",
            alternate:"bootstrap",
            text:"Bootstrap"
        },
        {
            key:9,
            logo:"src/assets/react.png",
            alternate:"react",
            text:"React"
        },
        {
            key:10,
            logo:"src/assets/node.png",
            alternate:"node",
            text:"Node.js"
        },
        {
            key:11,
            logo:"src/assets/express.png",
            alternate:"express",
            text:"Express.js"
        },
        {
            key:12,
            logo:"src/assets/mongodb.png",
            alternate:"mongodb",
            text:"MongoDB"
        },
        {
            key:13,
            logo:"src/assets/vscode.png",
            alternate:"vscode",
            text:"VS Code"
        }
    ];

    return (
        <section>
            <h1 id="skills" className="mt-5 pt-5"></h1>
            <h3 className="text-center m-5 skills-title" data-aos="fade-left">My Skills</h3>
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
}

export default Skills