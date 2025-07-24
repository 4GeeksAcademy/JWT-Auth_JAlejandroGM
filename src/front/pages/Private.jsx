import rigoBaby from "../assets/img/rigo-baby.jpg";

export const Private = () => {

    return (
        <div className="container d-flex flex-column justify-content-center align-items-center gap-3">
            <h2 className="text-center">Si llegaste aquí es porque iniciaste sesión</h2>
            <img
                src={rigoBaby}
                alt="Rigo Baby"
            />
        </div>
    );
};