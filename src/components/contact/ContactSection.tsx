import { component$, useSignal, useStylesScoped$, $ } from '@builder.io/qwik';
import { socialLinks, contactConfig } from '~/data/social';

export const ContactSection = component$(() => {
  const formData = useSignal({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const isSubmitting = useSignal(false);
  const submitStatus = useSignal<'idle' | 'success' | 'error'>('idle');
  
  useStylesScoped$(`
    .contact-section {
      padding: 100px 20px;
      background: transparent;
      min-height: 100vh;
    }
    
    .contact-container {
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .section-title {
      text-align: center;
      font-size: 2.5rem;
      color: var(--neu-text-primary);
      margin-bottom: 20px;
      font-weight: 700;
    }
    
    .section-subtitle {
      text-align: center;
      color: var(--neu-text-secondary);
      margin-bottom: 60px;
      font-size: 1.1rem;
    }
    
    .contact-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
    }
    
    .contact-info {
      padding: 40px;
      background: var(--neu-base);
      border-radius: var(--neu-radius-lg);
      box-shadow: var(--neu-shadow-lg);
    }
    
    .info-title {
      font-size: 1.5rem;
      color: var(--neu-text-primary);
      margin-bottom: 30px;
      font-weight: 600;
    }
    
    .info-item {
      display: flex;
      align-items: center;
      gap: 20px;
      margin-bottom: 25px;
      padding: 20px;
      background: var(--neu-base);
      border-radius: var(--neu-radius-md);
      box-shadow: var(--neu-shadow-inset-sm);
    }
    
    .info-icon {
      width: 50px;
      height: 50px;
      background: linear-gradient(145deg, var(--neu-accent), var(--neu-accent-dark));
      border-radius: var(--neu-radius-md);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      flex-shrink: 0;
    }
    
    .info-details {
      flex: 1;
    }
    
    .info-label {
      font-size: 0.9rem;
      color: var(--neu-text-muted);
      margin-bottom: 5px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    
    .info-value {
      color: var(--neu-text-primary);
      font-weight: 500;
    }
    
    .social-links {
      margin-top: 40px;
    }
    
    .social-title {
      font-size: 1.2rem;
      color: var(--neu-text-primary);
      margin-bottom: 20px;
      font-weight: 600;
    }
    
    .social-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 15px;
    }
    
    .social-link {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 15px;
      background: var(--neu-base);
      border-radius: var(--neu-radius-md);
      box-shadow: var(--neu-shadow-md);
      color: var(--neu-text-secondary);
      text-decoration: none;
      transition: all var(--neu-transition-base);
    }
    
    .social-link:hover {
      box-shadow: var(--neu-shadow-lg);
      transform: translateY(-3px);
      color: var(--neu-accent);
    }
    
    .social-link svg {
      width: 24px;
      height: 24px;
    }
    
    .contact-form {
      padding: 40px;
      background: var(--neu-base);
      border-radius: var(--neu-radius-lg);
      box-shadow: var(--neu-shadow-lg);
    }
    
    .form-title {
      font-size: 1.5rem;
      color: var(--neu-text-primary);
      margin-bottom: 30px;
      font-weight: 600;
    }
    
    .form-group {
      margin-bottom: 25px;
    }
    
    .form-label {
      display: block;
      color: var(--neu-text-primary);
      font-weight: 500;
      margin-bottom: 10px;
      font-size: 0.95rem;
    }
    
    .form-input,
    .form-textarea {
      width: 100%;
      padding: 15px 20px;
      background: var(--neu-base);
      border: none;
      border-radius: var(--neu-radius-md);
      box-shadow: var(--neu-shadow-inset-sm);
      color: var(--neu-text-primary);
      font-size: 1rem;
      font-family: inherit;
      transition: all var(--neu-transition-base);
      outline: none;
    }
    
    .form-input:focus,
    .form-textarea:focus {
      box-shadow: var(--neu-shadow-inset-md);
    }
    
    .form-input::placeholder,
    .form-textarea::placeholder {
      color: var(--neu-text-muted);
    }
    
    .form-textarea {
      resize: vertical;
      min-height: 150px;
    }
    
    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
    
    .form-submit {
      width: 100%;
      padding: 18px 40px;
      background: linear-gradient(145deg, var(--neu-accent), var(--neu-accent-dark));
      color: white;
      border: none;
      border-radius: var(--neu-radius-md);
      box-shadow: var(--neu-shadow-lg);
      font-size: 1.1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all var(--neu-transition-base);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }
    
    .form-submit:hover:not(:disabled) {
      box-shadow: var(--neu-shadow-xl);
      transform: translateY(-2px);
    }
    
    .form-submit:active:not(:disabled) {
      transform: translateY(0);
      box-shadow: var(--neu-shadow-md);
    }
    
    .form-submit:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    
    .submit-status {
      margin-top: 20px;
      padding: 15px;
      border-radius: var(--neu-radius-md);
      text-align: center;
      font-weight: 500;
      animation: fadeIn 0.3s ease-out;
    }
    
    .submit-status.success {
      background: rgba(72, 187, 120, 0.1);
      color: var(--neu-success);
      box-shadow: var(--neu-shadow-inset-sm);
    }
    
    .submit-status.error {
      background: rgba(245, 101, 101, 0.1);
      color: var(--neu-error);
      box-shadow: var(--neu-shadow-inset-sm);
    }
    
    .availability-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 16px;
      background: rgba(72, 187, 120, 0.1);
      color: var(--neu-success);
      border-radius: var(--neu-radius-full);
      font-size: 0.9rem;
      font-weight: 500;
      margin-top: 20px;
    }
    
    .availability-dot {
      width: 8px;
      height: 8px;
      background: var(--neu-success);
      border-radius: 50%;
      animation: pulse 2s infinite;
    }
    
    /* Loading Spinner */
    .spinner {
      width: 20px;
      height: 20px;
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-top-color: white;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }
    
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
    
    /* Responsive */
    @media (max-width: 968px) {
      .contact-section {
        padding: 80px 16px;
      }
      
      .contact-content {
        grid-template-columns: 1fr;
        gap: 40px;
      }
      
      .contact-info,
      .contact-form {
        padding: 32px;
      }
      
      .form-row {
        grid-template-columns: 1fr;
        gap: 16px;
      }
      
      .social-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 12px;
      }
    }
    
    @media (max-width: 768px) {
      .contact-section {
        padding: 70px 16px;
      }
      
      .section-title {
        font-size: 2.2rem;
        margin-bottom: 16px;
      }
      
      .section-subtitle {
        font-size: 1rem;
        margin-bottom: 50px;
        padding: 0 10px;
      }
      
      .contact-content {
        gap: 32px;
      }
      
      .contact-info,
      .contact-form {
        padding: 28px 24px;
      }
      
      .info-title,
      .form-title {
        font-size: 1.4rem;
        margin-bottom: 24px;
      }
      
      .info-item {
        margin-bottom: 20px;
        padding: 16px;
        gap: 16px;
      }
      
      .info-icon {
        width: 44px;
        height: 44px;
      }
      
      .info-label {
        font-size: 0.85rem;
      }
      
      .info-value {
        font-size: 0.95rem;
      }
      
      .social-links {
        margin-top: 32px;
      }
      
      .social-title {
        font-size: 1.1rem;
        margin-bottom: 16px;
      }
      
      .social-grid {
        gap: 10px;
      }
      
      .social-link {
        padding: 12px;
      }
      
      .social-link svg {
        width: 20px;
        height: 20px;
      }
      
      .form-group {
        margin-bottom: 20px;
      }
      
      .form-label {
        font-size: 0.9rem;
        margin-bottom: 8px;
      }
      
      .form-input,
      .form-textarea {
        padding: 14px 18px;
        font-size: 0.95rem;
      }
      
      .form-textarea {
        min-height: 130px;
      }
      
      .form-submit {
        padding: 16px 36px;
        font-size: 1rem;
      }
      
      .availability-badge {
        margin-top: 16px;
        padding: 6px 14px;
        font-size: 0.85rem;
      }
      
      .availability-dot {
        width: 6px;
        height: 6px;
      }
    }
    
    @media (max-width: 480px) {
      .contact-section {
        padding: 60px 12px;
      }
      
      .section-title {
        font-size: 1.9rem;
      }
      
      .section-subtitle {
        font-size: 0.95rem;
        padding: 0 8px;
      }
      
      .contact-info,
      .contact-form {
        padding: 24px 20px;
      }
      
      .info-title,
      .form-title {
        font-size: 1.3rem;
        margin-bottom: 20px;
      }
      
      .info-item {
        padding: 14px;
        gap: 14px;
        margin-bottom: 16px;
      }
      
      .info-icon {
        width: 40px;
        height: 40px;
      }
      
      .info-label {
        font-size: 0.8rem;
      }
      
      .info-value {
        font-size: 0.9rem;
      }
      
      .social-links {
        margin-top: 28px;
      }
      
      .social-title {
        font-size: 1rem;
        margin-bottom: 14px;
      }
      
      .social-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 8px;
      }
      
      .social-link {
        padding: 10px;
      }
      
      .social-link svg {
        width: 18px;
        height: 18px;
      }
      
      .form-group {
        margin-bottom: 18px;
      }
      
      .form-label {
        font-size: 0.85rem;
        margin-bottom: 6px;
      }
      
      .form-input,
      .form-textarea {
        padding: 12px 16px;
        font-size: 0.9rem;
      }
      
      .form-textarea {
        min-height: 120px;
      }
      
      .form-submit {
        padding: 14px 32px;
        font-size: 0.95rem;
      }
      
      .submit-status {
        margin-top: 16px;
        padding: 12px;
        font-size: 0.9rem;
      }
      
      .availability-badge {
        margin-top: 14px;
        padding: 5px 12px;
        font-size: 0.8rem;
      }
    }
    
    /* Landscape mobile orientation */
    @media (max-width: 768px) and (orientation: landscape) {
      .contact-section {
        padding: 50px 16px;
      }
      
      .contact-content {
        gap: 28px;
      }
      
      .contact-info,
      .contact-form {
        padding: 24px 20px;
      }
      
      .form-row {
        grid-template-columns: 1fr 1fr;
        gap: 12px;
      }
      
      .form-textarea {
        min-height: 100px;
      }
      
      .social-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  `);
  
  const handleSubmit = $(async (e: Event) => {
    e.preventDefault();
    isSubmitting.value = true;
    submitStatus.value = 'idle';
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // In a real app, you would send the data to your backend
    console.log('Form submitted:', formData.value);
    
    isSubmitting.value = false;
    submitStatus.value = 'success';
    
    // Reset form after success
    setTimeout(() => {
      formData.value = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
      submitStatus.value = 'idle';
    }, 3000);
  });
  
  const updateFormData = $((field: string, value: string) => {
    formData.value = {
      ...formData.value,
      [field]: value
    };
  });
  
  return (
    <section id="contact" class="contact-section">
      <div class="contact-container">
        <h2 class="section-title animate-fadeInUp">Get In Touch</h2>
        <p class="section-subtitle animate-fadeInUp stagger-1">
          Let's discuss your next project or collaboration opportunity
        </p>
        
        <div class="contact-content">
          {/* Contact Information */}
          <div class="contact-info animate-fadeInLeft">
            <h3 class="info-title">Contact Information</h3>
            
            <div class="info-item">
              <div class="info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <div class="info-details">
                <p class="info-label">Email</p>
                <p class="info-value">{contactConfig.email}</p>
              </div>
            </div>
            
            <div class="info-item">
              <div class="info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                </svg>
              </div>
              <div class="info-details">
                <p class="info-label">Phone</p>
                <p class="info-value">{contactConfig.phone}</p>
              </div>
            </div>
            
            <div class="info-item">
              <div class="info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div class="info-details">
                <p class="info-label">Location</p>
                <p class="info-value">{contactConfig.location}</p>
              </div>
            </div>
            
            <div class="availability-badge">
              <span class="availability-dot"></span>
              {contactConfig.availability}
            </div>
            
            {/* Social Links */}
            <div class="social-links">
              <h4 class="social-title">Connect With Me</h4>
              <div class="social-grid">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="social-link"
                    title={link.name}
                    dangerouslySetInnerHTML={link.icon}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div class="contact-form animate-fadeInRight">
            <h3 class="form-title">Send Me a Message</h3>
            
            <form onSubmit$={handleSubmit}>
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label" for="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    class="form-input"
                    placeholder="John Smith"
                    value={formData.value.name}
                    onInput$={(e: Event) => updateFormData('name', (e.target as HTMLInputElement).value)}
                    required
                  />
                </div>
                
                <div class="form-group">
                  <label class="form-label" for="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    class="form-input"
                    placeholder="john@example.com"
                    value={formData.value.email}
                    onInput$={(e: Event) => updateFormData('email', (e.target as HTMLInputElement).value)}
                    required
                  />
                </div>
              </div>
              
              <div class="form-group">
                <label class="form-label" for="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  class="form-input"
                  placeholder="Project Inquiry"
                  value={formData.value.subject}
                  onInput$={(e: Event) => updateFormData('subject', (e.target as HTMLInputElement).value)}
                  required
                />
              </div>
              
              <div class="form-group">
                <label class="form-label" for="message">Message</label>
                <textarea
                  id="message"
                  class="form-textarea"
                  placeholder="Tell me about your project..."
                  value={formData.value.message}
                  onInput$={(e: Event) => updateFormData('message', (e.target as HTMLTextAreaElement).value)}
                  required
                />
              </div>
              
              <button 
                type="submit" 
                class="form-submit"
                disabled={isSubmitting.value}
              >
                {isSubmitting.value ? (
                  <>
                    <span class="spinner"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </>
                )}
              </button>
              
              {submitStatus.value === 'success' && (
                <div class="submit-status success">
                  ✓ Message sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {submitStatus.value === 'error' && (
                <div class="submit-status error">
                  ✗ Something went wrong. Please try again or email me directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
});