(function Game (){

    let player = document.getElementById('player');
    let total = document.getElementById('total');
    let up = document.getElementById('control-up');
    let down = document.getElementById('control-down');
    let affiliation = document.getElementById('affiliation');
    let life = 20;
    let affiliations = [
	{color:'red',url:'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fmagic.wizards.com%2Fsites%2Fmtg%2Ffiles%2Fimages%2Ffeatured%2FEN_Chandra_3_Gallery.jpg&f=1'},
	{color:'white',url:'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fmagic.wizards.com%2Fsites%2Fmtg%2Ffiles%2Fimages%2Fhero%2FDD20150216_icon_0.jpg&f=1'},
	{color:'blue',url:'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fmagic.wizards.com%2Fsites%2Fmtg%2Ffiles%2Fimages%2Ffeatured%2FEN_Jace_8_Gallery.jpg&f=1'},
	{color:'black',url:'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fd1u5p3l4wpay3k.cloudfront.net%2Fmtgsalvation_gamepedia%2Fthumb%2F7%2F70%2FOb_Nixilis_Reignited.jpg%2F1200px-Ob_Nixilis_Reignited.jpg&f=1'},
	{color:'green',url:'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fmagic.wizards.com%2Fsites%2Fmtg%2Ffiles%2Fimages%2Ffeatured%2FEN_Garruk_4_Gallery.jpg&f=1'}
    ];

    function renderLife() {
	total.innerHTML = life;
    }

    function inc() {
	life++;
	renderLife();
    }

    function dec() {
	life--;
	renderLife();
    }

    renderLife();
    up.addEventListener('click',inc);
    down.addEventListener('click',dec);

    affiliations.map((devotee) => {
	let tile = document.createElement('div');
	tile.className = 'tile';
	tile.style.backgroundColor = devotee.color;
	tile.addEventListener('click',() => player.style.backgroundImage = `url(${devotee.url})`);
	affiliation.append(tile);
    });
})();
