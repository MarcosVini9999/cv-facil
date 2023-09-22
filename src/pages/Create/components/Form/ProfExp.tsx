import React from "react";
import uuid from "react-uuid";

import { Input, RoundButton } from "@/components";
import { CreateContext } from "@/contexts/create";
import { ProfExpProps } from "@/config/interfaces";

export function ProfExpForm() {
  const [title, setTitle] = React.useState("");
  const [city, setCity] = React.useState("");
  const [state, setState] = React.useState("");
  const [startMonth, setStartMonth] = React.useState("");
  const [startYear, setStartYear] = React.useState(0);
  const [endMonth, setEndMonth] = React.useState("");
  const [endYear, setEndYear] = React.useState(0);
  const [description, setDescription] = React.useState("");
  //const { profExp, setProfExp } = React.useContext(CreateContext);

  function onAddButtonClick() {
    const exp: ProfExpProps = {
      id: uuid(),
      title,
      city,
      state,
      start: {
        month: startMonth,
        year: startYear,
      },
      end: {
        month: endMonth,
        year: endYear,
      },
      description,
    };
    setTitle("");
    setCity("");
    setState("");
    setStartMonth("");
    setStartYear(0);
    setEndMonth("");
    setEndYear(0);
    setDescription("");
  }

  return (
    <section className="flex flex-col gap-y-3.5">
      <Input label="Título" value={title} onChange={setTitle} />

      <div className="flex gap-5">
        <Input
          className="w-full"
          label="Cidade"
          value={city}
          onChange={setCity}
        />
        <Input
          className="w-full"
          label="Estado"
          value={state}
          onChange={setState}
        />
      </div>

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

      <RoundButton className="self-center" onClick={onAddButtonClick}>
        Adicionar Experiência
      </RoundButton>
    </section>
  );
}
