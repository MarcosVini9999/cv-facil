import React from "react";

import { Input, RoundButton } from "@/components";

export function Certifications() {
  const [title, setTitle] = React.useState("");
  const [year, setYear] = React.useState("");

  return (
    <section className="flex flex-col gap-y-3.5">
      <hr className="h-px bg-slate-800 my-1" />

      <p className="text-xl font-bold text-slate-900">Certificações</p>

      <div className="flex gap-6">
        <Input
          className="w-full"
          label="Título"
          value={title}
          onChange={setTitle}
        />
        <Input className="w-20" label="Ano" value={year} onChange={setYear} />
      </div>
      <RoundButton className="self-center">Adicionar Certificação</RoundButton>
    </section>
  );
}
