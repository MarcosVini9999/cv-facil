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
    if (yearState.length < 4) {
      alert("Formato de ano inválido");
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

  return (
    <section className="flex flex-col gap-y-3.5">
      <div className="flex gap-6">
        <Input
          className="w-full"
          label="Título"
          value={titleState}
          onChange={e => setTitle(e.target.value)}
        />
        <Input
          className="w-16"
          label="Ano"
          value={yearState}
          onChange={e => handleYearValidation(e, setYear)}
        />
      </div>
      <RoundButton className="self-center" onClick={onButtonClick}>
        {actionLabel}
      </RoundButton>
    </section>
  );
}
