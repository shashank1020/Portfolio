import { HashLink as Link } from 'react-router-hash-link';
import { AiOutlineArrowUp } from 'react-icons/ai'
function ScrollToTop() {
  return (
    <Link style={{borderRadius : "50%", backgroundColor : "black", width : "100%", height : "100%", padding : '10px 13px', fontSize : '28px', color : '#cd5ff8' }}   smooth to="#home">
      <AiOutlineArrowUp />
    </Link>
  )
}

export default ScrollToTop;
