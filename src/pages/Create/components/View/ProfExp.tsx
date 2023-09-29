import React from "react";

import { ControlButtons, ProfExpForm } from "..";
import { CreateContext } from "@/contexts/create";
import { ProfExpProps } from "@/config/interfaces";

interface ProfExpViewProps {
  id: string;
  title: string;
  startMonth: string;
  startYear: string;
  endMonth: string;
  endYear: string;
  description: string;
  city: string;
  state: string;
}

export function ProfExpView({
  id,
  title,
  startMonth,
  startYear,
  endMonth,
  endYear,
  description,
  city,
  state,
}: ProfExpViewProps) {
  const [editMode, setEditMode] = React.useState(false);
  const { rmvProfExp, editProfExp } = React.useContext(CreateContext);

  function handleDelete() {
    if (confirm("Tem certeza que deseja continuar a exclusão?")) {
      rmvProfExp(id);
    }
  }
  function handleEdit(exp: ProfExpProps) {
    setEditMode(false);
    editProfExp(exp);
  }
  function onEditButtonClick() {
    setEditMode(true);
  }

  return (
    <>
      {editMode ? (
        <ProfExpForm
          id={id}
          title={title}
          startMonth={startMonth}
          startYear={String(startYear)}
          endMonth={endMonth}
          endYear={String(endYear)}
          description={description}
          city={city}
          state={state}
          actionLabel={"Salvar"}
          actionFunction={handleEdit}
          edit
        />
      ) : (
        <div className="border-2 p-1 mb-3.5 rounded relative">
          <ControlButtons onDelete={handleDelete} onEdit={onEditButtonClick} />
          <p className="text-slate-800 text-xl capitalize">
            {startMonth} {startYear} - {endMonth} {endYear}{" "}
            <span className="font-bold">{title}</span>, {city}, {state}.
          </p>
          <p className="text-slate-800 text-lg mt-2 mb-2.5 break-all">
            {description}
          </p>
        </div>
      )}
    </>
  );
}
