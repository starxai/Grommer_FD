import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../Footer";
import Carousel from "./Carousel";
import poster_small_1 from "../images/homepage-poster-1.png";
import poster_small_2 from "../images/homepage-poster-2.png";
import poster_big from "../images/homepage-poster-3.png";
import img_1 from "../images/img1.jpg";
import img_2 from "../images/img2.jpg";
import img_3 from "../images/img3.jpg";
import img_4 from "../images/img4.jpg";
import slider_img_landscape from "../images/image_slider_image.jpg";
import slider_img_portrait from "../images/slider_image_portrait.png";
import reasons_to_use from "../images/reasons-to-use.png";
import reasons_to_use2 from "../images/image_slider_image.jpg";
import home_salon from "../images/home_salon.png";
import get_in_touch from "../images/get_in_touch_img.png";

import "../css/HomePage.css";

function HomePage() {
  const [salons, setSalons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchSalons() {
      try {
        const { data } = await axios.get(
          "http://127.0.0.1:8000/user/salons?city=nellore"
        );
        setLoading(false);
        setSalons(data.data.salons);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    }

    fetchSalons();
  }, []);

  const images =
    window.innerWidth < 700
      ? [
          slider_img_portrait,
          slider_img_portrait,
          slider_img_portrait,
          slider_img_portrait,
          slider_img_portrait,
          slider_img_portrait,
        ]
      : [
          slider_img_landscape,
          slider_img_landscape,
          slider_img_landscape,
          slider_img_landscape,
          slider_img_landscape,
          slider_img_landscape,
        ];
  const reasons_to_use_img =
    window.innerWidth <= 768 ? reasons_to_use2 : reasons_to_use;
  return (
    <div className="home-page">
      {/* Main carousel*/}
      <div className="main-carousel container">
        <div className="carousel-text-container">
          <div className="carousel-text">
            <h2 className="carousel-heading">
              Sharp Style <br></br>Sharper Service
            </h2>
            <p className="carousel-paragraph">
              Discover, book, and elevate your grooming experience effortlessly.
              Your go-to platform for finding and booking trusted salons and
              barbershops
            </p>
            <NavLink to="/menu" className="book-salon-btn-carousel">
              BOOK SALON NOW
            </NavLink>
          </div>
        </div>
        <Carousel>
          {images.map((img, index) => {
            return (
              <img
                key={index}
                src={img}
                alt="barber"
                className="carousel-image"
              />
            );
          })}
        </Carousel>
      </div>
      {/* Main carousel*/}

      {/* What is Groomer */}
      <div className="what-is-groomer container">
        <NavLink to="/about" className="what-is-groomer-btn">
          About Us
        </NavLink>
        <div className="poster-one poster-small">
          <h2 className="what-is-groomer-title">What is Groomer?</h2>
          <img
            className="what-is-groomer-image"
            src={poster_small_1}
            alt="groomer"
          />
          <p className="what-is-groomer-paragraph para-one">
            Crafting tailored styles with precision, passion, and unparalleled
            expertise daily.
          </p>
        </div>
        <div className="poster-two">
          <img
            className="what-is-groomer-image"
            src={poster_big}
            alt="groomer"
          />
        </div>
        <div className="poster-three poster-small">
          <img
            className="what-is-groomer-image"
            src={poster_small_2}
            alt="groomer"
          />
          <p className="what-is-groomer-paragraph">
            Complete your grooming routine with our platform connecting you to
            top-notch salons and barbershops.
          </p>
        </div>
      </div>
      {/* What is Groomer */}

      {/* salon-list Home page */}
      <div className="salon-list container">
        <h2 className="salon-list-heading">
          Get The Best<br></br> Groomer In The City
        </h2>
        {loading ? (
          <p>Loading</p>
        ) : error ? (
          <p>{error.message}</p>
        ) : (
          <div className="salon-list-container-home-page">
            <SalonList salons={salons} />
          </div>
        )}
        <NavLink to="/menu" className="more-groomers-button">
          MORE GROOMERS
        </NavLink>
      </div>
      {/* salon-list Home page */}

      {/* Reasons to use Groomer*/}
      <div className="reasons-groomer container">
        <h2 className="reasons-to-use-heading">Reasons To Use Groomer</h2>
        <div className="reasons-to-use-image-container">
          <svg
            className="reasons-img-svg"
            width="46"
            height="48"
            viewBox="0 0 46 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.7282 0.965857C22.8054 0.691366 23.1946 0.691366 23.2718 0.965856L26.5046 12.4539C26.5591 12.6478 26.7933 12.7239 26.9513 12.5991L36.3192 5.20523C36.5431 5.02856 36.8579 5.25727 36.759 5.52474L32.6219 16.719C32.5521 16.9079 32.6968 17.107 32.898 17.099L44.8228 16.6236C45.1077 16.6122 45.2279 16.9823 44.9908 17.1406L35.0639 23.7651C34.8964 23.8769 34.8964 24.1231 35.0639 24.2349L44.9908 30.8594C45.2279 31.0177 45.1077 31.3878 44.8228 31.3764L32.898 30.901C32.6968 30.893 32.5521 31.0921 32.6219 31.281L36.759 42.4753C36.8579 42.7427 36.5431 42.9714 36.3192 42.7948L26.9513 35.4009C26.7933 35.2761 26.5591 35.3522 26.5046 35.5461L23.2718 47.0341C23.1946 47.3086 22.8054 47.3086 22.7282 47.0341L19.4954 35.5461C19.4409 35.3522 19.2067 35.2761 19.0487 35.4009L9.68076 42.7948C9.45693 42.9714 9.14213 42.7427 9.24098 42.4753L13.3781 31.281C13.4479 31.0921 13.3032 30.893 13.102 30.901L1.17722 31.3764C0.892293 31.3878 0.772052 31.0177 1.00924 30.8594L10.9361 24.2349C11.1036 24.1231 11.1036 23.8769 10.9361 23.7651L1.00924 17.1406C0.772052 16.9823 0.892293 16.6122 1.17722 16.6236L13.102 17.099C13.3032 17.107 13.4479 16.9079 13.3781 16.719L9.24098 5.52474C9.14213 5.25727 9.45693 5.02856 9.68076 5.20523L19.0487 12.5991C19.2067 12.7239 19.4409 12.6478 19.4954 12.4539L22.7282 0.965857Z"
              fill="white"
            />
          </svg>

          <img
            src={reasons_to_use_img}
            alt="reasons-to-use"
            className="reasons-to-use-image"
          />
        </div>
        <div className="reasons-list">
          <div className="reasons-list-item">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.3829 11.6756C11.2337 11.2262 10.9494 10.8337 10.5689 10.5519C10.1884 10.2701 9.73013 10.1126 9.25673 10.1009C8.78334 10.0892 8.31788 10.2239 7.92392 10.4867C7.52995 10.7494 7.22668 11.1273 7.05552 11.5689"
                stroke="white"
              />
              <path
                d="M20.9829 11.6756C20.8337 11.2262 20.5494 10.8337 20.1689 10.5519C19.7884 10.2701 19.3301 10.1126 18.8567 10.1009C18.3833 10.0892 17.9179 10.2239 17.5239 10.4867C17.1299 10.7494 16.8267 11.1273 16.6555 11.5689"
                stroke="white"
              />
              <path
                d="M18.4697 17.6036C18.1755 18.3537 17.6084 19.0239 16.8294 19.5122C16.0498 20.0007 15.1028 20.2782 14.1178 20.2988C13.1327 20.3193 12.1695 20.0817 11.3606 19.6252C10.552 19.1689 9.94474 18.5212 9.60612 17.7821"
                stroke="white"
              />
              <circle cx="14" cy="14" r="13.5" stroke="white" />
            </svg>
            <p>
              <b>User-friendly Interface</b>
              <br></br> <br></br>Intuitive platform for easy navigation and
              seamless booking experience.
            </p>
          </div>
          <div className="reasons-list-item">
            <svg
              width="28"
              height="27"
              viewBox="0 0 28 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y1="2.5" x2="28" y2="2.5" stroke="white" />
              <circle cx="22.5" cy="2.5" r="2" fill="#090909" stroke="white" />
              <line y1="13.5" x2="28" y2="13.5" stroke="white" />
              <circle cx="7.5" cy="13.5" r="2" fill="#090909" stroke="white" />
              <line y1="24.5" x2="28" y2="24.5" stroke="white" />
              <circle cx="16.5" cy="24.5" r="2" fill="#090909" stroke="white" />
            </svg>
            <p>
              <b>comprehensive search filters</b>
              <br></br>
              <br></br>
              Advanced search options to find salons and barbershops based on
              location, services offered, ratings, and availability.
            </p>
          </div>
          <div className="reasons-list-item">
            <svg
              width="28"
              height="29"
              viewBox="0 0 28 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.2276 3.06253L16.4246 3.22107L16.669 3.15636L19.4333 2.42462L20.7391 4.96846L20.8546 5.19342L21.1042 5.23373L23.9271 5.68956L24.0853 8.5446L24.0993 8.79708L24.311 8.93544L26.7044 10.5L25.6877 13.1726L25.5978 13.409L25.7349 13.6214L27.285 16.0242L25.2692 18.0522L25.0909 18.2316L25.1297 18.4815L25.5685 21.307L22.9021 22.3398L22.6663 22.4311L22.6001 22.6752L21.8517 25.4349L18.9958 25.2939L18.7432 25.2814L18.5835 25.4775L16.7773 27.6942L14.2257 26.4037L14 26.2896L13.7743 26.4037L11.2227 27.6942L9.41649 25.4775L9.25676 25.2814L9.0042 25.2939L6.14826 25.4349L5.39985 22.6752L5.33367 22.4311L5.09788 22.3398L2.43147 21.307L2.87027 18.4815L2.90907 18.2316L2.73081 18.0522L0.714993 16.0242L2.26511 13.6214L2.40219 13.409L2.31228 13.1726L1.29561 10.5L3.68902 8.93544L3.90067 8.79708L3.91467 8.5446L4.07293 5.68956L6.89579 5.23373L7.14543 5.19342L7.2609 4.96846L8.56674 2.42462L11.331 3.15636L11.5754 3.22107L11.7724 3.06253L14 1.26974L16.2276 3.06253Z"
                stroke="white"
              />
              <path d="M9 14.6279L11.5 17.6279L19.5 11.1279" stroke="white" />
            </svg>
            <p>
              <b>Verified Listings</b>
              <br></br>
              <br></br>
              Only registered and vetted salons and barbershops listed on the
              platform, ensuring quality and reliability.
            </p>
          </div>
          <div className="reasons-list-item">
            <svg
              width="28"
              height="29"
              viewBox="0 0 28 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.5 3.12793H27.5V12.1279V28.1279H0.5V12.1279V3.12793Z"
                stroke="white"
              />

              <line
                x1="9.5"
                y1="0.62793"
                x2="9.5"
                y2="4.62793"
                stroke="white"
              />
              <line x1="0" y1="10" x2="28" y2="10" stroke="white" />
              <line
                x1="18.5"
                y1="0.62793"
                x2="18.5"
                y2="4.62793"
                stroke="white"
              />
            </svg>
            <p>
              <b>Real-Time Booking</b>
              <br></br>
              <br></br>
              Instant appointment scheduling with real-time availability
              updates, allowing users to book appointments at their convenience.
            </p>
          </div>
          <div className="reasons-list-item">
            <svg
              width="28"
              height="26"
              viewBox="0 0 28 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 1.87487L16.6677 10.0851L16.7799 10.4306H17.1432H25.776L18.7919 15.5048L18.498 15.7183L18.6103 16.0638L21.2779 24.2741L14.2939 19.1999L14 18.9863L13.7061 19.1999L6.72206 24.2741L9.38973 16.0638L9.50199 15.7183L9.20809 15.5048L2.22405 10.4306H10.8568H11.2201L11.3323 10.0851L14 1.87487Z"
                stroke="white"
              />
            </svg>
            <p>
              <b>Rating system</b>
              <br></br>
              <br></br>
              Transparent feedback system where users can rate and review their
              salon experiences
            </p>
          </div>
          <div className="reasons-list-item">
            <svg
              width="28"
              height="29"
              viewBox="0 0 28 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="14" cy="14.2568" r="13.5" stroke="white" />
              <path
                d="M16.426 12.6548V12.9348H18.386V13.6628H16.37C16.2953 14.3255 16.118 14.8388 15.838 15.2028C15.5673 15.5575 15.1567 15.8142 14.606 15.9728C14.0553 16.1222 13.3087 16.1968 12.366 16.1968V17.5128C12.366 18.9128 12.982 19.6128 14.214 19.6128C14.8113 19.6128 15.2593 19.4402 15.558 19.0948C15.8567 18.7495 16.006 18.2548 16.006 17.6108H16.916C16.9067 18.5255 16.6687 19.2208 16.202 19.6968C15.7353 20.1635 15.068 20.3968 14.2 20.3968C13.2947 20.3968 12.6087 20.1448 12.142 19.6408C11.6753 19.1275 11.442 18.4182 11.442 17.5128V15.4968C12.534 15.4968 13.3413 15.4548 13.864 15.3708C14.396 15.2868 14.7787 15.1188 15.012 14.8668C15.2547 14.6148 15.404 14.2135 15.46 13.6628H10.77V12.9348H15.502V12.6408V11.1988H10.77V10.4568H18.386V11.1988H16.426V12.6548Z"
                fill="white"
              />
            </svg>
            <p>
              <b>Secure payment options</b>
              <br></br>
              <br></br>
              Multiple payment methods for convenient and secure transactions.
            </p>
          </div>
        </div>
      </div>
      {/* Reasons to use Groomer*/}

      {/* Best sellers Home-page */}
      <div className="best-sellers container"></div>
      {/* Best sellers Home-page */}

      {/* Groomer Top Reviews Home page */}
      <div className="reviews-home container">
        <Carousel>
          {[
            {
              review:
                '"Incredibly welcoming salon with attentive staff and stylish ambiance. My stylist understood my needs perfectly, delivering an exceptional haircut that exceeded expectations. The attention to detail and precision were impressive, leaving me feeling confident and rejuvenated. This salon is a true gem for top-notch grooming services. Highly recommend!"',
              user: "Suribabu",
            },
            {
              review:
                '"Incredibly welcoming salon with attentive staff and stylish ambiance. My stylist understood my needs perfectly, delivering an exceptional haircut that exceeded expectations. The attention to detail and precision were impressive, leaving me feeling confident and rejuvenated. This salon is a true gem for top-notch grooming services. Highly recommend!"',
              user: "Suribabu",
            },
            {
              review: '"Amazing user experience"',
              user: "Ramana",
            },
            {
              review:
                '"Incredibly welcoming salon with attentive staff and stylish ambiance. My stylist understood my needs perfectly, delivering an exceptional haircut that exceeded expectations. The attention to detail and precision were impressive, leaving me feeling confident and rejuvenated. This salon is a true gem for top-notch grooming services. Highly recommend!"',
              user: "Suribabu",
            },
            {
              review:
                '"Incredibly welcoming salon with attentive staff and stylish ambiance. My stylist understood my needs perfectly, delivering an exceptional haircut that exceeded expectations. The attention to detail and precision were impressive, leaving me feeling confident and rejuvenated. This salon is a true gem for top-notch grooming services. Highly recommend!"',
              user: "Suribabu",
            },
          ].map((data, index) => {
            return (
              <div key={index} className="review-home-page">
                <svg
                  className="quotations-svg"
                  width="54"
                  height="45"
                  viewBox="0 0 54 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M49.1413 0.950237L53.0475 0.955572C50.1815 2.38395 47.6392 5.37527 45.4209 9.92954C43.3327 14.484 42.5467 18.9751 43.0629 23.4029C45.6666 23.7971 47.8138 25.037 49.5043 27.1226C51.1949 29.0781 52.0388 31.3579 52.0361 33.962C52.0329 36.9568 50.9886 39.4945 48.903 41.5749C46.8175 43.6554 44.3424 44.6937 41.4779 44.6898C38.4831 44.6857 35.88 43.6405 33.6687 41.5541C31.5875 39.468 30.5486 36.9275 30.5517 33.9327C30.5604 25.7296 31.9999 18.9607 34.8701 13.6261C37.7404 8.16123 42.4975 3.93596 49.1413 0.950237ZM18.8679 0.908888L22.9694 0.91449C20.1034 2.34287 17.5611 5.39929 15.3426 10.0838C13.1242 14.638 12.2732 19.064 12.7895 23.3615C15.3932 23.7557 17.5403 24.9956 19.2308 27.0813C21.0517 29.0369 21.9607 31.3168 21.958 33.921C21.9548 36.9157 20.8454 39.4533 18.6296 41.5336C16.5441 43.6141 14.069 44.6524 11.2045 44.6485C8.20967 44.6444 5.67171 43.5992 3.59058 41.5131C1.50945 39.4269 0.47047 36.8864 0.473636 33.8916C0.482446 25.5583 1.85686 18.7242 4.59688 13.3894C7.4671 8.05478 12.2241 3.89461 18.8679 0.908888Z"
                    fill="black"
                  />
                </svg>

                <p className="review-text">{data.review}</p>
                <p className="review-user">-{data.user}</p>
              </div>
            );
          })}
        </Carousel>
      </div>
      {/* Groomer Top Reviews Home page */}

      {/* Home-salon Banner home page*/}
      <div className="home-salon container">
        <div className="home-salon-services">
          <h2 className="home-salon-heading-two">Home Salon Services</h2>
          <div className="home-salon-img-conainer">
            <svg
              className="home-salon-svg"
              width="87"
              height="87"
              viewBox="0 0 87 87"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="38.5" width="8" height="87" fill="white" />
              <rect
                y="48.5"
                width="8"
                height="87"
                transform="rotate(-90 0 48.5)"
                fill="white"
              />
              <rect
                x="9.20508"
                y="16.2764"
                width="8"
                height="87"
                transform="rotate(-45 9.20508 16.2764)"
                fill="white"
              />
              <rect
                width="8"
                height="87"
                transform="matrix(0.707107 0.707107 0.707107 -0.707107 9.20508 70.7236)"
                fill="white"
              />
            </svg>

            <img src={home_salon} alt="groomer" className="home-salon-img" />
          </div>
          <div className="home-salon-text">
            <h2 className="home-salon-heading">Home Salon Services</h2>
            <p className="home-salon-para">
              Indulge in luxury and convenience with our home salon service. Our
              expert stylists bring personalized grooming to your doorstep,
              providing top-notch haircuts and styling in the comfort of your
              own home.<br></br> <br></br>Elevate your self-care routine and
              book your appointment today for a pampering experience without
              leaving home!
            </p>
            <NavLink
              to="/home-salon-service"
              className="what-is-groomer-btn home-salon-btn"
            >
              Book Now
            </NavLink>
          </div>
        </div>
      </div>
      {/* Home-salon Banner home page*/}

      {/*Get in touch form home page*/}
      <div className="get-in-touch container">
        <h2 className="form-heading-two">Get In Touch With Us</h2>
        <div className="get-in-touch-img-container">
          <img src={get_in_touch} alt="groomer" className="get-in-touch-img" />
        </div>
        <form className="get-in-touch-form">
          <h2 className="form-heading-one">Get In Touch With Us</h2>
          <div className="form-fields">
            <label>Name</label>
            <input className="form-input"></input>
          </div>
          <div className="form-fields">
            <label>Mobile No.</label>
            <input className="form-input"></input>
          </div>
          <div className="form-fields">
            <label>Email</label>
            <input className="form-input"></input>
          </div>
          <textarea
            name=""
            id=""
            className="text-area-form"
            rows={4}
            placeholder="Write what you feel like..."
          ></textarea>
          <button className="get-it-touch-submit-btn">Submit</button>
        </form>
      </div>
      {/*Get in touch form home page*/}

      {/*Footer */}
      <Footer />
      {/*Footer */}
    </div>
  );
}

export default HomePage;

export function SalonList({ salons }) {
  const navigate = useNavigate();
  return (
    <>
      {salons.map((salonData, index) => {
        return (
          <div
            className="salon-card"
            key={salonData.salon_name}
            onClick={() => {
              navigate("/salon-details", {
                state: { salon_uuid: salonData.salon_uuid },
              });
            }}
          >
            <p className="salon-card-location">
              <svg
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5554 6.05556C11.5554 7.29023 10.9104 8.62735 9.93572 9.96835C9.07232 11.1562 7.99335 12.2901 6.99989 13.2916C6.00644 12.2901 4.92747 11.1562 4.06407 9.96835C3.08938 8.62735 2.44434 7.29023 2.44434 6.05556C2.44434 3.53959 4.48393 1.5 6.99989 1.5C9.51586 1.5 11.5554 3.53959 11.5554 6.05556Z"
                  stroke="white"
                />
                <circle
                  cx="7"
                  cy="6"
                  r="1.56"
                  stroke="white"
                  strokeWidth="0.88"
                />
              </svg>{" "}
              {[" ", salonData.salon_area]}, {salonData.salon_city}
            </p>
            <button className="wishlist-button-salon-card">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.64457 2.29931L8 2.65853L8.35542 2.29931C9.01725 1.63043 9.88962 1.20115 10.8332 1.0895C11.9331 0.959346 13.0396 1.27145 13.9094 1.95716C14.7791 2.64287 15.3409 3.64601 15.471 4.7459C15.6001 5.8361 15.2946 6.93284 14.6214 7.79906L8 14.3872L1.37858 7.79907C0.705442 6.93284 0.399945 5.8361 0.528951 4.7459C0.659104 3.64601 1.22086 2.64287 2.09063 1.95716C2.9604 1.27145 4.06695 0.959346 5.16684 1.0895C6.11038 1.20115 6.98274 1.63043 7.64457 2.29931Z"
                  stroke="white"
                />
              </svg>
            </button>
            <div style={{ maxWidth: "276px", margin: "auto" }}>
              <Carousel position={index + 1}>
                {[img_4, img_1, img_2, img_3, img_4, img_1].map(
                  (img, index) => {
                    return (
                      <img
                        src={img}
                        key={index}
                        alt="salon"
                        className="salon-card-image"
                      />
                    );
                  }
                )}
              </Carousel>
            </div>
            <div className="salon-card-details">
              <NavLink className="salon-card-select-button">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.96974 4.94629H0V6.94629H9.0708L6.38086 9.63623L7.79507 11.0504L11.8992 6.94629H12V4.94629H11.7982L7.79817 0.946289L6.38395 2.3605L8.96974 4.94629Z"
                    fill="white"
                  />
                </svg>
              </NavLink>
              <p className="salon-card-title">{salonData.salon_name}</p>
              <div className="salon-card-services-list">
                {salonData.salon_services.map((service, index) => {
                  return <span key={index}> {service.service_name} |</span>;
                })}
              </div>
              <p className="salon-card-pricing">Starts from ₹ 360 / person</p>
            </div>
          </div>
        );
      })}
    </>
  );
}
