import React, { useContext } from 'react';
import { OptionsContext } from '../context';

import Navigation from '../components/Navigation';
import Button from '../components/UI/Button';
import Checkbox from '../components/UI/Checkbox';
import Number from '../components/UI/Number';
import RadioGroup from '../components/UI/RadioGroup';

import "../styles/options.css";

const Options = () => {
  const {options, setOptions} = useContext(OptionsContext);

  const changeOptions = (option, value) => {
    const newOptions = {...options};
    newOptions[option] = value;

    setOptions(newOptions);
  }

  return (
    <div className='page'>
      <Navigation>
        <Button to="/" icon="arrow-left">Назад</Button>
      </Navigation>

      <div className="options">
        <div className="options__row">
          <Number
            min="3"
            max="10"
            label="Размер поля"
            value={options.size}
            name="size"
            cb={changeOptions}
          />

          <RadioGroup
            value={options.order}
            name="order"
            cb={changeOptions}
            label="Очёрёдность"
            options={[
              {value: "up", text: "По возрастанию"},
              {value: "down", text: "По убыванию"},
              {value: "random", text: "Хаотично"}
            ]}
          />
        </div>

        <Checkbox
          label="Штрафное время"
          value={options.penalty}
          name="penalty"
          cb={changeOptions}
        />

        <Checkbox
          label="Подсветка"
          value={options.highlight}
          name="highlight"
          cb={changeOptions}
        />

        <Checkbox
          label="Перемешивать каждый ход"
          value={options.mix}
          name="mix"
          cb={changeOptions}
        />
      </div>
    </div>
  )
}

export default Options;