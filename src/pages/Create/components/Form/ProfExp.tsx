import React from "react";
import uuid from "react-uuid";

import { Input, RoundButton } from "@/components";
import { ProfExpProps } from "@/config/interfaces";
import { MonthInput } from "..";
import { handleYearValidation } from "@/utils/validateYear";

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
    const year = new Date().getFullYear();
    if (startYearState.length != 4 || endYearState.length != 4) {
      alert("Formato de ano inválido, formato: yyyy.");
      return;
    } else if (
      +startYearState < 1970 ||
      +startYearState > year ||
      +endYearState < 1970 ||
      +endYearState > year
    ) {
      alert(`O intervalo do ano deve ser entre 1970 e ${year}.`);
      return;
    }
    if (startYearState === endYearState && endMonthState < startMonthState) {
      alert("Data de fim está vindo antes da data de começo, por favor corrija as datas.");
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
  function onStartYearInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    handleYearValidation(value, setStartYear);
  }
  function onEndYearInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    handleYearValidation(value, setEndYear);
  }

  return (
    <section className="flex flex-col gap-y-3.5">
      <Input
        label="Título"
        value={titleState}
        onChange={e => setTitle(e.target.value)}
        placeholder="Ex.: Front-end developer na empresa tal..."
        minlength={5}
        maxlength={100}
        required
      />

      <div className="flex gap-5">
        <Input
          className="w-full"
          label="Cidade"
          value={cityState}
          onChange={e => setCity(e.target.value)}
          placeholder="Ex.: São Paulo"
          minlength={3}
          maxlength={20}
          required
        />
        <Input
          className="w-full"
          label="Estado"
          value={stateState}
          onChange={e => setState(e.target.value)}
          placeholder="Ex.: Amazonas"
          minlength={3}
          maxlength={15}
          required
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
              className="w-20"
              type="number"
              label="Ano"
              value={startYearState}
              onChange={onStartYearInputChange}
              placeholder="yyyy"
              min={1970}
              max={new Date().getFullYear()}
              required
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
              className="w-20"
              type="number"
              label="Ano"
              value={endYearState}
              onChange={onEndYearInputChange}
              placeholder="yyyy"
              min={+startYearState}
              max={new Date().getFullYear()}
              required
            />
          </div>
        </fieldset>
      </div>

      <Input
        label="Descrição"
        rows={5}
        value={descriptionState}
        onChange={e => setDescription(e.target.value)}
        placeholder="Descrição das atividades e obrigações realizadas nessa experiência"
        minlength={142}
        maxlength={640}
        required
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
