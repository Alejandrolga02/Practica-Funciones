'use strict';

window.addEventListener('DOMContentLoaded', () => {
	document.getElementById("btnCalcular").addEventListener('click', () => {
		// * Diseña una función que reciba como argumento un arreglo de valores enteros de 20 posiciones , regrese el valor promedio de los elementos del arreglo.
		const promedio = (array) => {
			let promedio = 0;
			array.forEach(item => promedio += item);
			return promedio = promedio / array.length;
		}

		// * Diseñe una función que reciba como argumento un arreglo de 20 valores numéricos enteros, y me regrese la cantidad de valores pares que existe en el arreglo
		const pares = (array) => {
			let pares = 0;
			array.forEach(item => {
				if (item % 2 === 0) {
					pares++;
				}
			});
			return pares;
		}

		// * Diseñe una función que reciba como argumento un arreglo de 20 valores numéricos enteros, ordene los valores del arreglo de mayor a menor.
		const ordenar = (array) => {
			let ordenado = array.slice();
			return ordenado.sort((a, b) => a - b);
		}

		// * Imprimir datos en el dom
		const imprimirDOM = (array, elemento) => {
			let content = "";
			array.forEach(item => {
				content += `<p>${item}</p>\n`;
			});
			elemento.innerHTML = content;
			elemento.style.display = "grid";
		}


		const randomArray = [];
		for (let i = 0; i < 20; i++) {
			randomArray.push(Math.floor(Math.random() * (100 - 1) + 1));
		}

		const promedioNumber = promedio(randomArray);
		const paresNumber = pares(randomArray);
		const ordenadoArray = ordenar(randomArray);
		document.getElementById('promedio').value = promedioNumber;
		document.getElementById('pares').value = paresNumber;
		document.getElementById("lblOriginal").style.display = "inline";
		document.getElementById("lblOrdenado").style.display = "inline";

		imprimirDOM(randomArray, document.getElementById("original"));
		imprimirDOM(ordenadoArray, document.getElementById("ordenado"));
	});
});