import { component$, useSignal, useStylesScoped$, $ } from '@builder.io/qwik';
import { socialLinks, contactConfig } from '~/data/social';

export const ContactSection = component$(() => {
  const formData = useSignal({ name: '', email: '', subject: '', message: '' });
  const isSubmitting = useSignal(false);
  const submitStatus = useSignal<'idle' | 'success' | 'error'>('idle');
  
  useStylesScoped$(`
    .contact-section { padding: 20px; position: relative; z-index: 1; }
    
    .contact-layout {
      display: grid;
      grid-template-columns: 280px 1fr;
      gap: 16px;
      max-width: 900px;
      margin: 0 auto;
    }
    
    /* Info window */
    .info-window {
      background: var(--win-surface);
      box-shadow: var(--win-border-window);
      padding: 3px;
      align-self: start;
    }
    
    .win-titlebar {
      background: linear-gradient(90deg, var(--win-titlebar), var(--win-accent-light));
      color: var(--win-titlebar-text);
      padding: 2px 4px;
      font-weight: 700;
      font-size: 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      user-select: none;
      min-height: 20px;
    }
    
    .titlebar-left { display: flex; align-items: center; gap: 4px; }
    
    .titlebar-btn {
      width: 16px; height: 14px;
      background: var(--win-surface);
      box-shadow: var(--win-border-button);
      border: none;
      display: flex; align-items: center; justify-content: center;
      font-size: 9px; font-weight: 700;
      font-family: 'IBM Plex Mono', monospace;
      color: var(--win-text-primary);
      padding: 0; line-height: 1; cursor: default;
    }
    
    .win-body { padding: 12px; background: var(--win-surface); }
    
    .info-row {
      display: flex; align-items: center; gap: 8px;
      padding: 4px 0; font-size: 11px; color: var(--win-text-primary);
    }
    
    .info-icon { font-size: 14px; flex-shrink: 0; width: 20px; text-align: center; }
    .info-label { font-weight: 700; font-size: 10px; color: var(--win-text-muted); text-transform: uppercase; }
    .info-value { font-size: 11px; }
    
    .separator {
      height: 2px; margin: 8px 0;
      box-shadow: inset 0 1px 0 0 var(--win-shadow), inset 0 -1px 0 0 var(--win-white);
    }
    
    .status-badge {
      display: flex; align-items: center; gap: 6px;
      font-size: 11px; color: var(--win-success);
      padding: 4px 0;
    }
    
    .status-led {
      width: 8px; height: 8px;
      background: var(--win-success);
      border: 1px solid #006600;
    }
    
    .social-section { margin-top: 8px; }
    .social-label { font-size: 11px; font-weight: 700; margin-bottom: 6px; }
    
    .social-grid { display: flex; gap: 4px; flex-wrap: wrap; }
    
    .social-btn {
      width: 32px; height: 32px;
      background: var(--win-surface);
      box-shadow: var(--win-border-button);
      border: none;
      display: flex; align-items: center; justify-content: center;
      cursor: pointer; color: var(--win-text-primary);
      text-decoration: none;
    }
    
    .social-btn:hover {
      background: var(--win-titlebar);
      color: var(--win-titlebar-text);
    }
    
    .social-btn:active { box-shadow: var(--win-border-button-pressed); }
    .social-btn svg { width: 16px; height: 16px; }
    
    /* Form window */
    .form-window {
      background: var(--win-surface);
      box-shadow: var(--win-border-window);
      padding: 3px;
    }
    
    .form-body { padding: 12px; background: var(--win-surface); }
    
    .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 8px; }
    .form-group { margin-bottom: 8px; }
    
    .form-label {
      display: block; font-size: 11px; font-weight: 700;
      color: var(--win-text-primary); margin-bottom: 3px;
    }
    
    .form-input, .form-textarea {
      width: 100%; padding: 3px 4px;
      border: none; background: var(--win-white);
      box-shadow: var(--win-border-field);
      color: var(--win-text-primary);
      font-family: 'IBM Plex Mono', monospace;
      font-size: 12px; outline: none;
    }
    
    .form-input::placeholder, .form-textarea::placeholder { color: var(--win-text-muted); }
    .form-textarea { resize: vertical; min-height: 100px; }
    
    .form-actions { display: flex; justify-content: flex-end; gap: 6px; margin-top: 10px; }
    
    .win-btn {
      padding: 4px 20px;
      background: var(--win-surface);
      box-shadow: var(--win-border-button);
      border: none;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 12px;
      color: var(--win-text-primary);
      cursor: pointer;
      min-height: 23px;
      min-width: 75px;
    }
    
    .win-btn:active { box-shadow: var(--win-border-button-pressed); }
    
    .win-btn.primary {
      font-weight: 700;
      box-shadow: var(--win-border-button), 0 0 0 1px var(--win-black);
    }
    
    .win-btn:disabled {
      color: var(--win-text-disabled);
      text-shadow: 1px 1px 0 var(--win-white);
      cursor: default;
    }
    
    .submit-msg {
      margin-top: 8px; padding: 6px 8px;
      font-size: 11px; font-weight: 700;
    }
    
    .submit-msg.success { background: #c0ffc0; color: var(--win-success); }
    .submit-msg.error { background: #ffc0c0; color: var(--win-error); }
    
    .win-statusbar {
      background: var(--win-surface);
      padding: 2px 4px;
      display: flex; gap: 2px;
      font-size: 11px; color: var(--win-text-secondary);
    }
    
    .statusbar-cell {
      padding: 1px 6px;
      box-shadow: var(--win-border-sunken);
      overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
    }
    
    .statusbar-cell:first-child { flex: 2; }
    .statusbar-cell:last-child { flex: 1; text-align: right; }
    
    @media (max-width: 768px) {
      .contact-section { padding: 12px 8px; }
      .contact-layout { grid-template-columns: 1fr; }
      .form-row { grid-template-columns: 1fr; }
    }
  `);
  
  const handleSubmit = $(async (e: Event) => {
    e.preventDefault();
    isSubmitting.value = true;
    submitStatus.value = 'idle';
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Form submitted:', formData.value);
    isSubmitting.value = false;
    submitStatus.value = 'success';
    setTimeout(() => {
      formData.value = { name: '', email: '', subject: '', message: '' };
      submitStatus.value = 'idle';
    }, 3000);
  });
  
  const updateFormData = $((field: string, value: string) => {
    formData.value = { ...formData.value, [field]: value };
  });
  
  return (
    <section id="contact" class="contact-section">
      <div class="contact-layout">
        {/* Contact Info Window */}
        <div class="info-window">
          <div class="win-titlebar">
            <div class="titlebar-left">
              <span>📇</span>
              <span>Contact Info</span>
            </div>
            <button class="titlebar-btn" aria-hidden="true">×</button>
          </div>
          <div class="win-body">
            <div class="info-row">
              <span class="info-icon">📧</span>
              <div>
                <div class="info-label">Email</div>
                <div class="info-value">{contactConfig.email}</div>
              </div>
            </div>
            <div class="info-row">
              <span class="info-icon">📞</span>
              <div>
                <div class="info-label">Phone</div>
                <div class="info-value">{contactConfig.phone}</div>
              </div>
            </div>
            <div class="info-row">
              <span class="info-icon">📍</span>
              <div>
                <div class="info-label">Location</div>
                <div class="info-value">{contactConfig.location}</div>
              </div>
            </div>
            
            <div class="separator"></div>
            
            <div class="status-badge">
              <div class="status-led"></div>
              <span>{contactConfig.availability}</span>
            </div>
            
            <div class="separator"></div>
            
            <div class="social-section">
              <div class="social-label">Connect:</div>
              <div class="social-grid">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="social-btn"
                    title={link.name}
                    dangerouslySetInnerHTML={link.icon}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Message Form Window */}
        <div class="form-window">
          <div class="win-titlebar">
            <div class="titlebar-left">
              <span>✉️</span>
              <span>New Message - Compose</span>
            </div>
            <div style="display: flex; gap: 2px;">
              <button class="titlebar-btn" aria-hidden="true">_</button>
              <button class="titlebar-btn" aria-hidden="true">□</button>
              <button class="titlebar-btn" aria-hidden="true">×</button>
            </div>
          </div>
          <div class="form-body">
            <form onSubmit$={handleSubmit}>
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label" for="name">From:</label>
                  <input type="text" id="name" class="form-input" placeholder="Your Name"
                    value={formData.value.name}
                    onInput$={(e: Event) => updateFormData('name', (e.target as HTMLInputElement).value)}
                    required />
                </div>
                <div class="form-group">
                  <label class="form-label" for="email">Reply-To:</label>
                  <input type="email" id="email" class="form-input" placeholder="your@email.com"
                    value={formData.value.email}
                    onInput$={(e: Event) => updateFormData('email', (e.target as HTMLInputElement).value)}
                    required />
                </div>
              </div>
              
              <div class="form-group">
                <label class="form-label" for="subject">Subject:</label>
                <input type="text" id="subject" class="form-input" placeholder="Project Inquiry"
                  value={formData.value.subject}
                  onInput$={(e: Event) => updateFormData('subject', (e.target as HTMLInputElement).value)}
                  required />
              </div>
              
              <div class="form-group">
                <label class="form-label" for="message">Message:</label>
                <textarea id="message" class="form-textarea" placeholder="Type your message here..."
                  value={formData.value.message}
                  onInput$={(e: Event) => updateFormData('message', (e.target as HTMLTextAreaElement).value)}
                  required />
              </div>
              
              <div class="form-actions">
                <button type="submit" class="win-btn primary" disabled={isSubmitting.value}>
                  {isSubmitting.value ? '⌛ Sending...' : '📨 Send'}
                </button>
              </div>
              
              {submitStatus.value === 'success' && (
                <div class="submit-msg success">✓ Message sent successfully!</div>
              )}
              {submitStatus.value === 'error' && (
                <div class="submit-msg error">✗ Error sending. Try emailing directly.</div>
              )}
            </form>
          </div>
          <div class="win-statusbar">
            <div class="statusbar-cell">Ready</div>
            <div class="statusbar-cell">{contactConfig.responseTime}</div>
          </div>
        </div>
      </div>
    </section>
  );
});