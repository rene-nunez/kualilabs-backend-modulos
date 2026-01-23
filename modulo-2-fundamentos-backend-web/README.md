# Módulo 2: Fundamentos de backend y la web

Responder a las siguientes preguntas:

## Conceptos

### ¿Qué es un servidor?
Es un sistema informático que proporciona servicios, recursos o información en respuesta a las peticiones de otros dispositivos, denominados clientes, a través de una red.

### Cliente vs Servidor

- **Cliente**: es quien genera una petición solicitando algo al servidor.
- **Servidor**: es quien escucha y responde a las solicitudes del cliente.

### ¿Qué es una API?
API (Application Programming Interface) es una interfaz que expone funciones o servicios de una aplicación para que otras aplicaciones puedan utilizarlos, especificando los métodos, formatos de datos y protocolos de comunicación.  

Esto permite automatizar la interacción entre sistemas y oculta la complejidad interna, haciendo posible la comunicación entre diferentes aplicaciones sin necesidad de conocer su funcionamiento interno.

## HTTP en profundidad

HTTP (Hypertext Transfer Protocol) es un protocolo de la capa de aplicación que permite la comunicación y transferencia de datos, como HTML, imágenes, videos, etc. Fue diseñado originalmente para la comunicación entre un navegador (cliente) y un servidor. HTTP sigue el modelo clásico cliente–servidor: el cliente establece una conexión con el servidor, envía una petición y espera recibir la respuesta correspondiente.  

### Request

Una request es el mensaje que el cliente envía al servidor para pedir un recurso.

#### Métodos HTTP

HTTP define un conjunto de métodos de solicitud para indicar el propósito de la solicitud y qué se espera si esta se realiza correctamente. Estos métodos de solicitud a veces se denominan *verbos HTTP*.

|Método|Descripción|
|:---|:---|
|GET|Solicita datos de un recurso|
|POST|Envía datos al servidor para crear un recurso o procesar información|
|PUT|Reemplaza completamente un recurso existente con el contenido de la solicitud|
|PATCH|Actualiza parcialmente un recurso|
|DELETE|Elimina el recurso especificado|
|HEAD|Similar a GET, pero solo solicita los encabezados, sin un cuerpo de respuesta|
|OPTIONS|Devuelve los métodos HTTP permitidos para un recurso destino|
|CONNECT|Establece un túnel hacia el servidor|
|TRACE|Verifica la ruta que sigue un mensaje hasta el recurso de destino (raramente usado por seguridad)|

### Response

La response es el mensaje que el servidor devuelve al cliente.

#### Códigos de estado

Los códigos de estado HTTP son mensajes de tres dígitos que un servidor web envía a un navegador para indicar el resultado de una solicitud.

Los códigos se agrupan en categorías según el primer dígito:

|Rango|Categoría|Descripción|
|:---|:---|:---|
|1xx|Información|La solicitud fue recibida, pero se requiere más acción del cliente|
|2xx|Éxito|La solicitud se procesó correctamente|
|3xx|Redirección|Se requiere que el cliente tome medidas adicionales; algunos navegadores redireccionan automáticamente|
|4xx|Error del cliente|La solicitud tiene un problema por parte del cliente|
|5xx|Error del servidor|La solicitud no se pudo completar debido a un error en el servidor|

Códigos de estado HTTP más comunes:

|Código|Categoría|Descripción|
|:---|:---|:---|
|200|Éxito|OK (Solicitud procesada correctamente)|
|201|Éxito|Created (Se ha creado un recurso nuevo)|
|204|Éxito|No Content (Solicitud procesada sin contenido)|
|301|Redirección|Moved Permanently (Recurso ha cambiado de URL)|
|302|Redirección|Found (Redirección temporal a otra URL)|
|304|Redirección|Not Modified (El recurso no ha cambiado)|
|400|Error del cliente|Bad Request (Solicitud inválida)|
|401|Error del cliente|Unauthorized (Se requiere autenticación)|
|403|Error del cliente|Forbidden (Acceso prohibido)|
|404|Error del cliente|Not Found (Recurso no existe)|
|405|Error del cliente|Method Not Allowed (Método HTTP no permitido)|
|408|Error del cliente|Request Timeout (Tiempo de espera agotado)|
|500|Error del servidor|Internal Server Error (Error genérico del servidor)|
|501|Error del servidor|Not Implemented (Funcionalidad no implementada)|
|502|Error del servidor|Bad Gateway (Respuesta inválida de otro servidor)|
|503|Error del servidor|Service Unavailable (Servicio temporalmente caído)|
|504|Error del servidor|Gateway Timeout (Tiempo de espera del gateway)|

### SOAP, XML y contexto histórico

**XML (eXtensible Markup Language)** es un lenguaje de marcado estandarizado por el W3C a finales de la década de 1990, diseñado para estructurar y transportar datos entre sistemas sin importar el lenguaje de programación.

**SOAP (Simple Object Access Protocol)** es un protocolo de comunicación que utiliza XML para el intercambio de mensajes entre aplicaciones distribuidas. Fue estandarizado por el W3C en el año 2000 y adoptado principalmente en entornos empresariales. Una API SOAP corresponde al conjunto de servicios expuestos mediante dicho protocolo, generalmente definidos a través de un contrato formal llamado WSDL.

Durante los años 2000, SOAP fue ampliamente utilizado en servicios web. Posteriormente, arquitecturas como **REST** y formatos como **JSON** ganaron popularidad por su simplicidad y ligereza. Actualmente, SOAP continúa utilizándose en sistemas legacy y en contextos que requieren alta estandarización, seguridad y transacciones complejas.

En este contexto, **JSON (JavaScript Object Notation)** surge como un formato ligero de intercambio de datos y se consolida como el estándar para enviar información entre sistemas a través de HTTP. En el fichero [JSON.md](JSON.md) se describen con mayor detalle sus características, reglas y sintaxis.

## Referencias

- [What are APIs?](https://mockoon.com/articles/api-guide-what-are-api/)
- [List of HTTP request methods](https://mockoon.com/articles/list-http-request-methods/)
- [List of HTTP status codes](https://mockoon.com/articles/list-http-status-codes/)