import "./Skills.scoped.css"
import firstFolio from "../assets/myFirstFolio.png"
import workIt from "../assets/work.it.png"

const Skills = () => {
  return (
    <section>
        <h1>Skills Showcase</h1>
        <div className="skillLeft">
          <div className="skillImg">
            <img src={firstFolio}/>
          </div>
          <div className="skillText">
            <h2>My first portfolio</h2>
            <h4>Tech stack used:</h4>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JS</li>
            </ul>
          </div>
        </div>
        <div className="skillRight">
          <div className="skillText">
            <h2>work.it</h2>
            <h4>Tech stack used:</h4>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>Github</li>
            </ul>
          </div>
          <div className="skillImg">
            <img src={workIt}/>
          </div>
        </div>
    </section>
  )
}

export default Skills