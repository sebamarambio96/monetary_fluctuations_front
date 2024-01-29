# Documentación
Bienvenido a este pequeño proyecto de Laravel en el cual, a través de una API basada en Laravel, obtendremos información sobre la fluctuación del dólar en los años 2023 y 2024. Además, podremos guardar esta información en el estado de la aplicación para modificarla y observarla de manera dinámica.
# Instalación:
Para instalar el proyecto, solo debemos clonarlo, instalar las dependencias e iniciarlo. Para facilitar este proceso, puedes copiar los siguientes comandos:
```
git clone https://github.com/sebamarambio96/monetary_fluctuations_front.git
cd ./monetary_fluctuations_front
npm i
```
# ¡Comenzamos!
Para empezar, solo necesitamos iniciar el proyecto de forma local ejecutando este comando desde la carpeta raiz:
```
npm run dev
```
Alternativamente puedes generar la versión estatica del proyecto con 
```
npm run build
```
Como otra opción, si tienes el servidor encendido localmente puedes acceder directamente a este despliegue en netlify: 

https://currenflux.netlify.app/ 

# Estructura y Componentes:
A continuación, con el objetivo de facilitar la revisión del código resumiré la función que tiene cada uno de los principales carpetas y archivos.
| Nombre              | Definición                                           |
|-------------------|------------------------------------------------------|
| **context**       | Directorio que contiene archivos donde se configura el contexto `currencyContext`. |
| **services**      | Directorio que contiene los metodos necesarios para consultar la información a la API del backend. |
| **utils**         | Directorio que contiene funciones de utilidad relacionada con la fecha, tabla, gráfico y alertas. |
| **views**         | El directorio contiene los archivos correspondientes a los componentes (tabla y gráfico), el contenedor del panel de control y los diseños (barra de navegación y pie de página). |

# Manejo de Estado:
A continuación definiré los estados más importantes, para entender de mejor manera el proyecto:
| Variable/Función        | Definición                                                                                                                |
|-------------------------|---------------------------------------------------------------------------------------------------------------------------|
| **`rows`**               | Estado que almacena los datos para la tabla, utilizada por el componente `TableCurrency`.                                  |
| **`dataChartFiltered`**  | Estado que almacena los datos filtrados para el gráfico de líneas, utilizado por el componente `LineChart`.                |
| **`initialDate`**        | Estado que almacena la fecha inicial seleccionada por el usuario para filtrar los datos.                                   |
| **`endDate`**            | Estado que almacena la fecha final seleccionada por el usuario para filtrar los datos.                                     |
| **`handleEditClick`**    | Función que maneja el evento de clic en el botón de edición. Se utiliza para activar el modo de edición y proporcionar parámetros. |
| **`editMode`**           | Estado que indica si el componente está en modo de edición. Controla la visibilidad de los botones de edición. |
| **`editedValue`**        | Estado que almacena el valor actualmente editado. Se utiliza para mostrar el valor en la celda de entrada durante la edición. |
| **`editedId`**           | Estado que almacena el ID del elemento actualmente editado. Se utiliza para identificar y gestionar la edición en la tabla. |
| **`setEditedValue`**     | Función que actualiza el estado `editedValue`. Se utiliza para cambiar el valor actualmente editado durante la edición.     |
| **`setEditedId`**        | Función que actualiza el estado `editedId`. Se utiliza para cambiar el ID del elemento actualmente editado en la tabla.      |
| **`dataCurrency`**       | Estado perteneciente al contexto `currencyContext` que almacena los datos de la fluctuación de la moneda. Se utiliza para proporcionar datos a otros componentes por contexto. |
| **`setDataCurrency`**    | Función que actualiza el estado `dataCurrency`. Se utiliza para modificar los datos de la fluctuación de la moneda y generar re-renders.        |
| **`enqueueSnackbar`**    | Función de `useSnackbar` que se utiliza para mostrar notificaciones (snackbars) en la interfaz de usuario.                |


# Variables de entorno:
En nuestro archivo ```.env``` solo tenemos una variable llamada ```VITE_API_URL``` la cúal contiene la URL base correspondiente a la API del backend. En caso de desplegar el servidor solo se deberá cambiar la URL base para que funcione en la nube.
# Peticiones HTTP
Este proyecto accede a la API a través de la siguiente ruta:
```
${import.meta.env.VITE_API_URL}/get-currency-values/${currencyName}/?start_date=${startDate}&end_date=${endDate}
```
En la cúal por motivos del desafío se deja por defecto la fecha de inicio en 2023-01-01 y la fecha actual como la final. De está manera obtendrá todos los datos disponibles de los años 2023 y 2024, para luego guardarlo en el estado ```dataCurrency```.
# Dependencias:
| Dependencia                  | Versión     | Descripción                                                                                   |
|------------------------------|-------------|-----------------------------------------------------------------------------------------------|
| `@emotion/react`             | ^11.11.3    | Biblioteca para CSS en JavaScript, utilizada para escribir estilos de manera dinámica en aplicaciones React.                       |
| `@emotion/styled`            | ^11.11.0    | Extensión de `@emotion/react` que permite definir componentes estilizados en React.                                          |
| `@fontsource/roboto`         | ^5.0.8      | Paquete que proporciona la fuente Roboto para ser utilizada en la aplicación.                                                |
| `@mui/icons-material`        | ^5.15.6     | Iconos de Material-UI que se pueden utilizar en la aplicación.                                                              |
| `@mui/material`               | ^5.15.6     | Componentes y estilos de Material-UI para React, utilizados para la interfaz de usuario.                                      |
| `@mui/x-data-grid`           | ^6.19.2     | Componente de tabla avanzado para Material-UI.                                                                             |
| `chart.js`                   | ^4.4.1      | Biblioteca de gráficos para la creación de gráficos interactivos en la aplicación.                                          |
| `notistack`                  | ^3.0.1      | Biblioteca para mostrar notificaciones (snackbars) en React.                                                               |
| `react`                      | ^18.2.0     | Biblioteca principal de React para la construcción de interfaces de usuario.                                               |
| `react-chartjs-2`            | ^5.2.0      | Integración de Chart.js para React, utilizada para renderizar gráficos.                                                     |
| `react-dom`                  | ^18.2.0     | Biblioteca para interactuar con el DOM y renderizar componentes React.                                                      |
| `react-router-dom`           | ^6.21.3     | Biblioteca para la navegación en aplicaciones React, facilita la gestión de rutas y vistas.                                  |
| `eslint`                     | ^8.55.0     | Herramienta de linting para JavaScript y React, utilizada para mantener consistencia en el código y encontrar posibles errores. |
| `vite`                       | ^5.0.8      | Herramienta de desarrollo rápida para proyectos front-end, utilizada para construir y servir la aplicación.                   |
