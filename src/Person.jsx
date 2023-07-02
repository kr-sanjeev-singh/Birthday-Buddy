const Person = ({ image, name, age }) => {
    return (
        <div style={{ display: "flex", alignItems: "center", gap: "0 1rem" }}>
            <div>
                <img src={image} alt={name} style={{ width: "3rem" }} />
            </div>
            <div style={{ display: "flex", gap: "0 1rem" }}>
                <h2>{name}</h2>
                <h2>{age}</h2>
            </div>
        </div>
    );
};
export default Person;
