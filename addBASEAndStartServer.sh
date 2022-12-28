BASE=$1
echo "Replacing {{BASE}} in vite.config.js with : $BASE"
sed -i 's/{{BASE}}/$BASE/' vite.config.js

npm run dev -- --host
