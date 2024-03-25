FROM node:19

# tworzy katalog by nie śmiecić
RUN mkdir -p /app
# kopiuje katalog z hosta do /app
COPY ./package.json /app/

WORKDIR /app
# uruchamia polecenie
RUN npm install

COPY ./ /app/

ENTRYPOINT ["npm", "start", "--host", "0.0.0.0"]
