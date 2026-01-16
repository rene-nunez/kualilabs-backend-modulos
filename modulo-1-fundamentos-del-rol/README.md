# Módulo 1: Fundamentos del rol

Responder a las siguientes preguntas:

## ¿Qué es el backend?

El backend es el lado del servidor en el desarrollo web. Se encarga de manejar y procesar datos, además de gestionar su almacenamiento y recuperación, garantizando que el frontend reciba la información correcta. En esta parte se trabaja con bases de datos, APIs y operaciones de datos.

## ¿Cuál es el rol de un desarrollador backend?

El desarrollador backend se enfoca en crear y mantener los componentes del servidor. Su tarea principal es desarrollar APIs, manejar operaciones con bases de datos y asegurar el correcto funcionamiento de la aplicación web. También puede encargarse de la integración con servicios en la nube, optimización del rendimiento, manejo del tráfico y escalabilidad del sistema, entre otras responsabilidades.

## Relación del backend con:

### Frontend

El backend actúa como intermediario entre la interfaz de usuario y los datos. El frontend solicita información o envía acciones del usuario, y el backend procesa esas solicitudes, aplica la lógica del servidor y devuelve las respuestas necesarias. De esta forma, el usuario interactúa con la interfaz sin conocer cómo se procesan internamente los datos.

### Bases de datos

El backend gestiona la comunicación con las bases de datos utilizando operaciones CRUD, asegurando su integridad, seguridad y correcto uso.

### Producto

El backend garantiza que las funcionalidades internas cumplan con los objetivos del negocio y estén definidas de acuerdo con el funcionamiento del producto.

## Ejemplo de flujo

**Usuario consultando su perfil:**

1. **Frontend:** el usuario hace clic en "ver perfil" y el frontend envía una petición al backend.
2. **Backend:** recibe la solicitud, verifica que el usuario esté autenticado y consulta la base de datos para obtener la información del usuario.
3. **Base de datos:** devuelve al backend la información solicitada.
4. **Backend:** prepara la información y la envía al frontend en formato JSON.
5. **Frontend:** muestra los datos del usuario en la pantalla.

## Arquitectura web

Es la organización de los componentes de una aplicación web y cómo interactúan entre sí.

### Tipos de arquitectura web

#### Arquitectura monolítica

Modelo tradicional donde todos los elementos del software están unificados en un solo programa y una única base de datos. La interfaz, la lógica de negocio y el acceso a datos viajan juntos.

**Caso de uso real:**
Twitter empezó como un monolito en sus inicios (2006–2008). Toda la lógica de publicación de tweets, gestión de usuarios y timeline estaba en una sola aplicación Ruby on Rails. Esto permitió a los desarrolladores moverse rápido y lanzar nuevas funciones sin preocuparse por la complejidad de múltiples servicios, hasta que el tráfico aumentó y necesitaron una nueva arquitectura web.

#### Arquitectura de microservicios

La aplicación se divide en un conjunto de servicios pequeños e independientes que se comunican entre sí a través de protocolos. Cada servicio se encarga de una función específica.

**Caso de uso real:**
Netflix solía tener una aplicación monolítica que servía streaming, recomendaciones y administración de usuarios. A medida que su base de usuarios creció, migraron a microservicios para escalar cada función de forma independiente: un servicio maneja el streaming, otro las recomendaciones y otro los pagos.

#### Arquitectura serverless (FaaS)

No requiere gestión de servidores. La lógica se divide en funciones individuales que se ejecutan solo cuando ocurre un evento específico. La infraestructura la gestiona automáticamente el proveedor de la nube.

**Caso de uso real:**
Coca-Cola utilizó una arquitectura serverless para su sistema de vending machines conectadas en ciertas campañas. Cada máquina envía eventos cuando se hace una compra o necesita mantenimiento, y estos eventos son procesados con AWS Lambda.

### Diferencias entre arquitecturas
|Arquitectura|Descripción|Ventajas|Desventajas|
|:---|:---|:---|:---|
|Monolítica|Todo el código y la base de datos se encuentran en una sola aplicación.|Fácil de desarrollar y mantener al inicio.|Difícil de escalar y mantener en proyectos grandes.|
|Microservicios|La aplicación se divide en servicios independientes que se comunican entre sí.|Escalabilidad y funcionamiento independiente de cada servicio.|Mayor complejidad en desarrollo y mantenimiento.|
|Serverless|Funciones que se ejecutan bajo demanda en la nube.|Escalabilidad automática; no requiere gestión de servidores.|Dependencia del proveedor de la nube.|