import { format } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-date-range";
import { useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import NavBar from "../../components/navbar/NavBar";
import SearchItem from "../../components/searchItem/SearchItem";
import "./List.css";

export default function List() {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [showDate, setShowDate] = useState(false);
  return (
    <div>
      <NavBar />
      <Header component={"list"} />

      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label htmlFor="destination">Destination</label>
              <input
                type="text"
                name=""
                id="destination"
                placeholder="Enter your destination"
                value={destination}
              />
            </div>
            <div className="lsItem">
              <label htmlFor="date">Check-in Date</label>
              <span onClick={() => setShowDate(!showDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {showDate && (
                <DateRange
                  minDate={new Date()}
                  onChange={(item) => setDate([item.selection])}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <label htmlFor="options">Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    name=""
                    id=""
                    className="lsOptionInput"
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    name=""
                    id=""
                    className="lsOptionInput"
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    name=""
                    id=""
                    className="lsOptionInput"
                    value={options.adults}
                    min={1}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    name=""
                    id=""
                    className="lsOptionInput"
                    value={options.children}
                    min={0}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    name=""
                    id=""
                    className="lsOptionInput"
                    value={options.room}
                    min={1}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
}
