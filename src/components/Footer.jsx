import myLogo from "../assets/myLogo-cropped.svg"
import "./Footer.scoped.css"

const Footer = () => {
  return (
    <footer>
        <object data={myLogo}></object><br/>
        &copy;Daniele Victor Tejuco, 2023
    </footer>
  )
}

export default Footer