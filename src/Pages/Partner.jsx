import img1 from "../assets/logo/a.jpg";
import img2 from "../assets/logo/b.png";
import img3 from "../assets/logo/c.jpg";
import img4 from "../assets/logo/d.jpg";
import img5 from "../assets/logo/e.jpg";
import img6 from "../assets/logo/f.jpg";
const Partner = () => {
  return (
    <div>
      <div>
        <h2 className="text-3xl text-center font-bold bg-cyan-300 dark:bg-[#0a192f]  w-6/12 mx-auto rounded-2xl p-3">Meet Our Partners</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 ">
          {/* 1 */}
          <div className="card  w-8/12 mx-auto my-5    text-white  bg-[#49adc0] shadow-md">
            <figure className="px-10 pt-10">
              <img src={img1} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title bg-cyan-900 p-2 rounded-md font-bold ">BJIT Limited</h2>
              <p>The team was friendly and highly skilled.”
              — Lily S., Principal</p>
              <div className="card-actions">
                <button className="btn bg-[#49adc0] border-cyan-300  text-black ">⭐⭐⭐⭐⭐(5)</button>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="card  w-8/12 mx-auto my-5    text-white  bg-[#49adc0] shadow-md">
            <figure className="px-10 pt-10">
              <img src={img2} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title bg-cyan-900 p-2 rounded-md font-bold  ">Magnito Digital</h2>
              <p> The system is reliable and easy to use.”
              — Tanvir H., Operations Head</p>
              <div className="card-actions">
                <button className="btn bg-[#49adc0] border-cyan-300  text-black ">⭐⭐⭐⭐⭐(5)</button>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className="card  w-8/12 mx-auto   text-white  my-5 bg-[#49adc0] shadow-md">
            <figure className="px-10 pt-10">
              <img src={img3} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title bg-cyan-900 p-2 rounded-md font-bold " >Southtech Limited</h2>
              <p>Their support team was available 24/7 and resolved any issues quickly.”
              — James P., IT Manager</p>
              <div className="card-actions">
                <button className="btn bg-[#49adc0] border-cyan-300  text-black ">⭐⭐⭐⭐⭐(5)</button>
              </div>
            </div>
          </div>
          {/* 4 */}
          <div className="card  w-8/12 mx-auto my-5    text-white  bg-[#49adc0] shadow-md">
            <figure className="px-10 pt-10">
              <img src={img4} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title bg-cyan-900 p-2 rounded-md font-bold " >DataSoft Systems Bangladesh Ltd.</h2>
              <p>Magnito  creative throughout the project.”
              — Maya R., E-commerce Business Owner</p>
              <div className="card-actions">
                <button className="btn bg-[#49adc0] border-cyan-300  text-black ">⭐⭐⭐⭐⭐(5)</button>
              </div>
            </div>
          </div>
          {/* 5 */}
          <div className="card  w-8/12 mx-auto my-5    text-white  bg-[#49adc0] shadow-md">
            <figure className="px-10 pt-10">
              <img src={img5} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title bg-cyan-900 p-2 rounded-md font-bold ">REVE Systems</h2>
              <p>“Southtech  Their expertise in financial software is evident, and they guided us through every step with professionalism.”
              — Arman K., Bank Manager</p>
              <div className="card-actions">
                <button className="btn bg-[#49adc0] border-cyan-300  text-black ">⭐⭐⭐⭐⭐(5)</button>
              </div>
            </div>
          </div>
          {/* 6 */}
          <div className="card  w-8/12 mx-auto    text-white my-5 bg-[#49adc0] shadow-md">
            <figure className="px-10 pt-10">
              <img src={img6} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text bg-cyan-900 p-2 rounded-md font-bold " >Brain Station 23</h2>
              <p>“The team at Brain Station 23 exceeded our expectations.process smooth. Highly recommend!”
              — Sophia J., Startup Founder</p>
              <div className="card-actions">
                <button className="btn bg-[#49adc0] border-cyan-300  text-black ">⭐⭐⭐⭐⭐(5)</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
