import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Carousel from "./Carousel";
import img_1 from "../images/img1.jpg";
import img_2 from "../images/img2.jpg";
import img_3 from "../images/img3.jpg";
import img_4 from "../images/img4.jpg";
import "../css/SalonPage.css";
import { useEffect, useLayoutEffect } from "react";
import { FiChevronDown } from "react-icons/fi";

function SalonPage() {
  const location = useLocation();
  const { salon_uuid } = location.state || "";
  const [salonData, setSalonData] = useState(null);
  const [number, setNumber] = useState(1);
  useLayoutEffect(() => {
    const fetchSalonData = async () => {
      try {
        const { data } = await axios(
          `http://groomerloadbalancer-1779385022.ap-south-1.elb.amazonaws.com/api/user/salon?uuid=${salon_uuid}`
        );
        setSalonData(data.data.salon);
        console.log(data);
      } catch (error) {}
    };
    fetchSalonData();
  }, [salon_uuid]);
  const images = [img_4, img_1, img_2, img_3, img_4, img_1];
  console.log(salon_uuid);

  return (
    <div className="salon-page">
      <div className="salon-page-carousel">
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
      <div className="salon-details">
        {salonData && (
          <>
            <div className="salon-title-location-rating">
              <div>
                <h2 className="salon-title">{salonData.salon_name}</h2>
                <p className="salon-location">
                  {salonData.salon_area + " " + salonData.salon_city} |{" "}
                  <a href="https://www.google.com/maps">view on map</a>
                </p>
              </div>
              <div>
                <p>
                  (46)
                  <svg
                    width="113"
                    height="17"
                    viewBox="0 0 113 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.01807 0.515625L9.89898 5.92677L15.6265 6.04349L11.0614 9.50448L12.7203 14.9878L8.01807 11.7156L3.31578 14.9878L4.97469 9.50448L0.409614 6.04349L6.13715 5.92677L8.01807 0.515625Z"
                      fill="white"
                    />
                    <path
                      d="M32.0181 0.515625L33.899 5.92677L39.6265 6.04349L35.0614 9.50448L36.7203 14.9878L32.0181 11.7156L27.3158 14.9878L28.9747 9.50448L24.4096 6.04349L30.1372 5.92677L32.0181 0.515625Z"
                      fill="white"
                    />
                    <path
                      d="M56.0181 0.515625L57.899 5.92677L63.6265 6.04349L59.0614 9.50448L60.7203 14.9878L56.0181 11.7156L51.3158 14.9878L52.9747 9.50448L48.4096 6.04349L54.1372 5.92677L56.0181 0.515625Z"
                      fill="white"
                    />
                    <path
                      d="M80.0181 0.515625L81.899 5.92677L87.6265 6.04349L83.0614 9.50448L84.7203 14.9878L80.0181 11.7156L75.3158 14.9878L76.9747 9.50448L72.4096 6.04349L78.1372 5.92677L80.0181 0.515625Z"
                      fill="white"
                    />
                    <path
                      d="M104.018 2.03848L105.427 6.09094L105.541 6.41958L105.889 6.42667L110.178 6.51408L106.759 9.10604L106.482 9.31624L106.583 9.64927L107.825 13.7557L104.304 11.3052L104.018 11.1065L103.732 11.3052L100.211 13.7557L101.453 9.64927L101.554 9.31624L101.277 9.10604L97.8579 6.51408L102.147 6.42667L102.495 6.41958L102.609 6.09094L104.018 2.03848Z"
                      stroke="white"
                    />
                    <path
                      d="M99.3149 14.9878L104.017 11.7156V0.515625L102.136 5.92677L96.4087 6.04349L100.974 9.50448L99.3149 14.9878Z"
                      fill="white"
                    />
                  </svg>
                </p>
              </div>
            </div>
            <p className="salon-description">
              Step into our salon oasis where expert stylists await to transform
              your look. From haircuts to coloring, manicures to massages,
              indulge in a full range of beauty services tailored to your needs.
              Experience luxury, rejuvenation, and style under one roof.{" "}
              {salonData.salon_description}
            </p>
            <div className="salon-amenities-list">
              {salonData.salon_features.feature_AC && (
                <span className="salon-amenity">
                  <svg
                    width="43"
                    height="32"
                    viewBox="0 0 43 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="1.01074"
                      y="0.5"
                      width="41"
                      height="23"
                      stroke="white"
                    />
                    <rect
                      x="8.01074"
                      y="12.5"
                      width="27"
                      height="11"
                      stroke="white"
                    />
                    <line
                      x1="10.0107"
                      y1="28"
                      x2="10.0107"
                      y2="32"
                      stroke="white"
                    />
                    <line
                      x1="18.0107"
                      y1="28"
                      x2="18.0107"
                      y2="32"
                      stroke="white"
                    />
                    <line
                      x1="26.0107"
                      y1="28"
                      x2="26.0107"
                      y2="32"
                      stroke="white"
                    />
                    <line
                      x1="34.0107"
                      y1="28"
                      x2="34.0107"
                      y2="32"
                      stroke="white"
                    />
                  </svg>
                  <p>AC available</p>
                </span>
              )}
              {salonData.salon_features.feature_wifi && (
                <span className="salon-amenity">
                  <svg
                    width="37"
                    height="23"
                    viewBox="0 0 37 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.14062 7.90309C2.10903 5.87077 4.20615 4.01813 7.1953 2.66354C10.1782 1.31179 13.8464 0.549594 17.6552 0.502336C21.4637 0.45508 25.1862 1.12551 28.2686 2.40359C31.3573 3.68427 33.5958 5.48769 34.7166 7.50336"
                      stroke="white"
                    />
                    <path
                      d="M5.95705 11.7085C6.63678 10.2976 8.11942 8.99328 10.2609 8.0335C12.3957 7.0767 15.0262 6.53522 17.7614 6.50166C20.4964 6.4681 23.1665 6.94446 25.3737 7.84955C27.5874 8.75736 29.1732 10.0287 29.9617 11.431"
                      stroke="white"
                    />
                    <path
                      d="M10.7722 14.5164C11.1621 13.7274 12.0292 12.9703 13.324 12.4045C14.6114 11.842 16.2051 11.5209 17.8676 11.501C19.5299 11.4811 21.1485 11.7637 22.481 12.2964C23.8209 12.8322 24.7533 13.5723 25.2083 14.3614"
                      stroke="white"
                    />
                    <circle cx="18.5317" cy="19.5" r="3" stroke="white" />
                  </svg>

                  <p>Free Wi-Fi</p>
                </span>
              )}
              {salonData.salon_features.feature_parking && (
                <span className="salon-amenity">
                  <svg
                    width="31"
                    height="31"
                    viewBox="0 0 31 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="1.05273"
                      y="0.5"
                      width="29"
                      height="30"
                      stroke="white"
                    />
                    <path
                      d="M9.55273 18.1667H16.7194C19.3888 18.1667 21.5527 16.0027 21.5527 13.3333V13.3333C21.5527 10.664 19.3888 8.5 16.7194 8.5H9.55273V18.1667ZM9.55273 18.1667V22.5"
                      stroke="white"
                    />
                  </svg>

                  <p>Bike and car parking</p>
                </span>
              )}
              {salonData.salon_languages && (
                <span className="salon-amenity">
                  <svg
                    width="35"
                    height="32"
                    viewBox="0 0 35 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.7734 12.4H24.9734M30.1734 12.4H27.5734M24.9734 12.4V10M24.9734 12.4H27.5734M27.5734 12.4C27.5068 14.2667 25.8534 18.72 19.7734 21.6M28.1734 21.6C26.8401 21.0667 23.5334 19.12 20.9734 15.6"
                      stroke="white"
                    />
                    <path
                      d="M6.77344 17L7.98723 11.8M13.1734 17L11.9596 11.8M11.9596 11.8L10.3734 5H9.57344L7.98723 11.8M11.9596 11.8H7.98723"
                      stroke="white"
                    />
                    <path
                      d="M10.407 26.0598L6.07344 30.7267V26.4V25.9H5.57344H1.27344V0.5H33.8734V25.9H10.7734H10.5554L10.407 26.0598Z"
                      stroke="white"
                    />
                  </svg>

                  <p>
                    {[
                      salonData.salon_languages.language_hindi && "Hindi ",
                      salonData.salon_languages.language_english && "English ",
                      salonData.salon_languages.language_telugu && "Telugu ",
                    ]}
                  </p>
                </span>
              )}
            </div>
            <hr></hr>
            <form></form>
          </>
        )}
      </div>
    </div>
  );
}
export default SalonPage;
