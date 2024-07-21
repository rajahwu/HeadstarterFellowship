const path = require('path');
const moduleAlias = require('module-alias');

// Register aliases based on the location of package.json
moduleAlias.addAliases({
  '@root': path.join(__dirname, '.'),
  '@components': path.join(__dirname, 'src/components'),
  '@assets': path.join(__dirname, 'src/assets'),
  '@pages': path.join(__dirname, 'src/pages'),
  '@services': path.join(__dirname, 'src/services')
});

import { createRoot } from "react-dom/client";
import App from "./App";

const root = createRoot(document.getElementById('root'));
root.render(<App />);
