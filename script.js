/**
 * BHOOLA PLUMBING - INTERACTIVE ENGINE
 */

// Primary WhatsApp Target Number
const WHATSAPP_NUMBER_1 = "27658064201";

// Handle Direct Contact Form Submission -> Redirect to WhatsApp
function handleFormSubmit(e) {
  e.preventDefault();
  
  const name = document.getElementById('custName')?.value.trim() || '';
  const phone = document.getElementById('custPhone')?.value.trim() || '';
  const email = document.getElementById('custEmail')?.value.trim() || '';
  const service = document.getElementById('custService')?.value || '';
  const details = document.getElementById('custMsg')?.value.trim() || '';

  // Construct message format for WhatsApp
  let message = `Hello Bhoola Plumbing! I would like to request a quote.\n\n`;
  message += `*Name:* ${name}\n`;
  message += `*Phone:* ${phone}\n`;
  if (email) message += `*Email:* ${email}\n`;
  message += `*Service:* ${service}\n`;
  if (details) message += `*Details:* ${details}\n`;

  // Encode message for WhatsApp URL
  const encodedMessage = encodeURIComponent(message);
  
  // Open WhatsApp directly with Line 1 (+27 65 806 4201)
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER_1}?text=${encodedMessage}`;
  window.open(waUrl, '_blank');
}

// Mobile Menu Toggle & Navigation Hooks
document.addEventListener('DOMContentLoaded', () => {
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinksContainer = document.getElementById('navLinks');

  if (mobileToggle && navLinksContainer) {
    mobileToggle.addEventListener('click', () => {
      navLinksContainer.classList.toggle('active');
    });
  }

  // Set current year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const lightbox = document.getElementById('projectLightbox');
  if (lightbox) {
    const image = lightbox.querySelector('img');
    const caption = lightbox.querySelector('figcaption');
    const close = () => {
      lightbox.classList.remove('is-open');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('lightbox-open');
    };
    document.querySelectorAll('[data-lightbox]').forEach((card) => {
      card.addEventListener('click', () => {
        image.src = card.dataset.lightbox;
        image.alt = card.querySelector('img')?.alt || '';
        caption.textContent = card.dataset.caption || '';
        lightbox.classList.add('is-open');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.classList.add('lightbox-open');
      });
    });
    lightbox.addEventListener('click', (event) => { if (event.target === lightbox) close(); });
    lightbox.querySelector('.lightbox-close').addEventListener('click', close);
    document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && lightbox.classList.contains('is-open')) close(); });
  }
});
