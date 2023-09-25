import React from "react";

import { CompetenciesForm, IconButton } from "..";
import trash from "@/assets/icons/trash.svg";
import edit from "@/assets/icons/edit.svg";
import { CompetencyProps } from "@/config/interfaces";
import { CreateContext } from "@/contexts/create";

interface CompetenciesFormProps {
  id: string;
  competency: string;
}

export function CompetenciesView({ id, competency }: CompetenciesFormProps) {
  const [editMode, setEditMode] = React.useState(false);
  const [competencyState, setCompetency] = React.useState(competency);
  const { rmvCompetency, editCompetency } = React.useContext(CreateContext);

  function handleDelete() {
    if (confirm("Tem certeza que deseja excluír a competência?")) {
      rmvCompetency(id);
    }
  }
  function handleEdit(comp: CompetencyProps) {
    setEditMode(false);
    editCompetency(comp);
  }

  return (
    <>
      {editMode ? (
        <CompetenciesForm
          id={id}
          competency={competencyState}
          actionLabel="Salvar"
          actionFunction={handleEdit}
        />
      ) : (
        <div className="flex gap-10 relative">
          <div className="flex gap-2 mb-1 top-0 -right-10">
            <IconButton
              className="bg-green-500"
              icon={edit}
              alt="Edit icon"
              onClick={() => setEditMode(true)}
            />
            <IconButton
              className="bg-red-500"
              icon={trash}
              alt="Delete icon"
              onClick={handleDelete}
            />
          </div>
          <p className="text-xl font-normal text-slate-800 capitalize">{competency}</p>
        </div>
      )}
    </>
  );
}
