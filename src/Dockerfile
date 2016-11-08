# From nodejs
FROM node:6.9
MAINTAINER vi.nt "<ngtrieuvi92@gmail.com>"

# Install dependence library
RUN npm install -g nodemon

# make /app directory and set it as a volume
RUN mkdir /app
VOLUME /app
WORKDIR /app

# Set nodemon
 
CMD ["nodemon","-L","app.js"]