function loadContent() {

    const data = {
        "image": "https://images.unsplash.com/photo-1506459225024-1428097a7e18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        "tabs": [
            { "title": "Quality Ingredients", "text": "We source the freshest ingredients for our recipes" },
            { "title": "Explore Cuisines", "text": "Variety of cuisines to explore" },
            { "title": "Easy to Follow Recipes", "text": "Step-by-step instructions for each recipe" }
        ],
        "alignment": "text-right"
    };

    document.getElementById('dynamic-image').src = data.image;
    const container = document.getElementById('tabs-container');
    container.innerHTML = '';
    document.getElementById('content-container').className = `index_marketing-container2 thq-section-max-width ${data.alignment}`;

    data.tabs.forEach(tab => {
        const tabDiv = document.createElement('div');
        tabDiv.className = 'index_marketing-tab-horizontal';
        tabDiv.innerHTML = `
            <div class="index_marketing-divider-container">
              <div class="index_marketing-container"></div>
            </div>
            <div class="index_marketing-content">
              <h2 class="thq-heading-2">${tab.title}</h2>
              <span class="thq-body-small">${tab.text}</span>
            </div>
          `;
        container.appendChild(tabDiv);
    });
}