const chartBars = document.querySelectorAll('.attendance-chart .bar');

chartBars.forEach(bar => {
  const value = Number(bar.dataset.value || 0);
  const height = Math.max(14, Math.min(100, value));
  bar.style.setProperty('--bar-height', `${height}%`);
  bar.style.height = '100%';
  bar.style.position = 'relative';
  const fill = document.createElement('div');
  fill.className = 'bar-fill';
  fill.style.height = `${height}%`;
  fill.style.width = '100%';
  fill.style.background = 'linear-gradient(180deg, #3b82f6 0%, #2563eb 100%)';
  fill.style.borderRadius = '18px 18px 0 0';
  fill.style.position = 'absolute';
  fill.style.bottom = '0';
  bar.appendChild(fill);
});

const stats = {
  students: 1250,
  staff: 72,
  classes: 34,
  attendance: 92,
};

document.getElementById('studentsCount').textContent = stats.students.toLocaleString();
document.getElementById('staffCount').textContent = stats.staff;
document.getElementById('classesCount').textContent = stats.classes;
document.getElementById('attendanceRate').textContent = `${stats.attendance}%`;

const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');

if (dropdownToggle && dropdownMenu) {
  dropdownToggle.addEventListener('click', () => {
    const isOpen = dropdownMenu.classList.toggle('show');
    dropdownToggle.setAttribute('aria-expanded', String(isOpen));
  });
}
