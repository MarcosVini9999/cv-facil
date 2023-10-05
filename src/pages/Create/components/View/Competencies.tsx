import React from "react";

import { CompetenciesForm, ControlButtons } from "..";
import { CompetencyProps } from "@/config/interfaces";
import { CreateContext } from "@/contexts/create";

interface CompetenciesFormProps {
  id: string;
  competency: string;
}

export function CompetenciesView({ id, competency }: CompetenciesFormProps) {
  const [editMode, setEditMode] = React.useState(false);
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
  function onEditButtonClick() {
    setEditMode(true);
  }

  return (
    <>
      {editMode ? (
        <CompetenciesForm
          id={id}
          competency={competency}
          actionLabel="Salvar"
          actionFunction={handleEdit}
          edit
        />
      ) : (
        <div className="flex gap-10 relative">
          <ControlButtons onDelete={handleDelete} onEdit={onEditButtonClick} />
          <p className="text-xl font-normal text-slate-800 capitalize">
            {competency}
          </p>
        </div>
      )}
    </>
  );
}
