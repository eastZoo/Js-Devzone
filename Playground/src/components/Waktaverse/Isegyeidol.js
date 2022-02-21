import { useState,useEffect } from "react";
import PropTypes from "prop-types";
import IdolChat from "./IdolChat";
// import styles from "./Isegyeidol.module.css";
import Isegyeidols from "./isegyeidol.json";

function Isegyeidol({ name }) {
    const [loading, setLoading] = useState(true);
    const [isegyeidols, setisegyeidols] = useState([]);

    const getIsegyeidols = () =>{ 
        setisegyeidols(Isegyeidols.data.idol)
        setLoading(false);
    }

    useEffect(() => {
        getIsegyeidols();
      }, []);

    return (
        <div>
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