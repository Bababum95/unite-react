import { FC, Dispatch, SetStateAction } from 'react';
import Select, { SingleValue } from 'react-select';
import { IOption } from '../../../../core/interfaces/option.interfaces';
import './styles/PopupSelect.scss'

interface PopupSelectProps {
  name: string;
  values: {
    [key: string]: string;
  };
  options: IOption[];
  setValues: Dispatch<SetStateAction<{
    [key: string]: string;
  }>>;
}

const PopupSelect: FC<PopupSelectProps> = ({ options, values, name, setValues }) => {
  const handleChange = (selectedOption: SingleValue<IOption>) => {
    if (selectedOption) {
      setValues({ ...values, [name]: (selectedOption as IOption).value });
    }
  };

  return (
    <Select
      options={options}
      value={{value: values[name], label: values[name]}}
      onChange={handleChange}
      required={true}
      classNamePrefix="popup-select"
      className="popup-select-container"
      name={name}
    />
  );
};

export default PopupSelect;
