import react, { useState } from "react";
import Picture from "./Picture";
import styles from "../../styles/DnD.module.css";
import { useDrop } from "react-dnd";

const PictureList = [
    {
        id: 1,
        url: "https://w.namu.la/s/f85dfbe4aa001782a18c7e92d9a28522e0378e2388db5f4ef453968aa066800ca7ddc42f349b8d9cf8e21d2036adf0c87e28ac1a78183b8f1af7c64fbc1d909d5a38edddb4354aa85c241076c650530ff17cca67730ffe51e30d63c215adad3e"
    },
    {
        id: 2,
        url: "https://w.namu.la/s/4caed1c5c9f2c78c855d2613d3100dae825eb265fe35caa55da66c5394e3d30d45474b0aa2696191915b0aa9c1492c8382a589e995a99c4781b6ea2a8d096686b86392fe784fa5bd1f455ef938115cf22b22a4e6fa5463c10deee490d4bc7373"
    },
    {
        id: 3,
        url: "https://w.namu.la/s/82b885b3e83b931afe0c759c996489d4c28c483bf8da5b56cb74300d317944a2ef0b1427803b79ad81fa595800d51068992a4c4df45c759d1ca32aff5e61b61319f887d0a0d5876037615847ca5bc6fd390bf9dbb59e2a166b23a99cf0b5d010"
    },
];

function DragDrop() {

    const [board, setBoard] = useState([]);

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "image",
        drop: (item) => addImageToBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    const addImageToBoard = (id) => {
        const pictureList = PictureList.filter((picture) => id === picture.id);
        setBoard((board) => [...board, pictureList[0]]);
        // setBoard([pictureList[0]]);
    };
    return (
        <>
            <div className={styles.Picture}> 
                {PictureList.map((picture) => {
                return <Picture key={picture.id} url={picture.url} id={picture.id}/>
            })}
            </div>
            <div className={styles.Board} ref={drop}>
                {board.map((picture) => {
                    return <Picture key={picture.id} url={picture.url} id={picture.id}/>
                })}
            </div>
        </>
    );
}

export default DragDrop;