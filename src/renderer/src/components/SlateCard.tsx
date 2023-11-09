import { Draggable } from "react-beautiful-dnd";

export default function SlateCard(props: SlateFile & {index: number}) {
  const {
    id, fileName, fileType, tags, index
  } = props;

  // SlateCard.tsx
  const bgColorClass = fileType === "pdf" ? "bg-cardPdf" : fileType === "docx" ? "bg-cardDocx" : "bg-cardDefault";

  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          className={`rounded p-2 mb-2 flex items-center justify-between ${bgColorClass} ${snapshot.isDragging ? "opacity-75" : "opacity-100"} shadow`}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >

          <div className="flex flex-col justify-between w-full h-full">
            <p className="self-start font-detail">{fileName}</p>
            {/* Spacer to push filetype to the bottom */}
            <div className="flex-grow"></div>
            {/* Align filetype label to the bottom-right */}
            <div className="self-end rounded bg-black bg-opacity-50 text-white p-1 font-label">
              <p>.{fileType}</p>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
}

