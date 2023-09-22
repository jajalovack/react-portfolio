import myLogo from "../assets/myLogo-cropped.svg"
import "./Header.scoped.css"

const Header = () => {
  return (
    <header>
        <object data={myLogo}></object>
    </header>
  )
}

export default Header