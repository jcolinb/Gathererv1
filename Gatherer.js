(function Game (){

    let player = document.getElementById('player');
    let total = document.getElementById('total');
    let up = document.getElementById('control-up');
    let down = document.getElementById('control-down');
    let infectCount = document.getElementById('infect');
    let affiliation = document.getElementById('affiliation');
    let life = 20;
    let infect = 0;
    let affiliations = [
	{color:'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fpre00.deviantart.net%2F48aa%2Fth%2Fpre%2Ff%2F2014%2F074%2F5%2Fe%2Fmagic__the_gathering_red_mana_symbol_neon_wp_by_morganrlewis-d7aaqiy.png&f=1',
	 url:'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fmagic.wizards.com%2Fsites%2Fmtg%2Ffiles%2Fimages%2Ffeatured%2FEN_Chandra_3_Gallery.jpg&f=1'},
	{color:'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fpre02.deviantart.net%2Fa6ff%2Fth%2Fpre%2Ff%2F2014%2F074%2Fd%2Fe%2Fmagic__the_gathering_white_mana_symbol_neon_wp_by_morganrlewis-d7aar51.png&f=1',
	 url:'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fmagic.wizards.com%2Fsites%2Fmtg%2Ffiles%2Fimages%2Fhero%2FDD20150216_icon_0.jpg&f=1'},
	{color:'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Forig00.deviantart.net%2F90ed%2Ff%2F2014%2F074%2F3%2F8%2Fmagic__the_gathering_blue_mana_symbol_neon_wp_by_morganrlewis-d7aapes.png&f=1',
	 url:'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fmagic.wizards.com%2Fsites%2Fmtg%2Ffiles%2Fimages%2Ffeatured%2FEN_Jace_8_Gallery.jpg&f=1'},
	{color:'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Forig00.deviantart.net%2Ff8cf%2Ff%2F2014%2F074%2F7%2F1%2Fmagic__the_gathering_black_mana_symbol_neon_wp_by_morganrlewis-d7aaovs.png&f=1',
	 url:'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fd1u5p3l4wpay3k.cloudfront.net%2Fmtgsalvation_gamepedia%2Fthumb%2F7%2F70%2FOb_Nixilis_Reignited.jpg%2F1200px-Ob_Nixilis_Reignited.jpg&f=1'},
	{color:'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Forig11.deviantart.net%2Fbe9f%2Ff%2F2014%2F074%2Fc%2F4%2Fmagic__the_gathering_green_mana_symbol_neon_wp_by_morganrlewis-d7aapze.png&f=1',
	 url:'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fmagic.wizards.com%2Fsites%2Fmtg%2Ffiles%2Fimages%2Ffeatured%2FEN_Garruk_4_Gallery.jpg&f=1'}
    ];

    function renderLife() {
	total.innerHTML = life;
    }

    function renderInfect() {
	infectCount.innerHTML = infect;	
    }
    
    function inc() {
	life++;
	renderLife();
    }

    function dec() {
	if (life>1) {
	    life--;
	    renderLife();
	}
	else {
	    life='DED';
	    renderLife();	    
	}
    }

    function infectUp() {
	if (infect<9) {
	    infect++;
	    renderInfect();
	}
	else {
	    life = 'DED';
	    renderLife();
	}
    }

    renderLife();
    renderInfect();
    up.addEventListener('click',inc);
    down.addEventListener('click',dec);
    infectCount.addEventListener('click',infectUp);
    
    affiliations.map((devotee) => {
	let tile = document.createElement('div');
	tile.className = 'tile';
	tile.style.backgroundImage = `url(${devotee.color})`;
	tile.addEventListener('click',() => player.style.backgroundImage = `url(${devotee.url})`);
	affiliation.append(tile);
    });
})();
