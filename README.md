This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

 ## Librerias usadas en el proyecto

 - react-google-maps 
 
  Libreria para renderizado del mapa y los markers.
 
 - react-places-autocomplete

  Libreria que me facilita la busqueda con ayuda y me retorna las coordenadas de la opción utilizada.

  - react-redux, redux

  Requisito del proyecto
    
  - redux-logger

  Libreria imprescindible cuando vas a trabajar con redux

## Parte Teórica del assessment

1. Que problemas detectas en la operación

Para empezar tenemos las clases StreamingService y DownloadService que no hacen absolutamente nada, ni añaden métodos ni propiedades.

La funcion getTotal() no es óptima ni escalable y no aplica los conceptos solid, si añadiera un nuevo tipo de contenido tendría que modificar esa función del usuario por estar demasiado acoplada


2. Propón una solución alternativa que corrija los problemas.

En mi opinió la solución óptima sería que MultimediaContent tubiera una única propiedad price y tener una clase StreamingContent y una clase DownloadContent que heredasen y sobrescribieran con su correspondiente precio, en vez de las dos propiedades de precio, además añadiria un método que fuera getPrice() que se encargara de checkear si es premium o no, y me devolviese el precio definitivo correcto.

No obstante como lo que se pedia era optimizar la funcion getTotal de la clase usuario y escribir su pseudocódigo, entiendo que esta no era la vertiente esperada.

Mi solución sencilla es añadir una propiedad type en StreamingService con valor 'streaming', y una propiedad type en DownloadService con valor 'download', y posteriormente utilizar esta propiedad para montar una variable dinámica y poder coger el precio correspondiente (streamingPrice, downloadPrice), sin necesidad de utilizar ningún condicional. Esto nos otorga una gran escalabilidad y desacoplamiento puesto que si añaden otro tipo de Servicio siguiendo la dinámica actual no deberemos retocar la función getTotal para nada y seguirá funcionando sin problemas.

EJ:
Si añadiesemos un WatchService por ejemplo, solo deberíamos añadir la propiedad type 'watch' en la clase y añadir la proppiedad watchPrice en MultimediaContent, y todo seguiria funcionando correctamente sin necesidad de modificar el código.

Así nos quedaría el metodo getTotal() de la clase RegisteredUser

getTotal(){
	let total = 0;

	this.services.forEach(service, index => {
		const multimediaContent = service.getMultimediaContent();
		const price = multimediaContent[`${this.service.type}Price`];
		const isPremiumContent = typeof multimediaContent === PremiumContent;
		
		total += isPremiumContent ? price + multimediaContent.additionalFee : price;
	});

	return total;
}