function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

// carrossel banda
const images = [
    "/assets/carrossel/sem-2.jpeg",
    "/assets/carrossel/sem-4.jpeg",
    "/assets/carrossel/sem-5-1.jpeg",
    "/assets/carrossel/sem-1.jpeg"
];

const imageElement = document.getElementById("carousel-image");
let currentIndex = 0;

function showImage(index) {
    imageElement.style.opacity = 0;
    setTimeout(() => {
        imageElement.src = images[index];
        imageElement.style.opacity = 1;
    }, 300);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

setInterval(nextSlide, 4000);

const equipe = [
    {
        "nome": "Luís Carneiro",
        "funcao": "Diretor & Presidente",
        "descricao": "Músico, educador e líder cultural, Luis Carneiro é o coração por trás da Orquestra e Banda Som & Movimento. À frente da LC - Produções, atua na gestão e produção de eventos musicais, trazendo inovação e excelência para cada projeto. Com mais de 20 anos de experiência na música e 12 anos dedicados à produção cultural, Luiz transforma cada apresentação em uma experiência única e inesquecível.",
        "foto": "./assets/equipe/luiscarneiro.png"
    },
    {
        "nome": "Kadú Bear",
        "funcao": "Vocalita",
        "descricao": "Apresentamos o coração da nossa música, nosso vocalista, Kadú Bear, que traz vida às letras com sua voz poderosa. Cantor de vários estilos musicais passou por diversas bandas de renome como o Forró da Malu, grupo Sol Menores, entre outros, atualmente compõe a Orquestra e Banda Som & Movimento, porém, pretende lançar um álbum e fazer carreira solo.",
        "foto": "./assets/equipe/kadubear.png"
    },
    {
        "nome": "Luciano Guapo",
        "funcao": "Baixista",
        "descricao": "O nosso baixista Luciano Guapo, começou a tocar aos quinze (15) anos de idade e logo se apaixonou pelo baixo ao ouvir Ginger Baker, Eric Clapton, dentre outros. Ele aperfeiçoou suas habilidades musicais frequentando o Conservatório Pernambucano de Música, além das experiências adquiridas com os estilos musicais de cada banda por onde passou, desta forma, enriquece nossa sonoridade com grooves cativantes.",
        "foto": "./assets/equipe/lucianoguapo.png"
    },
    {
        "nome": "Edvaldo Silva",
        "funcao": "Guitarrista",
        "descricao": "Nosso guitarrista pegou sua primeira guitarra aos doze (12) anos de idade e nunca mais olhou para trás. Influenciado pelo famoso guitarrista ‘Jimi Hendrix’, ele aperfeiçoou seu talento nos estudos da guitarra e nas bandas pelas quais passou. Edvaldo Silva é um excelente guitarrista e vocalista, com uma vasta experiência no meio artístico musical.",
        "foto": "./assets/equipe/edvaldosilva.png"
    },
    {
        "nome": "Bruno Araújo",
        "funcao": "Baterista",
        "descricao": "Na bateria temos Bruninho que anteriormente tocava saxofone alto, daí migrou para percussão, e hoje toca bateria, sua trajetória musical começou aos 11 anos no saxofone, ao ver o baterista Ginger Baker da banda Cream, e outros como João Barone dos Paralamas do Sucesso tomou-os como inspiração influente. Sua trajetória inclui passagem por bandas marciais e musicais como experiências anteriores, ele traz uma energia contagiante para os nossos shows. Bruninho além da bateria também toca surdo, caixa e outros instrumentos de percussão.",
        "foto": "./assets/equipe/bruno.png"
    },
    {
        "nome": "Eduardo José",
        "funcao": "Percussionista",
        "descricao": "No surdo temos o talentoso percussionista, conhecido por sua habilidade com o surdo, assim como com outros instrumentos de percussão. Com mais de dez anos de experiência, Eduardo José traz um som vibrante e contagiante que dá vida a ritmos de frevo, samba e outros estilos brasileiros. Ele já se apresentou em diversos eventos culturais, compartilhando palco com grandes nomes da música. Eduardo José também conhecido com ‘Jacaré’ também toca bateria em grade estilo.",
        "foto": "./assets/equipe/eduardojose.png"
    },
    {
        "nome": "Hercílio Jr.",
        "funcao": "Maestro",
        "descricao": "Agora apresentamos o Maestro Hercílio Jr., nosso trompetista, que traz brilho e potência às nossas músicas. Começou sua jornada musical aos treze (13) anos de idade, inspirado pelos toques das bandas, ingressou na Filarmônica da escola Prof. cândido Duarte, passou pelo surdo, caixa, corneta e então o trompete, desenvolveu habilidade e experiência participando de diversas bandas. Mais tarde ingressou no Centro de Criatividade Musical e tirou o Curso de Formação Técnica em Regência Coral e Instrumental, hoje também atua como Produtor Cultural e Músico Trompetista. Suas habilidades adiciona uma energia vibrante à nossa sonoridade.",
        "foto": "./assets/equipe/herciliojr.png"
    },
    {
        "nome": "Elinaldo Martins",
        "funcao": "Trombonista",
        "descricao": "Em seguida temos Elinaldo Martins, nosso trombonista, cuja profundidade e riqueza de som elevam nossas composições. Elinaldo começou a tocar aos dezesseis (16) anos na banda o colégio no qual estudou, depois ingressou no Conservatório Pernambucano de Música onde foi influenciado anos depois a prestar concurso para a banda militar, sua trajetória inclui as experiências vivenciadas através das diversas bandas com estilos diferentes, o mesmo identificou-se com a Orquestra e Banda Som & Movimento pelo seu repertório variado que vai do frevo ao samba e outros estilos.",
        "foto": "./assets/equipe/elinaldomartins.png"
    },
    {
        "nome": "Jorge Darllan",
        "funcao": "Saxofonista",
        "descricao": "Temos também no saxofone alto o mais novo componente da Orquestra e Banda Som & Movimento, é o jovem aprendiz Jorge Darllan, sua jornada musical começou no ILC – Instituto Luis Carneiro onde aprendeu suas primeiras notas musicais no Clarinete, a vontade de aprender foi tamanha que rapidamente se desenvolveu e ingressou no saxofone com o ímpeto de tocar para ganhar seu cachê. Jorge Darllan desenvolveu novas habilidades no sax que, ao tocar nos traz melodias envolventes, enriquecendo nosso reportório.",
        "foto": "./assets/equipe/perfil-jorgedarllan.png"
    },
    {
        "nome": "Everton Bispo",
        "funcao": "Saxofonista Tenor",
        "descricao": "Assim apresentamos mais um da família do saxofone, é o sax tenor, Everton Bispo que começou sua trajetória musical aos onze (11) anos, foi aluno da Escola da Polícia Milita do Recife, acompanha o maestro Bispo seu pai nas atividades musicais, sua iniciação musical foi no ILC – Instituto Luis Carneiro com o instrumento de clarineta, depois migrou para o tenor, hoje estuda e toca com ambos, seu sonho é fazer parte da Banda da Polícia Militar. Enquanto isso, já experienciou outros grupos musicais, atualmente é o saxofonista tenor da Orquestra e Banda Som & Movimento.",
        "foto": "./assets/equipe/evertonbispo.png"
    }
];

const container = document.getElementById("membroCarousel");

equipe.forEach(membro => {
    const membroContent = document.createElement("div");
    membroContent.classList.add("membro-content");

    membroContent.innerHTML = `
            <div class="membro">
                <img src="${membro.foto}" alt="Foto de ${membro.nome}" />
                <div class="membro-texto">
                    <h2>${membro.nome} - ${membro.funcao}</h2>
                    <p>${membro.descricao}</p>
                </div>
            </div>
        `;

    container.appendChild(membroContent);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

function toWhatsApp() {
    window.open("https://wa.me/5581979085820?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20LCprodu%C3%A7%C3%B5es", "_blank")
}
