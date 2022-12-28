GLIDER_BASE=$1
echo "Replacing {{GLIDER_BASE}} in vite.config.js with : $GLIDER_BASE"

sed -i "s/{{GLIDER_BASE}}/$GLIDER_BASE/" vite.config.js

npm run dev -- --host
