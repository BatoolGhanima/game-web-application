import myImage1 from '../../assets/images/game1.jpg'
import myImage2 from '../../assets/images/game2.jpg'
import myImage3 from '../../assets/images/game3.jpg'
import '../../styles/sideImage.css'
function SideImage() {
  return (
      <>
      <div className="containerimages">
              <div className="images">
       <img src={myImage1} alt="" id="firstimg" />
    </div>
    <div className="images">
       <img src={myImage2} alt="" id="secondimg" />
    </div>
    <div className="images">
      <img src={myImage3} alt="" id="thirdimg" />
    </div>
      </div>
      </>
  )
}

export default SideImage