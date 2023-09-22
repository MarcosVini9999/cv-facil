import React from "react";

import { Input, RoundButton } from "@/components";
import { CreateContext } from "@/contexts/create";

export function CompetenciesForm() {
  const [competency, setCompetency] = React.useState("");
  //const { addCompetency } = React.useContext(CreateContext);

  function onAddButtonClick() {
    const comp = {
      id: React.useId(),
      title: competency,
    };
    //addCompetency(comp);
    setCompetency("");
  }

  return (
    <section className="flex flex-col gap-y-3.5">
      <Input label="Competência" value={competency} onChange={setCompetency} />
      <RoundButton className="self-center" onClick={onAddButtonClick}>
        Adicionar Competência
      </RoundButton>
    </section>
  );
}
