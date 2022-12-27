FROM node:16.14.2
EXPOSE 5173

RUN git clone git@github.com:pawansingh00/vite-react-sample-dockerised.git
WORKDIR /vite-react-sample-dockerised
RUN cd /vite-react-sample-dockerised
RUN npm install
