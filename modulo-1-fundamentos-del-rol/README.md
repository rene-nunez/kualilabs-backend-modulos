# Módulo 1: Fundamentos del rol
Responder a las siguientes preguntas:

¿Qué es el backend?
El backend es el lado del servidor en el desarrollo web. Se encarga de manejar y procesar datos, además de gestionar su almacenamiento y recuperación, garantizando que el frontend reciba la información necesaria. En esta parte se trabaja con bases de datos, APIs y operaciones de datos.

¿Cuál es el rol de un desarrollador backend?
Se enfoca en crear y mantener los componentes del lado del servidor. Su tarea principal es desarrollar APIs, manejar operaciones con bases de datos y asegurar el correcto funcionamiento de la aplicación web. También puede encargarse de la integración con servicios en la nube, optimización del rendimiento, manejo del tráfico y escalabilidad del sistema, entre otras responsabilidades.

Relación del backend con:

Frontend: el backend actúa como intermediario entre la interfaz de usuario y los datos. El frontend solicita información o envía acciones del usuario, y el backend procesa esas solicitudes, aplica la lógica del servidor y devuelve las respuestas necesarias. De esta forma, el usuario interactúa con la interfaz sin necesidad de conocer cómo se procesan internamente los datos.

Bases de datos: el backend gestiona la comunicación con las bases de datos utilizando operaciones CRUD, asegurando su integridad, seguridad y correcto uso.

Producto: el backend se asegura de que las funcionalidades internas cumplan con los objetivos del negocio y estén definidas de acuerdo con el funcionamiento del producto.

Ejemplo del flujo desde frontend, backend y bases de datos (petición hasta respuesta)

Flujo de un usuario consultando su perfil:

Frontend: el usuario hace clic en "ver perfil" y el frontend envía una petición al backend.

Backend: recibe la solicitud, verifica que el usuario esté autenticado y consulta la base de datos para obtener la información del usuario.

Base de datos: devuelve al backend la información solicitada.

Backend: prepara la información y la envía al frontend en formato JSON.

Frontend: muestra los datos del usuario en la pantalla.

## Arquitectura web
Es la organización de los componentes de una aplicación web y cómo interactúan entre sí.

Tipos:

Arquitectura monolítica:
Modelo tradicional donde todos los elementos del software están unificados en un solo programa y una única base de datos. La interfaz, la lógica de negocio y el acceso a datos viajan juntos.

Caso de uso real:

Diferencia:

Arquitectura de microservicios:
La aplicación se divide en un conjunto de servicios pequeños e independientes que se comunican entre sí a través de protocolos como HTTP. Cada servicio se encarga de una función específica.

Caso de uso real:

Diferencia:

Arquitectura serverless (FaaS):
No requiere gestión de servidores. La lógica se divide en funciones individuales que se ejecutan solo cuando ocurre un evento específico. La infraestructura la gestiona automáticamente el proveedor de la nube.

Caso de uso real:

Diferencia: