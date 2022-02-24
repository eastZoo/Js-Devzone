import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DragDrop from "../components/DragDrop/DragDrop";

function DnD() {

    return (
        <DndProvider backend={HTML5Backend}>
            <div>
                <DragDrop />
            </div>
        </DndProvider>
    )
    
}

export default DnD;