import React from "react";

import { Input, RoundButton } from "@/components";

export function ProfExp() {
  const [title, setTitle] = React.useState("");
  const [startMonth, setStartMonth] = React.useState("");
  const [startYear, setStartYear] = React.useState("");
  const [endMonth, setEndMonth] = React.useState("");
  const [endYear, setEndYear] = React.useState("");
  const [description, setDescription] = React.useState("");

  return (
    <section className="flex flex-col gap-y-3.5">
      <hr className="h-px bg-slate-800 my-1" />

      <p className="text-xl font-bold text-slate-900">
        Experiências Profissionais
      </p>

      <Input label="Título" value={title} onChange={setTitle} />

      <div className="flex gap-5">
        <fieldset>
          <legend className="font-bold">Início</legend>
          <div className="flex gap-5">
            <Input
              className="grow"
              label="Mês"
              value={startMonth}
              onChange={setStartMonth}
            />
            <Input label="Ano" value={startYear} onChange={setStartYear} />
          </div>
        </fieldset>
        <fieldset>
          <legend className="font-bold">Fim</legend>
          <div className="flex gap-5">
            <Input label="Mês" value={endMonth} onChange={setEndMonth} />
            <Input label="Ano" value={endYear} onChange={setEndYear} />
          </div>
        </fieldset>
      </div>

      <Input
        label="Descrição"
        rows={5}
        value={description}
        onChange={setDescription}
      />

      <RoundButton className="self-center">Adicionar Experiência</RoundButton>
    </section>
  );
}
