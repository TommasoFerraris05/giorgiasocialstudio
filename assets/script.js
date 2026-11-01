/* No frameworks, third-party widgets or tracking. Vanilla JS only. */
(() => {
  'use strict';

  const currentYear = document.getElementById('current-year');
  if (currentYear) currentYear.textContent = String(new Date().getFullYear());

  // Mobile navigation.
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNavigation = document.getElementById('main-navigation');
  function closeMenu() {
    if (!menuToggle || !mainNavigation) return;
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Apri il menu di navigazione');
    mainNavigation.classList.remove('is-open');
  }
  if (menuToggle && mainNavigation) {
    menuToggle.addEventListener('click', () => {
      const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? 'Apri il menu di navigazione' : 'Chiudi il menu di navigazione');
      mainNavigation.classList.toggle('is-open', !isOpen);
    });
    mainNavigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
    document.addEventListener('click', event => {
      if (!menuToggle.contains(event.target) && !mainNavigation.contains(event.target)) closeMenu();
    });
  }

  // Portfolio filters; all original material comes from the supplied PDF.
  const filterButtons = [...document.querySelectorAll('.filter-btn')];
  const projectCards = [...document.querySelectorAll('.project-card')];
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      filterButtons.forEach(other => {
        const active = other === button;
        other.classList.toggle('active', active);
        other.setAttribute('aria-pressed', String(active));
      });
      projectCards.forEach(card => {
        card.hidden = filter !== 'all' && card.dataset.category !== filter;
      });
    });
  });

  // Native, keyboard-accessible project details dialog.
  const dialog = document.getElementById('project-dialog');
  const dialogClose = dialog?.querySelector('.dialog-close');
  const dialogImage = document.getElementById('dialog-image');
  const dialogTitle = document.getElementById('dialog-title');
  const dialogSector = document.getElementById('dialog-sector');
  const dialogDescription = document.getElementById('dialog-description');
  let lastProjectTrigger = null;
  if (dialog) {
    projectCards.forEach(card => {
      card.addEventListener('click', () => {
        lastProjectTrigger = card;
        dialogTitle.textContent = card.dataset.title || 'Progetto';
        dialogSector.textContent = card.dataset.sector || '';
        dialogDescription.textContent = card.dataset.description || '';
        dialogImage.src = card.dataset.image || './assets/portfolio-moda.webp';
        dialogImage.alt = card.querySelector('img')?.alt || 'Immagine dal portfolio';
        if (typeof dialog.showModal === 'function') dialog.showModal();
        else dialog.setAttribute('open', '');
        dialogClose?.focus();
      });
    });
    const closeDialog = () => {
      if (typeof dialog.close === 'function') dialog.close();
      else dialog.removeAttribute('open');
      lastProjectTrigger?.focus();
    };
    dialogClose?.addEventListener('click', closeDialog);
    dialog.addEventListener('click', event => { if (event.target === dialog) closeDialog(); });
    dialog.querySelector('.dialog-cta')?.addEventListener('click', () => {
      // The in-page link handles scrolling; do not return focus to the old card.
      if (typeof dialog.close === 'function') dialog.close();
      else dialog.removeAttribute('open');
    });
  }

  const form = document.getElementById('quote-form');
  if (!form) return;
  const panels = [...form.querySelectorAll('.form-step')];
  const prevButton = document.getElementById('form-prev');
  const nextButton = document.getElementById('form-next');
  const submitButton = document.getElementById('form-submit');
  const errorElement = document.getElementById('form-error');
  const stepIndicator = document.getElementById('step-indicator');
  const stepCounter = document.getElementById('form-count');
  const progress = document.querySelector('.progress-track');
  const progressFill = document.getElementById('progress-fill');
  const previewText = document.getElementById('request-preview-text');
  const summaryHidden = document.getElementById('quote-summary-hidden');
  let currentStep = 1;
  const maxSteps = panels.length;

  function hideError() {
    errorElement.hidden = true;
    errorElement.textContent = '';
  }
  function showError(message) {
    errorElement.textContent = message;
    errorElement.hidden = false;
  }
  function showStep(step, focusLegend = false) {
    currentStep = Math.min(Math.max(step, 1), maxSteps);
    panels.forEach((panel, idx) => { panel.hidden = idx !== currentStep - 1; });
    prevButton.hidden = currentStep === 1;
    nextButton.hidden = currentStep === maxSteps;
    submitButton.hidden = currentStep !== maxSteps;
    const formatted = String(currentStep).padStart(2, '0');
    stepIndicator.textContent = `STEP ${formatted} / 0${maxSteps}`;
    stepCounter.textContent = `${formatted} — 0${maxSteps}`;
    progress.setAttribute('aria-valuenow', String(currentStep));
    progressFill.style.width = `${(currentStep / maxSteps) * 100}%`;
    hideError();
    if (currentStep === maxSteps) updateSummary();
    if (focusLegend) {
      const legend = panels[currentStep - 1].querySelector('legend');
      if (legend) {
        legend.setAttribute('tabindex', '-1');
        legend.focus({ preventScroll: true });
      }
      document.getElementById('quote-form-shell')?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
    }
  }

  function validateStep(step) {
    const panel = panels[step - 1];
    for (const input of panel.querySelectorAll('input[required], select[required], textarea[required]')) {
      if (!input.checkValidity()) {
        const label = input.closest('.field')?.querySelector('label')?.textContent?.trim().replace('*', '') || 'campo obbligatorio';
        showError(`Controlla il campo “${label}” prima di proseguire.`);
        input.focus();
        return false;
      }
    }
    if (step === 2 && !form.querySelector('input[data-service]:checked')) {
      showError('Seleziona almeno un servizio per proseguire.');
      panel.querySelector('input[data-service]')?.focus();
      return false;
    }
    return true;
  }

  function getValue(id, fallback = 'Non indicato') {
    const value = document.getElementById(id)?.value?.trim();
    return value || fallback;
  }
  function selectedValues(selector, dataAttribute) {
    return [...form.querySelectorAll(selector)].map(input => dataAttribute ? input.dataset[dataAttribute] : input.name.replace(/^Canale /, '')).join(', ') || 'Da definire';
  }
  function createSummary() {
    const serviceNames = selectedValues('input[data-service]:checked', 'service');
    const channelNames = selectedValues('.inline-checks input:checked');
    const values = [
      `Azienda: ${getValue('azienda')}`,
      `Settore: ${getValue('settore')}`,
      `Dimensione: ${getValue('dimensione')}`,
      `Sito web: ${getValue('sito')}`,
      `Social attuali: ${getValue('social-attuali')}`,
      `Servizi richiesti: ${serviceNames}`,
      `Obiettivi: ${getValue('obiettivi')}`,
      `Canali desiderati: ${channelNames}`,
      `Frequenza: ${getValue('frequenza', 'Da valutare')}`,
      `Tempistiche: ${getValue('tempistiche', 'Da definire')}`,
      `Budget orientativo: ${getValue('budget', 'Da concordare')}`,
      `Informazioni aggiuntive: ${getValue('extra')}`
    ];
    return values.join('\n');
  }
  function updateSummary() {
    const summary = createSummary();
    summaryHidden.value = summary;
    const short = [
      `Azienda: ${getValue('azienda')}`,
      `Settore: ${getValue('settore')}`,
      `Servizi: ${selectedValues('input[data-service]:checked', 'service')}`,
      `Canali: ${selectedValues('.inline-checks input:checked')}`,
      `Budget orientativo: ${getValue('budget', 'Da concordare')}`
    ];
    previewText.textContent = short.join('\n');
  }
  nextButton.addEventListener('click', () => {
    hideError();
    if (validateStep(currentStep)) showStep(currentStep + 1, true);
  });
  prevButton.addEventListener('click', () => showStep(currentStep - 1, true));
  form.querySelectorAll('input, textarea, select').forEach(input => {
    input.addEventListener('input', () => { hideError(); if (currentStep === maxSteps) updateSummary(); });
    input.addEventListener('change', () => { hideError(); if (currentStep === maxSteps) updateSummary(); });
  });
  document.querySelectorAll('[data-prefill]').forEach(link => {
    link.addEventListener('click', () => {
      const label = link.dataset.prefill;
      const input = [...form.querySelectorAll('input[data-service]')].find(item => item.dataset.service === label);
      if (input) input.checked = true;
      showStep(1);
    });
  });

  form.addEventListener('submit', event => {
    event.preventDefault();
    hideError();
    // Validate all steps, including the hidden ones, before POST.
    for (let step = 1; step <= maxSteps; step++) {
      showStep(step);
      if (!validateStep(step)) return;
    }
    updateSummary();
    if (form.querySelector('[name="_honey"]').value) {
      showError('Non è stato possibile inviare la richiesta.');
      return;
    }
    submitButton.disabled = true;
    submitButton.textContent = 'Apertura invio sicuro…';
    // Standard HTML POST; FormSubmit displays its own confirmation.
    // One-time mailbox verification by the website owner is required.
    HTMLFormElement.prototype.submit.call(form);
  });

  showStep(1);
})();
