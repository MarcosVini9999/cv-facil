import React from "react";
import uuid from "react-uuid";

import { Input, RoundButton } from "@/components";
import { handleYearValidation } from "@/utils/validateYear";
import xCircle from "@/assets/icons/xCircle.svg";

interface CertificationsFormProps {
  id?: string;
  title?: string;
  year?: string;
  actionLabel: string;
  actionFunction: (args?: any) => void;
  edit?: boolean;
}

export function CertificationsForm({
  id = "",
  title = "",
  year = "",
  actionFunction,
  actionLabel,
  edit = false,
}: CertificationsFormProps) {
  const [open, setOpen] = React.useState(edit);
  const [titleState, setTitle] = React.useState(title);
  const [yearState, setYear] = React.useState(year);

  function onButtonClick() {
    if (!titleState || !yearState) {
      alert("Preencha todos os campos da certificação");
      return;
    }
    const year = new Date().getFullYear();
    if (yearState.length != 4) {
      alert("Formato de ano inválido, formato: yyyy");
      return;
    } else if (+yearState < 1970 || +yearState > year) {
      alert(`O intervalo do ano deve ser entre 1970 e ${year}`);
      return;
    }
    const certification = {
      id: id ? id : uuid(),
      title: titleState,
      year: yearState,
    };
    actionFunction(certification);
    onCloseFormButtonClick();
  }
  function clearForm() {
    setTitle("");
    setYear("");
  }
  function onCloseFormButtonClick() {
    setOpen(false);
    clearForm();
  }

  return (
    <section className="flex flex-col gap-y-3.5">
      {open ? (
        <div className="flex flex-col gap-y-3.5 relative">
          {!edit ? (
            <img
              className="absolute right-0 -top-5 cursor-pointer hover:scale-105"
              src={xCircle}
              alt="Close button"
              onClick={onCloseFormButtonClick}
            />
          ) : (
            ""
          )}
          <div className="flex gap-6">
            <Input
              className="w-full"
              label="Título"
              value={titleState}
              onChange={e => setTitle(e.target.value)}
              placeholder="Ex.: Curso de React alura..."
              minlength={5}
              maxlength={120}
              required
            />
            <Input
              className="w-22"
              type="number"
              label="Ano"
              value={yearState}
              onChange={e => handleYearValidation(e.target.value, setYear)}
              placeholder="yyyy"
              min={1970}
              max={new Date().getFullYear()}
              required
            />
          </div>
          <RoundButton className="self-center" onClick={onButtonClick}>
            {actionLabel}
          </RoundButton>
        </div>
      ) : (
        <RoundButton className="self-center" onClick={() => setOpen(true)}>
          {actionLabel}
        </RoundButton>
      )}
    </section>
  );
}
