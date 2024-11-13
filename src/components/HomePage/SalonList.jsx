import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import salon_list_page_img from "../images/salon-list-page-img.jpg";
import axios from "axios";
import "../css/SalonList.css";
import img2 from "../images/img2.jpg";
import { FiChevronDown } from "react-icons/fi";
import { SalonList } from "./Homepage.jsx";
import img_1 from "../images/img1.jpg";
import img_2 from "../images/img2.jpg";
import img_3 from "../images/img3.jpg";
import img_4 from "../images/img4.jpg";
import Footer from "../Footer.jsx";
import Carousel from "./Carousel.jsx";
import five_star from "../images/five_star.png";
import four_star from "../images/four_star.png";
import three_star from "../images/three_star.png";
import two_star from "../images/two_star.png";
import one_star from "../images/one_star.png";
import { GoSearch } from "react-icons/go";

function SalonListPage() {
  const [salonData, setSalonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [age, setAge] = useState(5);
  const [sex, setSex] = useState("unisex");
  const [location, setLocation] = useState("");
  const [distance, setDistance] = useState(0);
  const [service, setService] = useState([]);
  const [priceRange, setPriceRange] = useState({ max: 1000, min: 0 });
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState("popularity");
  const [url, setUrl] = useState(
    "http://groomerloadbalancer-1779385022.ap-south-1.elb.amazonaws.com/api/user/salons?city=nellore"
  );
  useEffect(() => {
    const fetchSalonData = async () => {
      try {
        const { data } = await axios.get(url);
        console.log(data);

        setLoading(false);
        setSalonData(data.data.salons);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    };
    fetchSalonData();
  }, [url]);

  function filterParams() {
    let dummyUrl = "http://groomerloadbalancer-1779385022.ap-south-1.elb.amazonaws.com/api/user/salons?city=nellore";
    if (sex !== "unisex") {
      dummyUrl = dummyUrl + `&sex=${sex}`;
    }
    if (service.length > 0) {
      let serviceStr = service.join(",");
      dummyUrl = dummyUrl + `&service=${serviceStr}`;
    }
    if (distance > 0) {
      dummyUrl = dummyUrl + `&distance=${distance}km`;
    }
    if (priceRange.max !== 1000 && priceRange.min !== 0) {
      dummyUrl =
        dummyUrl + `&maxPrice=${priceRange.max}&minPrice=${priceRange.min}`;
    }
    if (minRating > 0) {
      dummyUrl = dummyUrl + `&minRating=${minRating}`;
    }
    setUrl(dummyUrl);
  }

  const total_service_types = 7;

  return (
    <div className="salon-list-page">
      <div className="salon-list-page-image-container">
        <img
          src={salon_list_page_img}
          alt="groomer"
          className="salon-list-page-img"
        />
      </div>
      <div className="salon-list-page-heading-container">
        <img src={img2} alt="groomer" />
        <h2>All the salons to explore</h2>
      </div>
      <div className="sorting-dropdown-container">
        <div className="search-by-name-two">
          <input
            style={{ width: "80%" }}
            className="text-input"
            placeholder="Enter your location"
            type="text"
            value={location}
            onChange={(event) => {
              setLocation(event.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={(event) => {
              event.preventDefault();
            }}
          >
            <GoSearch />
          </button>
          <button
            className="toggle-filters"
            onClick={() => {
              let element = document.getElementById("filter-wrapper");
              if (element.style.height !== "850px") {
                element.style.height = "850px";
                element.style.overflow = "scroll";
              } else element.style.height = "0px";
            }}
          >
            <svg
              width="44"
              height="40"
              viewBox="0 0 44 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="44" height="40" fill="#5B5441" />
              <line
                x1="12.0002"
                y1="12"
                x2="32.0002"
                y2="12"
                stroke="#CCBB8E"
              />
              <circle
                cx="28.0718"
                cy="12.1431"
                r="1.28571"
                fill="#CCBB8E"
                stroke="#CCBB8E"
              />
              <line
                x1="12.0005"
                y1="19.8574"
                x2="32.0005"
                y2="19.8574"
                stroke="#CCBB8E"
              />
              <circle
                cx="17.3572"
                cy="20.0006"
                r="1.28571"
                fill="#CCBB8E"
                stroke="#CCBB8E"
              />
              <line
                x1="12.0005"
                y1="27.7139"
                x2="32.0005"
                y2="27.7139"
                stroke="#CCBB8E"
              />
              <circle
                cx="23.7862"
                cy="27.857"
                r="1.28571"
                fill="#CCBB8E"
                stroke="#CCBB8E"
              />
            </svg>
          </button>
        </div>
        <div className="sortBy-two">
          <div
            className="form-element sortBy-form-element"
            onClick={() => {
              let element = document.getElementById("sortBy-two");
              let chevron = document.getElementById("chevron-sortBy-two");
              if (element.style.height !== "200px") {
                chevron.style.transform = "rotate(180deg)";
                element.style.height = "200px";
              } else {
                chevron.style.transform = "rotate(0deg)";
                element.style.height = "0px";
              }
            }}
          >
            <p className="form-element-title">Sort By</p>
            <span style={{ display: "flex", placeItems: "center" }}>
              <FiChevronDown id="chevron-sortBy-two" className="chevron" />
            </span>
          </div>
          <div className="filter sortBy-filter" id="sortBy-two">
            <div style={{ display: "flex", gap: "10px" }}>
              <input
                className="radio-button"
                type="radio"
                id="sortByPopular"
                name="sortBy"
                value="popularity"
                onChange={(event) => {
                  setSortBy("popularity");
                }}
              />
              <div
                style={{
                  width: "150px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <label htmlFor="sortByPopular">Sort by popular</label>
              </div>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <input
                className="radio-button"
                type="radio"
                name="sortBy"
                value="popularity"
                onChange={(event) => {
                  setSortBy("popularity");
                }}
              />
              <div
                style={{
                  width: "150px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <label>Sort by price(high to low)</label>
              </div>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <input
                className="radio-button"
                type="radio"
                name="sortBy"
                value="popularity"
                onChange={(event) => {
                  setSortBy("popularity");
                }}
              />
              <div
                style={{
                  width: "150px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <label>Sort by price (low to high)</label>
              </div>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <input
                className="radio-button"
                type="radio"
                name="sortBy"
                value="popularity"
                onChange={(event) => {
                  setSortBy("popularity");
                }}
              />
              <div
                style={{
                  width: "150px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <label>Sort by distance</label>
              </div>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <input
                className="radio-button"
                type="radio"
                name="sortBy"
                value="popularity"
                onChange={(event) => {
                  setSortBy("popularity");
                }}
              />
              <div
                style={{
                  width: "150px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <label>Sort by popular</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="salon-list-and-fiter-container">
        <div className="filter-wrapper" id="filter-wrapper">
          <form className="filters-form">
            <hr className="verical-divider" />
            {/* <h2 className="form-title">Filters</h2> */}

            <button
              className="apply-filters-btn"
              onClick={(event) => {
                event.preventDefault();
                filterParams();
              }}
            >
              Apply Filters
            </button>
            <div className="search-by-name-one">
              <input
                style={{ width: "80%" }}
                className="text-input"
                placeholder="Enter your location"
                type="text"
                value={location}
                onChange={(event) => {
                  setLocation(event.target.value);
                }}
              />
              <button
                className="search-btn"
                onClick={(event) => {
                  event.preventDefault();
                }}
              >
                <GoSearch />
              </button>
            </div>
            <div>
              <div
                className="form-element"
                onClick={() => {
                  let element = document.getElementById("age-group");
                  let chevron = document.getElementById("chevron-age-group");
                  if (element.style.height !== "100px") {
                    chevron.style.transform = "rotate(180deg)";
                    element.style.height = "100px";
                  } else {
                    chevron.style.transform = "rotate(0deg)";
                    element.style.height = "0px";
                    element.style.padding = "0px";
                  }
                }}
              >
                <p className="form-element-title">Age Group</p>
                <span style={{ display: "flex", placeItems: "center" }}>
                  <FiChevronDown id="chevron-age-group" className="chevron" />
                </span>
              </div>
              <div id="age-group" className="filter">
                <label>Less than {age}</label>
                <input
                  className="slider"
                  type="range"
                  max={100}
                  min={5}
                  value={age}
                  onChange={(event) => {
                    let position = Math.floor(
                      ((event.target.value - 5) * 100) / 95
                    );
                    event.target.style.background = `linear-gradient(to right,#ccbb8e ${position}%, #5b5441 ${position}% `;
                    setAge(event.target.value);
                  }}
                />
              </div>
            </div>
            <hr className="form-field-divider" />
            <div>
              <div
                className="form-element"
                onClick={() => {
                  let element = document.getElementById("sex");
                  let chevron = document.getElementById("chevron-sex");
                  if (element.style.height !== "120px") {
                    chevron.style.transform = "rotate(180deg)";
                    element.style.height = "120px";
                  } else {
                    chevron.style.transform = "rotate(0deg)";
                    element.style.height = "0px";
                  }
                }}
              >
                <p className="form-element-title">Sex</p>
                <span style={{ display: "flex", placeItems: "center" }}>
                  <FiChevronDown id="chevron-sex" className="chevron" />
                </span>
              </div>
              <div className="filter" id="sex">
                <div style={{ display: "flex", gap: "10px" }}>
                  <input
                    className="radio-button"
                    type="radio"
                    name="sex"
                    value="female"
                    onChange={(event) => {
                      setSex(event.target.value);
                    }}
                  />
                  <label>Female</label>
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                  <input
                    className="radio-button"
                    type="radio"
                    name="sex"
                    value="male"
                    onChange={(event) => {
                      setSex(event.target.value);
                    }}
                  />
                  <label>Male</label>
                </div>
                <div
                  style={{ display: "flex", gap: "10px", paddingBlock: "5px" }}
                >
                  <input
                    className="radio-button"
                    type="radio"
                    name="sex"
                    value="unisex"
                    onChange={(event) => {
                      setSex(event.target.value);
                    }}
                  />
                  <label>Unisex</label>
                </div>
              </div>
            </div>
            <hr className="form-field-divider" />

            <div>
              <div
                className="form-element"
                onClick={() => {
                  let element = document.getElementById("location");
                  let chevron = document.getElementById("chevron-location");
                  if (element.style.height !== "100px") {
                    chevron.style.transform = "rotate(180deg)";
                    element.style.height = "100px";
                  } else {
                    chevron.style.transform = "rotate(0deg)";
                    element.style.height = "0px";
                  }
                }}
              >
                <p className="form-element-title">Location</p>
                <span style={{ display: "flex", placeItems: "center" }}>
                  <FiChevronDown id="chevron-location" className="chevron" />
                </span>
              </div>
              <div className="filter" id="location">
                <input
                  className="text-input"
                  placeholder="Enter your location"
                  type="text"
                  value={location}
                  onChange={(event) => {
                    setLocation(event.target.value);
                  }}
                />
              </div>
            </div>
            <hr className="form-field-divider" />

            <div>
              <div
                className="form-element"
                onClick={() => {
                  let element = document.getElementById("distance");
                  let chevron = document.getElementById("chevron-distance");
                  if (element.style.height !== "100px") {
                    chevron.style.transform = "rotate(180deg)";
                    element.style.height = "100px";
                  } else {
                    chevron.style.transform = "rotate(0deg)";
                    element.style.height = "0px";
                  }
                }}
              >
                <p className="form-element-title">Distance</p>
                <span style={{ display: "flex", placeItems: "center" }}>
                  <FiChevronDown id="chevron-distance" className="chevron" />
                </span>
              </div>
              <div className="filter" id="distance">
                <label>Less than {distance}km</label>
                <input
                  className="slider"
                  type="range"
                  max={10}
                  value={distance}
                  onChange={(event) => {
                    setDistance(event.target.value);
                  }}
                />
              </div>
            </div>
            <hr className="form-field-divider" />

            <div>
              <div
                className="form-element"
                onClick={() => {
                  let element = document.getElementById("service");
                  let chevron = document.getElementById("chevron-service");
                  if (element.style.height !== "330px") {
                    chevron.style.transform = "rotate(180deg)";
                    element.style.height = "330px";
                  } else {
                    chevron.style.transform = "rotate(0deg)";
                    element.style.height = "0px";
                  }
                }}
              >
                <p className="form-element-title">Service</p>
                <span style={{ display: "flex", placeItems: "center" }}>
                  <FiChevronDown id="chevron-service" className="chevron" />
                </span>
              </div>
              <div className="filter" id="service">
                <div style={{ display: "flex", gap: "10px" }}>
                  <input
                    className="checkbox"
                    type="checkbox"
                    name="service"
                    value="All"
                    checked={service.length === total_service_types}
                    onChange={(event) => {
                      if (service.length !== total_service_types)
                        setService([
                          "hair cut",
                          "shaving",
                          "massage",
                          "face painting",
                          "facial",
                          "manicure",
                          "pedicure",
                        ]);
                      else setService([]);
                    }}
                  />
                  <label>All</label>
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                  <input
                    className="checkbox"
                    type="checkbox"
                    name="service"
                    value="face painting"
                    checked={service.indexOf("face painting") !== -1}
                    onChange={(event) => {
                      setService((prevService) => {
                        let newService = [...prevService];
                        if (service.indexOf("face painting") === -1) {
                          newService.push("face painting");
                          return newService;
                        } else {
                          newService.splice(
                            service.indexOf("face painting"),
                            1
                          );
                          return newService;
                        }
                      });
                    }}
                  />
                  <label>Face painting</label>
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                  <input
                    className="checkbox"
                    type="checkbox"
                    name="service"
                    value="facial"
                    checked={service.indexOf("facial") !== -1}
                    onChange={(event) => {
                      setService((prevService) => {
                        let newService = [...prevService];
                        if (service.indexOf("facial") === -1) {
                          newService.push("facial");
                          return newService;
                        } else {
                          newService.splice(service.indexOf("facial"), 1);
                          return newService;
                        }
                      });
                    }}
                  />
                  <label>Facial</label>
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                  <input
                    className="checkbox"
                    type="checkbox"
                    name="service"
                    value="hair cut"
                    checked={service.indexOf("hair cut") !== -1}
                    onChange={(event) => {
                      setService((prevService) => {
                        let newService = [...prevService];
                        if (service.indexOf("hair cut") === -1) {
                          newService.push("hair cut");
                          return newService;
                        } else {
                          newService.splice(service.indexOf("hair cut"), 1);
                          return newService;
                        }
                      });
                    }}
                  />
                  <label>Haircut</label>
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                  <input
                    className="checkbox"
                    type="checkbox"
                    name="service"
                    value="manicure"
                    checked={service.indexOf("manicure") !== -1}
                    onChange={(event) => {
                      setService((prevService) => {
                        let newService = [...prevService];
                        if (service.indexOf("manicure") === -1) {
                          newService.push("manicure");
                          return newService;
                        } else {
                          newService.splice(service.indexOf("manicure"), 1);
                          return newService;
                        }
                      });
                    }}
                  />
                  <label>Manicure</label>
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                  <input
                    className="checkbox"
                    type="checkbox"
                    name="service"
                    value="pedicure"
                    checked={service.indexOf("pedicure") !== -1}
                    onChange={(event) => {
                      setService((prevService) => {
                        let newService = [...prevService];
                        if (service.indexOf("pedicure") === -1) {
                          newService.push("pedicure");
                          return newService;
                        } else {
                          newService.splice(service.indexOf("pedicure"), 1);
                          return newService;
                        }
                      });
                    }}
                  />
                  <label>Pedicure</label>
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                  <input
                    className="checkbox"
                    type="checkbox"
                    name="service"
                    value="shaving"
                    checked={service.indexOf("shaving") !== -1}
                    onChange={(event) => {
                      setService((prevService) => {
                        let newService = [...prevService];
                        if (service.indexOf("shaving") === -1) {
                          newService.push("shaving");
                          return newService;
                        } else {
                          newService.splice(service.indexOf("shaving"), 1);
                          return newService;
                        }
                      });
                    }}
                  />
                  <label>Shaving</label>
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                  <input
                    className="checkbox"
                    type="checkbox"
                    name="service"
                    value="massage"
                    checked={service.indexOf("massage") !== -1}
                    onChange={(event) => {
                      setService((prevService) => {
                        let newService = [...prevService];
                        if (service.indexOf("massage") === -1) {
                          newService.push("massage");
                          return newService;
                        } else {
                          newService.splice(service.indexOf("massage"), 1);
                          return newService;
                        }
                      });
                    }}
                  />
                  <label>Massage</label>
                </div>
              </div>
            </div>
            <hr className="form-field-divider" />

            <div>
              <div
                className="form-element"
                onClick={() => {
                  let element = document.getElementById("price");
                  let chevron = document.getElementById("chevron-price");
                  if (element.style.height !== "180px") {
                    chevron.style.transform = "rotate(180deg)";
                    element.style.height = "180px";
                  } else {
                    chevron.style.transform = "rotate(0deg)";
                    element.style.height = "0px";
                  }
                }}
              >
                <p className="form-element-title">Price</p>
                <span style={{ display: "flex", placeItems: "center" }}>
                  <FiChevronDown id="chevron-price" className="chevron" />
                </span>
              </div>
              <div className="filter" id="price">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <label>From:</label>
                  <input
                    className="text-input"
                    type="text"
                    placeholder="0"
                    value={priceRange.min}
                    onChange={(event) => {
                      setPriceRange((prevPriceRange) => {
                        let newPriceRange = { ...prevPriceRange };
                        newPriceRange.min = event.target.value;
                        return newPriceRange;
                      });
                    }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <label>To:</label>
                  <input
                    className="text-input"
                    type="text"
                    placeholder=" 1000"
                    value={priceRange.max}
                    onChange={(event) => {
                      setPriceRange((prevPriceRange) => {
                        let newPriceRange = { ...prevPriceRange };
                        newPriceRange.max = event.target.value;
                        return newPriceRange;
                      });
                    }}
                  />
                </div>
              </div>
            </div>
            <hr className="form-field-divider" />

            <div>
              <div
                className="form-element"
                onClick={() => {
                  let element = document.getElementById("rating");
                  let chevron = document.getElementById("chevron-rating");
                  if (element.style.height !== "200px") {
                    chevron.style.transform = "rotate(180deg)";
                    element.style.height = "200px";
                  } else {
                    chevron.style.transform = "rotate(0deg)";
                    element.style.height = "0px";
                  }
                }}
              >
                <p className="form-element-title">Rating</p>
                <span style={{ display: "flex", placeItems: "center" }}>
                  <FiChevronDown id="chevron-rating" className="chevron" />
                </span>
              </div>
              <div className="filter" id="rating">
                <div style={{ display: "flex", gap: "10px" }}>
                  <input
                    className="radio-button"
                    type="radio"
                    name="rating"
                    value={5}
                    onChange={(event) => {
                      setMinRating(event.target.value);
                    }}
                  />
                  <div
                    style={{
                      width: "100px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={five_star}
                      alt="five-star"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                  <input
                    className="radio-button"
                    type="radio"
                    name="rating"
                    value={4}
                    onChange={(event) => {
                      setMinRating(event.target.value);
                    }}
                  />
                  <div
                    style={{
                      width: "100px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={four_star}
                      alt="four-star"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                  <input
                    className="radio-button"
                    type="radio"
                    name="rating"
                    value={3}
                    onChange={(event) => {
                      setMinRating(event.target.value);
                    }}
                  />
                  <div
                    style={{
                      width: "100px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={three_star}
                      alt="three-star"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                  <input
                    className="radio-button"
                    type="radio"
                    name="rating"
                    value={2}
                    onChange={(event) => {
                      setMinRating(event.target.value);
                    }}
                  />
                  <div
                    style={{
                      width: "100px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={two_star}
                      alt="two-star"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                  <input
                    className="radio-button"
                    type="radio"
                    name="rating"
                    value={1}
                    onChange={(event) => {
                      setMinRating(event.target.value);
                    }}
                  />
                  <div
                    style={{
                      width: "100px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={one_star}
                      alt="one-star"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <hr className="form-field-divider sortBy-divider" />
            <div className="sortBy-one">
              <div
                className="form-element"
                onClick={() => {
                  let element = document.getElementById("sortBy");
                  let chevron = document.getElementById("chevron-sortBy");
                  if (element.style.height !== "200px") {
                    chevron.style.transform = "rotate(180deg)";
                    element.style.height = "200px";
                  } else {
                    chevron.style.transform = "rotate(0deg)";
                    element.style.height = "0px";
                  }
                }}
              >
                <p className="form-element-title">Sort By</p>
                <span style={{ display: "flex", placeItems: "center" }}>
                  <FiChevronDown id="chevron-sortBy" className="chevron" />
                </span>
              </div>
              <div className="filter" id="sortBy">
                <div style={{ display: "flex", gap: "10px" }}>
                  <input
                    className="radio-button"
                    type="radio"
                    name="sortBy"
                    value="popularity"
                    onChange={(event) => {
                      setSortBy("popularity");
                    }}
                  />
                  <div
                    style={{
                      width: "150px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <label>Sort by popular</label>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                  <input
                    className="radio-button"
                    type="radio"
                    name="sortBy"
                    value="popularity"
                    onChange={(event) => {
                      setSortBy("popularity");
                    }}
                  />
                  <div
                    style={{
                      width: "150px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <label>Sort by price(high to low)</label>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                  <input
                    className="radio-button"
                    type="radio"
                    name="sortBy"
                    value="popularity"
                    onChange={(event) => {
                      setSortBy("popularity");
                    }}
                  />
                  <div
                    style={{
                      width: "150px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <label>Sort by price (low to high)</label>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                  <input
                    className="radio-button"
                    type="radio"
                    name="sortBy"
                    value="popularity"
                    onChange={(event) => {
                      setSortBy("popularity");
                    }}
                  />
                  <div
                    style={{
                      width: "150px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <label>Sort by distance</label>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                  <input
                    className="radio-button"
                    type="radio"
                    name="sortBy"
                    value="popularity"
                    onChange={(event) => {
                      setSortBy("popularity");
                    }}
                  />
                  <div
                    style={{
                      width: "150px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <label>Sort by popular</label>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        {loading ? (
          <p style={{ color: "white" }}>Loading</p>
        ) : error ? (
          <p style={{ color: "white" }}>{error.message}</p>
        ) : (
          <div className="salon-list-container">
            <SalonList salons={salonData} />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default SalonListPage;
