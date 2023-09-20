import React from "react";

import { Input, RoundButton } from "@/components";

export function Competencies() {
  const [competency, setCompetency] = React.useState("");

  return (
    <section className="flex flex-col gap-y-3.5">
      <hr className="h-px bg-slate-800 my-1" />

      <p className="text-xl font-bold text-slate-900">Competências</p>

      <Input label="Competência" value={competency} onChange={setCompetency} />
      <RoundButton className="self-center">Adicionar Competência</RoundButton>
    </section>
  );
}
