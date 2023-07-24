const panels = document.querySelectorAll(".panel");
panels.forEach(panel => { 
    panel.addEventListener('click', () => {
        addActive(panel);
    });
});
const removeActive = () => {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
};
const addActive = (panel) => {
    removeActive();
    panel.classList.add('active');
}