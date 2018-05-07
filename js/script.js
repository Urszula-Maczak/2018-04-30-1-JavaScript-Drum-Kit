window.addEventListener('keydown', function(e) {
	// console.log(e); // 1.po naciśnięciu klawisza na klawiarurze wyświetla KeyBorad Event z właściwościami w konsoli
	// console.log(e.keyCode); //2.po naciśnięciu z klawszy od A do L wyświetla przypisnay unikatowy kod
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //3.pobierany jest element audio który ma
	//atrybut data-key, który równy jest e.keyCode - a e.keyCode to pobranie unkatowego kodu dla poszeczególnego klawisza
	// console.log(audio);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); //7.pobierany jest element z html o klasie key,
	//który ma atrybut data-key, a on posiada właściwość keyCode, czylie.keyCode, a to oznacza, że ma przypisany
	//unikatowy kod dla poszczególnego klawisza
	//console.log(key); 
	if(!audio) return; //4.zatrzymuje funkcje
	audio.currentTime = 0; //6. jest dźwięk za każdy press
	audio.play(); //5.uruchamia dźwięki, ale nie za każdym naciśnięciem
	key.classList.add('playing'); //8.dodaliśmy dynamicznie klasę do elementu key, który w momencie press się 
	//powiększa zwolnionym tempie zmieniając kolor i nadając biały cień
});	
	function removeTransition (e) {
		if (e.propertyName !== 'transform') return; //11. pominąć to jeśli nie jest transform

		// console.log(this); // 12. odnosi się do elementów klasy .key, czyli do poszczególnego klawisza, bo jest 
		//powiązany z key.addEventListener
		this.classList.remove('playing'); // 13. powoduje to, że dodawana dynamicznie klasa 'playing' po sekundzie
		//zgodnie z ccs transition 1.07 s jest usuwana dynamicznie (sprawdz w konsoli)
	}

	const keys = document.querySelectorAll('.key'); //9. pobieram wszystkie key'e za pomocą selectorALL z elemntu klasy keys
	keys.forEach(key => key.addEventListener('transitionend', removeTransition)); //10. zastosuje na metodę forEach na każdy
	//10....element tablicy jakim jest keys, w którym są poszczególne key'e i mają przypisaną wartość. Metoda forEach 
	// wykonyje dostarczoną funckję tylko raz dla każdego elementu



// można uporządkować ten kod poprzez odłączenie funkcji od window.addEventListener('keydown', function(e),
// więć powstaje:
// function playsound (e) {
// 	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
// 	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
// 	if(!audio) return; 
// 	audio.currentTime = 0; 
// 	audio.play(); 
// 	key.classList.add('playing');
// a window.addEventListener('keydown') zjeżdza na sam dół (za forEach), zgodnie gdzie jest nasłuchiwanie
// dodana jest nazwa funkcji 'playsound' - window.addEventListener('keydown', playsound);

