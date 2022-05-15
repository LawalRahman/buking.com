import Featured from "../../components/featured/Featured";
import Header from "../../components/header/Header";
import NavBar from "../../components/navbar/NavBar";
import PropertyList from "../../components/propertyList/PropertyList";
import GuestHomes from "../../components/guestHomes/GuestHomes";
import "./Home.css";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
export default function Home() {
  return (
    <div>
      <NavBar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property Type</h1>
        <PropertyList />
        <h1 className="homeTitle">Home Guests with love</h1>
        <GuestHomes />
        <MailList />
        <Footer />
      </div>
    </div>
  );
}
