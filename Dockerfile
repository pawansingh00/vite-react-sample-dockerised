FROM node:16.14.2
EXPOSE 5173

# RUN git clone https://github.com/pawansingh00/vite-react-sample-dockerised.git
COPY . /vite-react-sample-dockerised

WORKDIR /vite-react-sample-dockerised
RUN cd /vite-react-sample-dockerised
RUN npm install
