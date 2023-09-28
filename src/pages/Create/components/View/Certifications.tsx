import React from "react";

import { CertificationsForm, IconButton } from "..";
import { CertificationProps } from "@/config/interfaces";
import { CreateContext } from "@/contexts/create";
import trash from "@/assets/icons/trash.svg";
import edit from "@/assets/icons/edit.svg";

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
          <p className="text-xl font-normal text-slate-800">{year}</p>
          <p className="text-xl font-normal text-slate-800 capitalize">
            {title}
          </p>
        </div>
      )}
    </>
  );
}
