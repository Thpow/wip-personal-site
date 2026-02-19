import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { socialLinks, contactConfig } from "~/data/social";

export const ContactSection = component$(() => {
  useStylesScoped$(`
    .contact-section {
      padding: 20px;
      position: relative;
      z-index: 1;
    }

    .contact-window {
      max-width: 500px;
      margin: 0 auto;
      background: var(--win-surface);
      box-shadow: var(--win-border-window);
      padding: 3px;
    }

    .contact-titlebar {
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
      font-size: 9px; font-weight: 700;
      font-family: "IBM Plex Mono", monospace;
      color: var(--win-text-primary);
      padding: 0; line-height: 1; cursor: default;
      display: flex; align-items: center; justify-content: center;
    }

    .contact-body { padding: 16px; background: var(--win-surface); }

    .info-row {
      display: flex; align-items: flex-start; gap: 10px;
      padding: 6px 0; font-size: 12px; color: var(--win-text-primary);
      border-bottom: 1px solid var(--win-bg-light);
    }

    .info-icon { font-size: 16px; flex-shrink: 0; width: 22px; text-align: center; }

    .info-label {
      font-weight: 700; font-size: 10px;
      color: var(--win-text-muted); text-transform: uppercase;
      margin-bottom: 2px;
    }

    .info-value { font-size: 12px; }

    .info-link {
      color: var(--win-text-primary);
      text-decoration: none;
    }

    .info-link:hover { text-decoration: underline; }

    .separator {
      height: 2px; margin: 10px 0;
      box-shadow: inset 0 1px 0 0 var(--win-shadow), inset 0 -1px 0 0 var(--win-white);
    }

    .status-badge {
      display: flex; align-items: center; gap: 6px;
      font-size: 11px; color: var(--win-success);
      padding: 6px 0;
    }

    .status-led {
      width: 8px; height: 8px;
      background: var(--win-success);
      border: 1px solid #006600;
      flex-shrink: 0;
    }

    .social-section { margin-top: 12px; }
    .social-label { font-size: 11px; font-weight: 700; margin-bottom: 8px; }
    .social-grid { display: flex; gap: 6px; flex-wrap: wrap; }

    .social-btn {
      width: 36px; height: 36px;
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
    .social-btn svg { width: 18px; height: 18px; }

    .contact-statusbar {
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

    @media (max-width: 768px) {
      .contact-section { padding: 12px 8px; }
    }
  `);

  return (
    <section id="contact" class="contact-section">
      <div class="contact-window">
        <div class="contact-titlebar">
          <div class="titlebar-left">
            <span>??</span>
            <span>Contact Info</span>
          </div>
          <div style="display:flex;gap:2px;">
            <button class="titlebar-btn" aria-hidden="true">_</button>
            <button class="titlebar-btn" aria-hidden="true">?</button>
            <button class="titlebar-btn" aria-hidden="true">×</button>
          </div>
        </div>

        <div class="contact-body">
          <div class="info-row">
            <span class="info-icon">??</span>
            <div>
              <div class="info-label">Email</div>
              <div class="info-value">
                <a class="info-link" href={`mailto:${contactConfig.email}`}>{contactConfig.email}</a>
              </div>
            </div>
          </div>

          <div class="info-row">
            <span class="info-icon">??</span>
            <div>
              <div class="info-label">Phone</div>
              <div class="info-value">
                <a class="info-link" href={`tel:${contactConfig.phone}`}>{contactConfig.phone}</a>
              </div>
            </div>
          </div>

          <div class="info-row">
            <span class="info-icon">??</span>
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

        <div class="contact-statusbar">
          <div class="statusbar-cell">{contactConfig.responseTime}</div>
        </div>
      </div>
    </section>
  );
});
