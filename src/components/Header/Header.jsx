import Logo from "../../img/Logo.png"
import LogoHello from "../../img/Logo-Hello.png"
/*	Functions to change image on hover (very necessary component)
	INPUT: An img element
	OUTPUT: A cute image
*/
const changeHello = (element) => {
    element.target.src = LogoHello
    element.target.id = "img-logoHello"
  }
  const changeNormal = (element) => {
    element.target.src = Logo
    element.target.id = "img-logoNorm"
  }
const Header = () => {
    return (
        <>
            <h1 id="title">Lost in Translation</h1>
            <img src={Logo} alt="Logo for Lost in Translation" id="img-logoNorm" onMouseEnter={changeHello} onMouseLeave={changeNormal} />
        </>
    )
}
export default Header