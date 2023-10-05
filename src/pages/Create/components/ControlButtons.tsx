import { IconButton } from ".";
import trash from "@/assets/icons/trash.svg";
import edit from "@/assets/icons/edit.svg";

interface ControlButtonsProps {
  onEdit: (args?: any) => void;
  onDelete: (args?: any) => void;
}

export function ControlButtons({ onEdit, onDelete }: ControlButtonsProps) {
  return (
    <div className="flex gap-2 mb-1 top-0 -right-10">
      <IconButton
        className="bg-green-500"
        icon={edit}
        alt="Edit icon"
        onClick={onEdit}
      />
      <IconButton
        className="bg-red-500"
        icon={trash}
        alt="Delete icon"
        onClick={onDelete}
      />
    </div>
  );
}
