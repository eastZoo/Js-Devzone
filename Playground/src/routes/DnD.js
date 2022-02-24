import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DragDrop from "../components/DragDrop/DragDrop";
import styles from "../styles/DnD.module.css";

function DnD() {

    return (
        <DndProvider backend={HTML5Backend}>
            <div className={styles.DnD}>
                <DragDrop />
            </div>
        </DndProvider>
    )
    
}

export default DnD;