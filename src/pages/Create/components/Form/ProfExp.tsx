import React from "react";
import uuid from "react-uuid";

import { Input, RoundButton } from "@/components";
import { ProfExpProps } from "@/config/interfaces";
import { numeberOnly } from "@/config/masks/numberOnly";
import { MonthInput } from "..";

interface ProfExpFormProps {
  id?: string;
  title?: string;
  startMonth?: string;
  startYear?: string;
  endMonth?: string;
  endYear?: string;
  description?: string;
  city?: string;
  state?: string;
  actionLabel: string;
  actionClassName?: string;
  actionFunction: (args?: any) => void;
}

export function ProfExpForm({
  id = "",
  title = "",
  startMonth = "janeiro",
  startYear = "",
  endMonth = "janeiro",
  endYear = "",
  description = "",
  city = "",
  state = "",
  actionLabel,
  actionClassName,
  actionFunction,
}: ProfExpFormProps) {
  const [titleState, setTitle] = React.useState(title);
  const [cityState, setCity] = React.useState(city);
  const [stateState, setState] = React.useState(state);
  const [startMonthState, setStartMonth] = React.useState(startMonth);
  const [startYearState, setStartYear] = React.useState(startYear);
  const [endMonthState, setEndMonth] = React.useState(endMonth);
  const [endYearState, setEndYear] = React.useState(endYear);
  const [descriptionState, setDescription] = React.useState(description);

  function onButtonClick() {
    if (
      !titleState ||
      !cityState ||
      !stateState ||
      !startMonthState ||
      !startYearState ||
      !endMonthState ||
      !endYearState ||
      !descriptionState
    ) {
      alert("Dado(s) faltando, preenche todo o formulário.");
      return;
    }
    if (startYearState.length < 4 || endYearState.length < 4) {
      alert("Formato de ano inválido");
      return;
    }
    const exp: ProfExpProps = {
      id: id ? id : uuid(),
      title: titleState,
      city: cityState,
      state: stateState,
      start: {
        month: startMonthState,
        year: startYearState,
      },
      end: {
        month: endMonthState,
        year: endYearState,
      },
      description: descriptionState,
    };
    actionFunction(exp);
    setTitle("");
    setCity("");
    setState("");
    setStartMonth("janeiro");
    setStartYear("");
    setEndMonth("janeiro");
    setEndYear("");
    setDescription("");
  }

  function handleYearValidation(
    event: React.ChangeEvent<HTMLInputElement>,
    setState: (value: string) => void,
  ) {
    const value = event.target.value;
    if (value.length > 4) return;
    setState(numeberOnly(value));
  }

  return (
    <section className="flex flex-col gap-y-3.5">
      <Input
        label="Título"
        value={titleState}
        onChange={e => setTitle(e.target.value)}
      />

      <div className="flex gap-5">
        <Input
          className="w-full"
          label="Cidade"
          value={cityState}
          onChange={e => setCity(e.target.value)}
        />
        <Input
          className="w-full"
          label="Estado"
          value={stateState}
          onChange={e => setState(e.target.value)}
        />
      </div>

      <div className="flex gap-5 justify-center self-center flex-wrap">
        <fieldset className="border rounded p-5">
          <legend className="font-bold">Início</legend>
          <div className="flex gap-10">
            <MonthInput
              label="Mês"
              value={startMonthState}
              onChange={e => setStartMonth(e.target.value)}
            />
            <Input
              className="w-16"
              label="Ano"
              value={startYearState}
              onChange={e => handleYearValidation(e, setStartYear)}
            />
          </div>
        </fieldset>
        <fieldset className="border rounded p-5">
          <legend className="font-bold">Fim</legend>
          <div className="flex gap-10">
            <MonthInput
              label="Mês"
              value={endMonthState}
              onChange={e => setEndMonth(e.target.value)}
            />
            <Input
              className="w-16"
              label="Ano"
              value={endYearState}
              onChange={e => handleYearValidation(e, setEndYear)}
            />
          </div>
        </fieldset>
      </div>

      <Input
        label="Descrição"
        rows={5}
        value={descriptionState}
        onChange={e => setDescription(e.target.value)}
      />

      <RoundButton
        className={`${actionClassName} self-center`}
        onClick={onButtonClick}
      >
        {actionLabel}
      </RoundButton>
    </section>
  );
}
