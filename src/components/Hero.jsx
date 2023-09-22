import "./Hero.scoped.css"
import myLogo from "../assets/myLogo-cropped.svg"
import heroImage from "../assets/heroImage.webp"

const Hero = () => {
  return (
    <section>
        <div className="heroText">
            <h1>Hi, I'm <object data={myLogo}></object></h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti incidunt repudiandae, neque beatae voluptate perspiciatis? Eligendi soluta porro enim veritatis!</p>
        </div>
        <div className="heroImage">
            <img src={heroImage}/>
        </div>
    </section>
  )
}

export default Hero