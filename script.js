document.addEventListener('DOMContentLoaded', function() {
    const songItems = document.querySelectorAll('.song-list li');

    songItems.forEach(item => {
        item.addEventListener('click', function(event) {
            // Prepreči, da bi se meni odprl ob kliku na ikono za predvajanje
            if (event.target.closest('.icon-container')) {
                return;
            }

            // Preklopi prikaz drop-down menija
            const dropdown = item.querySelector('.dropdown-content');
            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Zapri drop-down meni, če uporabnik klikne drugje na strani
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.song-list li')) {
            const dropdowns = document.querySelectorAll('.dropdown-content');
            dropdowns.forEach(dropdown => {
                dropdown.style.display = 'none';
            });
        }
    });
});