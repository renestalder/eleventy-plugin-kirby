FROM node:20-alpine

ARG NODE_ENV=development
ARG BUILD_ENV=local

ENV NODE_ENV=${NODE_ENV}
ENV BUILD_ENV=${BUILD_ENV}

ENV NPM_PACKAGE_NAME=${NPM_PACKAGE_NAME}

WORKDIR /app

COPY package*.json ./
# RUN if [ -f "package-lock.json" ] ; then npm ci --cache .npm --prefer-offline ; else npm i --cache .npm --prefer-offline ; fi
# RUN pwd
# RUN ls

RUN mkdir -p demo/11ty-web-frontend
COPY demo/11ty-web-frontend/package*.json demo/11ty-web-frontend/

#COPY scripts/npm-install.sh /
#RUN ls -all
#RUN chmod +x ./npm-install.sh
ENTRYPOINT \
  cd /app && pwd && \
  if [ -f "package-lock.json" ] ; then npm ci --cache .npm --prefer-offline ; else npm i --cache .npm --prefer-offline ; fi && \
  ls -all && \
  cd /app/demo/11ty-web-frontend && pwd && \
  if [ -f "package-lock.json" ] ; then npm ci --cache .npm --prefer-offline ; else npm i --cache .npm --prefer-offline ; fi && \
  npm run serve
# CMD ["/npm-install.sh"]


# RUN npm link ..${PLUGIN_DIR}
# RUN if [ -f "package-lock.json" ] ; then npm ci --cache .npm --prefer-offline ; else npm i --cache .npm --prefer-offline ; fi
# RUN pwd
# RUN ls