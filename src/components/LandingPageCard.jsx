export default function LandingPageCard(props) {
    return (
    <div className="landing-card">
        <h2 className="namn">{props.item.name}</h2>
        <p className="beskrivning">{props.item.description}</p>
        <p className="pris">Pris: {props.item.price} kr</p>
    </div>
    )
}