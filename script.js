const repo = document.getElementById('repo')
const repoBtn = document.getElementById('repoBtn')

repoBtn.addEventListener('click', generateRepo)
generateRepo()

function generateRepo() {
    fetch('https://api.github.com/search/repositories?q=language:python&sort=stars', {
        headers : {'Accept': 'application/vnd.github.v3+json'}
    }).then(response => response.json()).then(data => {
        let repoEl = data['items']
        for(let element of repoEl) {
            repo.innerHTML = element['owner']['repos_url']
        } 
    })
}