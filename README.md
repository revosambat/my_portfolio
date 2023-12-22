### Styling tool

As a styling tool, tailwind css is being used

#### Installation:

`yarn add tailwindcss` to add tailwindcss in package.

`npx tailwindcss init` to initialize tailwind.config.js file

#### Configuration:

Add the paths to all your templates files in your
tailwind.config.js file inside content.

Add the @tailwind directives for each of Tailwind’s layers to your main CSS file as shown below:

`@tailwind base;`

`@tailwind components;`

`@tailwind utilities;`

#### Working Method:

Run the CLI tool to scan your template files for classes and build your CSS.

`npx tailwindcss -i ./src/App.css -o ./src/output.css --watch`

Import the output.css inside App.js file.
