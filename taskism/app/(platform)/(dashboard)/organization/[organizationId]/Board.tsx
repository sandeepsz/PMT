import { deleteBoard } from "@/actions/delete-board";
import { FormInput } from "@/components/form/form-input";
import { Button } from "@/components/ui/button";

type boardProps = {
  title: string;
  id: string;
};

const Board = ({ title, id }: boardProps) => {
  const deleteBoardWithId = deleteBoard.bind(null, id);
  return (
    <div className="flex gap-4">
      <FormInput id={id} label="Title" />
    </div>
  );
};

export default Board;
