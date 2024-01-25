
import {useParams, useNavigate} from "react-router-dom"
function ShowProduct() {
  const myParams = useParams();
  const navigate = useNavigate();
  console.log(myParams)
  if (+myParams.id=== 404){
    return (<h1>Page not found</h1>);
  }
  const redirectHome =() => {
    navigate("/")
  }
  const redirectAbout =() => {
    navigate("/about")
  }
  const redirectContact =() => {
    navigate("/contact")
  }
  return (

    <>
    <h1>iam product</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat alias veritatis ipsam maiores rem nisi unde consequuntur vitae fugiat in, dolorem tempora maxime dolor quidem recusandae eveniet at velit porro?
    Nihil sapiente corrupti cupiditate. Nam quas aspernatur temporibus quibusdam, voluptatibus, iste consectetur aliquam dolores sunt itaque sit facilis dicta nihil eius necessitatibus molestiae. Quaerat, voluptatem dolore nobis aspernatur fugiat nisi.</p>
    <button className="btn btn-info" onClick={redirectHome}>Home</button>
    <button className="btn btn-info" onClick={redirectContact}>Contact</button>
    <button className="btn btn-info" onClick={redirectAbout}>About</button>

    </>
  )
}

export default ShowProduct