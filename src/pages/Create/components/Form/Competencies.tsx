import React from "react";
import uuid from "react-uuid";

import { Input, RoundButton } from "@/components";

interface CompetenciesFormProps {
  id?: string;
  competency?: string;
  actionLabel: string;
  actionFunction: (args?: any) => void;
}

export function CompetenciesForm({
  id = "",
  competency = "",
  actionFunction,
  actionLabel,
}: CompetenciesFormProps) {
  const [competencyState, setCompetency] = React.useState(competency);

  function onButtonClick() {
    if (!competencyState) {
      alert("Preencha a competência");
      return;
    }
    const comp = {
      id: id ? id : uuid(),
      title: competencyState,
    };
    actionFunction(comp);
    setCompetency("");
  }

  return (
    <section className="flex flex-col gap-y-3.5">
      <Input
        label="Competência"
        value={competencyState}
        onChange={e => setCompetency(e.target.value)}
      />
      <RoundButton className="self-center" onClick={onButtonClick}>
        {actionLabel}
      </RoundButton>
    </section>
  );
}
