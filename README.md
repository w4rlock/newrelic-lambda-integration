## New Relic Integracion usando Lambda Extension
## CONTEXTO
Lambda extension es una nueva característica anunciada para AWS Lambda que permite mayor control a través de herramientas
de monitoreo, observabilidad, seguridad, y gobernanza durante el ciclo de vida de tus funciones lambda.
Con esta herramienta puedes integrar de forma más rápida diversas herramientas de terceros o incluso el tuyo.

Una extensión externa se ejecuta como un proceso independiente en el entorno de ejecución y continúa ejecutándose después de que
la invocación de la función se procese completamente. Dado que las extensiones se ejecutan como procesos separados,
puede escribirlas en un lenguaje diferente al de la función.

Una extensión interna se ejecuta como parte del proceso de tiempo de ejecución. La función accede a extensiones internas mediante el uso de “wrapper scripts”

## DETALLES TECNICOS
La integracion se hace mediante el uso de lambda layer, dentro del layer tiene la extension y toda la logica para el
envio de metricas por lo que no es necesario realizar cambios en el codigo de la aplicacion.
Solo basta con configurar un secreto con la licencia en aws secret manager y darle
permiso al rol de la lambda para leer este secreto


## DEPLOYANDO EL EJEMPLO
```bash
$ # IMPORTANTE VERIFIQUE SUS CREDENCIALES PARA AWS-CLI
$ npm i -g serverless
$ npm install
$ serverless deploy --stage stg

```


## REFERENCES
https://github.com/newrelic/newrelic-lambda-extension
