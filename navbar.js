function loadNavbar() {
    const navbarHTML = `
        <nav class="bg-white shadow fixed w-full top-0 z-50">
            <div class="container mx-auto px-4 py-4 flex justify-between items-center">
                <img src="images/viver-o-tejo.png" alt="icon" style="width: 80px">

                <!-- Botão do menu hamburguer (mobile only) -->
                <button id="menu-toggle" class="md:hidden text-gray-700 focus:outline-none">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
                         viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>

                <!-- Menu de navegação -->
                <ul id="nav-links" class="hidden md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 text-[10px] sm:text-xs md:text-sm lg:text-base font-semibold absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow md:shadow-none px-4 py-4 md:p-0 z-40 whitespace-nowrap">
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

    // Toggle menu para mobile
    const toggleButton = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    toggleButton.addEventListener('click', () => {
        navLinks.classList.toggle('hidden');
    });
}

document.addEventListener('DOMContentLoaded', loadNavbar);
