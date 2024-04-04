export default function OrderPageCard(props) {
    return (
        <div className="order-card">
            <img src={props.item.image} alt={props.item.name} />
            <h2 classname="namn">{props.item.name}</h2>
            <p classname="beskrivning">{props.item.description}</p>
            <p classname="pris">Pris: {props.item.price} kr</p>
        </div>
    )
}