async function loadTeamPage(jsonFilePath) {
    fetch(jsonFilePath).then((res) => res.json()).then((data) => {
        // Actualizar la sección de título
        const headingElement = document.getElementById("team-heading");
        const subheadingElement = document.getElementById("team-subheading");
        const descriptionElement = document.getElementById("team-description");

        if (headingElement) headingElement.textContent = data.title.heading;
        if (subheadingElement) subheadingElement.textContent = data.title.subheading;
        if (descriptionElement) descriptionElement.textContent = data.title.description;

        // Actualizar los miembros del equipo
        const team = document.getElementById("team-members"); // Clase para el contenedor de miembros
        const template = team.querySelector('template[id=team-member-card]');
        if (team) {
            data.members.forEach((member) => {
                const clone = document.importNode(template.content,true);
                const card = clone.querySelector(".team-member-card");
                const img = card.querySelector("img");
                const name = card.querySelector(".team-member-name");
                const job = card.querySelector(".team-member-job");
                const description = card.querySelector(".team-member-description");
                const icons = card.querySelector(".team-member-icons");

                img.alt = member.name;
                img.src = member.image;
                name.textContent = member.name;
                job.textContent = member.job;
                description.textContent = member.description;
                member.icons.forEach(icon => {
                    icons.appendChild(
                        document.importNode(
                            team.querySelector("#"+icon).content,
                            true).querySelector("svg")
                    );
                });
                team.appendChild(card)
            });
        }
    })
}

loadTeamPage("/JSON/team.json").catch( (error) => {console.error("Error al cargar el JSON:", error);});

