import React from "react";

import { CertificationsForm, ControlButtons } from "..";
import { CertificationProps } from "@/config/interfaces";
import { CreateContext } from "@/contexts/create";

interface CompetenciesFormProps {
  id: string;
  title: string;
  year: string;
}

export function CertificationsView({ id, title, year }: CompetenciesFormProps) {
  const [editMode, setEditMode] = React.useState(false);
  const { rmvCertification, editCertification } =
    React.useContext(CreateContext);

  function handleDelete() {
    if (confirm("Tem certeza que deseja excluír a certificação?")) {
      rmvCertification(id);
    }
  }
  function handleEdit(cert: CertificationProps) {
    setEditMode(false);
    editCertification(cert);
  }
  function onEditButtonClick() {
    setEditMode(true);
  }

  return (
    <>
      {editMode ? (
        <CertificationsForm
          id={id}
          title={title}
          year={year}
          actionLabel="Salvar"
          actionFunction={handleEdit}
          edit
        />
      ) : (
        <div className="flex gap-10 relative">
          <ControlButtons onEdit={onEditButtonClick} onDelete={handleDelete} />
          <p className="text-xl font-normal text-slate-800">{year}</p>
          <p className="text-xl font-normal text-slate-800 capitalize">
            {title}
          </p>
        </div>
      )}
    </>
  );
}
