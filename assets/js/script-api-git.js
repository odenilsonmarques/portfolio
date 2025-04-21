
const username = "odenilsonmarques";
const selectedRepos = [
    "germanuslub",
    "app-api-doe-sangue",
    "sistema_financeiro",
    "to_do_list",
    "app-stock-flow",
    "taxaambiental",
];

const repoContainer = document.getElementById("repos");

selectedRepos.forEach(repoName => {
    fetch(`https://api.github.com/repos/${username}/${repoName}`)
        .then(res => res.json())
        .then(repo => {
            repoContainer.innerHTML += `
            <div class="col-md-4 mb-4">
              <div class="card bg-dark text-white h-100">
                <div class="card-body">
                  <h5 class="card-title">${repo.name}</h5>
                  <p class="card-text">${repo.description || "Sem descrição."}</p>
                  <a href="${repo.html_url}" target="_blank" class="btn btn-outline-light btn-sm mt-2">Ver no GitHub</a>
                </div>
              </div>
            </div>
          `;
        })
        .catch(err => console.error(`Erro ao carregar ${repoName}:`, err));
});

