!/bin/bash

echo "Where would you like to create a project?"
read place

echo "What would you like the name to be?"
read name

echo "Vite it is. What template?"
read template

cd $place
npm create vite@latest $name --  --template $template
cd $name
npm install




