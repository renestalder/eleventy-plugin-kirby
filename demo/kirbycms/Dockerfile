# dev-stage
FROM webdevops/php-apache-dev:8.0 AS dev-stage

WORKDIR /app

COPY composer.* ./

CMD ["sh", "-c", "composer install --prefer-dist && supervisord"]

# production-stage
FROM webdevops/php-apache-dev:8.0 AS prod-stage

ARG BUILD_ENV=local
ENV BUILD_ENV=${BUILD_ENV}

WORKDIR /app

COPY composer.* ./

RUN composer install --prefer-dist

RUN if [ "$BUILD_ENV" = "ci" ] ; then echo "CI environment, moving dependencies to /tmp folder." ; fi 
RUN if [ "$BUILD_ENV" = "ci" ] ; then mkdir -p /tmp/kirbycms && cp -r vendor /tmp/kirbycms ; fi
RUN if [ "$BUILD_ENV" = "ci" ] ; then mkdir -p /tmp/kirbycms && cp -r kirby /tmp/kirbycms ; fi
RUN if [ "$BUILD_ENV" = "ci" ] ; then mkdir -p /tmp/kirbycms/site && cp -r site/plugins /tmp/kirbycms/site ; fi