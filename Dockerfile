FROM mhart/alpine-node:14

ARG NODE_ENV=development
ARG BUILD_ENV=local
ARG PROJECT_DIR="/app"
ARG PLUGIN_DIR="/plugin"

ENV NODE_ENV=${NODE_ENV}
ENV BUILD_ENV=${BUILD_ENV}
ENV PROJECT_DIR=${PROJECT_DIR}

ENV NPM_PACKAGE_NAME=${NPM_PACKAGE_NAME}

COPY package*.json $PLUGIN_DIR/
# RUN if [ -f "package-lock.json" ] ; then npm ci --cache .npm --prefer-offline ; else npm i --cache .npm --prefer-offline ; fi
# RUN pwd
# RUN ls

COPY demo/11ty-web-frontend/package*.json $PROJECT_DIR/

#COPY scripts/npm-install.sh /
#RUN ls -all
#RUN chmod +x ./npm-install.sh
ENTRYPOINT \
  cd /plugin && pwd && \
  if [ -f "package-lock.json" ] ; then npm ci --cache .npm --prefer-offline ; else npm i --cache .npm --prefer-offline ; fi && \
  cd /app && pwd && \
  npm link /plugin && \
  if [ -f "package-lock.json" ] ; then npm ci --cache .npm --prefer-offline ; else npm i --cache .npm --prefer-offline ; fi && \
  npm run serve
# CMD ["/npm-install.sh"]


# RUN npm link ..${PLUGIN_DIR}
# RUN if [ -f "package-lock.json" ] ; then npm ci --cache .npm --prefer-offline ; else npm i --cache .npm --prefer-offline ; fi
# RUN pwd
# RUN ls