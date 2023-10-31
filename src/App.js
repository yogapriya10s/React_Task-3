import React from 'react';
import './App.css';
import ColorPicker from './Colorpicker';

function App() {
  const colors = ['LightSkyBlue', 'SkyBlue', 'LightSteelBlue', 'PowderBlue', 'AliceBlue', 'Lavender', 'FloralWhite', 'Navy', 'DarkSlateBlue', 'MidnightBlue', 'Indigo', 'SlateBlue', 'RoyalBlue', 'DodgerBlue', 'LightYellow', 'LemonChiffon', 'PaleGoldenrod', 'LightGoldenrodYellow', 'Moccasin', 'Khaki', 'Gold', 'LightGreen', 'YellowGreen', 'LawnGreen', 'MediumSeaGreen', 'DarkOliveGreen', 'ForestGreen', 'OliveDrab', 'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'PaleVioletRed', 'Orchid', 'Lavender', 'Thistle', 'Plum', 'MediumOrchid', 'DarkOrchid', 'Purple', 'DarkMagenta', 'LightGrey', 'Gainsboro', 'Silver', 'DarkGrey', 'DimGrey', 'SlateGrey', 'Black'];

  return (
    <div className="App">
      <h1>Color Picker App</h1>
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;