export const createOptions = (filters) => {
  const optionBlocks = document.querySelectorAll('.filter-options--create'),
    sortBlock = document.querySelector('.filter-options--sort');

  const marginTop = -5;

  Array.from(optionBlocks).map((optionTab, index) => {
    optionTab.innerHTML =
      '<ul>' +
      filters.value[index].options.reduce((list, option) => {
        list += `<li class="option-item" data-value="${option}"><button>${option}</button></li>`;
        return list;
      }, '') +
      '</ul>';

    optionTab.style.bottom = -optionTab.clientHeight + marginTop + 'px';
    optionTab.style.display = 'none';

    return optionTab;
  });

  sortBlock.style.bottom = -sortBlock.clientHeight + marginTop + 'px';
  sortBlock.style.display = 'none';
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

  optionTabs[currentFilter.dataset.index].style.display = 'block';

  setTimeout(() => {
    optionTabs[currentFilter.dataset.index].classList.add('active');

  }, 0)



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

const closeOptionTabs = tabs => {
  Array.from(tabs).map((tab, index) => {
    if (!tab.classList.contains('active')) {
      return tab;
    }

    tab.classList.remove('active');
    tab.style.display = 'none';
    tab.closest('.filter-item').dataset.active = false;
    
    return tab;
  });

};