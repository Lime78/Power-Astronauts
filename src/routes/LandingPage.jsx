import menuItems from "../data/menuItems";
import LandingPageCard from "../components/LandingPageCard";

const LandingPage = () => {
  // const LandingPageCard = (props) => (
  //   <div>
  //       <h2>{props.item.name}</h2>
  //       <p>{props.item.description}</p>
  //       <p>Pris: {props.item.price} kr</p>
  //   </div>
  //   )
    return (
        <>
        <div className="header">
        </div>
        <h1>Landing Page</h1>
        
        <div className="menu-frame">
      {menuItems.map((item, i) => (
        <LandingPageCard item={item} key={item.name} />
      ))}
    </div>
        </>
    );
}

export default LandingPage;