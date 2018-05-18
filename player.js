function inscription () {
	var player = {
		xp: 100,
		pseudo: 'toto'
	}

	localStorage.setItem(player.pseudo, player)
	var player = parseInt(localStorage.getItem('toto'))
	player += 10
	localStorage.setItem('player', player)

	console.log(localStorage.getItem('toto'))
}