document.addEventListener('DOMContentLoaded', function() {
    function applyColors() {
        const cases = {
            'rj': 92,
            'sp': 86,
            'mg': 24,
            'es': 11,
            'go': 8,
            'pe': 5,
            'sc': 4,
            'ba': 1,
            'se': 1,
            'al': 1,
            'ms': 1,
            'rs': 1,
            'ma': 0,
            'pi': 0,
            'to': 0, 
            'ap': 0, 
            'pa': 0, 
            'am': 0, 
            'rr': 0, 
            'ro': 0, 
            'ac': 0, 
            'df': 0, 
            'mt': 0, 
            'ce': 0, 
            'rn': 0, 
            'pb': 0,
            'pr':0
        };

        function getColor(cases) {
            if (cases >= 90) return '#800000'; 
            if (cases >= 70) return '#990000';
            if (cases >= 50) return '#CC0000';
            if (cases >= 30) return '#FF3333';
            if (cases >= 10) return '#FF6666';
            if (cases > 0) return '#FF9999'; 
            return '#EFEFEF'; 
        }

        Object.keys(cases).forEach(stateId => {
            const element = document.getElementById(stateId);
            if (element) {
                element.setAttribute('fill', getColor(cases[stateId]));
            } else {
                console.log(`Elemento com ID '${stateId}' não encontrado.`);
            }
        });
    }

    // Função para carregar o SVG
    function loadSVG(url, containerId) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.getElementById(containerId).innerHTML = data;
                applyColors(); // Aplica as cores depois que o SVG for carregado
            })
            .catch(error => console.error('Erro ao carregar SVG:', error));
    }

    // Carregar o SVG no div com id "svg-container"
    loadSVG('/political.svg', 'svg-container');
});
