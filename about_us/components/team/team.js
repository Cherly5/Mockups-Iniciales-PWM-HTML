async function loadTeamPage(jsonFilePath) {
    try {
        const response = await fetch(jsonFilePath);
        if (!response.ok) {
            throw new Error("No se pudo cargar el archivo JSON");
        }

        const data = await response.json();

        // Actualizar la sección de título
        const headingElement = document.getElementById("section-heading");
        const subheadingElement = document.getElementById("section-subheading");
        const descriptionElement = document.getElementById("section-description");

        if (headingElement) headingElement.textContent = data.sectionTitle.heading;
        if (subheadingElement) subheadingElement.textContent = data.sectionTitle.subheading;
        if (descriptionElement) descriptionElement.textContent = data.sectionTitle.description;

        // Actualizar los miembros del equipo
        const teamContainer = document.querySelector(".thq-grid-4"); // Clase para el contenedor de miembros
        if (teamContainer) {
            teamContainer.innerHTML = ""; // Limpiar contenido existente

            data.teamMembers.forEach((member) => {
                const memberCard = `
          <div class="team-card">
            <img
              alt="${member.name}"
              src="${member.imageSrc}"
              class="team-placeholder-image1 thq-img-round thq-img-ratio-1-1"
            />
            <div class="team-content13">
              <div class="team-title1">
                <span class="team-member-name thq-body-small">${member.name}</span>
                <span class="thq-body-small">${member.title}</span>
              </div>
              <span class="thq-body-small">${member.description}</span>
            </div>
            <div class="team-social-icons1">
              ${member.socialIcons
                    .map(
                        (icon) =>
                            `<svg class="thq-icon-small"><use href="#${icon}"></use></svg>`
                    )
                    .join("")}
            </div>
          </div>
        `;
                teamContainer.insertAdjacentHTML("beforeend", memberCard);
            });
        }
    } catch (error) {
        console.error("Error al cargar el JSON:", error);
    }
}

// Llamar al método al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    loadTeamPage(getProjectRoot() + "JSON/team.json");
});
