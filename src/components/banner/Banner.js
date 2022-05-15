import {
  faBed,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import format from "date-fns/format";
import "./Banner.css";
import { useNavigate } from "react-router-dom";

export default function Banner() {
  const navigate = useNavigate();
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [destination, setDestination] = useState("");
  const [showDate, setShowDate] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [options, setOptions] = useState({
    adults: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (option, action) => {
    setOptions((prev) => {
      return {
        ...prev,
        [option]: action === "i" ? options[option] + 1 : options[option] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/hotels", {
      state: { destination, date, options },
    });
  };
  return (
    <>
      <h1 className="headerTitle">A lifetime of discounts?</h1>
      <p className="headerDesc">
        Get rewarded for your travels - unlock instant savings of 10% or more
        with a free buking account
      </p>
      <button className="headerBtn">Sign in / Register</button>
      <div className="headerSearch">
        <div className="headerSearchItem">
          <FontAwesomeIcon icon={faBed} className="headerIcon" />
          <input
            type="text"
            className="headerSearchInput"
            placeholder="Where are you going?"
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
        <div className="headerSearchItem">
          <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
          <span
            onClick={() => setShowDate(!showDate)}
            className="headerSearchtext"
          >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
            date[0].endDate,
            "MM/dd/yyyy"
          )}`}</span>
          {showDate && (
            <DateRange
              minDate={new Date()}
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="date"
            />
          )}
        </div>
        <div className="headerSearchItem">
          <FontAwesomeIcon icon={faPerson} className="headerIcon" />
          <span
            onClick={() => {
              setShowOptions(!showOptions);
            }}
            className="headerSearchtext"
          >{`${options.adults} adult(s), ${options.children} children, ${options.room} room`}</span>
          {showOptions && (
            <div className="options">
              <div className="optionItems">
                <span className="optionText">Adult</span>
                <div className="optionCounter">
                  <button
                    disabled={options.adults <= 0 ? true : false}
                    className="optionCounterButton"
                    onClick={() => handleOption("adults", "d")}
                  >
                    -
                  </button>
                  <span className="optinCounterNumber">{options.adults}</span>
                  <button
                    disabled={options.children <= 0 ? true : false}
                    className="optionCounterButton"
                    onClick={() => handleOption("adults", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="optionItems">
                <span className="optionText">Children</span>
                <div className="optionCounter">
                  <button
                    disabled={options.room <= 0 ? true : false}
                    className="optionCounterButton"
                    onClick={() => handleOption("children", "d")}
                  >
                    -
                  </button>
                  <span className="optinCounterNumber">{options.children}</span>
                  <button
                    className="optionCounterButton"
                    onClick={() => handleOption("children", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="optionItems">
                <span className="optionText">Room</span>
                <div className="optionCounter">
                  <button
                    className="optionCounterButton"
                    onClick={() => handleOption("room", "d")}
                  >
                    -
                  </button>
                  <span className="optinCounterNumber">{options.room}</span>
                  <button
                    className="optionCounterButton"
                    onClick={() => handleOption("room", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="headerSearchItem">
          <button className="headerBtn" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
    </>
  );
}
