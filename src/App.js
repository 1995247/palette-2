/*jslint esnext:true, browser:true*/
/**
 * @module App
 */
export default class App {
	/**
	 * Méthode principale. Sera typiquement appelée après le chargement de la page.
	 */
	static main() {
		//console.log("Je suis prêt");
		//document.getElementById("app").innerHTML = "Bonjour";
		var b, app, chat;
		app =  document.getElementById("app");
		b = document.createElement("b");
		app.appendChild(b);
		b.innerHTML = "bonne semaine";
		b.style.color = "red";
		b.style.transform = "rotate(45deg)";
		b.style.backgroundColor = "rgb(51,28,200)";
		b.classList.add ("temporaire");
		b.classList.add ("autre");
		app.classList.remove ("autre");
		chat = b.appendChild(document.createElement("img"));
		chat.setAttribute("src", "https://www.courrierinternational.com/sites/ci_master/files/styles/image_original_1280/public/assets/images/bengal-2042592_960_720.jpg?itok=2gdDKYqC")
		chat.setAttributeNode("width", "100");
		//document.body.innerHTML = "allo"

		var table, tbody, tr, td
		table = document.createElement("table");
		app.appendChild(table);
		table.setAttribute("border", "1");
		table.setAttribute("width", "50");
		table.setAttribute("height", "40");
		table.style.backgroundColor = "pink";
		

	}
	/**
	 * Méthode qui permet d'attendre le chargement de la page avant d'éxécuter le script principal
	 * @returns {Promise} La promesse qui sera résolue après chargement
	 */
	static load() {
		return new Promise(resolve => {
			window.addEventListener("load", () => {
				resolve();
			});
		});
	}
}
