// Función para filtrar las tarjetas según las etiquetas
function filterCards() {
  const searchInput = document.getElementById('search-input').value.toLowerCase();
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const tags = card.getAttribute('data-tags').toLowerCase();
    if (tags.includes(searchInput)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}
