import { useState } from "react";
import { fadeInAnimation, getTheme, setTheme } from "../helpers/theme";
import light from '../../assets/light.svg'
import dark from '../../assets/dark.svg'

export const ButtonTheme = () => {
  const [defaultTheme, setDefaultTheme] = useState(getTheme());

  const changeTheme = () => {
		const newTheme = getTheme() === 'dark' ? 'light' : 'dark';
		setDefaultTheme(newTheme);
		setTheme(newTheme);
		fadeInAnimation();
	};

  const pathImg = defaultTheme === 'light' ? light : dark;

  return (
    <div className="theme-select" onClick={changeTheme}>
      <img src={pathImg} alt={pathImg} />
    </div>
  )
}
