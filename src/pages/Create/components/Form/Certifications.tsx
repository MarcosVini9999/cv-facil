import React from "react";

import { Input, RoundButton } from "@/components";
import { handleYearValidation } from "@/utils/validateYear";
import uuid from "react-uuid";

interface CertificationsFormProps {
  id?: string;
  title?: string;
  year?: string;
  actionLabel: string;
  actionFunction: (args?: any) => void;
}

export function CertificationsForm({
  id = "",
  title = "",
  year = "",
  actionFunction,
  actionLabel,
}: CertificationsFormProps) {
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
    setTitle("");
    setYear("");
  }

  function onYearInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    handleYearValidation(value, setYear);
  }

  return (
    <section className="flex flex-col gap-y-3.5">
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
          onChange={onYearInputChange}
          placeholder="yyyy"
          min={1970}
          max={new Date().getFullYear()}
          required
        />
      </div>
      <RoundButton className="self-center" onClick={onButtonClick}>
        {actionLabel}
      </RoundButton>
    </section>
  );
}
