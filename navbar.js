function loadNavbar() {
    const navbarHTML = `
        <nav class="bg-white shadow fixed w-full top-0 z-50">
            <div class="container mx-auto px-4 py-4 flex justify-between items-center">
                <a href="/" class="text-xl font-bold text-blue-800">Viver o Tejo</a>
                <ul class="flex space-x-6 text-sm font-semibold">
                    <li><a href="index.html" class="hover:text-blue-600 transition-colors">Home</a></li>
                    <li><a href="projeto.html" class="hover:text-blue-600 transition-colors">O projeto</a></li>
                    <li><a href="contactos.html" class="hover:text-blue-600 transition-colors">Contactos</a></li>
                    <li><a href="roteiros.html" class="hover:text-blue-600 transition-colors">Roteiros</a></li>
                    <li><a href="dormir.html" class="hover:text-blue-600 transition-colors">Onde dormir</a></li>
                    <li><a href="comer.html" class="hover:text-blue-600 transition-colors">Onde comer</a></li>
                    <li><a href="fazer.html" class="hover:text-blue-600 transition-colors">O que fazer</a></li>
                    <li><a href="visitar.html" class="hover:text-blue-600 transition-colors">O que visitar</a></li>
                </ul>
            </div>
        </nav>
    `;
    
    document.getElementById('navbar-container').innerHTML = navbarHTML;
}

document.addEventListener('DOMContentLoaded', loadNavbar);