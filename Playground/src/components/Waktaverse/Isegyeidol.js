import PropTypes from "prop-types";
// import styles from "./Isegyeidol.module.css";

function Isegyeidol({ name }) {
    return (
        <div>
            <h1>WAKTAVERSE Member</h1>
            <iframe
                src={`https://player.twitch.tv/?channel=${name}&parent=localhost&muted=true`}
                height="360"
                width="640"
                allowfullscreen="<allowfullscreen>">
            </iframe>
        </div>
    );
}

Isegyeidol.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Isegyeidol;