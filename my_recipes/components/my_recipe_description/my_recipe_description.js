function addDynamicContent() {
    const buttonsContainer = document.querySelector(".my_recipe_description-container2");
    const sectionsContainer = document.querySelector(".my_recipe_description-container3");

    const data = {
        "buttons": [
            { "text": "Get Cooking Now!", "class": "thq-button-filled" },
            { "text": "Privacy statement", "class": "thq-button-outline" },
            { "text": "Refund Policy", "class": "thq-button-outline" }
        ],
        "sections": [
            {
                "title": "Terms of service",
                "description": "Lorem ipsum dolor sit amet. Vel dolores illum est\n" +
                    "aperiam quis nam voluptatem quia et omnis autem qui\n" +
                    "dolore ullam sed fugiat cumque! Qui accusamus assumenda\n" +
                    "et molestias eius et error sunt. Id recusandae nostrum\n" +
                    "ea officiis voluptatem in nisi consequatur sed quia\n" +
                    "tenetur sit alias molestias qui illum soluta. Est\n" +
                    "nesciunt perferendis eum sint rerum 33 cupiditate\n" +
                    "dolorem id corrupti laboriosam ut debitis veniam ut\n" +
                    "ipsam fugit vel sunt consequatur. Et nobis quasi et\n" +
                    "cumque adipisci aut molestiae eligendi quo inventore\n" +
                    "dicta ea suscipit sequi sed veritatis nemo.",
                "subsections": [
                    {
                        "subtitle": "General Terms and Conditions",
                        "content": "Travel the globe through your taste buds with our\n" +
                            "diverse range of recipes inspired by various\n" +
                            "cuisines. Whether you're craving Italian pasta or\n" +
                            "spicy Thai curry, we have something for everyone."
                    },
                    {
                        "subtitle": "Products and Services",
                        "content": "Lorem ipsum dolor sit amet. Est vitae blanditiis ab\n" +
                            "aliquam tempore aut ipsam iusto in sunt repellat ex\n" +
                            "voluptatum inventore ab facilis galisum ea\n" +
                            "consequatur consequuntur. Ab voluptas voluptatem eum\n" +
                            "consequatur aspernatur non laboriosam atque est\n" +
                            "labore asperiores a neque quos. Ea nemo modi hic\n" +
                            "dicta saepe et veritatis maiores At praesentium\n" +
                            "aliquid. Sed dolores architecto non doloribus quia\n" +
                            "eos consectetur commodi non tenetur vitae est neque\n" +
                            "omnis. Non perspiciatis velit At aliquam rerum ut\n" +
                            "officiis ipsa id minima eius ut sapiente nobis et\n" +
                            "nemo neque. Aut maiores tempora in officiis sunt eum\n" +
                            "voluptatem tenetur sit iste reprehenderit ea nisi\n" +
                            "dolor. Ea impedit omnis ad internos autem ut esse\n" +
                            "sunt ad saepe maiores vel perferendis veritatis. Ex\n" +
                            "magni fugiat ut reprehenderit laudantium sit galisum\n" +
                            "ipsam eos tempora doloribus sed accusantium nobis\n" +
                            "eum praesentium quod."
                    }
                ]
            },
            {
                "title": "Welcome to FoodChampsHQ",
                "description": "Ut doloremque aliquam qui veniam deserunt sit\n" +
                    "voluptates iusto et unde quod ut quam unde ut nemo\n" +
                    "eius! Ut saepe consequuntur non quibusdam soluta aut\n" +
                    "maiores eaque et rerum error nam incidunt saepe aut\n" +
                    "nihil voluptatem. 33 nulla quaerat est doloremque\n" +
                    "voluptatem ut libero magnam id placeat aliquid. Ea\n" +
                    "minus totam est inventore minus sed temporibus\n" +
                    "aperiam At ratione maiores eum libero consequatur\n" +
                    "aut laborum exercitationem.",
                "subsections": [
                    { "subtitle": "Explore Different Cuisines", "content": "Discover a world of delicious recipes, culinary\n" +
                            "creations, and cooking tips on our food blog. From\n" +
                            "mouth-watering dishes to helpful cooking techniques,\n" +
                            "we've got you covered!" },
                    { "subtitle": "Ingredient Substitution Tips", "content": "Travel the globe through your taste buds with our\n" +
                            "diverse range of recipes inspired by various\n" +
                            "cuisines. Whether you're craving Italian pasta or\n" +
                            "spicy Thai curry, we have something for everyone." },
                    { "subtitle": "Step-by-Step Instructions", "content": "Out of a key ingredient? Don't worry! Learn handy\n" +
                            "tips and tricks for substituting ingredients in your\n" +
                            "recipes without compromising on flavor or quality." },
                    { "subtitle": "Campaign tracking", "content": "Cooking made easy! Follow our step-by-step\n" +
                            "instructions for each recipe, ensuring that you can\n" +
                            "recreate delicious dishes in your own kitchen with\n" +
                            "confidence." },
                    { "subtitle": "Cookies", "content": "Lorem ipsum dolor sit amet. Ut cumque cupiditate eos\n" +
                            "perferendis tempora et ullam quis qui fugiat\n" +
                            "necessitatibus qui quia dolorem 33 earum\n" +
                            "reprehenderit eum rerum blanditiis. Et vitae\n" +
                            "distinctio 33 magni ratione ut odit rerum est nihil\n" +
                            "error et minus dolor quo harum fugiat. Eos quam\n" +
                            "assumenda id fugit optio aut magni sunt! Ut iure\n" +
                            "aliquam vel velit modi sit voluptatibus atque ut\n" +
                            "corporis sint sit omnis enim a pariatur officiis aut\n" +
                            "nulla voluptate. In facere incidunt aut sapiente\n" +
                            "maxime qui quibusdam facilis non officia consectetur\n" +
                            "sit laboriosam libero aut cupiditate possimus ut\n" +
                            "sunt reiciendis. Et repudiandae magnam aut quaerat\n" +
                            "ipsam aut repellat laboriosam. Ab facilis deleniti\n" +
                            "ut voluptas molestiae sed omnis maiores ut aliquid\n" +
                            "culpa vel nesciunt saepe. Aut placeat aspernatur aut\n" +
                            "alias nihil vel neque recusandae et corrupti\n" +
                            "accusantium ab quod temporibus ut nulla eaque et\n" +
                            "magnam nemo. Ad sunt minus rem earum delectus hic\n" +
                            "officia iste qui sunt quos non officiis illo vel\n" +
                            "doloribus perspiciatis. Ab soluta eius sed quidem\n" +
                            "dolores rem necessitatibus minus 33 minus commodi.\n" +
                            "Nam repudiandae libero non laboriosam voluptate et\n" +
                            "saepe fuga vel repudiandae pariatur aut assumenda\n" +
                            "illo." }
                ]
            },
            {
                "title": "Refund Policy",
                "description": "Lorem ipsum dolor sit amet. Vel dolores illum est\n" +
                    "aperiam quis nam voluptatem quia et omnis autem qui\n" +
                    "dolore ullam sed fugiat cumque! Qui accusamus assumenda\n" +
                    "et molestias eius et error sunt. Id recusandae nostrum\n" +
                    "ea officiis voluptatem in nisi consequatur sed quia\n" +
                    "tenetur sit alias molestias qui illum soluta. Est\n" +
                    "nesciunt perferendis eum sint rerum 33 cupiditate\n" +
                    "dolorem id corrupti laboriosam ut debitis veniam ut\n" +
                    "ipsam fugit vel sunt consequatur. Et nobis quasi et\n" +
                    "cumque adipisci aut molestiae eligendi quo inventore\n" +
                    "dicta ea suscipit sequi sed veritatis nemo.",
                "subsections": [
                    { "subtitle": "General", "content": "Lorem ipsum dolor sit amet. Nam nihil facilis sit\n" +
                            "consequuntur internos qui minima rerum ut molestias\n" +
                            "laudantium aut iusto deserunt. Aut voluptatibus\n" +
                            "excepturi qui officia laudantium est repellendus\n" +
                            "tempore hic sunt debitis. Ut galisum tempore in enim\n" +
                            "fugit eum pariatur possimus est tenetur nemo et sint\n" +
                            "sint et dolores Quis. Aut illum perspiciatis rem\n" +
                            "architecto culpa et fuga aliquid. Est omnis\n" +
                            "praesentium ut nisi internos rem quod totam et\n" +
                            "similique quis. Est tempore cumque aut recusandae\n" +
                            "labore qui error molestiae et possimus quia! Eum\n" +
                            "Quis asperiores non nihil tempora qui quia\n" +
                            "voluptatem aut aspernatur aspernatur aut asperiores\n" +
                            "labore et sapiente quaerat qui suscipit quia. Ea\n" +
                            "nesciunt iste aut temporibus culpa sit dignissimos\n" +
                            "quaerat eum architecto voluptatum et nemo velit At\n" +
                            "harum harum." },
                    { "subtitle": "Damages and issues", "content": "Lorem ipsum dolor sit amet. Est vitae blanditiis ab\n" +
                            "aliquam tempore aut ipsam iusto in sunt repellat ex\n" +
                            "voluptatum inventore ab facilis galisum ea\n" +
                            "consequatur consequuntur. Ab voluptas voluptatem eum\n" +
                            "consequatur aspernatur non laboriosam atque est\n" +
                            "labore asperiores a neque quos. Ea nemo modi hic\n" +
                            "dicta saepe et veritatis maiores At praesentium\n" +
                            "aliquid. Sed dolores architecto non doloribus quia\n" +
                            "eos consectetur commodi non tenetur vitae est neque\n" +
                            "omnis. Non perspiciatis velit At aliquam rerum ut\n" +
                            "officiis ipsa id minima eius ut sapiente nobis et\n" +
                            "nemo neque. Aut maiores tempora in officiis sunt eum\n" +
                            "voluptatem tenetur sit iste reprehenderit ea nisi\n" +
                            "dolor. Ea impedit omnis ad internos autem ut esse\n" +
                            "sunt ad saepe maiores vel perferendis veritatis. Ex\n" +
                            "magni fugiat ut reprehenderit laudantium sit galisum\n" +
                            "ipsam eos tempora doloribus sed accusantium nobis\n" +
                            "eum praesentium quod." },
                    { "subtitle": "Refunds", "content": "Lorem ipsum dolor sit amet. Est vitae blanditiis ab\n" +
                            "aliquam tempore aut ipsam iusto in sunt repellat ex\n" +
                            "voluptatum inventore ab facilis galisum ea\n" +
                            "consequatur consequuntur. Ab voluptas voluptatem eum\n" +
                            "consequatur aspernatur non laboriosam atque est\n" +
                            "labore asperiores a neque quos. Ea nemo modi hic\n" +
                            "dicta saepe et veritatis maiores At praesentium\n" +
                            "aliquid. Sed dolores architecto non doloribus quia\n" +
                            "eos consectetur commodi non tenetur vitae est neque\n" +
                            "omnis. Non perspiciatis velit At aliquam rerum ut\n" +
                            "officiis ipsa id minima eius ut sapiente nobis et\n" +
                            "nemo neque. Aut maiores tempora in officiis sunt eum\n" +
                            "voluptatem tenetur sit iste reprehenderit ea nisi\n" +
                            "dolor. Ea impedit omnis ad internos autem ut esse\n" +
                            "sunt ad saepe maiores vel perferendis veritatis. Ex\n" +
                            "magni fugiat ut reprehenderit laudantium sit galisum\n" +
                            "ipsam eos tempora doloribus sed accusantium nobis\n" +
                            "eum praesentium quod." }
                ]
            }
        ]
    };

    // Agregar botones dinámicamente
    data.buttons.forEach(buttonData => {
        const button = document.createElement("button");
        button.className = buttonData.class;
        button.innerHTML = `<span>${buttonData.text}</span>`;
        buttonsContainer.appendChild(button);
    });

    // Agregar secciones dinámicamente
    data.sections.forEach(sectionData => {
        const sectionDiv = document.createElement("div");
        sectionDiv.className = "my_recipe_description-section thq-flex-column";
        sectionDiv.innerHTML = ` 
          <h2 class="thq-heading-5">${sectionData.title}</h2>
          <p>${sectionData.description}</p>
        `;

        sectionData.subsections.forEach(subsectionData => {
            const subsectionDiv = document.createElement("div");
            subsectionDiv.className = "my_recipe_description-subsection";
            subsectionDiv.innerHTML = `
                <h3 class="thq-heading-6">${subsectionData.subtitle}</h3>
                <p>${subsectionData.content}</p>
            `;
            sectionDiv.appendChild(subsectionDiv);
        });

        sectionsContainer.appendChild(sectionDiv);
    });
}

document.addEventListener("DOMContentLoaded", addDynamicContent);
