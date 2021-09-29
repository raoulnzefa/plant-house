export const createOptions = (filters) => {
  const optionBlocks = document.querySelectorAll('.filter-options');

  Array.from(optionBlocks).map((optionTab, index) => {
    optionTab.innerHTML =
      '<ul>' +
      filters.value[index].options.reduce((list, option) => {
        list += `<li class="option-item"><button>${option}</button></li>`;
        return list;
      }, '') +
      '</ul>';

    optionTab.style.bottom = -optionTab.clientHeight + 'px';
    optionTab.style.display = 'none';

    return optionTab;
  });
};

export const openOptions = (event) => {
  const target = event.target;

  if (!target.closest('.filter-item')) {
    return;
  }

  const optionTabs = document.querySelectorAll('.filter-options'),
    currentFilter = target.closest('.filter-item');

  if (currentFilter.dataset.active === 'true') {
    closeOptionTabs(optionTabs);
    document.removeEventListener('click', closeWithinDocument);
    return;
  }

  closeOptionTabs(optionTabs);
  currentFilter.dataset.active = true;

  optionTabs[currentFilter.dataset.index].classList.add('active');

  const closeWithinDocument = (e) => {
    const targetItem = e.target.closest('.filter-item');

    if (targetItem) {
      return;
    }

    closeOptionTabs(optionTabs);
    document.removeEventListener('click', closeWithinDocument);
  };

  document.addEventListener('click', closeWithinDocument);
};

const closeOptionTabs = (tabs) => {
  Array.from(tabs).map((tab) => {
    tab.classList.remove('active');
    tab.closest('.filter-item').dataset.active = false;
  });
};