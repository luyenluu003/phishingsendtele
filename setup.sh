sudo apt update&&sudo apt upgrade
sudo apt install nginx
sudo apt install ufw
sudo ufw allow 22
sudo ufw allow 80
sudo ufw allow 443
sudo ufw enable
sudo mv default /etc/nginx/sites-enabled/default
sudo systemctl restart nginx
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
nvm install --lts
npm install -g pm2
sudo apt install "${packages[@]}"
packages=(
    ca-certificates
    fonts-liberation
    libasound2
    libatk-bridge2.0-0
    libatk1.0-0
    libc6
    libcairo2
    libcups2
    libdbus-1-3
    libexpat1
    libfontconfig1
    libgbm1
    libgcc1
    libglib2.0-0
    libgtk-3-0
    libnspr4
    libnss3
    libpango-1.0-0
    libpangocairo-1.0-0
    libstdc++6
    libx11-6
    libx11-xcb1
    libxcb1
    libxcomposite1
    libxcursor1
    libxdamage1
    libxext6
    libxfixes3
    libxi6
    libxrandr2
    libxrender1
    libxss1
    libxtst6
    lsb-release
    wget
    xdg-utils
)
npm install