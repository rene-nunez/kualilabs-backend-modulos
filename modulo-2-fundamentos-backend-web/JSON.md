# JSON

JavaScript Object Notation es un formato de texto ligero para el intercambio de datos. Se ha consolidado como el estándar de la web para la comunicación entre aplicaciones a través del protocolo HTTP, debido a su simplicidad y su naturaleza independiente del lenguaje.

## Reglas de sintaxis

Para que un archivo `.json` sea válido, debe respetar estrictamente las siguientes reglas:

- **Delimitadores:**
    - Objetos: `{ }` (colecciones de pares clave-valor).
    - Arreglos: `[ ]` (listas ordenadas de valores).
- **Comillas:** las claves (keys) y los valores de tipo texto deben usar comillas dobles (`""`).
- **Separación:** los elementos se separan por comas (`,`) y las claves de sus valores por dos puntos (`:`).
- **Restricción final:** no se permite el uso de comas al final del último elemento (trailing commas).

## Tipos de datos

| Tipo | Ejemplo |
| :--- | :--- |
|String|`"James Sunderland"`|
|Number|`29` o `3.14`|
|Boolean|`true` o `false`|
|Null|`null`|
|Array|`["Combat", "Investigation"]`|
|Object|`{"city": "Silent Hill"}`|

## JSON y objetos de JavaScript

Aunque JSON nace de la sintaxis de JavaScript, existen diferencias críticas al trabajar con ellos:

|Característica|JSON|Objeto JavaScript|
|:---|:---|:---|
|Claves|Siempre con comillas dobles|Comillas opcionales|
|Coma final|Error de sintaxis|Permitida|
|Funciones|No permitidas|Permitidas (métodos)|
|Undefined|No soportado|Soportado|

### Métodos de Conversión en JavaScript

- `JSON.stringify(obj)`: transforma un objeto JavaScript a texto JSON (para enviar datos).
- `JSON.parse(texto)`: transforma texto JSON a un objeto JavaScript (para leer datos recibidos).

## Estructura de un JSON

Ejemplo de un objeto JSON que integra anidación y arreglos:

```json
{
  "firstname": "James",
  "lastname": "Sunderland",
  "age": 29,
  "skills": [
    "Combat",
    "Investigation",
    "Problem-Solving"
  ],
  "location": {
    "street": "12 Lakeview Drive",
    "city": "Silent Hill",
    "state": "Maine"
  },
  "married": false,
  "friends": [
    { "firstname": "Joe", "lastname": "Brown" },
    { "firstname": "Chris", "lastname": "Payne" }
  ]
}
```

## Referencias
- [Documentación](https://www.json.org/json-es.html)
- [Tutorial básico](https://www.youtube.com/watch?v=r4MLHHLctKw)