import React from "react";

import { Input, RoundButton } from "@/components";
import { CreateContext } from "@/contexts/create";

export function CertificationsForm() {
  const [title, setTitle] = React.useState("");
  const [year, setYear] = React.useState(0);
  //const { addCertification } = React.useContext(CreateContext);

  function onAddButtonClick() {
    const certification = {
      id: React.useId(),
      title,
      year,
    };
    //addCertification(certification);
    setTitle("");
    setYear(0);
  }

  return (
    <section className="flex flex-col gap-y-3.5">
      <div className="flex gap-6">
        <Input
          className="w-full"
          label="Título"
          value={title}
          onChange={setTitle}
        />
        <Input className="w-20" label="Ano" value={year} onChange={setYear} />
      </div>
      <RoundButton className="self-center" onClick={onAddButtonClick}>
        Adicionar Certificação
      </RoundButton>
    </section>
  );
}
