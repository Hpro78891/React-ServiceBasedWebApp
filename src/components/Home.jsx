import React from 'react'
import vg from "../assets/2.webp"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillInstagram,AiFillYoutube} from "react-icons/ai"

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Techy star</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your and one only solution to the tech problems your face
            every day. We are leading tech company whose aim is to increase the
            problem solviong ability in children .
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are ?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            doloremque cupiditate, hic expedita molestias optio quia quod atque
            a! Similique molestias suscipit molestiae deleniti laborum beatae
            quisquam nam temporibus at ab. Facilis sapiente ullam autem!
            Eligendi voluptates, debitis consectetur laborum temporibus id
            commodi quia recusandae officia aspernatur dignissimos ducimus iste?
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div>
              <AiFillAmazonCircle style={{ animationDelay: "0.5s" }} />
              <p>Amazon</p>
            </div>
            <div>
              <AiFillInstagram style={{ animationDelay: "0.7s" }} />
              <p>Instagram</p>
            </div>
            <div>
              <AiFillYoutube style={{ animationDelay: "1s" }} />
              <p>Youtube</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default Home