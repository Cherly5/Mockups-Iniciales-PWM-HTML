# Mockups-Iniciales-PWM-HTML

## Componentes del grupo
Grupo 41.1  
Gabriel Godoy Navarro  
Santiago Galindo Peralta  
Echeyde Ramos Caballero

## Descripción del proyecto
Hemos desarrollado la base de una aplicación web de recetas de cocina. Para ello utilizamos TeleportHQ para realizar los mockups de la página web con ayuda de la IA que proporciona teleporthq.  
Tras hacerlos los convertimos a código html y depuramos el código todo lo posible además de utilizar el script de javascript del campus virtual para cargar los componentes.
Algunas de las ideas para las funcionalidades básicas que tuvimos:  
- Poder ver recetas que hayan subido otros usuarios  
- Tener cuenta de usuario, acceder al perfil, poder iniciar sesión o registrarse  
- Una página principal: 
- Una página sobre los creadores de la empresa  
- Una página de las recetas propias  

La página de inicio de la aplicación web es index.html (index.html)  

## Enlaces
https://play.teleporthq.io/projects/blind-coordinated-reindeer-lp532x/editor/TQ_LGrnaUtnz0  
https://trello.com/invite/b/67a12067101310ab70e0df07/ATTIf800b4b7ce7b2330fade3ac22e341f6633C80819/trabajo-de-pwm

## Aspectos a tener en consideración
Aunque no se pedía para la entrega del primer SPRINT, hemos modificado el script del profesor para facilitar la navegación (de los botones en navbar y footer), dado que refactorizando y ordenando el código por páginas y componentes hemos tenido problemas con las rutas.  
Tenemos dos páginas, que están enumeradas en el apartado de listado de páginas y cuyos templates están también listados en el apartado de listado de templates, a las cuales no se puede acceder por navegación en la página web.
Ésto se debe a que son páginas que ya dependen de la funcionalidad de la página web, algo que trataremos más en el próximo SPRINT.  
Éstas dos páginas son: profile/profile.html y recipes/xlu-include-recipes/a-recipe.html.

## Listado de páginas del proyecto
Los mockups de varias páginas distintas del proyecto web están desarrollados dentro de la misma página, ya que solo se permite crear 3 páginas en TeleportHQ

Página(s) TeleportHQ - Fichero HTML al que corresponde

Home - index.html  
About - about.html  
SignUp (Dentro de About) - sign_up/sign_up.html  
SignIn (Dentro de About) - sign_in/sign_in.html  
Profile (Dentro de About) - profile/profile.html  
MyRecipes (Dentro de Home) - my_recipes/my_recipes.html  
Recipes - recipes/recipes.html  
a-recipe (Dentro de Recipes) - recipes/xlu-include-recipes/a-recipe.html  

## Templates y archivo en el que se cargan

Archivo template - Archivo en el que se carga

about_us/components/welcome_about_us/welcome_about_us.html - about_us/about.html  
about_us/components/stats/stats.html - about_us/about.html  
about_us/components/sponsors/sponsors.html - about_us/about.html  
about_us/components/marketing/marketing.html - about_us/about.html  
about_us/components/team/team.html - about_us/about.html  

footer/footer.html - about_us/about.html, index.html, profile/profile.html, sign_in/sign_in.html, sign_up/sign_up.html, my_recipes/my_recipes.html, recipes/recipes.html, recipes/xlu-include-recipes/a-recipe.html  
navigation-bar/navbar.html - about_us/about.html, index.html, profile/profile.html, sign_in/sign_in.html, sign_up/sign_up.html, my_recipes/my_recipes.html, recipes/recipes.html, recipes/xlu-include-recipes/a-recipe.html  

index/index_marketing1/index_marketing1.html - index.html  
index/index_marketing2/index_marketing2.html - index.html  
index/index_slider/index_slider.html - index.html  

my_recipes/components/my_recipe_description/my_recipe_description.html - my_recipes/my_recipes.html  
my_recipes/components/slider_my_recipes/slider_my_recipes.html - my_recipes/my_recipes.html  

recipes/components/welcome-browser/welcome-browser.html - recipes/recipes.html  
recipes/components/popular-ingredients/popular-ingredients.html - recipes/recipes.html  
recipes/components/our-recipes-gallery/our-recipes-gallery.html - recipes/recipes.html  
recipes/components/recipes-testimonials/recipe-testimonials.html - recipes/recipes.html  

recipes/components/recipe-front/recipe-front.html - recipes/xlu-include-recipes/a-recipe.html  
recipes/components/recipe-steps/recipe-steps.html - recipes/xlu-include-recipes/a-recipe.html  
recipes/components/keep-cocking/keep-cocking.html - recipes/xlu-include-recipes/a-recipe.html  

## Requisitos funcionales

### Requisitos funcionales de interfaz básica
	- La barra de navegación variará en función de si el usuario está autenticado o no  
	- Las recetas se mostrarán separadas por pasos  
	- Las recetas tendrán una lista de ingredientes  
	- Las recetas mostrarán una imagen de la comida en cuestión  
	- También habrá botones para moverse por la página web además de la barra de navegación

### Requisitos funcionales de procesos
	- El sistema permitirá al usuario registrarse en el caso de no tener cuenta de usuario  
	- El sistema permitirá al usuario iniciar sesión en el caso de tener cuenta de usuario  
	- El sistema guardará las recetas creadas o modificadas de los usuarios  
	- El sistema permitirá al usuario observar recetas que hayan subido otros usuarios  

### Requisitos funcionales de seguridad
	- El sistema requerirá que el usuario ingrese su contraseña para actualizarla  
	- El sistema requerirá de un correo electrónico válido para registrarse  
	- El sistema requerirá de un nombre válido para registrarse  
	- El sistema requerirá de una contraseña válida para registrarse



